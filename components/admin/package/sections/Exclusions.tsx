"use client";

import { Plus, Trash2 } from "lucide-react";

interface ExclusionProps {
    form: any;
    setForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function Exclusions({
    form,
    setForm,
}: ExclusionProps) {
    const addExclusion = () => {
        setForm((prev: any) => ({
            ...prev,
            exclusions: [...prev.exclusions, ""],
        }));
    };

    const updateExclusion = (
        index: number,
        value: string
    ) => {
        setForm((prev: any) => ({
            ...prev,
            exclusions: prev.exclusions.map(
                (item: string, i: number) =>
                    i === index ? value : item
            ),
        }));
    };

    const removeExclusion = (index: number) => {
        setForm((prev: any) => ({
            ...prev,
            exclusions: prev.exclusions.filter(
                (_: string, i: number) => i !== index
            ),
        }));
    };

    return (
        <div className="rounded-2xl border bg-white shadow-sm">

            <div className="flex items-center justify-between border-b px-6 py-4">

                <div>
                    <h2 className="text-lg font-semibold">
                        Exclusions
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Add everything excluded from this package.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={addExclusion}
                    className="flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Exclusion
                </button>

            </div>

            <div className="space-y-4 p-6">

                {form.exclusions.length === 0 && (
                    <p className="text-center text-sm text-gray-500">
                        No exclusions added yet.
                    </p>
                )}

                {form.exclusions.map(
                    (
                        exclusion: string,
                        index: number
                    ) => (
                        <div
                            key={index}
                            className="flex gap-3"
                        >
                            <input
                                value={exclusion}
                                onChange={(e) =>
                                    updateExclusion(
                                        index,
                                        e.target.value
                                    )
                                }
                                placeholder="Flight Tickets"
                                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    removeExclusion(index)
                                }
                                className="rounded-lg bg-red-500 px-3 text-white"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    )
                )}

            </div>

        </div>
    );
}