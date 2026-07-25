"use client";

import { Plus, Trash2 } from "lucide-react";

interface HighlightProps {
    form: any;
    setForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function Highlights({
    form,
    setForm,
}: HighlightProps) {
    const addHighlight = () => {
        setForm((prev: any) => ({
            ...prev,
            highlights: [...prev.highlights, ""],
        }));
    };

    const updateHighlight = (
        index: number,
        value: string
    ) => {
        setForm((prev: any) => ({
            ...prev,
            highlights: prev.highlights.map(
                (item: string, i: number) =>
                    i === index ? value : item
            ),
        }));
    };

    const removeHighlight = (index: number) => {
        setForm((prev: any) => ({
            ...prev,
            highlights: prev.highlights.filter(
                (_: string, i: number) => i !== index
            ),
        }));
    };

    return (
        <div className="rounded-2xl border bg-white shadow-sm">

            <div className="flex items-center justify-between border-b px-6 py-4">

                <div>
                    <h2 className="text-lg font-semibold">
                        Highlights
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Add package highlights.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={addHighlight}
                    className="flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Highlight
                </button>

            </div>

            <div className="space-y-4 p-6">

                {form.highlights.length === 0 && (
                    <p className="text-center text-sm text-gray-500">
                        No highlights added yet.
                    </p>
                )}

                {form.highlights.map(
                    (
                        highlight: string,
                        index: number
                    ) => (
                        <div
                            key={index}
                            className="flex gap-3"
                        >
                            <input
                                value={highlight}
                                onChange={(e) =>
                                    updateHighlight(
                                        index,
                                        e.target.value
                                    )
                                }
                                placeholder="Houseboat Stay"
                                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    removeHighlight(index)
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