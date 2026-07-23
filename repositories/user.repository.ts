import { prisma } from "@/lib/prisma";

export class UserRepository {
  static async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  static async updateLastLogin(id: string) {
    return prisma.user.update({
      where: { id },
      data: {
        lastLogin: new Date(),
      },
    });
  }
}