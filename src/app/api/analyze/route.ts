import { NextResponse } from "next/server";
import { analyzeLastfmData } from "@/lib/lastfm/analysis";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 });
  }

  try {
    const data = await analyzeLastfmData(username);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Analysis API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to analyze data" },
      { status: 500 }
    );
  }
}
