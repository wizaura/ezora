export interface PricingResult {
    ratePerKm: number;
    distanceKm: number;
    baseFare: number;
    driverAllowance: number;
    tax: number;
    total: number;
}

export class PricingService {
    calculate(
        ratePerKm: number,
        distanceMeters: number
    ): PricingResult {
        const distanceKm = Math.ceil(distanceMeters / 1000);

        const baseFare =
            distanceKm * ratePerKm;

        const driverAllowance =
            distanceKm > 120 ? 600 : 0;

        const tax = Math.round(baseFare * 0.05);

        const total =
            baseFare +
            driverAllowance +
            tax;

        return {
            ratePerKm,
            distanceKm,
            baseFare,
            driverAllowance,
            tax,
            total,
        };
    }
}