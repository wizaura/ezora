"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    ArrowRight,
    Calendar,
    CarFront,
    Clock3,
    Loader2,
    Mail,
    MapPin,
    Phone,
    User,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import {
    RentalQuotationInput,
    RentalQuotationValidator,
} from "@/validators/rental.validator";

type QuotePreview = {
    distance: string;
    duration: string;
    total: number;
} | null;

export default function RentalForm() {
    const [loading, setLoading] = useState(false);

    const [quotation, setQuotation] =
        useState<QuotePreview>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RentalQuotationInput>({
        resolver: zodResolver(
            RentalQuotationValidator
        ),

        defaultValues: {
            pickupLocation: "",
            dropLocation: "",

            pickupDate: "",
            pickupTime: "",

            returnDate: "",

            vehicleType: "",

            name: "",
            phone: "",
            email: "",
        },
    });

    const onSubmit = async (
        values: RentalQuotationInput
    ) => {
        try {
            setLoading(true);

            const response = await fetch(
                "/api/rental/quotation",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(values),
                }
            );

            const result =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ??
                        "Something went wrong."
                );
            }

            setQuotation({
                distance:
                    result.data.quotation.distance,

                duration:
                    result.data.quotation.duration,

                total:
                    result.data.quotation.total,
            });

            toast.success(
                "Quotation sent successfully."
            );

            reset();
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Unable to generate quotation."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="overflow-hidden rounded-[32px] border border-border bg-white shadow-[0_30px_80px_rgba(7,48,66,0.08)]">
            <div className="border-b border-border bg-dark-cerulean px-8 py-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light-sea-green">
                    Rental Calculator
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Request Your Quote
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/70">
                    Fill in your travel details to
                    receive an instant rental
                    quotation.
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-7 p-8"
            >
                {/* Pickup */}

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-dark-cerulean">
                        Pickup Location
                    </label>

                    <div className="relative">
                        <MapPin
                            size={20}
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                        />

                        <input
                            {...register(
                                "pickupLocation"
                            )}
                            placeholder="Enter pickup location"
                            className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition-all focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                        />
                    </div>

                    {errors.pickupLocation && (
                        <p className="text-sm text-red-500">
                            {
                                errors
                                    .pickupLocation
                                    .message
                            }
                        </p>
                    )}
                </div>

                {/* Drop */}

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-dark-cerulean">
                        Drop Location
                    </label>

                    <div className="relative">
                        <MapPin
                            size={20}
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                        />

                        <input
                            {...register(
                                "dropLocation"
                            )}
                            placeholder="Enter destination"
                            className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition-all focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                        />
                    </div>

                    {errors.dropLocation && (
                        <p className="text-sm text-red-500">
                            {
                                errors
                                    .dropLocation
                                    .message
                            }
                        </p>
                    )}
                </div>

                {/* Date & Time */}

                <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-dark-cerulean">
                            Pickup Date
                        </label>

                        <div className="relative">
                            <Calendar
                                size={20}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                            />

                            <input
                                type="date"
                                {...register(
                                    "pickupDate"
                                )}
                                className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5"
                            />
                        </div>

                        {errors.pickupDate && (
                            <p className="text-sm text-red-500">
                                {
                                    errors
                                        .pickupDate
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-dark-cerulean">
                            Pickup Time
                        </label>

                        <div className="relative">
                            <Clock3
                                size={20}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                            />

                            <input
                                type="time"
                                {...register(
                                    "pickupTime"
                                )}
                                className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5"
                            />
                        </div>

                        {errors.pickupTime && (
                            <p className="text-sm text-red-500">
                                {
                                    errors
                                        .pickupTime
                                        .message
                                }
                            </p>
                        )}
                    </div>
                </div>
                                {/* Return Date & Vehicle */}

                <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-dark-cerulean">
                            Return Date (Optional)
                        </label>

                        <div className="relative">
                            <Calendar
                                size={20}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                            />

                            <input
                                type="date"
                                {...register("returnDate")}
                                className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition-all focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-dark-cerulean">
                            Vehicle Type
                        </label>

                        <div className="relative">
                            <CarFront
                                size={20}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                            />

                            <select
                                {...register("vehicleType")}
                                className="h-14 w-full appearance-none rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition-all focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                            >
                                <option value="">
                                    Select Vehicle
                                </option>

                                <option value="Sedan">
                                    Sedan
                                </option>

                                <option value="SUV">
                                    SUV
                                </option>

                                <option value="Luxury">
                                    Luxury
                                </option>

                                <option value="Traveller">
                                    Tempo Traveller
                                </option>

                                <option value="Minibus">
                                    Mini Bus
                                </option>

                                <option value="Bus">
                                    Bus
                                </option>
                            </select>
                        </div>

                        {errors.vehicleType && (
                            <p className="text-sm text-red-500">
                                {errors.vehicleType.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Name & Phone */}

                <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-dark-cerulean">
                            Full Name
                        </label>

                        <div className="relative">
                            <User
                                size={20}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                            />

                            <input
                                {...register("name")}
                                placeholder="John Doe"
                                className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition-all focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                            />
                        </div>

                        {errors.name && (
                            <p className="text-sm text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-dark-cerulean">
                            Phone Number
                        </label>

                        <div className="relative">
                            <Phone
                                size={20}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                            />

                            <input
                                {...register("phone")}
                                placeholder="+91 XXXXX XXXXX"
                                className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition-all focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                            />
                        </div>

                        {errors.phone && (
                            <p className="text-sm text-red-500">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Email */}

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-dark-cerulean">
                        Email Address
                    </label>

                    <div className="relative">
                        <Mail
                            size={20}
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                        />

                        <input
                            {...register("email")}
                            placeholder="john@example.com"
                            className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition-all focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                        />
                    </div>

                    {errors.email && (
                        <p className="text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Quote Preview */}

                <div className="rounded-3xl bg-dark-cerulean p-6 text-white">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <h4 className="font-semibold">
                            Estimated Trip
                        </h4>

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                            Live Preview
                        </span>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-white/60">
                                Distance
                            </p>

                            <p className="mt-2 text-xl font-semibold">
                                {quotation?.distance ?? "—"}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-wider text-white/60">
                                Duration
                            </p>

                            <p className="mt-2 text-xl font-semibold">
                                {quotation?.duration ?? "—"}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-wider text-white/60">
                                Estimated Fare
                            </p>

                            <p className="mt-2 text-xl font-semibold text-light-sea-green">
                                {quotation
                                    ? `₹ ${quotation.total.toLocaleString()}`
                                    : "—"}
                            </p>
                        </div>
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={loading}
                    className="group h-14 w-full rounded-full bg-dark-cerulean text-base font-semibold text-white transition-all duration-300 hover:bg-greenish-blue disabled:pointer-events-none disabled:opacity-70"
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Generating Quote...
                        </>
                    ) : (
                        <>
                            Calculate My Quote

                            <ArrowRight
                                size={18}
                                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
}