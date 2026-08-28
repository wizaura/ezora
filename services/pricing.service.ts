export interface PricingDayInput {
    distanceMeters: number;
}


export interface PricingInput {

    baseRate: number;

    baseKm: number;

    extraKmRate: number;

    driverBata: number;

    days: PricingDayInput[];
}


export interface PricingDayResult {

    distanceKm: number;

    baseRate: number;

    baseKm: number;

    extraKm: number;

    extraKmRate: number;

    extraKmCharge: number;

    driverAllowance: number;

    subtotal: number;
}


export interface PricingResult {

    totalDistanceKm: number;

    totalDistanceMeters: number;

    days: PricingDayResult[];

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

        if (
            !input.days ||
            input.days.length === 0
        ) {
            throw new Error(
                "At least one journey day is required."
            );
        }


        const days: PricingDayResult[] =
            input.days.map(
                (day) => {

                    const distanceKm =
                        Math.ceil(
                            day.distanceMeters /
                                1000
                        );


                    const extraKm =
                        Math.max(
                            distanceKm -
                                input.baseKm,
                            0
                        );


                    const extraKmCharge =
                        extraKm *
                        input.extraKmRate;


                    const driverAllowance =
                        input.driverBata;


                    const subtotal =
                        input.baseRate +
                        extraKmCharge +
                        driverAllowance;


                    return {

                        distanceKm,

                        baseRate:
                            input.baseRate,

                        baseKm:
                            input.baseKm,

                        extraKm,

                        extraKmRate:
                            input.extraKmRate,

                        extraKmCharge,

                        driverAllowance,

                        subtotal,
                    };
                }
            );


        const totalDistanceMeters =
            input.days.reduce(
                (
                    total,
                    day
                ) =>
                    total +
                    day.distanceMeters,
                0
            );


        const totalDistanceKm =
            days.reduce(
                (
                    total,
                    day
                ) =>
                    total +
                    day.distanceKm,
                0
            );


        const baseRate =
            days.reduce(
                (
                    total,
                    day
                ) =>
                    total +
                    day.baseRate,
                0
            );


        const extraKm =
            days.reduce(
                (
                    total,
                    day
                ) =>
                    total +
                    day.extraKm,
                0
            );


        const extraKmCharge =
            days.reduce(
                (
                    total,
                    day
                ) =>
                    total +
                    day.extraKmCharge,
                0
            );


        const driverAllowance =
            days.reduce(
                (
                    total,
                    day
                ) =>
                    total +
                    day.driverAllowance,
                0
            );


        const subtotal =
            days.reduce(
                (
                    total,
                    day
                ) =>
                    total +
                    day.subtotal,
                0
            );


        /*
         * Tax is intentionally 0 until
         * the applicable tax treatment
         * is confirmed.
         */

        const tax = 0;


        const total =
            subtotal + tax;


        return {

            totalDistanceKm,

            totalDistanceMeters,

            days,

            baseRate,

            baseKm:
                input.baseKm,

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