import { cookies } from "next/headers";
import { prisma } from "./prisma";
import { verifyToken } from "./jwt";

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const payload = verifyToken(token) as {
      id: string;
    };

    return prisma.user.findUnique({
      where: {
        id: payload.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
  } catch {
    return null;
  }
}