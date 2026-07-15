export type FleetFeature = {
  label: string;
};

export type Vehicle = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  featuredImage: string;
  seatingCapacity: string;
  luggageCapacity?: string;
  features: FleetFeature[];
  idealFor: string[];
  isFeatured: boolean;
  isActive: boolean;
  sortOrder: number;
};

export type FleetCategory = {
  id: string;
  name: string;
  slug: string;
  eyebrow: string;
  shortDescription: string;
  description: string;
  image: string;
  isActive: boolean;
  sortOrder: number;
  vehicles: Vehicle[];
};

export const fleetCategories: FleetCategory[] = [
  {
    id: "category-urbania",
    name: "Force Urbania",
    slug: "force-urbania",
    eyebrow: "Luxury Passenger Vans",
    shortDescription:
      "Premium group mobility with spacious interiors, exceptional comfort and sophisticated travel.",
    description:
      "Experience a new standard of chauffeur-driven group travel with our Force Urbania fleet. Designed for families, corporate groups and extended journeys, Urbania combines generous passenger space with premium comfort across Kerala.",
    image: "/images/home/fleet-1.jpg",
    isActive: true,
    sortOrder: 1,

    vehicles: [
      {
        id: "urbania-10",
        name: "Force Urbania 10 Seater",
        slug: "force-urbania-10-seater",
        shortDescription:
          "A premium chauffeur-driven van offering spacious seating and exceptional comfort for smaller groups.",
        featuredImage: "/images/home/fleet-2.jpg",
        seatingCapacity: "10+1",
        luggageCapacity: "Large",
        features: [
          { label: "Reclining Seats" },
          { label: "Premium AC" },
          { label: "Ample Luggage Space" },
        ],
        idealFor: [
          "Family Holidays",
          "Corporate Groups",
          "Airport Transfers",
        ],
        isFeatured: true,
        isActive: true,
        sortOrder: 1,
      },

      {
        id: "urbania-12",
        name: "Force Urbania 12 Seater",
        slug: "force-urbania-12-seater",
        shortDescription:
          "Spacious premium transportation designed for families, business teams and long-distance Kerala journeys.",
        featuredImage: "/images/home/fleet-3.jpg",
        seatingCapacity: "12+1",
        luggageCapacity: "Large",
        features: [
          { label: "Premium Seating" },
          { label: "Individual AC Vents" },
          { label: "Extended Luggage Space" },
        ],
        idealFor: [
          "Large Families",
          "Business Travel",
          "Kerala Tours",
        ],
        isFeatured: true,
        isActive: true,
        sortOrder: 2,
      },

      {
        id: "urbania-17",
        name: "Force Urbania 17 Seater",
        slug: "force-urbania-17-seater",
        shortDescription:
          "Premium large-group mobility offering generous passenger space for extended journeys across Kerala.",
        featuredImage: "/images/home/fleet-1.jpg",
        seatingCapacity: "17+1",
        luggageCapacity: "Extra Large",
        features: [
          { label: "Spacious Cabin" },
          { label: "Premium AC" },
          { label: "Group Travel Ready" },
        ],
        idealFor: [
          "Large Groups",
          "Corporate Events",
          "Multi-Day Tours",
        ],
        isFeatured: false,
        isActive: true,
        sortOrder: 3,
      },
    ],
  },

  {
    id: "category-traveller",
    name: "Force Traveller",
    slug: "force-traveller",
    eyebrow: "Premium Group Transport",
    shortDescription:
      "Flexible and comfortable group transportation for tours, events and long-distance journeys.",
    description:
      "Our Force Traveller fleet offers practical comfort and flexible seating configurations for families, tour groups, corporate teams and events across Kerala.",
    image: "/images/home/fleet-2.jpg",
    isActive: true,
    sortOrder: 2,

    vehicles: [
      {
        id: "traveller-12",
        name: "Force Traveller 12 Seater",
        slug: "force-traveller-12-seater",
        shortDescription:
          "Comfortable chauffeur-driven transportation for medium-sized families and groups.",
        featuredImage: "/images/home/fleet-2.jpg",
        seatingCapacity: "12+1",
        luggageCapacity: "Large",
        features: [
          { label: "Pushback Seats" },
          { label: "Air Conditioned" },
          { label: "Luggage Storage" },
        ],
        idealFor: [
          "Family Groups",
          "Tours",
          "Airport Transfers",
        ],
        isFeatured: true,
        isActive: true,
        sortOrder: 1,
      },

      {
        id: "traveller-17",
        name: "Force Traveller 17 Seater",
        slug: "force-traveller-17-seater",
        shortDescription:
          "Reliable large-group transportation for holidays, events and extended road journeys.",
        featuredImage: "/images/home/fleet-1.jpg",
        seatingCapacity: "17+1",
        luggageCapacity: "Extra Large",
        features: [
          { label: "Comfort Seating" },
          { label: "Powerful AC" },
          { label: "Large Group Capacity" },
        ],
        idealFor: [
          "Large Groups",
          "Weddings",
          "Corporate Events",
        ],
        isFeatured: false,
        isActive: true,
        sortOrder: 2,
      },
    ],
  },

  {
    id: "category-sedans",
    name: "Executive Sedans",
    slug: "executive-sedans",
    eyebrow: "Private & Business Travel",
    shortDescription:
      "Private chauffeur-driven sedans for airport transfers, corporate travel and seamless intercity journeys.",
    description:
      "Designed for executives, couples and individual travellers, our sedan fleet combines privacy, efficiency and dependable chauffeur-driven service throughout Kerala.",
    image: "/images/home/fleet-3.jpg",
    isActive: true,
    sortOrder: 3,

    vehicles: [
      {
        id: "sedan-dzire",
        name: "Maruti Suzuki Dzire",
        slug: "maruti-suzuki-dzire",
        shortDescription:
          "Efficient and comfortable private transportation for local journeys, airports and intercity travel.",
        featuredImage: "/images/home/fleet-2.jpg",
        seatingCapacity: "4+1",
        luggageCapacity: "Standard",
        features: [
          { label: "Air Conditioned" },
          { label: "Private Travel" },
          { label: "Airport Ready" },
        ],
        idealFor: [
          "Couples",
          "Airport Transfers",
          "Business Travel",
        ],
        isFeatured: true,
        isActive: true,
        sortOrder: 1,
      },

      {
        id: "sedan-etios",
        name: "Toyota Etios",
        slug: "toyota-etios",
        shortDescription:
          "A spacious chauffeur-driven sedan suited to corporate delegates and comfortable long-distance travel.",
        featuredImage: "/images/home/fleet-3.jpg",
        seatingCapacity: "4+1",
        luggageCapacity: "Standard",
        features: [
          { label: "Spacious Interior" },
          { label: "Air Conditioned" },
          { label: "Business Ready" },
        ],
        idealFor: [
          "Corporate Travel",
          "Couples",
          "Intercity Journeys",
        ],
        isFeatured: false,
        isActive: true,
        sortOrder: 2,
      },
    ],
  },
];