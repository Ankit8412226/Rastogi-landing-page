import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import connectDB from "@/app/lib/db";
import User from "@/app/models/User";

export async function POST(request) {
  try {
    await connectDB();
    const { username, password } = await request.json();
    
    // Seed initial admin if zero users
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      await User.create({ username: "admin", password: "password123" });
    }

    const user = await User.findOne({ username, password });

    if (user) {
      const cookieStore = await cookies();
      cookieStore.set("admin_token", "rastogi_admin_session_token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
