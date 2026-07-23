import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
        | "default"
        | "secondary"
        | "outline"
        | "destructive"
        | "ghost";

    size?: "sm" | "default" | "lg" | "icon";
}

export function Button({
    className,
    variant = "default",
    size = "default",
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50",

                {
                    "bg-primary text-white hover:bg-primary/90":
                        variant === "default",

                    "bg-gray-100 text-gray-900 hover:bg-gray-200":
                        variant === "secondary",

                    "border border-gray-300 bg-white hover:bg-gray-50":
                        variant === "outline",

                    "bg-red-600 text-white hover:bg-red-700":
                        variant === "destructive",

                    "hover:bg-gray-100":
                        variant === "ghost",

                    "h-10 px-4":
                        size === "default",

                    "h-9 px-3 text-sm":
                        size === "sm",

                    "h-11 px-6":
                        size === "lg",

                    "h-10 w-10 p-0":
                        size === "icon",
                },

                className
            )}
            {...props}
        />
    );
}