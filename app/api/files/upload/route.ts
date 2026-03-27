import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const baseApi = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseApi}/files/upload`, {
      method: "POST",
      body: formData, 
    });
    if (!res.ok) {
      const errorData = await res.text();
      return NextResponse.json({ error: "Backend Upload Failed", details: errorData }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
}