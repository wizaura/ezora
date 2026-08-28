import { RentalQuotationInput } from "../validators/rental.validator";

import {
    GoogleMapRepository,
    RouteResult,
} from "../repositories/google-map.repository";

import {
    MailRepository,
} from "../repositories/mail.repository";

import {
    PdfRepository,
} from "../repositories/pdf/pdfRepository";

import {
    PricingService,
} from "./pricing.service";

import {
    VehicleService,
} from "./vehicle.service";


export class RentalService {

    constructor(

        private readonly googleRepository =
            new GoogleMapRepository(),

        private readonly pricingService =
            new PricingService(),

        private readonly vehicleService =
            new VehicleService(),

        private readonly pdfRepository =
            new PdfRepository(),

        private readonly mailRepository =
            new MailRepository()

    ) {}


    async generateQuotation(
        data: RentalQuotationInput
    ) {

        /* ================================================================
           Validate itinerary
        ================================================================= */

        if (
            !data.itinerary ||
            data.itinerary.length === 0
        ) {
            throw new Error(
                "At least one itinerary day is required."
            );
        }


        /* ================================================================
           Get Vehicle
        ================================================================= */

        const vehicle =
            await this.vehicleService.getPricing(
                data.categoryType,
                data.vehicleType
            );


        if (!vehicle) {

            throw new Error(
                "Selected vehicle could not be found."
            );
        }


        /* ================================================================
           Vehicle Pricing
        ================================================================= */

        const customerBaseRate =
            Number(
                vehicle.customerBaseRate
            );

        const customerBaseKm =
            Number(
                vehicle.customerBaseKm
            );

        const customerExtraKmRate =
            Number(
                vehicle.customerExtraKmRate
            );

        const customerDriverBata =
            Number(
                vehicle.customerDriverBata
            );


        /* ================================================================
           Calculate Every Itinerary Day
        ================================================================= */

        const dayResults:
            Array<{
                id: string;
                date: string;
                pickupTime: string;

                pickup: {
                    place: string;
                    placeId: string;
                };

                drop: {
                    place: string;
                    placeId: string;
                };

                stops: {
                    place: string;
                    placeId: string;
                    type: string;
                }[];

                route: RouteResult;
            }> = [];


        for (
            const day
            of data.itinerary
        ) {

            if (
                !day.stops ||
                day.stops.length < 2
            ) {

                throw new Error(
                    `Day ${data.itinerary.indexOf(day) + 1} must have a pickup and destination.`
                );
            }


            const routeStops =
                day.stops.map(
                    (stop) => ({
                        place:
                            stop.place,

                        placeId:
                            stop.placeId,
                    })
                );


            const route =
                await this.googleRepository
                    .calculateRoute(
                        routeStops
                    );


            const pickup =
                day.stops.find(
                    (stop) =>
                        stop.type ===
                        "PICKUP"
                );


            const drop =
                [...day.stops]
                    .reverse()
                    .find(
                        (stop) =>
                            stop.type ===
                            "DROP"
                    );


            if (
                !pickup ||
                !drop
            ) {

                throw new Error(
                    `Day ${data.itinerary.indexOf(day) + 1} must contain a pickup and destination.`
                );
            }


            dayResults.push({

                id:
                    day.id,

                date:
                    day.date,

                pickupTime:
                    day.pickupTime,

                pickup: {
                    place:
                        pickup.place,

                    placeId:
                        pickup.placeId ?? "",
                },

                drop: {
                    place:
                        drop.place,

                    placeId:
                        drop.placeId ?? "",
                },

                stops:
                    day.stops.map(
                        (stop) => ({
                            place:
                                stop.place,

                            placeId:
                                stop.placeId ?? "",

                            type:
                                stop.type,
                        })
                    ),

                route,
            });
        }


        /* ================================================================
           Calculate Pricing
        ================================================================= */

        const pricing =
            this.pricingService.calculate({

                baseRate:
                    customerBaseRate,

                baseKm:
                    customerBaseKm,

                extraKmRate:
                    customerExtraKmRate,

                driverBata:
                    customerDriverBata,

                days:
                    dayResults.map(
                        (day) => ({
                            distanceMeters:
                                day.route
                                    .distanceMeters,
                        })
                    ),
            });


        /* ================================================================
           Quotation Number
        ================================================================= */

        const quotationNo =
            `EZQ-${Date.now()}`;


        /* ================================================================
           Prepare Mail / PDF Data
        ================================================================= */

        const mailData = {

            quotationNo,

            customerName:
                data.name,

            email:
                data.email,

            phone:
                data.phone,


            tripType:
                data.tripType,

            passengers:
                data.passengers,


            vehicleCategory:
                data.categoryType,

            vehicleType:
                data.vehicleType,


            itinerary:
                dayResults.map(
                    (
                        day,
                        index
                    ) => ({

                        day:
                            index + 1,

                        date:
                            day.date,

                        pickupTime:
                            day.pickupTime,

                        pickup:
                            day.pickup,

                        drop:
                            day.drop,

                        stops:
                            day.stops,

                        distance:
                            day.route
                                .distanceText,

                        duration:
                            day.route
                                .durationText,

                        distanceMeters:
                            day.route
                                .distanceMeters,

                        durationSeconds:
                            day.route
                                .durationSeconds,
                    })
                ),


            /* ------------------------------------------------------------
               Overall Route
            ------------------------------------------------------------ */

            distance:
                formatDistance(
                    pricing.totalDistanceKm
                ),

            duration:
                formatTotalDuration(
                    dayResults
                ),


            /* ------------------------------------------------------------
               Pricing
            ------------------------------------------------------------ */

            baseRate:
                pricing.baseRate,

            baseKm:
                pricing.baseKm,

            extraKm:
                pricing.extraKm,

            extraKmRate:
                pricing.extraKmRate,

            extraKmCharge:
                pricing.extraKmCharge,

            driverAllowance:
                pricing.driverAllowance,

            subtotal:
                pricing.subtotal,

            tax:
                pricing.tax,

            estimatedFare:
                pricing.total,


            pricingDays:
                pricing.days,
        };


        /* ================================================================
           Generate PDF
        ================================================================= */

        const pdf =
            await this.pdfRepository
                .generateQuotation({

                    ...mailData,

                    quotationDate:
                        new Date()
                            .toLocaleDateString(
                                "en-IN",
                                {
                                    day: "2-digit",
                                    month:
                                        "long",
                                    year:
                                        "numeric",
                                }
                            ),
                });


        /* ================================================================
           Send Emails
        ================================================================= */

        await Promise.all([

            this.mailRepository
                .sendCustomerQuotation(
                    mailData,
                    pdf
                ),

            this.mailRepository
                .sendAdminNotification(
                    mailData,
                    pdf
                ),

        ]);


        /* ================================================================
           Response
        ================================================================= */

        return {

            success: true,

            quotation: {

                tripType:
                    data.tripType,

                passengers:
                    data.passengers,

                days:
                    dayResults.length,


                distance:
                    formatDistance(
                        pricing.totalDistanceKm
                    ),

                duration:
                    formatTotalDuration(
                        dayResults
                    ),


                distanceKm:
                    pricing.totalDistanceKm,


                baseRate:
                    pricing.baseRate,

                baseKm:
                    pricing.baseKm,


                extraKm:
                    pricing.extraKm,

                extraKmRate:
                    pricing.extraKmRate,

                extraKmCharge:
                    pricing.extraKmCharge,


                driverAllowance:
                    pricing.driverAllowance,


                subtotal:
                    pricing.subtotal,


                tax:
                    pricing.tax,


                total:
                    pricing.total,


                itinerary:
                    dayResults.map(
                        (
                            day,
                            index
                        ) => ({

                            day:
                                index + 1,

                            date:
                                day.date,

                            pickupTime:
                                day.pickupTime,

                            pickup:
                                day.pickup
                                    .place,

                            drop:
                                day.drop
                                    .place,

                            stops:
                                day.stops,

                            distance:
                                day.route
                                    .distanceText,

                            duration:
                                day.route
                                    .durationText,
                        })
                    ),
            },
        };
    }
}


/* =========================================================
   Helpers
========================================================= */

function formatDistance(
    distanceKm: number
) {

    return `${distanceKm.toFixed(1)} km`;
}


function formatTotalDuration(
    days: Array<{
        route: RouteResult;
    }>
) {

    const totalSeconds =
        days.reduce(
            (
                total,
                day
            ) =>
                total +
                day.route
                    .durationSeconds,
            0
        );


    const hours =
        Math.floor(
            totalSeconds / 3600
        );

    const minutes =
        Math.round(
            (totalSeconds % 3600) / 60
        );


    if (hours === 0) {

        return `${minutes} mins`;
    }


    if (minutes === 0) {

        return `${hours} hr`;
    }


    return `${hours} hr ${minutes} mins`;
}