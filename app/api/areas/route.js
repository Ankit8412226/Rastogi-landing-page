import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import connectDB from "@/app/lib/db";
import Area from "@/app/models/Area";
import { areas as initialAreas } from "@/app/lib/site-data";

export async function GET() {
  try {
    await connectDB();
    let areas = await Area.find({}).sort({ name: 1 });
    
    if (areas.length === 0) {
      await Area.insertMany(initialAreas);
      areas = await Area.find({}).sort({ name: 1 });
    }

    return NextResponse.json({ success: true, areas });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token");
  if (!token || token.value !== "rastogi_admin_session_token") {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const data = await request.json();
    const newArea = await Area.create(data);
    return NextResponse.json({ success: true, area: newArea });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token");
  if (!token || token.value !== "rastogi_admin_session_token") {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const { _id, ...updateData } = await request.json();
    const updated = await Area.findByIdAndUpdate(_id, updateData, { new: true });
    return NextResponse.json({ success: true, area: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token");
  if (!token || token.value !== "rastogi_admin_session_token") {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const { _id } = await request.json();
    await Area.findByIdAndDelete(_id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
