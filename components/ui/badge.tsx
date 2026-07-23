import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;

    variant?:
        | "default"
        | "secondary"
        | "success"
        | "destructive";
}

export function Badge({
    children,
    className,
    variant = "default",
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",

                {
                    "bg-primary text-white":
                        variant === "default",

                    "bg-gray-100 text-gray-700":
                        variant === "secondary",

                    "bg-green-100 text-green-700":
                        variant === "success",

                    "bg-red-100 text-red-700":
                        variant === "destructive",
                },

                className
            )}
        >
            {children}
        </span>
    );
}