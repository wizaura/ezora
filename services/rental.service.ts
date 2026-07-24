import { RentalQuotationInput } from "../validators/rental.validator";
import {
    GoogleMapRepository,
} from "../repositories/google-map.repository";
import {
    MailRepository,
} from "../repositories/mail.repository";
import {
    PdfRepository,
} from "../repositories/pdf.repository";
import {
    PricingService,
} from "./pricing.service";

export class RentalService {
    constructor(
        private readonly googleRepository =
            new GoogleMapRepository(),

        private readonly pricingService =
            new PricingService(),

        private readonly pdfRepository =
            new PdfRepository(),

        private readonly mailRepository =
            new MailRepository()
    ) {}

    async generateQuotation(
        data: RentalQuotationInput
    ) {
        /**
         * Google Maps
         */
        const route =
            await this.googleRepository.calculateRoute(
                data.pickupLocation,
                data.dropLocation
            );

        /**
         * Pricing
         */
        const pricing =
            this.pricingService.calculate(
                data.vehicleType,
                route.distanceMeters
            );

        /**
         * Generate PDF
         */
        const pdf =
            await this.pdfRepository.generateQuotation({
                customerName: data.name,
                email: data.email,
                phone: data.phone,

                pickupLocation: data.pickupLocation,
                dropLocation: data.dropLocation,

                vehicleType: data.vehicleType,

                pickupDate: data.pickupDate,
                pickupTime: data.pickupTime,

                distance: route.distanceText,
                duration: route.durationText,

                estimatedFare: pricing.total,
            });

        /**
         * Send Emails
         */
        await Promise.all([
            this.mailRepository.sendCustomerQuotation(
                {
                    customerName: data.name,
                    email: data.email,
                    phone: data.phone,

                    pickupLocation: data.pickupLocation,
                    dropLocation: data.dropLocation,

                    vehicleType: data.vehicleType,

                    pickupDate: data.pickupDate,
                    pickupTime: data.pickupTime,

                    distance: route.distanceText,
                    duration: route.durationText,

                    estimatedFare: pricing.total,
                },
                pdf
            ),

            this.mailRepository.sendAdminNotification(
                {
                    customerName: data.name,
                    email: data.email,
                    phone: data.phone,

                    pickupLocation: data.pickupLocation,
                    dropLocation: data.dropLocation,

                    vehicleType: data.vehicleType,

                    pickupDate: data.pickupDate,
                    pickupTime: data.pickupTime,

                    distance: route.distanceText,
                    duration: route.durationText,

                    estimatedFare: pricing.total,
                },
                pdf
            ),
        ]);

        return {
            success: true,

            quotation: {
                distance: route.distanceText,
                duration: route.durationText,

                distanceKm: pricing.distanceKm,

                ratePerKm: pricing.ratePerKm,

                baseFare: pricing.baseFare,

                driverAllowance:
                    pricing.driverAllowance,

                tax: pricing.tax,

                total: pricing.total,
            },
        };
    }
}