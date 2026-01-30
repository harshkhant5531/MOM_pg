import prisma from "@/lib/prisma";
import { ok, fail, serverError } from "@/lib/api/response";
import { withPermission } from "@/lib/auth/guard";
import ExcelJS from "exceljs";
import PDFDocument from "pdfkit";
import { NextRequest } from "next/server";

function toInt(v: string | null, min = 1) {
  if (v === null || v === "") return null;
  const n = Number(v);
  if (!Number.isFinite(n) || n < min) return null;
  return Math.trunc(n);
}

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const { error } = await withPermission(req, "VIEW_REPORTS");
  if (error) return error;

  try {
    const url = new URL(req.url);
    const format = (url.searchParams.get("format") ?? "json").toLowerCase();
    const meetingId = toInt(url.searchParams.get("meetingId"));
    if (!meetingId) return fail("meetingId is required", 400);

    // Read-only queries only
    const meeting = await prisma.meetings.findUnique({
      where: { MeetingID: meetingId },
      include: { meetingtype: true, venue: true },
    });
    if (!meeting) return fail("Meeting not found", 404);

    const members = await prisma.meetingmember.findMany({
      where: { MeetingID: meetingId },
      include: { staff: { include: { department: true } } },
      orderBy: { MeetingMemberID: "asc" },
    });

    const rows = members.map((m) => ({
      MeetingID: meetingId,
      StaffID: m.StaffID,
      StaffName: m.staff?.StaffName ?? null,
      Department: m.staff?.department?.DepartmentName ?? null,
      IsPresent: Boolean(m.IsPresent),
      Remarks: m.Remarks ?? null,
    }));

    if (format === "json")
      return ok(
        {
          meeting: {
            MeetingID: meeting.MeetingID,
            MeetingDate: meeting.MeetingDate,
            MeetingType: meeting.meetingtype?.MeetingTypeName ?? null,
            Venue: meeting.venue?.VenueName ?? null,
            IsCancelled: Boolean(meeting.IsCancelled),
          },
          rows,
        },
        "Meeting Attendance report"
      );

    if (format === "excel" || format === "xlsx") {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Attendance");
      ws.columns = [
        { header: "MeetingID", key: "MeetingID", width: 12 },
        { header: "StaffID", key: "StaffID", width: 10 },
        { header: "StaffName", key: "StaffName", width: 24 },
        { header: "Department", key: "Department", width: 24 },
        { header: "IsPresent", key: "IsPresent", width: 10 },
        { header: "Remarks", key: "Remarks", width: 30 },
      ];
      rows.forEach((r) => ws.addRow(r));
      const buf = (await wb.xlsx.writeBuffer()) as ArrayBuffer;
      return new Response(Buffer.from(buf), {
        status: 200,
        headers: {
          "content-type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "content-disposition": `attachment; filename="meeting-attendance-${meetingId}.xlsx"`,
        },
      });
    }

    if (format === "pdf") {
      const doc = new PDFDocument({ margin: 36 });
      const chunks: Buffer[] = [];
      doc.on("data", (c) => chunks.push(c));

      doc.fontSize(16).text("Meeting Attendance Report", { align: "center" });
      doc.moveDown(0.5);
      doc.fontSize(10).text(`Meeting #${meetingId}  Date: ${meeting.MeetingDate.toISOString()}`);
      doc.text(`Type: ${meeting.meetingtype?.MeetingTypeName ?? "-"}  Venue: ${meeting.venue?.VenueName ?? "-"}`);
      doc.text(`Cancelled: ${meeting.IsCancelled ? "Yes" : "No"}`);
      doc.moveDown();

      rows.forEach((r) => {
        doc
          .fontSize(11)
          .text(
            `${r.StaffID}  ${r.StaffName ?? "-"}  Dept: ${r.Department ?? "-"}  Present: ${
              r.IsPresent ? "Yes" : "No"
            }  Remarks: ${r.Remarks ?? ""}`
          );
      });

      doc.end();
      await new Promise<void>((resolve) => doc.on("end", () => resolve()));
      const pdf = Buffer.concat(chunks);
      return new Response(pdf, {
        status: 200,
        headers: {
          "content-type": "application/pdf",
          "content-disposition": `attachment; filename="meeting-attendance-${meetingId}.pdf"`,
        },
      });
    }

    return fail("Invalid format. Use format=json|pdf|excel", 400);
  } catch (e) {
    console.error("GET /reports/meeting-attendance error:", e);
    return serverError();
  }
}


