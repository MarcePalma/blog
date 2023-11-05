import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const usuarios = await prisma.usuario.findMany();

    if (!Array.isArray(usuarios)) {
      throw new Error("La respuesta no es una lista de usuarios válida");
    }

    return new Response(JSON.stringify(usuarios));
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    } else {
      return new Response(JSON.stringify({ error: "Error desconocido" }), { status: 500 });
    }
  }
}
