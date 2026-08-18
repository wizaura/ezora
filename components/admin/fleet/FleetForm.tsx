"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
    useForm,
    FormProvider,
    useFormContext,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import GeneralInformation from "./GeneralInformation";
import ImageUploader from "../shared/ImageUploader";
import FeatureEditor from "./FeatureEditor";
import SpecificationEditor from "./SpecificationEditor";
import GalleryEditor from "../shared/GalleryEditor";
import SeoSection from "../shared/SeoSection";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    VehicleDto,
    VehicleSchema,
} from "@/validators/vehicle.validator";


interface FleetFormProps {
    defaultValues?: Partial<VehicleDto>;

    onSubmit?: (
        values: VehicleDto
    ) => Promise<void>;

    loading?: boolean;
}


export default function FleetForm({
    defaultValues,
    onSubmit,
    loading = false,
}: FleetFormProps) {

    const methods = useForm<VehicleDto>({
        resolver: zodResolver(VehicleSchema),

        defaultValues: defaultValues ?? {

            /* ------------------------------------------------------------------ */
            /* General Information                                                */
            /* ------------------------------------------------------------------ */

            categoryId: "",

            name: "",
            slug: "",
            tagline: "",

            shortDescription: "",
            description: "",


            /* ------------------------------------------------------------------ */
            /* Images                                                              */
            /* ------------------------------------------------------------------ */

            featuredImage: "",
            featuredImagePublicId: "",

            heroImage: "",
            heroImagePublicId: "",


            /* ------------------------------------------------------------------ */
            /* Vehicle Capacity                                                   */
            /* ------------------------------------------------------------------ */

            seatingCapacity: "",
            luggageCapacity: "",


            /* ------------------------------------------------------------------ */
            /* Customer / Market Tariff                                           */
            /* ------------------------------------------------------------------ */

            customerBaseRate: 0,

            // Standard tariff benchmark
            customerBaseKm: 100,

            customerExtraKmRate: 0,

            customerDriverBata: 0,

            customerOvertimeRate: 350,


            /* ------------------------------------------------------------------ */
            /* Ezora B2B / Procurement Rate                                       */
            /* ------------------------------------------------------------------ */

            b2bBaseRate: 0,

            // B2B included mileage
            b2bBaseKm: 100,

            b2bExtraKmRate: 0,

            b2bDriverBata: 0,

            b2bOvertimeRate: 0,


            /* ------------------------------------------------------------------ */
            /* Operating Rules                                                    */
            /* ------------------------------------------------------------------ */

            dutyStartTime: "08:30",

            dutyEndTime: "19:00",

            fuelIncluded: true,

            tollTreatment: "ACTUALS",

            parkingTreatment: "ACTUALS",

            ferryTreatment: "ACTUALS",

            driverAccommodationTreatment:
                "VENDOR",


            /* ------------------------------------------------------------------ */
            /* Vehicle Specifications                                             */
            /* ------------------------------------------------------------------ */

            airConditioning: "",

            transmission: "",

            fuelType: "",

            chauffeurDriven: true,


            /* ------------------------------------------------------------------ */
            /* WhatsApp                                                            */
            /* ------------------------------------------------------------------ */

            whatsappMessage: "",


            /* ------------------------------------------------------------------ */
            /* Status                                                              */
            /* ------------------------------------------------------------------ */

            isFeatured: false,

            isActive: true,

            sortOrder: 0,


            /* ------------------------------------------------------------------ */
            /* SEO                                                                 */
            /* ------------------------------------------------------------------ */

            seoTitle: "",

            seoDescription: "",


            /* ------------------------------------------------------------------ */
            /* Relations                                                           */
            /* ------------------------------------------------------------------ */

            features: [],

            specifications: [],

            gallery: [],
        },
    });


    /* ---------------------------------------------------------------------- */
    /* Reset when editing                                                    */
    /* ---------------------------------------------------------------------- */

    useEffect(() => {
        if (defaultValues) {
            methods.reset(defaultValues);
        }
    }, [defaultValues, methods]);


    /* ---------------------------------------------------------------------- */
    /* Submit                                                                 */
    /* ---------------------------------------------------------------------- */

    const handleSubmit =
        methods.handleSubmit(async (values) => {
            await onSubmit?.(values);
        });


    return (
        <FormProvider {...methods}>

            <form
                onSubmit={handleSubmit}
                className="space-y-8"
            >

                {/* ========================================================== */}
                {/* GENERAL INFORMATION                                         */}
                {/* ========================================================== */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">

                    <GeneralInformation />

                </section>


                {/* ========================================================== */}
                {/* IMAGES                                                      */}
                {/* ========================================================== */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">

                    <ImageUploader />

                </section>


                {/* ========================================================== */}
                {/* COMMERCIAL INFORMATION                                      */}
                {/* ========================================================== */}

                <CommercialInformation />


                {/* ========================================================== */}
                {/* FEATURES                                                    */}
                {/* ========================================================== */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">

                    <FeatureEditor />

                </section>


                {/* ========================================================== */}
                {/* SPECIFICATIONS                                               */}
                {/* ========================================================== */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">

                    <SpecificationEditor />

                </section>


                {/* ========================================================== */}
                {/* GALLERY                                                      */}
                {/* ========================================================== */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">

                    <GalleryEditor />

                </section>


                {/* ========================================================== */}
                {/* SEO                                                         */}
                {/* ========================================================== */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">

                    <SeoSection />

                </section>


                {/* ========================================================== */}
                {/* FORM ACTIONS                                                 */}
                {/* ========================================================== */}

                <div className="sticky bottom-0 z-20 flex items-center justify-end gap-3 rounded-xl border bg-white p-5 shadow-lg">

                    <Link href="/admin/fleet">

                        <Button
                            type="button"
                            variant="outline"
                        >
                            Cancel
                        </Button>

                    </Link>


                    <Button
                        type="submit"
                        disabled={loading}
                    >
                        {loading
                            ? "Saving..."
                            : "Save Vehicle"}
                    </Button>

                </div>

            </form>

        </FormProvider>
    );
}


/* ========================================================================== */
/* COMMERCIAL INFORMATION                                                     */
/* ========================================================================== */

function CommercialInformation() {

    const {
        register,
        watch,
        formState: { errors },
    } = useFormContext<VehicleDto>();


    const fuelIncluded =
        watch("fuelIncluded");


    return (
        <section className="space-y-6">


            {/* ---------------------------------------------------------------- */
            /* Section Introduction                                             */
            /* ---------------------------------------------------------------- */}

            <Card>

                <CardHeader>

                    <CardTitle>
                        Commercial & Rate Information
                    </CardTitle>

                    <CardDescription>
                        Maintain the vendor&apos;s customer-facing
                        tariff separately from Ezora&apos;s negotiated
                        B2B procurement rate.
                    </CardDescription>

                </CardHeader>

            </Card>


            {/* ================================================================= */}
            {/* CUSTOMER / MARKET TARIFF                                          */}
            {/* ================================================================= */}

            <Card>

                <CardHeader>

                    <CardTitle className="text-lg">
                        Customer / Market Tariff
                    </CardTitle>

                    <CardDescription>
                        Reference selling tariff supplied by the
                        transport operator. This is a market/customer
                        reference and is not automatically treated as
                        Ezora&apos;s vendor cost.
                    </CardDescription>

                </CardHeader>


                <CardContent>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">


                        {/* Base Rate */}
                        <RateInput
                            label="Base Rate"
                            name="customerBaseRate"
                            description="Base vehicle hire rate"
                            prefix="₹"
                        />


                        {/* Included KM */}
                        <RateInput
                            label="Included KM"
                            name="customerBaseKm"
                            description="KM included in the base rate"
                            suffix="km"
                        />


                        {/* Extra KM */}
                        <RateInput
                            label="Extra KM Rate"
                            name="customerExtraKmRate"
                            description="Charge for each KM beyond included mileage"
                            prefix="₹"
                            suffix="/km"
                        />


                        {/* Driver Bata */}
                        <RateInput
                            label="Driver Bata / Day"
                            name="customerDriverBata"
                            description="Customer-facing driver allowance"
                            prefix="₹"
                            suffix="/day"
                        />


                        {/* Overtime */}
                        <RateInput
                            label="Overtime / Hour"
                            name="customerOvertimeRate"
                            description="Additional charge after the standard duty window"
                            prefix="₹"
                            suffix="/hr"
                        />

                    </div>


                    {/* Base Mileage Notice */}
                    <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">

                        <p className="text-sm font-semibold text-blue-900">
                            Base Mileage
                        </p>

                        <p className="mt-1 text-sm leading-6 text-blue-800">
                            The supplied tariff uses 100 km as the
                            standard base-mileage benchmark. Change
                            this value only when the vendor&apos;s
                            actual tariff uses a different mileage limit.
                        </p>

                    </div>

                </CardContent>

            </Card>


            {/* ================================================================= */}
            {/* EZORA B2B PROCUREMENT                                             */}
            {/* ================================================================= */}

            <Card>

                <CardHeader>

                    <CardTitle className="text-lg">
                        Ezora B2B / Vendor Procurement Rate
                    </CardTitle>

                    <CardDescription>
                        Enter the negotiated net rate that Ezora
                        actually pays the vendor. This is the rate
                        used as Ezora&apos;s procurement cost.
                    </CardDescription>

                </CardHeader>


                <CardContent>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">


                        {/* B2B Base Rate */}
                        <RateInput
                            label="B2B Base Rate"
                            name="b2bBaseRate"
                            description="Negotiated Ezora vendor cost"
                            prefix="₹"
                        />


                        {/* B2B Included KM */}
                        <RateInput
                            label="B2B Included KM"
                            name="b2bBaseKm"
                            description="KM included in the B2B base rate"
                            suffix="km"
                        />


                        {/* B2B Extra KM */}
                        <RateInput
                            label="B2B Extra KM Rate"
                            name="b2bExtraKmRate"
                            description="Vendor charge beyond included mileage"
                            prefix="₹"
                            suffix="/km"
                        />


                        {/* B2B Driver Bata */}
                        <RateInput
                            label="B2B Driver Bata / Day"
                            name="b2bDriverBata"
                            description="Negotiated vendor driver allowance"
                            prefix="₹"
                            suffix="/day"
                        />


                        {/* B2B Overtime */}
                        <RateInput
                            label="B2B Overtime / Hour"
                            name="b2bOvertimeRate"
                            description="Negotiated vendor overtime charge"
                            prefix="₹"
                            suffix="/hr"
                        />

                    </div>


                    {/* Procurement Rule */}
                    <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">

                        <p className="text-sm font-semibold text-amber-900">
                            Ezora Procurement Cost Rule
                        </p>

                        <p className="mt-1 text-sm leading-6 text-amber-800">
                            Only the negotiated B2B/net vendor rate
                            should be treated as Ezora&apos;s
                            procurement cost. The customer/market
                            tariff must not be used as Ezora&apos;s
                            vendor cost.
                        </p>

                    </div>

                </CardContent>

            </Card>


            {/* ================================================================= */}
            {/* DUTY & ADDITIONAL CHARGES                                         */}
            {/* ================================================================= */}

            <Card>

                <CardHeader>

                    <CardTitle className="text-lg">
                        Duty & Additional Charges
                    </CardTitle>

                    <CardDescription>
                        Define the standard duty window and how
                        additional travel-related expenses are handled.
                    </CardDescription>

                </CardHeader>


                <CardContent>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">


                        {/* Duty Start */}
                        <div className="space-y-2">

                            <Label htmlFor="dutyStartTime">
                                Duty Start Time
                            </Label>

                            <Input
                                id="dutyStartTime"
                                type="time"
                                {...register("dutyStartTime")}
                            />

                            {errors.dutyStartTime && (
                                <p className="text-xs text-red-500">
                                    {errors.dutyStartTime.message}
                                </p>
                            )}

                        </div>


                        {/* Duty End */}
                        <div className="space-y-2">

                            <Label htmlFor="dutyEndTime">
                                Duty End Time
                            </Label>

                            <Input
                                id="dutyEndTime"
                                type="time"
                                {...register("dutyEndTime")}
                            />

                            {errors.dutyEndTime && (
                                <p className="text-xs text-red-500">
                                    {errors.dutyEndTime.message}
                                </p>
                            )}

                        </div>


                        {/* Toll */}
                        <TreatmentSelect
                            label="Toll"
                            name="tollTreatment"
                            register={register}
                        />


                        {/* Parking */}
                        <TreatmentSelect
                            label="Parking"
                            name="parkingTreatment"
                            register={register}
                        />


                        {/* Ferry */}
                        <TreatmentSelect
                            label="Ferry"
                            name="ferryTreatment"
                            register={register}
                        />


                        {/* Driver Accommodation */}
                        <TreatmentSelect
                            label="Driver Accommodation"
                            name="driverAccommodationTreatment"
                            register={register}
                        />

                    </div>


                    {/* Fuel */}
                    <div className="mt-6 rounded-lg border p-4">

                        <label className="flex cursor-pointer items-start gap-3">

                            <input
                                type="checkbox"
                                className="mt-1 h-4 w-4 rounded border-gray-300"
                                {...register("fuelIncluded")}
                            />

                            <span>

                                <span className="block text-sm font-medium text-gray-900">
                                    Fuel included in base rate
                                </span>

                                <span className="mt-1 block text-sm text-gray-500">
                                    Indicates whether diesel/petrol is
                                    included within the applicable
                                    base mileage.
                                </span>

                            </span>

                        </label>


                        {!fuelIncluded && (
                            <p className="mt-3 text-xs text-amber-700">
                                Fuel will be treated separately when
                                calculating the trip cost.
                            </p>
                        )}

                    </div>

                </CardContent>

            </Card>

        </section>
    );
}


/* ========================================================================== */
/* RATE INPUT                                                                 */
/* ========================================================================== */

type RateField =
    | "customerBaseRate"
    | "customerBaseKm"
    | "customerExtraKmRate"
    | "customerDriverBata"
    | "customerOvertimeRate"
    | "b2bBaseRate"
    | "b2bBaseKm"
    | "b2bExtraKmRate"
    | "b2bDriverBata"
    | "b2bOvertimeRate";


interface RateInputProps {
    label: string;
    name: RateField;
    description: string;
    prefix?: string;
    suffix?: string;
}


function RateInput({
    label,
    name,
    description,
    prefix,
    suffix,
}: RateInputProps) {

    const {
        register,
        formState: { errors },
    } = useFormContext<VehicleDto>();


    const error = errors[name];


    return (
        <div className="space-y-2">

            <Label htmlFor={name}>
                {label}
            </Label>


            <div className="relative">

                {prefix && (
                    <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-muted-foreground">
                        {prefix}
                    </span>
                )}


                <Input
                    id={name}
                    type="number"
                    min="0"
                    step="0.01"
                    className={`
                        ${prefix ? "pl-8" : ""}
                        ${suffix ? "pr-14" : ""}
                    `}
                    {...register(name, {
                        valueAsNumber: true,
                    })}
                />


                {suffix && (
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        {suffix}
                    </span>
                )}

            </div>


            <p className="text-xs text-gray-500">
                {description}
            </p>


            {error && (
                <p className="text-xs text-red-500">
                    {error.message as string}
                </p>
            )}

        </div>
    );
}


/* ========================================================================== */
/* TREATMENT SELECT                                                           */
/* ========================================================================== */

type TreatmentField =
    | "tollTreatment"
    | "parkingTreatment"
    | "ferryTreatment"
    | "driverAccommodationTreatment";


interface TreatmentSelectProps {
    label: string;
    name: TreatmentField;

    register: ReturnType<
        typeof useFormContext<VehicleDto>
    >["register"];
}


function TreatmentSelect({
    label,
    name,
    register,
}: TreatmentSelectProps) {

    return (
        <div className="space-y-2">

            <Label htmlFor={name}>
                {label}
            </Label>


            <select
                id={name}
                {...register(name)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
            >

                <option value="ACTUALS">
                    Charged at Actuals
                </option>

                <option value="INCLUDED">
                    Included
                </option>

                <option value="VENDOR">
                    Vendor Responsibility
                </option>

                <option value="EZORA">
                    Ezora Responsibility
                </option>

                <option value="CUSTOMER">
                    Customer Responsibility
                </option>

                <option value="NOT_APPLICABLE">
                    Not Applicable
                </option>

            </select>

        </div>
    );
}