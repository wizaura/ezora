import bcrypt from "bcrypt";
import { UserRepository } from "@/repositories/user.repository";
import { signToken } from "@/lib/jwt";

export class AuthService {
  static async login(email: string, password: string) {
    const user = await UserRepository.findByEmail(email);

    if (!user)
      throw new Error("Invalid credentials");

    const valid = await bcrypt.compare(
      password,
      user.password
    );

    if (!valid)
      throw new Error("Invalid credentials");

    if (!user.isActive)
      throw new Error("Account disabled");

    await UserRepository.updateLastLogin(user.id);

    return signToken({
      id: user.id,
      role: user.role,
    });
  }
}