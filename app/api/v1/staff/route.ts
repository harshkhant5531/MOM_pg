import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { created, fail, ok, serverError } from "@/lib/api/response";
import { withAuth } from "@/lib/auth/guard";

export async function GET(req: NextRequest) {
  const { error } = await withAuth(req);
  if (error) return error;
  try {
    const staff = await prisma.staff.findMany({
      include: { department: true },
      orderBy: { StaffName: "asc" },
    });
    return ok(staff, "Staff fetched");
  } catch (e) {
    console.error("GET /staff error:", e);
    return serverError();
  }
}

export async function POST(req: NextRequest) {
  const { user, error } = await withAuth(req);
  if (error) return error;
  if (user!.role !== "ADMIN") return fail("Forbidden", 403);

  try {
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

    const staff = await prisma.staff.create({
      data: {
        StaffName: String(StaffName),
        EmailAddress: body.EmailAddress ?? body.email ?? null,
        MobileNo: body.MobileNo ?? body.mobile ?? null,
        DepartmentID: deptId,
        Remarks: body.Remarks ?? body.remarks ?? null,
      },
    });
    return created(staff, "Staff created");
  } catch (e) {
    console.error("POST /staff error:", e);
    return serverError();
  }
}


