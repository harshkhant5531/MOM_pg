import prisma from "@/lib/prisma";
import { ok, fail, serverError } from "@/lib/api/response";
import { withPermission } from "@/lib/auth/guard";
import ExcelJS from "exceljs";
import PDFDocument from "pdfkit";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

function parseDate(v: string | null) {
  if (!v) return null;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : d;
}

export async function GET(req: NextRequest) {
  const { error } = await withPermission(req, "VIEW_REPORTS");
  if (error) return error;

  try {
    const url = new URL(req.url);
    const format = (url.searchParams.get("format") ?? "json").toLowerCase();
    const from = parseDate(url.searchParams.get("from"));
    const to = parseDate(url.searchParams.get("to"));

    if ((url.searchParams.get("from") && !from) || (url.searchParams.get("to") && !to)) {
      return fail("Invalid from/to date", 400);
    }

    const where: any = {};
    if (from || to) {
      where.MeetingDate = {};
      if (from) where.MeetingDate.gte = from;
      if (to) where.MeetingDate.lte = to;
    }

    // Read-only queries only
    const meetings = await prisma.meetings.findMany({
      where,
      include: { meetingtype: true, venue: true, meetingmember: true },
      orderBy: { MeetingDate: "desc" },
    });

    const rows = meetings.map((m) => {
      const members = m.meetingmember ?? [];
      const totalMembers = members.length;
      const present = members.filter((mm) => mm.IsPresent === true).length;
      const absent = totalMembers - present;
      return {
        MeetingID: m.MeetingID,
        MeetingDate: m.MeetingDate,
        MeetingType: m.meetingtype?.MeetingTypeName ?? null,
        Venue: m.venue?.VenueName ?? null,
        IsCancelled: Boolean(m.IsCancelled),
        TotalMembers: totalMembers,
        Present: present,
        Absent: absent,
      };
    });

    if (format === "json") return ok({ rows }, "Meeting Summary report");

    if (format === "excel" || format === "xlsx") {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Meeting Summary");
      ws.columns = [
        { header: "MeetingID", key: "MeetingID", width: 12 },
        { header: "MeetingDate", key: "MeetingDate", width: 20 },
        { header: "MeetingType", key: "MeetingType", width: 24 },
        { header: "Venue", key: "Venue", width: 24 },
        { header: "IsCancelled", key: "IsCancelled", width: 12 },
        { header: "TotalMembers", key: "TotalMembers", width: 14 },
        { header: "Present", key: "Present", width: 10 },
        { header: "Absent", key: "Absent", width: 10 },
      ];
      rows.forEach((r) => ws.addRow({ ...r, MeetingDate: r.MeetingDate?.toISOString?.() ?? r.MeetingDate }));
      const buf = (await wb.xlsx.writeBuffer()) as ArrayBuffer;
      return new Response(Buffer.from(buf), {
        status: 200,
        headers: {
          "content-type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "content-disposition": `attachment; filename="meeting-summary.xlsx"`,
        },
      });
    }

    if (format === "pdf") {
      const doc = new PDFDocument({ margin: 36 });
      const chunks: Buffer[] = [];
      doc.on("data", (c) => chunks.push(c));

      doc.fontSize(16).text("Meeting Summary Report", { align: "center" });
      doc.moveDown(0.5);
      doc.fontSize(10).text(`Generated: ${new Date().toISOString()}`);
      doc.moveDown();

      rows.forEach((r) => {
        doc
          .fontSize(11)
          .text(
            `#${r.MeetingID}  ${new Date(r.MeetingDate).toISOString()}  Type: ${r.MeetingType ?? "-"}  Venue: ${
              r.Venue ?? "-"
            }  Cancelled: ${r.IsCancelled ? "Yes" : "No"}  Members: ${r.TotalMembers} (P:${r.Present} A:${r.Absent})`
          );
      });

      doc.end();
      await new Promise<void>((resolve) => doc.on("end", () => resolve()));
      const pdf = Buffer.concat(chunks);
      return new Response(pdf, {
        status: 200,
        headers: {
          "content-type": "application/pdf",
          "content-disposition": `attachment; filename="meeting-summary.pdf"`,
        },
      });
    }

    return fail("Invalid format. Use format=json|pdf|excel", 400);
  } catch (e) {
    console.error("GET /reports/meeting-summary error:", e);
    return serverError();
  }
}


