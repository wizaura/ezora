"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema, LoginDto } from "@/validators/auth.validator";
import { login } from "@/lib/api/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginDto>({
        resolver: zodResolver(LoginSchema),
    });
    const [error, setError] = useState("");

    const onSubmit = async (data: LoginDto) => {
        try {
            console.log("Submitting...");

            const res = await login(data);

            console.log("Success:", res);

            router.push("/admin/dashboard");

            console.log("Push called");

            router.refresh();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl"
        >
            <h1 className="mb-2 text-3xl font-bold">
                Welcome Back
            </h1>

            <p className="mb-8 text-gray-500">
                Login to Ezora Admin
            </p>

            <div className="space-y-5">
                <div>
                    <input
                        {...register("email")}
                        placeholder="Email"
                        className="w-full rounded-xl border px-4 py-3"
                    />

                    <p className="text-sm text-red-500">
                        {errors.email?.message}
                    </p>
                </div>

                <div>
                    <input
                        {...register("password")}
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-xl border px-4 py-3"
                    />

                    <p className="text-sm text-red-500">
                        {errors.password?.message}
                    </p>
                </div>

                {
                    error && (
                        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                            {error}
                        </div>
                    )
                }

                <button
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-dark-cerulean py-3 text-white disabled:opacity-60"
                >
                    {isSubmitting
                        ? "Signing In..."
                        : "Login"}
                </button>
            </div>
        </form>
    );
}