import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { created, fail, ok, serverError } from "@/lib/api/response";
import { withAuth } from "@/lib/auth/guard";

export async function GET(req: NextRequest) {
  const { error } = await withAuth(req);
  if (error) return error;
  try {
    const departments = await prisma.department.findMany({ orderBy: { DepartmentName: "asc" } });
    return ok(departments, "Departments fetched");
  } catch (e) {
    console.error("GET /department error:", e);
    return serverError();
  }
}

export async function POST(req: NextRequest) {
  const { user, error } = await withAuth(req);
  if (error) return error;
  if (user!.role !== "ADMIN") return fail("Forbidden", 403);

  try {
    const body = await req.json().catch(() => ({}));
    const name = body.DepartmentName ?? body.name;
    const code = body.DepartmentCode ?? body.code;
    if (!name) return fail("DepartmentName is required", 400);

    const dept = await prisma.department.create({
      data: { DepartmentName: String(name), DepartmentCode: code ? String(code) : null },
    });
    return created(dept, "Department created");
  } catch (e) {
    console.error("POST /department error:", e);
    return serverError();
  }
}


