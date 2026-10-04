import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  if (!body?.name || !body?.email || !body?.phone) {
    return NextResponse.json({ ok: false, error: "Required fields are missing." }, { status: 400 });
  }
  console.log("TIS inquiry received:", { name: body.name, email: body.email, phone: body.phone, grade: body.grade });
  return NextResponse.json({ ok: true, message: "Inquiry received." });
}
