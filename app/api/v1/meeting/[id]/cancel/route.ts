import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { fail, ok, serverError } from "@/lib/api/response";
import { withPermission } from "@/lib/auth/guard";

function parseId(params: { id: string }) {
  const id = Number(params.id);
  if (!Number.isFinite(id) || id <= 0) return null;
  return id;
}

export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { error } = await withPermission(req, "CANCEL_MEETING");
  if (error) return error;

  try {
    const { id: rawId } = await ctx.params;
    const id = parseId({ id: rawId });
    if (!id) return fail("Invalid id", 400);

    const body = await req.json().catch(() => ({}));
    const reason = body.CancellationReason ?? body.reason ?? null;
    if (!reason) return fail("CancellationReason is required", 400);

    const updated = await prisma.meetings.update({
      where: { MeetingID: id },
      data: {
        IsCancelled: true,
        CancellationDateTime: new Date(),
        CancellationReason: String(reason),
      },
    });
    return ok(updated, "Meeting cancelled");
  } catch (e: any) {
    console.error("PUT /meeting/:id/cancel error:", e);
    if (e?.code === "P2025") return fail("Meeting not found", 404);
    return serverError();
  }
}


