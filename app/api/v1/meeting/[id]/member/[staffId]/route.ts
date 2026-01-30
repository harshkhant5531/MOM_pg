import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { fail, ok, serverError } from "@/lib/api/response";
import { withPermission } from "@/lib/auth/guard";

function parseId(id: string) {
  const n = Number(id);
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}

// PUT /meeting/:id/member/:staffId -> markAttendance (updateOnly=true)
export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string; staffId: string }> }) {
  const { error } = await withPermission(req, "MARK_ATTENDANCE");
  if (error) return error;

  try {
    const { id: rawMeetingId, staffId: rawStaffId } = await ctx.params;
    const meetingId = parseId(rawMeetingId);
    const staffId = parseId(rawStaffId);
    if (!meetingId) return fail("Invalid meeting id", 400);
    if (!staffId) return fail("Invalid staffId", 400);

    const body = await req.json().catch(() => ({}));
    const IsPresent = body.IsPresent ?? body.isPresent;
    if (IsPresent === undefined) return fail("IsPresent is required", 400);

    const result = await prisma.meetingmember.updateMany({
      where: { MeetingID: meetingId, StaffID: staffId },
      data: { IsPresent: Boolean(IsPresent), Remarks: body.Remarks ?? body.remarks ?? null },
    });

    if (result.count === 0) return fail("Meeting member not found", 404);
    return ok({ MeetingID: meetingId, StaffID: staffId }, "Attendance updated");
  } catch (e) {
    console.error("PUT /meeting/:id/member/:staffId error:", e);
    return serverError();
  }
}

// DELETE /meeting/:id/member/:staffId -> removeMember
export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string; staffId: string }> }) {
  const { error } = await withPermission(req, "MANAGE_ATTENDANCE");
  if (error) return error;

  try {
    const { id: rawMeetingId, staffId: rawStaffId } = await ctx.params;
    const meetingId = parseId(rawMeetingId);
    const staffId = parseId(rawStaffId);
    if (!meetingId) return fail("Invalid meeting id", 400);
    if (!staffId) return fail("Invalid staffId", 400);

    const result = await prisma.meetingmember.deleteMany({ where: { MeetingID: meetingId, StaffID: staffId } });
    if (result.count === 0) return fail("Meeting member not found", 404);
    return ok({ MeetingID: meetingId, StaffID: staffId }, "Member removed");
  } catch (e) {
    console.error("DELETE /meeting/:id/member/:staffId error:", e);
    return serverError();
  }
}


