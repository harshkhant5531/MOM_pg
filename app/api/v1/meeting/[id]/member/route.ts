import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { created, fail, ok, serverError } from "@/lib/api/response";
import { withPermission } from "@/lib/auth/guard";

function parseId(id: string) {
  const n = Number(id);
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}

// POST /meeting/:id/member  -> addMember
export async function POST(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { error } = await withPermission(req, "MANAGE_ATTENDANCE");
  if (error) return error;

  try {
    const { id: rawId } = await ctx.params;
    const meetingId = parseId(rawId);
    if (!meetingId) return fail("Invalid meeting id", 400);

    const body = await req.json().catch(() => ({}));
    const staffId = body.StaffID ?? body.staffId;
    if (!staffId) return fail("StaffID is required", 400);

    // FK validation + duplicate guard
    const staffIdNum = Number(staffId);
    const [meeting, staff, existing] = await Promise.all([
      prisma.meetings.findUnique({ where: { MeetingID: meetingId } }),
      prisma.staff.findUnique({ where: { StaffID: staffIdNum } }),
      prisma.meetingmember.findFirst({ where: { MeetingID: meetingId, StaffID: staffIdNum } }),
    ]);
    if (!meeting) return fail("Meeting not found", 404);
    if (!staff) return fail("Invalid StaffID", 409);
    if (existing) return fail("Member already exists for this meeting", 409);

    const member = await prisma.meetingmember.create({
      data: {
        MeetingID: meetingId,
        StaffID: staffIdNum,
        IsPresent: false,
        Remarks: body.Remarks ?? body.remarks ?? null,
      },
    });
    return created(member, "Member added");
  } catch (e: any) {
    console.error("POST /meeting/:id/member error:", e);
    // If duplicates exist via DB constraint, Prisma would throw. If no constraint, this still works.
    return serverError();
  }
}

// GET members for a meeting (helpful for attendance UI)
export async function GET(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { error } = await withPermission(req, "MANAGE_ATTENDANCE");
  if (error) return error;

  try {
    const { id: rawId } = await ctx.params;
    const meetingId = parseId(rawId);
    if (!meetingId) return fail("Invalid meeting id", 400);

    const members = await prisma.meetingmember.findMany({
      where: { MeetingID: meetingId },
      include: { staff: true },
      orderBy: { MeetingMemberID: "asc" },
    });
    return ok(members, "Members fetched");
  } catch (e) {
    console.error("GET /meeting/:id/member error:", e);
    return serverError();
  }
}


