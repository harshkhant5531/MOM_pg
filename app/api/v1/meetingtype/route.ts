import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { created, fail, ok, serverError } from "@/lib/api/response";
import { withAuth } from "@/lib/auth/guard";

export async function GET(req: NextRequest) {
  const { error } = await withAuth(req);
  if (error) return error;
  try {
    const meetingTypes = await prisma.meetingtype.findMany({ orderBy: { MeetingTypeName: "asc" } });
    return ok(meetingTypes, "Meeting types fetched");
  } catch (e) {
    console.error("GET /meetingtype error:", e);
    return serverError();
  }
}

export async function POST(req: NextRequest) {
  const { user, error } = await withAuth(req);
  if (error) return error;
  if (user!.role !== "ADMIN") return fail("Forbidden", 403);

  try {
    const body = await req.json().catch(() => ({}));
    const MeetingTypeName = body.MeetingTypeName ?? body.name;
    if (!MeetingTypeName) return fail("MeetingTypeName is required", 400);

    const type = await prisma.meetingtype.create({
      data: { MeetingTypeName: String(MeetingTypeName), Remarks: body.Remarks ?? body.remarks ?? null },
    });
    return created(type, "Meeting type created");
  } catch (e) {
    console.error("POST /meetingtype error:", e);
    return serverError();
  }
}


