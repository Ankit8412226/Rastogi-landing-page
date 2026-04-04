import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import connectDB from "@/app/lib/db";
import Property from "@/app/models/Property";
import { properties as initialProperties } from "@/app/lib/site-data";

export async function GET() {
  try {
    await connectDB();
    let properties = await Property.find({}).sort({ createdAt: -1 });
    
    // Seed if empty
    if (properties.length === 0) {
      await Property.insertMany(initialProperties.map(p => ({
        ...p,
        id: p.id || Date.now()
      })));
      properties = await Property.find({}).sort({ createdAt: -1 });
    }

    return NextResponse.json({ success: true, properties });
  } catch (error) {
    console.error("Properties fetch error:", error);
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
    
    if (data.isFeatured) {
        await Property.updateMany({ isFeatured: true }, { isFeatured: false });
    }

    const newProperty = await Property.create({
      ...data,
      id: data.id || Date.now(),
    });
    return NextResponse.json({ success: true, property: newProperty });
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
    const data = await request.json();
    const { _id, id, ...updateData } = data;

    if (updateData.isFeatured) {
        await Property.updateMany({ _id: { $ne: _id || id } }, { isFeatured: false });
    }

    const updatedProperty = await Property.findOneAndUpdate({ _id: _id || id }, updateData, { new: true });
    return NextResponse.json({ success: true, property: updatedProperty });
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
    const { id, _id } = await request.json();
    await Property.deleteOne({ _id: _id || id });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
