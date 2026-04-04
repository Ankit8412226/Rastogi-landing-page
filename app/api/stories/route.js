import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import connectDB from "@/app/lib/db";
import Story from "@/app/models/Story";
import { stories as initialStories } from "@/app/lib/site-data";

export async function GET() {
  try {
    await connectDB();
    let stories = await Story.find({}).sort({ createdAt: -1 });
    
    if (stories.length === 0) {
      await Story.insertMany(initialStories);
      stories = await Story.find({}).sort({ createdAt: -1 });
    }

    return NextResponse.json({ success: true, stories });
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
    const newStory = await Story.create(data);
    return NextResponse.json({ success: true, story: newStory });
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
    const updated = await Story.findByIdAndUpdate(_id, updateData, { new: true });
    return NextResponse.json({ success: true, story: updated });
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
    await Story.findByIdAndDelete(_id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
