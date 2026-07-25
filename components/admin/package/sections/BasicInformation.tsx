"use client";

interface BasicInformationProps {
    form: any;
    setForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function BasicInformation({
    form,
    setForm,
}: BasicInformationProps) {
    return (
        <div className="rounded-2xl border bg-white shadow-sm">

            <div className="border-b px-6 py-4">
                <h2 className="text-lg font-semibold">
                    Basic Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Enter the basic details of the tour package.
                </p>
            </div>

            <div className="space-y-6 p-6">

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Package Title <span className="text-red-500">*</span>
                    </label>

                    <input
                        type="text"
                        value={form.title}
                        onChange={(e) =>
                            setForm((prev: any) => ({
                                ...prev,
                                title: e.target.value,
                            }))
                        }
                        placeholder="Kerala Delight Tour"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Slug <span className="text-red-500">*</span>
                    </label>

                    <input
                        type="text"
                        value={form.slug}
                        onChange={(e) =>
                            setForm((prev: any) => ({
                                ...prev,
                                slug: e.target.value,
                            }))
                        }
                        placeholder="kerala-delight-tour"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                    />
                </div>

                <div className="grid gap-5 md:grid-cols-2">

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Location
                        </label>

                        <input
                            type="text"
                            value={form.location}
                            onChange={(e) =>
                                setForm((prev: any) => ({
                                    ...prev,
                                    location: e.target.value,
                                }))
                            }
                            placeholder="Kerala"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Duration
                        </label>

                        <input
                            type="text"
                            value={form.duration}
                            onChange={(e) =>
                                setForm((prev: any) => ({
                                    ...prev,
                                    duration: e.target.value,
                                }))
                            }
                            placeholder="4 Days / 3 Nights"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                        />
                    </div>

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Days
                        </label>

                        <input
                            type="number"
                            min={1}
                            value={form.days}
                            onChange={(e) =>
                                setForm((prev: any) => ({
                                    ...prev,
                                    days: Number(e.target.value),
                                }))
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Nights
                        </label>

                        <input
                            type="number"
                            min={0}
                            value={form.nights}
                            onChange={(e) =>
                                setForm((prev: any) => ({
                                    ...prev,
                                    nights: Number(e.target.value),
                                }))
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                        />
                    </div>

                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Starting Price
                    </label>

                    <div className="relative">

                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            ₹
                        </span>

                        <input
                            type="number"
                            value={form.startingPrice}
                            onChange={(e) =>
                                setForm((prev: any) => ({
                                    ...prev,
                                    startingPrice: Number(e.target.value),
                                }))
                            }
                            className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 outline-none focus:border-primary"
                        />

                    </div>

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Featured Package
                        </label>

                        <select
                            value={String(form.featured)}
                            onChange={(e) =>
                                setForm((prev: any) => ({
                                    ...prev,
                                    featured: e.target.value === "true",
                                }))
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                        >
                            <option value="false">
                                No
                            </option>

                            <option value="true">
                                Yes
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Status
                        </label>

                        <select
                            value={form.status}
                            onChange={(e) =>
                                setForm((prev: any) => ({
                                    ...prev,
                                    status: e.target.value,
                                }))
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                        >
                            <option value="DRAFT">
                                Draft
                            </option>

                            <option value="PUBLISHED">
                                Published
                            </option>
                        </select>
                    </div>

                </div>

            </div>

        </div>
    );
}