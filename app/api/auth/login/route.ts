import { NextResponse } from "next/server";

import { LoginSchema } from "@/validators/auth.validator";
import { AuthService } from "@/services/auth.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const dto = LoginSchema.parse(body);

    const token = await AuthService.login(
      dto.email,
      dto.password
    );

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Invalid email or password",
      },
      {
        status: 401,
      }
    );
  }
}