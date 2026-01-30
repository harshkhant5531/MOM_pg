import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { created, fail, ok, serverError } from "@/lib/api/response";
import { withAuth } from "@/lib/auth/guard";

export async function GET(req: NextRequest) {
  const { error } = await withAuth(req);
  if (error) return error;
  try {
    const venues = await prisma.venue.findMany({ orderBy: { VenueName: "asc" } });
    return ok(venues, "Venues fetched");
  } catch (e) {
    console.error("GET /venue error:", e);
    return serverError();
  }
}

export async function POST(req: NextRequest) {
  const { user, error } = await withAuth(req);
  if (error) return error;
  if (user!.role !== "ADMIN") return fail("Forbidden", 403);

  try {
    const body = await req.json().catch(() => ({}));
    const name = body.VenueName ?? body.name;
    if (!name) return fail("VenueName is required", 400);
    const location = body.Location ?? body.location;
    const capacity = body.Capacity ?? body.capacity;

    const venue = await prisma.venue.create({
      data: {
        VenueName: String(name),
        Location: location ? String(location) : null,
        Capacity: capacity === undefined || capacity === null || capacity === "" ? null : Number(capacity),
      },
    });
    return created(venue, "Venue created");
  } catch (e) {
    console.error("POST /venue error:", e);
    return serverError();
  }
}


