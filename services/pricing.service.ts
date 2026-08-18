export interface PricingInput {
    baseRate: number;
    baseKm: number;
    extraKmRate: number;
    driverBata: number;
    distanceMeters: number;
}

export interface PricingResult {
    distanceKm: number;

    baseRate: number;
    baseKm: number;

    extraKm: number;
    extraKmRate: number;
    extraKmCharge: number;

    driverAllowance: number;

    subtotal: number;

    tax: number;

    total: number;
}


export class PricingService {

    calculate(
        input: PricingInput
    ): PricingResult {

        const distanceKm =
            Math.ceil(
                input.distanceMeters / 1000
            );


        /* -------------------------------------------------------------- */
        /* Base KM                                                        */
        /* -------------------------------------------------------------- */

        const baseKm =
            input.baseKm;


        /* -------------------------------------------------------------- */
        /* Extra KM                                                       */
        /* -------------------------------------------------------------- */

        const extraKm =
            Math.max(
                distanceKm - baseKm,
                0
            );


        /* -------------------------------------------------------------- */
        /* Extra KM Charge                                                */
        /* -------------------------------------------------------------- */

        const extraKmCharge =
            extraKm *
            input.extraKmRate;


        /* -------------------------------------------------------------- */
        /* Driver Bata                                                    */
        /* -------------------------------------------------------------- */

        const driverAllowance =
            input.driverBata;


        /* -------------------------------------------------------------- */
        /* Subtotal                                                       */
        /* -------------------------------------------------------------- */

        const subtotal =
            input.baseRate +
            extraKmCharge +
            driverAllowance;


        /*
         * Do not hard-code GST/tax here unless Ezora has
         * confirmed the applicable tax treatment.
         *
         * The supplied tariff framework does not establish
         * a 5% tax rate.
         */

        const tax = 0;


        /* -------------------------------------------------------------- */
        /* Total                                                          */
        /* -------------------------------------------------------------- */

        const total =
            subtotal +
            tax;


        return {
            distanceKm,

            baseRate:
                input.baseRate,

            baseKm,

            extraKm,

            extraKmRate:
                input.extraKmRate,

            extraKmCharge,

            driverAllowance,

            subtotal,

            tax,

            total,
        };
    }
}