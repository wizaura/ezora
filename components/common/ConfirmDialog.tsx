"use client";

import { AlertTriangle, Loader2 } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

interface ConfirmDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;

    title?: string;
    description?: string;

    confirmText?: string;
    cancelText?: string;

    onConfirm: () => void | Promise<void>;

    loading?: boolean;

    variant?: "danger" | "default";
}

export default function ConfirmDialog({
    open,
    onOpenChange,

    title = "Are you sure?",

    description =
        "This action cannot be undone.",

    confirmText = "Confirm",
    cancelText = "Cancel",

    onConfirm,

    loading = false,

    variant = "danger",
}: ConfirmDialogProps) {

    const handleConfirm = async () => {
        await onConfirm();
    };

    return (
        <Dialog
            open={open}
            onOpenChange={
                loading
                    ? undefined
                    : onOpenChange
            }
        >
            <DialogContent className="sm:max-w-md bg-white">

                <DialogHeader>

                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600">
                        <AlertTriangle
                            size={20}
                        />
                    </div>

                    <DialogTitle>
                        {title}
                    </DialogTitle>

                    <DialogDescription>
                        {description}
                    </DialogDescription>

                </DialogHeader>

                <DialogFooter className="gap-2 sm:gap-2">

                    <Button
                        type="button"
                        variant="outline"
                        disabled={loading}
                        onClick={() =>
                            onOpenChange(false)
                        }
                    >
                        {cancelText}
                    </Button>

                    <Button
                        type="button"
                        disabled={loading}
                        variant={
                            variant === "danger"
                                ? "destructive"
                                : "default"
                        }
                        className={`${variant === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : "bg-green-500 hover:bg-green-600"}`}
                        onClick={handleConfirm}
                    >
                        {loading && (
                            <Loader2
                                size={16}
                                className="mr-2 animate-spin"
                            />
                        )}

                        {loading
                            ? "Deleting..."
                            : confirmText}
                    </Button>

                </DialogFooter>

            </DialogContent>
        </Dialog>
    );
}