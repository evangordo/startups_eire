import db from "@/app/lib/utils";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const jobs = await db.Startup.findMany();
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}
