import { NextResponse } from "next/server";

export type ApiEnvelope<T> = {
  success: boolean;
  message: string;
  data: T | null;
};

export function ok<T>(data: T, message = "OK", init?: ResponseInit) {
  const body: ApiEnvelope<T> = { success: true, message, data };
  return NextResponse.json(body, { status: 200, ...init });
}

export function created<T>(data: T, message = "Created", init?: ResponseInit) {
  const body: ApiEnvelope<T> = { success: true, message, data };
  return NextResponse.json(body, { status: 201, ...init });
}

export function fail(message: string, status = 400, data: object | null = null, init?: ResponseInit) {
  const body: ApiEnvelope<object> = { success: false, message, data };
  return NextResponse.json(body, { status, ...init });
}

export function serverError(message = "Internal server error") {
  return fail(message, 500);
}


