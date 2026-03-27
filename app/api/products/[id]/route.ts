import { NextRequest, NextResponse } from "next/server";

const baseApi = process.env.NEXT_PUBLIC_API_URL

export async function GET( req: NextRequest,{ params }: { params:  Promise<{ id: number }> }){
    const { id } =  await params;
    console.log(id)
    const res = await fetch(`${baseApi}/products/${id}`)
    const data = await res.json()
    return NextResponse.json(data)
}


export async function DELETE(req: NextRequest,
    { params }: { params:  Promise<{ id: number }> }) {
    const { id } =  await params;
    console.log(id)
  const res = await fetch(`${baseApi}/products/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await req.json();
    const res = await fetch(`${baseApi}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data);
 
}
