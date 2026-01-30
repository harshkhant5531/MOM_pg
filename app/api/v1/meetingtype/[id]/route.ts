import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { fail, ok, serverError } from "@/lib/api/response";
import { withAuth } from "@/lib/auth/guard";

function parseId(params: { id: string }) {
  const id = Number(params.id);
  if (!Number.isFinite(id) || id <= 0) return null;
  return id;
}

export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { user, error } = await withAuth(req);
  if (error) return error;
  if (user!.role !== "ADMIN") return fail("Forbidden", 403);

  try {
    const { id: rawId } = await ctx.params;
    const id = parseId({ id: rawId });
    if (!id) return fail("Invalid id", 400);

    const body = await req.json().catch(() => ({}));
    const MeetingTypeName = body.MeetingTypeName ?? body.name;
    if (!MeetingTypeName) return fail("MeetingTypeName is required", 400);

    const updated = await prisma.meetingtype.update({
      where: { MeetingTypeID: id },
      data: { MeetingTypeName: String(MeetingTypeName), Remarks: body.Remarks ?? body.remarks ?? null },
    });
    return ok(updated, "Meeting type updated");
  } catch (e: any) {
    console.error("PUT /meetingtype/:id error:", e);
    if (e?.code === "P2025") return fail("Meeting type not found", 404);
    return serverError();
  }
}

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { user, error } = await withAuth(req);
  if (error) return error;
  if (user!.role !== "ADMIN") return fail("Forbidden", 403);

  try {
    const { id: rawId } = await ctx.params;
    const id = parseId({ id: rawId });
    if (!id) return fail("Invalid id", 400);

    // Safe behavior: block delete if meetings exist
    const meetingCount = await prisma.meetings.count({ where: { MeetingTypeID: id } });
    if (meetingCount > 0) return fail("Cannot delete meeting type: meetings exist", 409);

    await prisma.meetingtype.delete({ where: { MeetingTypeID: id } });
    return ok({ MeetingTypeID: id }, "Meeting type deleted");
  } catch (e: any) {
    console.error("DELETE /meetingtype/:id error:", e);
    if (e?.code === "P2025") return fail("Meeting type not found", 404);
    return serverError();
  }
}


