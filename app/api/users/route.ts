import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.LENDSQR_USERS_ENDPOINT}?limit=20`, {
      headers: {
        "content-type": "application/json",
      },
      //Next.js caching
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch users" },
        { status: res.status },
      );
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    // console.error("ROUTE ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
