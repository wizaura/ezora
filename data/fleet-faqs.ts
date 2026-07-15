export type FleetFAQ = {
  id: string;
  question: string;
  answer: string;
  sortOrder: number;
  isActive: boolean;
};

export const fleetFAQs: FleetFAQ[] = [
  {
    id: "fleet-faq-1",
    question: "Which vehicle is best for my group size?",
    answer:
      "The right vehicle depends on your passenger count, luggage requirements and journey type. Executive sedans are suitable for individuals, couples and small groups, while Force Urbania and Force Traveller options are better suited to families, corporate teams and larger groups. Share your journey details with us, and our team can help recommend the most suitable vehicle.",
    sortOrder: 1,
    isActive: true,
  },
  {
    id: "fleet-faq-2",
    question: "How many passengers can a Force Urbania accommodate?",
    answer:
      "Our Force Urbania fleet can include multiple seating configurations, such as 10, 12 and 17-seater options, depending on vehicle availability. The ideal configuration will also depend on your luggage requirements and the nature of your journey.",
    sortOrder: 2,
    isActive: true,
  },
  {
    id: "fleet-faq-3",
    question: "Are all Ezora vehicles chauffeur-driven?",
    answer:
      "Yes. Ezora focuses on chauffeur-driven mobility services for airport transfers, local travel, intercity journeys, corporate transportation and customized Kerala tours.",
    sortOrder: 3,
    isActive: true,
  },
  {
    id: "fleet-faq-4",
    question: "Can I book a vehicle for multiple days?",
    answer:
      "Yes. Vehicles can be requested for local travel, daily rentals, multi-day journeys and customized Kerala tours. Pricing depends on the selected vehicle, route, duration, estimated distance and other journey requirements.",
    sortOrder: 4,
    isActive: true,
  },
  {
    id: "fleet-faq-5",
    question: "Do you provide airport transfers across Kerala?",
    answer:
      "Ezora provides chauffeur-driven airport transfer services for journeys connected with major Kerala airports, including Cochin International Airport, Calicut International Airport and Thiruvananthapuram International Airport, subject to vehicle availability and booking confirmation.",
    sortOrder: 5,
    isActive: true,
  },
  {
    id: "fleet-faq-6",
    question: "Are intercity and interstate journeys available?",
    answer:
      "Yes. Ezora can accommodate intercity and interstate travel requirements, including one-way transfers and round trips. Final availability and pricing depend on your pickup location, destination, travel dates, vehicle choice and journey duration.",
    sortOrder: 6,
    isActive: true,
  },
  {
    id: "fleet-faq-7",
    question: "How is the vehicle rental price calculated?",
    answer:
      "Rental quotations may consider factors such as the vehicle category, pickup and drop locations, estimated distance, travel time, rental duration, tolls, parking charges and other journey-specific requirements. Submit your trip details to receive a personalized quotation.",
    sortOrder: 7,
    isActive: true,
  },
  {
    id: "fleet-faq-8",
    question: "Can companies lease vehicles monthly or yearly?",
    answer:
      "Yes. Ezora offers dedicated corporate mobility solutions with monthly, quarterly and yearly leasing options for businesses and organizations. Corporate requirements can be customized according to vehicle type, duration and transportation needs.",
    sortOrder: 8,
    isActive: true,
  },
];