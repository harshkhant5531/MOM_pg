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
  const { error } = await withPermission(req, "UPDATE_MEETING");
  if (error) return error;

  try {
    const { id: rawId } = await ctx.params;
    const id = parseId({ id: rawId });
    if (!id) return fail("Invalid id", 400);

    const body = await req.json().catch(() => ({}));
    const MeetingDate = body.MeetingDate ?? body.date;
    const MeetingTypeID = body.MeetingTypeID ?? body.typeId;
    const VenueID = body.VenueID ?? body.venueId;

    const data: any = {};
    if (MeetingDate) data.MeetingDate = new Date(MeetingDate);
    if (MeetingTypeID !== undefined) {
      const mtId = Number(MeetingTypeID);
      const mt = await prisma.meetingtype.findUnique({ where: { MeetingTypeID: mtId } });
      if (!mt) return fail("Invalid MeetingTypeID", 409);
      data.MeetingTypeID = mtId;
    }
    if (VenueID !== undefined) {
      const vId = VenueID === null || VenueID === "" ? null : Number(VenueID);
      if (vId !== null) {
        const venue = await prisma.venue.findUnique({ where: { VenueID: vId } });
        if (!venue) return fail("Invalid VenueID", 409);
      }
      data.VenueID = vId;
    }
    if (body.MeetingDescription !== undefined || body.description !== undefined)
      data.MeetingDescription = body.MeetingDescription ?? body.description ?? null;
    if (body.DocumentPath !== undefined || body.documentPath !== undefined)
      data.DocumentPath = body.DocumentPath ?? body.documentPath ?? null;

    const updated = await prisma.meetings.update({ where: { MeetingID: id }, data });
    return ok(updated, "Meeting updated");
  } catch (e: any) {
    console.error("PUT /meeting/:id error:", e);
    if (e?.code === "P2025") return fail("Meeting not found", 404);
    return serverError();
  }
}


