"use client";

import { Plus, Trash2 } from "lucide-react";

interface FAQProps {
    form: any;
    setForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function FAQ({
    form,
    setForm,
}: FAQProps) {
    const addFaq = () => {
        setForm((prev: any) => ({
            ...prev,
            faqs: [
                ...prev.faqs,
                {
                    question: "",
                    answer: "",
                },
            ],
        }));
    };

    const updateFaq = (
        index: number,
        field: "question" | "answer",
        value: string
    ) => {
        setForm((prev: any) => ({
            ...prev,
            faqs: prev.faqs.map(
                (faq: any, i: number) =>
                    i === index
                        ? {
                            ...faq,
                            [field]: value,
                        }
                        : faq
            ),
        }));
    };

    const removeFaq = (index: number) => {
        setForm((prev: any) => ({
            ...prev,
            faqs: prev.faqs.filter(
                (_: any, i: number) => i !== index
            ),
        }));
    };

    return (
        <div className="rounded-2xl border bg-white shadow-sm">

            <div className="flex items-center justify-between border-b px-6 py-4">

                <div>
                    <h2 className="text-lg font-semibold">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Add common questions and answers for this package.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={addFaq}
                    className="flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add FAQ
                </button>

            </div>

            <div className="space-y-5 p-6">

                {form.faqs.length === 0 && (
                    <p className="text-center text-sm text-gray-500">
                        No FAQs added yet.
                    </p>
                )}

                {form.faqs.map(
                    (faq: any, index: number) => (
                        <div
                            key={index}
                            className="rounded-xl border p-5"
                        >
                            <div className="mb-4 flex items-center justify-between">

                                <h3 className="font-medium">
                                    FAQ {index + 1}
                                </h3>

                                <button
                                    type="button"
                                    onClick={() =>
                                        removeFaq(index)
                                    }
                                    className="rounded-lg bg-red-500 p-2 text-white"
                                >
                                    <Trash2 size={16} />
                                </button>

                            </div>

                            <div className="space-y-4">

                                <div>
                                    <label className="mb-2 block text-sm font-medium">
                                        Question
                                    </label>

                                    <input
                                        type="text"
                                        value={faq.question}
                                        onChange={(e) =>
                                            updateFaq(
                                                index,
                                                "question",
                                                e.target.value
                                            )
                                        }
                                        placeholder="What is included in this package?"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium">
                                        Answer
                                    </label>

                                    <textarea
                                        rows={4}
                                        value={faq.answer}
                                        onChange={(e) =>
                                            updateFaq(
                                                index,
                                                "answer",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Write the answer here..."
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-primary"
                                    />
                                </div>

                            </div>

                        </div>
                    )
                )}

            </div>

        </div>
    );
}