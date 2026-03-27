import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // 1. Get the FormData from the incoming request (the browser)
    const formData = await req.formData();
    
    // 2. Get your backend URL from .env
    const baseApi = process.env.NEXT_PUBLIC_API_URL;

    // 3. Forward the exact FormData to your actual backend
    const res = await fetch(`${baseApi}/files/upload`, {
      method: "POST",
      body: formData, // Do NOT stringify this!
      // Do NOT set Content-Type header; fetch adds the boundary automatically
    });

    if (!res.ok) {
      const errorData = await res.text();
      return NextResponse.json({ error: "Backend Upload Failed", details: errorData }, { status: res.status });
    }

    const data = await res.json();
    
    // Return the response (usually contains the { location: "url" }) back to RTK Query
    return NextResponse.json(data);

  } catch (error: any) {
    console.error("UPLOAD_ROUTE_ERROR:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}