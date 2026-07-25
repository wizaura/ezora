"use client";

import { Plus, Trash2 } from "lucide-react";

interface ItineraryProps {
    form: any;
    setForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function Itinerary({
    form,
    setForm,
}: ItineraryProps) {
    const addDay = () => {
        setForm((prev: any) => ({
            ...prev,
            itinerary: [
                ...prev.itinerary,
                {
                    day: prev.itinerary.length + 1,
                    title: "",
                    description: "",
                },
            ],
        }));
    };

    const updateDay = (
        index: number,
        field: string,
        value: any
    ) => {
        setForm((prev: any) => ({
            ...prev,
            itinerary: prev.itinerary.map(
                (item: any, i: number) =>
                    i === index
                        ? { ...item, [field]: value }
                        : item
            ),
        }));
    };

    const removeDay = (index: number) => {
        setForm((prev: any) => ({
            ...prev,
            itinerary: prev.itinerary
                .filter((_: any, i: number) => i !== index)
                .map((item: any, i: number) => ({
                    ...item,
                    day: i + 1,
                })),
        }));
    };

    return (
        <div className="rounded-2xl border bg-white shadow-sm">

            <div className="flex items-center justify-between border-b px-6 py-4">

                <div>
                    <h2 className="text-lg font-semibold">
                        Itinerary
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Add day-wise travel details.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={addDay}
                    className="flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Day
                </button>

            </div>

            <div className="space-y-5 p-6">

                {form.itinerary.length === 0 && (
                    <p className="text-center text-sm text-gray-500">
                        No itinerary added yet.
                    </p>
                )}

                {form.itinerary.map(
                    (item: any, index: number) => (
                        <div
                            key={index}
                            className="rounded-xl border p-5"
                        >
                            <div className="mb-5 flex items-center justify-between">

                                <h3 className="font-semibold">
                                    Day {item.day}
                                </h3>

                                <button
                                    type="button"
                                    onClick={() =>
                                        removeDay(index)
                                    }
                                    className="rounded-lg bg-red-500 p-2 text-white"
                                >
                                    <Trash2 size={16} />
                                </button>

                            </div>

                            <div className="grid gap-5 md:grid-cols-2">

                                <div>
                                    <label className="mb-2 block text-sm font-medium">
                                        Title
                                    </label>

                                    <input
                                        value={item.title}
                                        onChange={(e) =>
                                            updateDay(
                                                index,
                                                "title",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
                                        placeholder="Arrival at Munnar"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium">
                                        Day
                                    </label>

                                    <input
                                        type="number"
                                        value={item.day}
                                        onChange={(e) =>
                                            updateDay(
                                                index,
                                                "day",
                                                Number(e.target.value)
                                            )
                                        }
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
                                    />
                                </div>

                            </div>

                            <div className="mt-5">

                                <label className="mb-2 block text-sm font-medium">
                                    Description
                                </label>

                                <textarea
                                    rows={5}
                                    value={item.description}
                                    onChange={(e) =>
                                        updateDay(
                                            index,
                                            "description",
                                            e.target.value
                                        )
                                    }
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3"
                                    placeholder="Describe the activities..."
                                />

                            </div>

                        </div>
                    )
                )}

            </div>

        </div>
    );
}