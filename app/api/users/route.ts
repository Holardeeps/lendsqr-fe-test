import { NextResponse } from "next/server";
import { getUsers } from "@/lib/users";

export async function GET() {
  try {
    const data = await getUsers();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
