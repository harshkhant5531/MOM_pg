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

    const where: any = { IsCancelled: true };
    if (from || to) {
      where.MeetingDate = {};
      if (from) where.MeetingDate.gte = from;
      if (to) where.MeetingDate.lte = to;
    }

    // Read-only queries only
    const meetings = await prisma.meetings.findMany({
      where,
      include: { meetingtype: true, venue: true },
      orderBy: { MeetingDate: "desc" },
    });

    const rows = meetings.map((m) => ({
      MeetingID: m.MeetingID,
      MeetingDate: m.MeetingDate,
      MeetingType: m.meetingtype?.MeetingTypeName ?? null,
      Venue: m.venue?.VenueName ?? null,
      CancellationDateTime: m.CancellationDateTime ?? null,
      CancellationReason: m.CancellationReason ?? null,
    }));

    if (format === "json") return ok({ rows }, "Cancelled Meetings report");

    if (format === "excel" || format === "xlsx") {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Cancelled Meetings");
      ws.columns = [
        { header: "MeetingID", key: "MeetingID", width: 12 },
        { header: "MeetingDate", key: "MeetingDate", width: 20 },
        { header: "MeetingType", key: "MeetingType", width: 24 },
        { header: "Venue", key: "Venue", width: 24 },
        { header: "CancellationDateTime", key: "CancellationDateTime", width: 22 },
        { header: "CancellationReason", key: "CancellationReason", width: 40 },
      ];
      rows.forEach((r) =>
        ws.addRow({
          ...r,
          MeetingDate: r.MeetingDate?.toISOString?.() ?? r.MeetingDate,
          CancellationDateTime: r.CancellationDateTime?.toISOString?.() ?? r.CancellationDateTime,
        })
      );
      const buf = (await wb.xlsx.writeBuffer()) as ArrayBuffer;
      return new Response(Buffer.from(buf), {
        status: 200,
        headers: {
          "content-type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "content-disposition": `attachment; filename="cancelled-meetings.xlsx"`,
        },
      });
    }

    if (format === "pdf") {
      const doc = new PDFDocument({ margin: 36 });
      const chunks: Buffer[] = [];
      doc.on("data", (c) => chunks.push(c));

      doc.fontSize(16).text("Cancelled Meetings Report", { align: "center" });
      doc.moveDown(0.5);
      doc.fontSize(10).text(`Generated: ${new Date().toISOString()}`);
      doc.moveDown();

      rows.forEach((r) => {
        doc
          .fontSize(11)
          .text(
            `#${r.MeetingID}  ${new Date(r.MeetingDate).toISOString()}  Type: ${r.MeetingType ?? "-"}  Venue: ${
              r.Venue ?? "-"
            }\nCancelled: ${r.CancellationDateTime ? new Date(r.CancellationDateTime).toISOString() : "-"}\nReason: ${
              r.CancellationReason ?? "-"
            }\n`
          );
      });

      doc.end();
      await new Promise<void>((resolve) => doc.on("end", () => resolve()));
      const pdf = Buffer.concat(chunks);
      return new Response(pdf, {
        status: 200,
        headers: {
          "content-type": "application/pdf",
          "content-disposition": `attachment; filename="cancelled-meetings.pdf"`,
        },
      });
    }

    return fail("Invalid format. Use format=json|pdf|excel", 400);
  } catch (e) {
    console.error("GET /reports/cancelled-meetings error:", e);
    return serverError();
  }
}


