export interface PricingResult {
    ratePerKm: number;
    distanceKm: number;
    baseFare: number;
    driverAllowance: number;
    tax: number;
    total: number;
}

export class PricingService {
    private readonly vehicleRates: Record<string, number> = {
        sedan: 18,
        suv: 24,
        luxury: 40,
        traveller: 30,
        minibus: 45,
        bus: 60,
    };

    calculate(
        vehicleType: string,
        distanceMeters: number
    ): PricingResult {
        const distanceKm = Math.ceil(distanceMeters / 1000);

        const ratePerKm =
            this.vehicleRates[vehicleType.toLowerCase()] ?? 20;

        const baseFare = distanceKm * ratePerKm;

        const driverAllowance = distanceKm > 120 ? 600 : 0;

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