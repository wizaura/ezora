"use client";

import { Loader2, Save } from "lucide-react";

interface Props {
    loading: boolean;
    isPublished: boolean;
    onPublishChange: (value: boolean) => void;
    onSubmit: () => void;
    submitLabel: string;
}

export default function PublishCard({
    loading,
    isPublished,
    onPublishChange,
    onSubmit,
    submitLabel,
}: Props) {
    return (
        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">

            <h2 className="text-lg font-semibold text-dark-cerulean">
                Publish
            </h2>

            <p className="mt-1 text-sm text-muted">
                Choose the publication status for this article.
            </p>

            <div className="mt-6 space-y-4">

                <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-border p-4 transition hover:border-brand">

                    <div>
                        <p className="font-medium">
                            Published
                        </p>

                        <p className="text-sm text-muted">
                            Make this blog visible on the website.
                        </p>
                    </div>

                    <input
                        type="checkbox"
                        checked={isPublished}
                        onChange={(e) =>
                            onPublishChange(e.target.checked)
                        }
                        className="h-5 w-5 accent-brand"
                    />
                </label>

            </div>

            <button
                onClick={onSubmit}
                disabled={loading}
                className="
                    mt-6

                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2

                    rounded-2xl

                    bg-brand

                    px-5
                    py-3

                    font-medium
                    bg-dark-cerulean
                    text-white

                    transition

                    hover:opacity-90

                    disabled:cursor-not-allowed
                    disabled:opacity-60
                "
            >
                {loading ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Saving...
                    </>
                ) : (
                    <>
                        <Save className="h-4 w-4" />
                        {submitLabel}
                    </>
                )}
            </button>

        </div>
    );
}