import { NextRequest } from "next/server";
import { fail } from "@/lib/api/response";
import { hasPermission, Permission } from "@/lib/auth/permissions";
import { requireJwt } from "@/lib/auth/jwt";

export async function withAuth(req: NextRequest) {
  try {
    const user = await requireJwt(req);
    return { user, error: null as ReturnType<typeof fail> | null };
  } catch (e: any) {
    return { user: null, error: fail(e?.message || "Unauthorized", e?.status || 401) };
  }
}

export async function withPermission(req: NextRequest, permission: Permission) {
  const { user, error } = await withAuth(req);
  if (error || !user) return { user: null, error: error ?? fail("Unauthorized", 401) };
  if (!hasPermission(user.role, permission)) return { user: null, error: fail("Forbidden", 403) };
  return { user, error: null as ReturnType<typeof fail> | null };
}


