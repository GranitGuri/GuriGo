// Serves the guri-go icon as /icon.png
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export async function GET() {
  try {
    const file = readFileSync(join(process.cwd(), "images", "gurigoIcon.png"));
    return new NextResponse(file, {
      headers: {
        "content-type": "image/png",
        "cache-control": "public, max-age=31536000, immutable",
      },
    });
  } catch (e) {
    return new NextResponse("", { status: 404 });
  }
}

