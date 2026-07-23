import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";

async function main() {
  const existing = await prisma.user.findUnique({
    where: { email: "melbinmathew.dev@gmail.com" },
  });

  if (existing) {
    console.log("Admin already exists");
    return;
  }

  const hashed = await bcrypt.hash("Melb123S", 10);

  await prisma.user.create({
    data: {
      name: "Melbin Mathew",
      email: "melbinmathew.dev@gmail.com",
      password: hashed,
      role: "ADMIN",
    },
  });

  console.log("✅ Admin created");
}

main();