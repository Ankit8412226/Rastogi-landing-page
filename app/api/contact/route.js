import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import connectDB from "@/app/lib/db";
import Contact from "@/app/models/Contact";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token");

  if (!token || token.value !== "rastogi_admin_session_token") {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, contacts });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    
    const newContact = await Contact.create({
      ...body,
      id: Date.now(),
    });

    return NextResponse.json({ success: true, contact: newContact });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
