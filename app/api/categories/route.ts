import { NextRequest, NextResponse } from "next/server"

const baseApi = process.env.NEXT_PUBLIC_API_URL
export async function GET(){
    const res = await fetch(`${baseApi}/categories`)
    const data = await res.json()
    return NextResponse.json(data)
}
