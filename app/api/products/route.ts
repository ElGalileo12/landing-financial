import { NextResponse } from "next/server";
import productos from "@/app/data/product.json";

export function GET() {
  return NextResponse.json(productos, {
    status: 200,
  });
}

