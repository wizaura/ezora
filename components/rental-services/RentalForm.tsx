"use client";

import { useEffect, useState } from "react";

import {
    useForm,
    useFieldArray,
} from "react-hook-form";

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
    Plus,
    Trash2,
    User,
    Users,
} from "lucide-react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import {
    RentalQuotationInput,
    RentalQuotationValidator,
} from "@/validators/rental.validator";

import {
    VehicleCategoryOption,
    VehicleOption,
} from "@/types/fleet.type";

import GooglePlacesInput from "../common/GooglePlacesInput";


/* =========================================================
   QUOTE PREVIEW
========================================================= */

type QuotePreview = {
    distance: string;
    duration: string;
    total: number;
} | null;


/* =========================================================
   COMPONENT
========================================================= */

export default function RentalForm() {

    const [loading, setLoading] =
        useState(false);

    const [categories, setCategories] =
        useState<VehicleCategoryOption[]>([]);

    const [selectedCategory, setSelectedCategory] =
        useState("");

    const [vehicles, setVehicles] =
        useState<VehicleOption[]>([]);

    const [quotation, setQuotation] =
        useState<QuotePreview>(null);


    /* =====================================================
       FORM
    ===================================================== */

    const {
        register,
        handleSubmit,
        control,
        setValue,
        watch,
        formState: {
            errors,
        },
    } = useForm<RentalQuotationInput>({
        resolver: zodResolver(
            RentalQuotationValidator
        ),

        defaultValues: {

            tripType: "ONE_WAY",

            itinerary: [
                {
                    id: crypto.randomUUID(),
                    date: "",
                    pickupTime: "",

                    stops: [
                        {
                            id: crypto.randomUUID(),
                            place: "",
                            placeId: "",
                            type: "PICKUP",
                        },
                        {
                            id: crypto.randomUUID(),
                            place: "",
                            placeId: "",
                            type: "DROP",
                        },
                    ],
                },
            ],

            categoryType: "",
            vehicleType: "",

            passengers: 1,

            name: "",
            phone: "",
            email: "",
        },
    });


    /* =====================================================
       ITINERARY ARRAY
    ===================================================== */

    const {
        fields: itineraryFields,
        append: appendDay,
        remove: removeDay,
    } = useFieldArray({
        control,
        name: "itinerary",
    });


    /* =====================================================
       WATCH
    ===================================================== */

    const tripType =
        watch("tripType");

    const itinerary =
        watch("itinerary");

    const passengers =
        watch("passengers");


    /* =====================================================
       LOAD VEHICLE OPTIONS
    ===================================================== */

    useEffect(() => {

        async function load() {

            try {

                const res =
                    await fetch(
                        "/api/fleet/options"
                    );

                if (!res.ok) {
                    throw new Error(
                        "Unable to load fleet."
                    );
                }

                const data =
                    await res.json();

                setCategories(data);

            } catch (error) {

                console.error(
                    error
                );

                toast.error(
                    "Unable to load vehicle options."
                );
            }
        }

        load();

    }, []);


    /* =====================================================
       TRIP TYPE CHANGE
    ===================================================== */

    useEffect(() => {

        /*
         * Round trip gets two days.
         *
         * Multi-day remains controlled
         * manually by the user.
         */

        if (
            tripType === "ONE_WAY"
        ) {

            if (
                itinerary.length > 1
            ) {

                /*
                 * Keep only first day.
                 */
                for (
                    let i = itinerary.length - 1;
                    i > 0;
                    i--
                ) {
                    removeDay(i);
                }
            }

        }

        if (
            tripType === "ROUND_TRIP"
        ) {

            if (
                itinerary.length === 1
            ) {

                const first =
                    itinerary[0];

                appendDay({
                    id: crypto.randomUUID(),
                    date: "",
                    pickupTime: "",

                    stops: [
                        {
                            id: crypto.randomUUID(),
                            place:
                                first.stops
                                    ?.find(
                                        (stop) =>
                                            stop.type ===
                                            "DROP"
                                    )
                                    ?.place ?? "",

                            placeId:
                                first.stops
                                    ?.find(
                                        (stop) =>
                                            stop.type ===
                                            "DROP"
                                    )
                                    ?.placeId ?? "",

                            type: "PICKUP",
                        },

                        {
                            id: crypto.randomUUID(),
                            place:
                                first.stops
                                    ?.find(
                                        (stop) =>
                                            stop.type ===
                                            "PICKUP"
                                    )
                                    ?.place ?? "",

                            placeId:
                                first.stops
                                    ?.find(
                                        (stop) =>
                                            stop.type ===
                                            "PICKUP"
                                    )
                                    ?.placeId ?? "",

                            type: "DROP",
                        },
                    ],
                });
            }
        }

    }, [
        tripType,
        itinerary.length,
        appendDay,
        removeDay,
    ]);


    /* =====================================================
       ADD DAY
    ===================================================== */

    function handleAddDay() {

        appendDay({
            id: crypto.randomUUID(),

            date: "",

            pickupTime: "",

            stops: [
                {
                    id: crypto.randomUUID(),
                    place: "",
                    placeId: "",
                    type: "PICKUP",
                },

                {
                    id: crypto.randomUUID(),
                    place: "",
                    placeId: "",
                    type: "DROP",
                },
            ],
        });
    }


    /* =====================================================
       DELETE DAY
    ===================================================== */

    function handleRemoveDay(
        index: number
    ) {

        if (
            itinerary.length <= 1
        ) {
            toast.error(
                "At least one travel day is required."
            );

            return;
        }

        removeDay(index);
    }


    /* =====================================================
       ADD STOP
    ===================================================== */

    function handleAddStop(
        dayIndex: number
    ) {

        const currentStops =
            itinerary[dayIndex]
                ?.stops ?? [];

        /*
         * Insert before final DROP.
         */

        const dropIndex =
            currentStops.findIndex(
                (stop) =>
                    stop.type === "DROP"
            );

        const insertIndex =
            dropIndex >= 0
                ? dropIndex
                : currentStops.length;

        const newStops = [
            ...currentStops,
        ];

        newStops.splice(
            insertIndex,
            0,
            {
                id:
                    crypto.randomUUID(),

                place: "",

                placeId: "",

                type: "STOP",
            }
        );

        setValue(
            `itinerary.${dayIndex}.stops`,
            newStops,
            {
                shouldDirty: true,
                shouldValidate: true,
            }
        );
    }


    /* =====================================================
       REMOVE STOP
    ===================================================== */

    function handleRemoveStop(
        dayIndex: number,
        stopIndex: number
    ) {

        const currentStops =
            itinerary[dayIndex]
                ?.stops ?? [];

        const stop =
            currentStops[stopIndex];

        /*
         * Pickup and drop cannot
         * be removed.
         */

        if (
            stop?.type === "PICKUP" ||
            stop?.type === "DROP"
        ) {
            return;
        }

        const newStops =
            currentStops.filter(
                (_, index) =>
                    index !== stopIndex
            );

        setValue(
            `itinerary.${dayIndex}.stops`,
            newStops,
            {
                shouldDirty: true,
                shouldValidate: true,
            }
        );
    }


    /* =====================================================
       LOCATION CHANGE
    ===================================================== */

    function handleLocationChange(
        dayIndex: number,
        stopIndex: number,
        value: string,
        placeId?: string
    ) {

        setValue(
            `itinerary.${dayIndex}.stops.${stopIndex}.place`,
            value,
            {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
            }
        );

        setValue(
            `itinerary.${dayIndex}.stops.${stopIndex}.placeId`,
            placeId ?? "",
            {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
            }
        );
    }


    /* =====================================================
       VEHICLE CATEGORY
    ===================================================== */

    function handleCategoryChange(
        categoryId: string
    ) {

        setSelectedCategory(
            categoryId
        );

        const category =
            categories.find(
                (item) =>
                    item.id ===
                    categoryId
            );

        setVehicles(
            category?.vehicles ?? []
        );

        setValue(
            "categoryType",
            category?.slug ?? "",
            {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
            }
        );

        setValue(
            "vehicleType",
            "",
            {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
            }
        );
    }


    /* =====================================================
       SUBMIT
    ===================================================== */

    async function onSubmit(
        values: RentalQuotationInput
    ) {

        try {

            setLoading(true);

            const response =
                await fetch(
                    "/api/rental/quotation",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",
                        },

                        body:
                            JSON.stringify(
                                values
                            ),
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
                    result.data
                        ?.quotation
                        ?.distance ?? "—",

                duration:
                    result.data
                        ?.quotation
                        ?.duration ?? "—",

                total:
                    result.data
                        ?.quotation
                        ?.total ?? 0,
            });

            toast.success(
                "Quotation sent successfully."
            );

        } catch (error) {

            console.error(
                error
            );

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Unable to generate quotation."
            );

        } finally {

            setLoading(false);
        }
    }


    /* =====================================================
       RENDER
    ===================================================== */

    return (
        <div className="overflow-hidden rounded-[32px] border border-border bg-white shadow-[0_30px_80px_rgba(7,48,66,0.08)]">

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="border-b border-border bg-dark-cerulean px-8 py-8">

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light-sea-green">
                    Rental Calculator
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Request Your Quote
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/70">
                    Plan your journey and receive
                    an instant rental quotation.
                </p>

            </div>


            {/* =================================================
                FORM
            ================================================= */}

            <form
                onSubmit={handleSubmit(
                    onSubmit
                )}
                className="space-y-8 py-8 px-4 md:px-8"
            >

                {/* =================================================
                    TRIP TYPE
                ================================================= */}

                <div className="space-y-3">

                    <label className="text-sm font-semibold text-dark-cerulean">
                        Trip Type
                    </label>

                    <div className="grid gap-3 sm:grid-cols-3">

                        {[
                            {
                                value:
                                    "ONE_WAY",
                                label:
                                    "One Way",
                            },
                            {
                                value:
                                    "ROUND_TRIP",
                                label:
                                    "Round Trip",
                            },
                            {
                                value:
                                    "MULTI_DAY",
                                label:
                                    "Multi Day",
                            },
                        ].map(
                            (option) => (

                                <label
                                    key={
                                        option.value
                                    }
                                    className={`cursor-pointer rounded-2xl border p-4 transition ${tripType ===
                                            option.value
                                            ? "border-sea bg-sea/5 ring-2 ring-sea/10"
                                            : "border-border hover:bg-surface-soft"
                                        }`}
                                >

                                    <input
                                        type="radio"
                                        value={
                                            option.value
                                        }
                                        {...register(
                                            "tripType"
                                        )}
                                        className="sr-only"
                                    />

                                    <span className="font-medium text-dark-cerulean">
                                        {
                                            option.label
                                        }
                                    </span>

                                </label>
                            )
                        )}

                    </div>

                    {errors.tripType && (
                        <p className="text-sm text-red-500">
                            {
                                errors
                                    .tripType
                                    .message
                            }
                        </p>
                    )}

                </div>


                {/* =================================================
                    ITINERARY
                ================================================= */}

                <div className="space-y-6">


                    <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                            Journey
                        </p>

                        <h4 className="mt-1 text-xl font-semibold text-dark-cerulean">
                            Travel itinerary
                        </h4>

                    </div>


                    {itineraryFields.map(
                        (
                            day,
                            dayIndex
                        ) => {

                            const dayData =
                                itinerary[
                                dayIndex
                                ];

                            return (

                                <div
                                    key={
                                        day.id
                                    }
                                    className="rounded-3xl border border-border bg-surface-soft/40 py-6 px-3 md:px-6"
                                >

                                    {/* Day Header */}

                                    <div className="mb-6 flex items-center justify-between">

                                        <div>

                                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sea">
                                                Day{" "}
                                                {dayIndex +
                                                    1}
                                            </span>

                                            <h5 className="mt-1 text-lg font-semibold text-dark-cerulean">
                                                Travel details
                                            </h5>

                                        </div>

                                        {tripType ===
                                            "MULTI_DAY" &&
                                            itinerary.length >
                                            1 && (
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-red-500 hover:bg-red-50 hover:text-red-600"
                                                    onClick={() =>
                                                        handleRemoveDay(
                                                            dayIndex
                                                        )
                                                    }
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            )}

                                    </div>


                                    {/* Date + Time */}

                                    <div className="grid gap-5 md:grid-cols-2">

                                        <div className="space-y-2">

                                            <label className="text-sm font-semibold text-dark-cerulean">
                                                Travel Date
                                            </label>

                                            <div className="relative">

                                                <Calendar
                                                    size={20}
                                                    className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                                                />

                                                <input
                                                    type="date"
                                                    {...register(
                                                        `itinerary.${dayIndex}.date`
                                                    )}
                                                    className="h-14 w-full rounded-2xl border border-border bg-white pl-14 pr-5 outline-none transition focus:border-sea focus:ring-4 focus:ring-sea/10"
                                                />

                                            </div>

                                            {errors
                                                .itinerary?.[
                                                dayIndex
                                            ]
                                                ?.date && (
                                                    <p className="text-sm text-red-500">
                                                        {
                                                            errors
                                                                .itinerary[
                                                                dayIndex
                                                            ]?.date
                                                                ?.message
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
                                                        `itinerary.${dayIndex}.pickupTime`
                                                    )}
                                                    className="h-14 w-full rounded-2xl border border-border bg-white pl-14 pr-5 outline-none transition focus:border-sea focus:ring-4 focus:ring-sea/10"
                                                />

                                            </div>

                                            {errors
                                                .itinerary?.[
                                                dayIndex
                                            ]
                                                ?.pickupTime && (
                                                    <p className="text-sm text-red-500">
                                                        {
                                                            errors
                                                                .itinerary[
                                                                dayIndex
                                                            ]?.pickupTime
                                                                ?.message
                                                        }
                                                    </p>
                                                )}

                                        </div>

                                    </div>


                                    {/* Locations */}

                                    <div className="mt-6 space-y-5">

                                        <div className="flex items-center justify-between">

                                            <div>

                                                <p className="text-sm font-semibold text-dark-cerulean">
                                                    Route
                                                </p>

                                                <p className="text-xs text-muted">
                                                    Add stops between pickup and destination.
                                                </p>

                                            </div>

                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() =>
                                                    handleAddStop(
                                                        dayIndex
                                                    )
                                                }
                                            >
                                                <Plus className="mr-1 h-4 w-4" />
                                                Add Stop
                                            </Button>

                                        </div>


                                        {(
                                            dayData
                                                ?.stops ??
                                            []
                                        ).map(
                                            (
                                                stop,
                                                stopIndex
                                            ) => {

                                                const stopError =
                                                    errors
                                                        .itinerary?.[
                                                        dayIndex
                                                    ]
                                                        ?.stops?.[
                                                    stopIndex
                                                    ];

                                                return (

                                                    <div
                                                        key={
                                                            stop.id
                                                        }
                                                        className="rounded-2xl border border-border bg-white p-4"
                                                    >

                                                        <div className="mb-3 flex items-center justify-between">

                                                            <div className="flex items-center gap-2">

                                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sea/10 text-sea">
                                                                    <MapPin
                                                                        size={
                                                                            15
                                                                        }
                                                                    />
                                                                </div>

                                                                <div>

                                                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sea">
                                                                        {stop.type ===
                                                                            "PICKUP"
                                                                            ? "Pickup"
                                                                            : stop.type ===
                                                                                "DROP"
                                                                                ? "Destination"
                                                                                : `Stop ${stopIndex}`}
                                                                    </p>

                                                                </div>

                                                            </div>


                                                            {stop.type ===
                                                                "STOP" && (
                                                                    <Button
                                                                        type="button"
                                                                        variant="ghost"
                                                                        size="icon"
                                                                        className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600"
                                                                        onClick={() =>
                                                                            handleRemoveStop(
                                                                                dayIndex,
                                                                                stopIndex
                                                                            )
                                                                        }
                                                                    >
                                                                        <Trash2 className="h-4 w-4" />
                                                                    </Button>
                                                                )}

                                                        </div>


                                                        <GooglePlacesInput
                                                            onChange={(
                                                                value,
                                                                placeId
                                                            ) =>
                                                                handleLocationChange(
                                                                    dayIndex,
                                                                    stopIndex,
                                                                    value,
                                                                    placeId
                                                                )
                                                            }
                                                            placeholder={
                                                                stop.type ===
                                                                    "PICKUP"
                                                                    ? "Search pickup location"
                                                                    : stop.type ===
                                                                        "DROP"
                                                                        ? "Search destination"
                                                                        : "Search stop"
                                                            }
                                                            error={
                                                                stopError?.place
                                                                    ?.message
                                                            }
                                                        />


                                                        {/* Selected location */}

                                                        {stop.place && (
                                                            <div className="mt-3 flex items-start gap-3 rounded-xl border border-sea/15 bg-sea/[0.04] px-4 py-3">

                                                                <MapPin
                                                                    size={
                                                                        15
                                                                    }
                                                                    className="mt-1 shrink-0 text-sea"
                                                                />

                                                                <div className="min-w-0">

                                                                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-sea">
                                                                        Selected
                                                                    </p>

                                                                    <p className="mt-1 text-sm leading-6 text-dark-cerulean">
                                                                        {
                                                                            stop.place
                                                                        }
                                                                    </p>

                                                                </div>

                                                            </div>
                                                        )}

                                                    </div>
                                                );
                                            }
                                        )}

                                    </div>


                                    {errors
                                        .itinerary?.[
                                        dayIndex
                                    ]
                                        ?.stops && (
                                            <p className="mt-3 text-sm text-red-500">
                                                {
                                                    errors
                                                        .itinerary[
                                                        dayIndex
                                                    ]
                                                        ?.stops
                                                        ?.message
                                                }
                                            </p>
                                        )}

                                </div>
                            );
                        }
                    )}

                </div>

                <div className="text-end">
                    {tripType ===
                        "MULTI_DAY" && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={
                                    handleAddDay
                                }
                            >
                                <Plus className="mr-2 h-4 w-4" />
                                Add Day
                            </Button>
                        )}
                </div>


                {/* =================================================
                    PASSENGERS + VEHICLE
                ================================================= */}

                <div className="grid gap-5 md:grid-cols-3">

                    {/* Passengers */}

                    <div className="space-y-2">

                        <label className="text-sm font-semibold text-dark-cerulean">
                            Passengers
                        </label>

                        <div className="relative">

                            <Users
                                size={20}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                            />

                            <input
                                type="number"
                                min={1}
                                max={100}
                                {...register(
                                    "passengers",
                                    {
                                        valueAsNumber:
                                            true,
                                    }
                                )}
                                className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                            />

                        </div>

                        {errors.passengers && (
                            <p className="text-sm text-red-500">
                                {
                                    errors
                                        .passengers
                                        .message
                                }
                            </p>
                        )}

                    </div>


                    {/* Category */}

                    <div className="space-y-2">

                        <label className="text-sm font-semibold text-dark-cerulean">
                            Vehicle Category
                        </label>

                        <div className="relative">

                            <CarFront
                                size={20}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                            />

                            <select
                                value={
                                    selectedCategory
                                }
                                onChange={(event) =>
                                    handleCategoryChange(
                                        event
                                            .target
                                            .value
                                    )
                                }
                                className="h-14 w-full appearance-none rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                            >

                                <option value="">
                                    Select Category
                                </option>

                                {categories.map(
                                    (
                                        category
                                    ) => (
                                        <option
                                            key={
                                                category.id
                                            }
                                            value={
                                                category.id
                                            }
                                        >
                                            {
                                                category.name
                                            }
                                        </option>
                                    )
                                )}

                            </select>

                        </div>

                        {errors.categoryType && (
                            <p className="text-sm text-red-500">
                                {
                                    errors
                                        .categoryType
                                        .message
                                }
                            </p>
                        )}

                    </div>


                    {/* Vehicle */}

                    <div className="space-y-2">

                        <label className="text-sm font-semibold text-dark-cerulean">
                            Vehicle
                        </label>

                        <div className="relative">

                            <CarFront
                                size={20}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                            />

                            <select
                                {...register(
                                    "vehicleType"
                                )}
                                disabled={
                                    !selectedCategory
                                }
                                className="h-14 w-full appearance-none rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10 disabled:cursor-not-allowed disabled:opacity-60"
                            >

                                <option value="">
                                    Select Vehicle
                                </option>

                                {vehicles.map(
                                    (
                                        vehicle
                                    ) => (
                                        <option
                                            key={
                                                vehicle.id
                                            }
                                            value={
                                                vehicle.slug
                                            }
                                        >
                                            {
                                                vehicle.name
                                            }
                                        </option>
                                    )
                                )}

                            </select>

                        </div>

                        {errors.vehicleType && (
                            <p className="text-sm text-red-500">
                                {
                                    errors
                                        .vehicleType
                                        .message
                                }
                            </p>
                        )}

                    </div>

                </div>


                {/* =================================================
                    CUSTOMER DETAILS
                ================================================= */}

                <div className="space-y-5">

                    <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                            Contact Details
                        </p>

                        <h4 className="mt-1 text-xl font-semibold text-dark-cerulean">
                            Where should we send your quote?
                        </h4>

                    </div>


                    <div className="grid gap-5 md:grid-cols-3">

                        {/* Name */}

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
                                    {...register(
                                        "name"
                                    )}
                                    placeholder="John Doe"
                                    className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                                />

                            </div>

                            {errors.name && (
                                <p className="text-sm text-red-500">
                                    {
                                        errors
                                            .name
                                            .message
                                    }
                                </p>
                            )}

                        </div>


                        {/* Phone */}

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
                                    {...register(
                                        "phone"
                                    )}
                                    placeholder="+91 XXXXX XXXXX"
                                    className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                                />

                            </div>

                            {errors.phone && (
                                <p className="text-sm text-red-500">
                                    {
                                        errors
                                            .phone
                                            .message
                                    }
                                </p>
                            )}

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
                                    {...register(
                                        "email"
                                    )}
                                    placeholder="john@example.com"
                                    className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                                />

                            </div>

                            {errors.email && (
                                <p className="text-sm text-red-500">
                                    {
                                        errors
                                            .email
                                            .message
                                    }
                                </p>
                            )}

                        </div>

                    </div>

                </div>


                {/* =================================================
                    QUOTE PREVIEW
                ================================================= */}

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
                                {
                                    quotation
                                        ?.distance ??
                                    "—"
                                }
                            </p>

                        </div>


                        <div>

                            <p className="text-xs uppercase tracking-wider text-white/60">
                                Duration
                            </p>

                            <p className="mt-2 text-xl font-semibold">
                                {
                                    quotation
                                        ?.duration ??
                                    "—"
                                }
                            </p>

                        </div>


                        <div>

                            <p className="text-xs uppercase tracking-wider text-white/60">
                                Estimated Fare
                            </p>

                            <p className="mt-2 text-xl font-semibold text-light-sea-green">
                                {quotation
                                    ? `₹ ${quotation.total.toLocaleString(
                                        "en-IN"
                                    )}`
                                    : "—"}
                            </p>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    SUBMIT
                ================================================= */}

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
                            Generate My Quote

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