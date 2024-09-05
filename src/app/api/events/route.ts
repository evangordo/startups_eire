import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    return NextResponse.json({});
  } catch (error) {
    console.error("Error ", error);
    return NextResponse.json(
      { error: "Failed to fetch events", details: error },
      { status: 500 }
    );
  }
}
