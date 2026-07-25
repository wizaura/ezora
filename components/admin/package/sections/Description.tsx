"use client";

interface DescriptionProps {
    form: any;
    setForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function Description({
    form,
    setForm,
}: DescriptionProps) {
    return (
        <div className="rounded-2xl border bg-white shadow-sm">

            <div className="border-b px-6 py-4">
                <h2 className="text-lg font-semibold">
                    Description
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Provide a detailed description of the package.
                </p>
            </div>

            <div className="space-y-6 p-6">

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Short Description
                    </label>

                    <textarea
                        rows={4}
                        value={form.shortDescription}
                        onChange={(e) =>
                            setForm((prev: any) => ({
                                ...prev,
                                shortDescription: e.target.value,
                            }))
                        }
                        placeholder="Write a short summary..."
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Full Description
                    </label>

                    {/* Replace with TipTap/Lexical later */}

                    <textarea
                        rows={10}
                        value={form.description}
                        onChange={(e) =>
                            setForm((prev: any) => ({
                                ...prev,
                                description: e.target.value,
                            }))
                        }
                        placeholder="Write the complete package description..."
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
                    />
                </div>

            </div>

        </div>
    );
}