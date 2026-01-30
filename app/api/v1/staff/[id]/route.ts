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
    const StaffName = body.StaffName ?? body.name;
    if (!StaffName) return fail("StaffName is required", 400);
    const DepartmentID = body.DepartmentID ?? body.departmentId;
    const deptId =
      DepartmentID === undefined || DepartmentID === null || DepartmentID === "" ? null : Number(DepartmentID);
    if (deptId !== null) {
      const dept = await prisma.department.findUnique({ where: { DepartmentID: deptId } });
      if (!dept) return fail("Invalid DepartmentID", 409);
    }

    const updated = await prisma.staff.update({
      where: { StaffID: id },
      data: {
        StaffName: String(StaffName),
        EmailAddress: body.EmailAddress ?? body.email ?? null,
        MobileNo: body.MobileNo ?? body.mobile ?? null,
        DepartmentID: deptId,
        Remarks: body.Remarks ?? body.remarks ?? null,
      },
    });
    return ok(updated, "Staff updated");
  } catch (e: any) {
    console.error("PUT /staff/:id error:", e);
    if (e?.code === "P2025") return fail("Staff not found", 404);
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

    // Not specified as a constraint, but be safe: if meetingmember exists, block delete.
    const membershipCount = await prisma.meetingmember.count({ where: { StaffID: id } });
    if (membershipCount > 0) return fail("Cannot delete staff: meeting membership exists", 409);

    await prisma.staff.delete({ where: { StaffID: id } });
    return ok({ StaffID: id }, "Staff deleted");
  } catch (e: any) {
    console.error("DELETE /staff/:id error:", e);
    if (e?.code === "P2025") return fail("Staff not found", 404);
    return serverError();
  }
}


