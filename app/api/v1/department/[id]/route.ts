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
    const name = body.DepartmentName ?? body.name;
    const code = body.DepartmentCode ?? body.code;
    if (!name) return fail("DepartmentName is required", 400);

    const updated = await prisma.department.update({
      where: { DepartmentID: id },
      data: { DepartmentName: String(name), DepartmentCode: code ? String(code) : null },
    });
    return ok(updated, "Department updated");
  } catch (e: any) {
    console.error("PUT /department/:id error:", e);
    if (e?.code === "P2025") return fail("Department not found", 404);
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

    // Constraint: Cannot delete if staff exists
    const staffCount = await prisma.staff.count({ where: { DepartmentID: id } });
    if (staffCount > 0) return fail("Cannot delete department: staff exists", 409);

    await prisma.department.delete({ where: { DepartmentID: id } });
    return ok({ DepartmentID: id }, "Department deleted");
  } catch (e: any) {
    console.error("DELETE /department/:id error:", e);
    if (e?.code === "P2025") return fail("Department not found", 404);
    return serverError();
  }
}


