import { NextRequest, NextResponse } from "next/server";
import productos from "@/app/data/product.json";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  if (!id) {
    return NextResponse.json(
      { message: "Id no proporcionado" },
      { status: 400 }
    );
  }

  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return NextResponse.json(
      { message: "Producto no encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(producto, { status: 200 });
}
