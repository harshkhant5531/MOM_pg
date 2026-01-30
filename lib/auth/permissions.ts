import { user_role } from "@/lib/generated/prisma";

export type Permission =
  | "ALL"
  | "CREATE_MEETING"
  | "UPDATE_MEETING"
  | "CANCEL_MEETING"
  | "MANAGE_ATTENDANCE"
  | "VIEW_REPORTS"
  | "VIEW_MEETING"
  | "MARK_ATTENDANCE"
  | "VIEW_PROFILE";

export const ROLE_PERMISSIONS: Record<user_role, Permission[]> = {
  ADMIN: ["ALL"],
  CONVENER: ["CREATE_MEETING", "UPDATE_MEETING", "CANCEL_MEETING", "MANAGE_ATTENDANCE", "VIEW_REPORTS"],
  STAFF: ["VIEW_MEETING", "MARK_ATTENDANCE", "VIEW_PROFILE"],
};

export function hasPermission(role: user_role, permission: Permission) {
  const perms = ROLE_PERMISSIONS[role] ?? [];
  return perms.includes("ALL") || perms.includes(permission);
}


