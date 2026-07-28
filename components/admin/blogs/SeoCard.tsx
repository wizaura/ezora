"use client";

interface Props {
    seoTitle: string;
    seoDescription: string;

    onSeoTitleChange: (
        value: string
    ) => void;

    onSeoDescriptionChange: (
        value: string
    ) => void;
}

export default function SeoCard({
    seoTitle,
    seoDescription,
    onSeoTitleChange,
    onSeoDescriptionChange,
}: Props) {

    return (

        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">

            <h2 className="text-lg font-semibold text-dark-cerulean">
                SEO Settings
            </h2>

            <p className="mt-1 text-sm text-muted">
                Optimise how this article appears in search engines.
            </p>

            <div className="mt-6 space-y-5">

                <div>

                    <label className="mb-2 block text-sm font-medium">
                        SEO Title
                    </label>

                    <input
                        value={seoTitle}
                        onChange={(e) =>
                            onSeoTitleChange(
                                e.target.value
                            )
                        }
                        placeholder="SEO title..."
                        className="
                            w-full

                            rounded-2xl

                            border
                            border-border

                            px-4
                            py-3

                            outline-none

                            transition

                            focus:border-brand
                        "
                    />

                    <div className="mt-2 text-right text-xs text-muted">
                        {seoTitle.length}/60
                    </div>

                </div>

                <div>

                    <label className="mb-2 block text-sm font-medium">
                        SEO Description
                    </label>

                    <textarea
                        rows={5}
                        value={seoDescription}
                        onChange={(e) =>
                            onSeoDescriptionChange(
                                e.target.value
                            )
                        }
                        placeholder="Meta description..."
                        className="
                            w-full

                            rounded-2xl

                            border
                            border-border

                            px-4
                            py-3

                            outline-none

                            transition

                            focus:border-brand
                        "
                    />

                    <div className="mt-2 text-right text-xs text-muted">
                        {seoDescription.length}/160
                    </div>

                </div>

            </div>

            <div className="mt-8 rounded-2xl border border-border bg-background p-4">

                <p className="text-xs uppercase tracking-wide text-muted">
                    Google Preview
                </p>

                <h3 className="mt-3 line-clamp-2 text-base font-semibold text-blue-700">
                    {seoTitle || "Your SEO title will appear here"}
                </h3>

                <p className="mt-1 text-sm text-green-700">
                    https://ezoratours.com/blog/...
                </p>

                <p className="mt-2 line-clamp-3 text-sm text-muted">
                    {seoDescription ||
                        "Your meta description will appear here when users discover your blog through search engines."}
                </p>

            </div>

        </div>

    );

}