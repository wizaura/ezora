import { fleetCategories, Vehicle } from "./fleet";

// Add a helper to flatten the vehicles and add a corporateLeaseEligible flag
export type CorporateVehicle = Vehicle & {
  corporateLeaseEligible: boolean;
  categoryName: string;
};

export const getCorporateFleetOptions = (): CorporateVehicle[] => {
  const corporateFleet: CorporateVehicle[] = [];

  fleetCategories.forEach((category) => {
    category.vehicles.forEach((vehicle) => {
      // Assuming all current vehicles are eligible for corporate lease for this example.
      // In a real scenario, you might filter specific IDs or add a flag to the base data.
      corporateFleet.push({
        ...vehicle,
        corporateLeaseEligible: true,
        categoryName: category.name,
      });
    });
  });

  return corporateFleet;
};

export const corporateFleetOptions = getCorporateFleetOptions();
