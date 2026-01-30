import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { created, fail, ok, serverError } from "@/lib/api/response";
import { withPermission } from "@/lib/auth/guard";

export async function GET(req: NextRequest) {
  // STAFF can VIEW_MEETING
  const { error } = await withPermission(req, "VIEW_MEETING");
  if (error) return error;

  try {
    const meetings = await prisma.meetings.findMany({
      include: {
        meetingtype: true,
        venue: true,
        meetingmember: { include: { staff: true } },
      },
      orderBy: { MeetingDate: "desc" },
    });
    return ok(meetings, "Meetings fetched");
  } catch (e) {
    console.error("GET /meeting error:", e);
    return serverError();
  }
}

export async function POST(req: NextRequest) {
  const { error } = await withPermission(req, "CREATE_MEETING");
  if (error) return error;

  try {
    const body = await req.json().catch(() => ({}));
    const MeetingDate = body.MeetingDate ?? body.date;
    const MeetingTypeID = body.MeetingTypeID ?? body.typeId;
    if (!MeetingDate || !MeetingTypeID) return fail("MeetingDate and MeetingTypeID are required", 400);

    const VenueID = body.VenueID ?? body.venueId;
    const MeetingDescription = body.MeetingDescription ?? body.description ?? null;
    const DocumentPath = body.DocumentPath ?? body.documentPath ?? null;
    const participants: number[] = Array.isArray(body.participants) ? body.participants.map(Number) : [];

    const result = await prisma.$transaction(async (tx) => {
      // FK validation (foreignKeyValidation=true)
      const mt = await tx.meetingtype.findUnique({ where: { MeetingTypeID: Number(MeetingTypeID) } });
      if (!mt) throw Object.assign(new Error("Invalid MeetingTypeID"), { status: 409 });

      const venueId =
        VenueID === undefined || VenueID === null || VenueID === "" ? null : Number(VenueID);
      if (venueId !== null) {
        const venue = await tx.venue.findUnique({ where: { VenueID: venueId } });
        if (!venue) throw Object.assign(new Error("Invalid VenueID"), { status: 409 });
      }

      if (participants.length > 0) {
        const staffCount = await tx.staff.count({ where: { StaffID: { in: participants } } });
        if (staffCount !== participants.length) {
          throw Object.assign(new Error("One or more participant StaffID values are invalid"), { status: 409 });
        }
      }

      const meeting = await tx.meetings.create({
        data: {
          MeetingDate: new Date(MeetingDate),
          MeetingTypeID: Number(MeetingTypeID),
          VenueID: venueId,
          MeetingDescription: MeetingDescription ? String(MeetingDescription) : null,
          DocumentPath: DocumentPath ? String(DocumentPath) : null,
          IsCancelled: false,
        },
      });

      if (participants.length > 0) {
        await tx.meetingmember.createMany({
          data: participants.map((StaffID) => ({
            MeetingID: meeting.MeetingID,
            StaffID,
            IsPresent: false,
          })),
          skipDuplicates: true,
        });
      }

      return meeting;
    });

    return created(result, "Meeting created");
  } catch (e: any) {
    console.error("POST /meeting error:", e);
    if (e?.status === 409) return fail(e.message, 409);
    return serverError();
  }
}


