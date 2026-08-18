import { RentalQuotationInput } from "../validators/rental.validator";

import {
    GoogleMapRepository,
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

        /* ================================================================ */
        /* Calculate Route                                                  */
        /* ================================================================ */

        const route =
            await this.googleRepository.calculateRoute(
                data.pickupLocation,
                data.dropLocation
            );


        /* ================================================================ */
        /* Get Vehicle Customer Pricing                                     */
        /* ================================================================ */

        const vehicle =
            await this.vehicleService.getPricing(
                data.categoryType,
                data.vehicleType
            );


        /* ================================================================ */
        /* Convert Prisma Decimal → number                                  */
        /* ================================================================ */

        const baseRate =
            Number(vehicle.customerBaseRate);

        const baseKm =
            Number(vehicle.customerBaseKm);

        const extraKmRate =
            Number(vehicle.customerExtraKmRate);

        const driverBata =
            Number(vehicle.customerDriverBata);


        /* ================================================================ */
        /* Calculate Price                                                  */
        /* ================================================================ */

        const pricing =
            this.pricingService.calculate({
                baseRate,

                baseKm,

                extraKmRate,

                driverBata,

                distanceMeters:
                    route.distanceMeters,
            });


        /* ================================================================ */
        /* Quotation Number                                                 */
        /* ================================================================ */

        const quotationNo =
            `EZQ-${Date.now()}`;


        /* ================================================================ */
        /* Mail / PDF Data                                                  */
        /* ================================================================ */

        const mailData = {

            quotationNo,

            customerName:
                data.name,

            email:
                data.email,

            phone:
                data.phone,


            pickupLocation:
                data.pickupLocation,

            dropLocation:
                data.dropLocation,


            vehicleCategory:
                data.categoryType,

            vehicleType:
                data.vehicleType,


            pickupDate:
                data.pickupDate,

            pickupTime:
                data.pickupTime,


            distance:
                route.distanceText,

            duration:
                route.durationText,


            /* ---------------------------------------------------------- */
            /* Pricing                                                     */
            /* ---------------------------------------------------------- */

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
        };


        /* ================================================================ */
        /* Generate PDF                                                     */
        /* ================================================================ */

        const pdf =
            await this.pdfRepository.generateQuotation({

                ...mailData,

                quotationDate:
                    new Date().toLocaleDateString(
                        "en-IN",
                        {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        }
                    ),
            });


        /* ================================================================ */
        /* Send Emails                                                       */
        /* ================================================================ */

        await Promise.all([

            this.mailRepository.sendCustomerQuotation(
                mailData,
                pdf
            ),

            this.mailRepository.sendAdminNotification(
                mailData,
                pdf
            ),

        ]);


        /* ================================================================ */
        /* Response                                                          */
        /* ================================================================ */

        return {

            success: true,

            quotation: {

                distance:
                    route.distanceText,

                duration:
                    route.durationText,


                distanceKm:
                    pricing.distanceKm,


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
            },
        };
    }
}