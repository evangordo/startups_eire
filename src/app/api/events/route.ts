import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://www.eventbriteapi.com/v3/events/search/?q=startup&location.address=dublin&token=${EVENTBRITE_TOKEN}",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch  data");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
