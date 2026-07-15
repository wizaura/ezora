export type PackageCategory = "Honeymoon" | "Family" | "Hill Station" | "Backwater" | "Group" | "Luxury";

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type TourPackage = {
  slug: string;
  title: string;
  category: PackageCategory;
  images: string[];
  duration: string;
  destinations: string[]; // slugs of districts
  price: string;
  includes: string[];
  excludes: string[];
  itinerary: ItineraryDay[];
};

export const tourPackages: TourPackage[] = [
  {
    slug: "romantic-kerala-honeymoon",
    title: "Romantic Kerala Honeymoon Package",
    category: "Honeymoon",
    images: ["/images/home/why-1.png", "/images/home/why-2.png"],
    duration: "5 Days / 4 Nights",
    destinations: ["idukki", "kottayam", "ernakulam"],
    price: "₹18,500 per person",
    includes: [
      "Accommodation in premium resorts",
      "Breakfast and Dinner",
      "Private AC Sedan for transfers & sightseeing",
      "1 Night in a Luxury Houseboat with all meals",
      "Flower bed decoration and honeymoon cake"
    ],
    excludes: [
      "Flight/Train tickets",
      "Entry fees to monuments",
      "Personal expenses",
      "Any meals other than specified"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Cochin & Transfer to Munnar",
        description: "Arrive at Cochin Airport/Railway station where our chauffeur will receive you. Enjoy a scenic 4-hour drive to Munnar. Check-in to your resort and relax for the evening."
      },
      {
        day: 2,
        title: "Munnar Sightseeing",
        description: "After breakfast, proceed for a full day Munnar sightseeing. Visit Eravikulam National Park, Mattupetty Dam, Echo Point, and the Tea Museum. Return to the resort for an overnight stay."
      },
      {
        day: 3,
        title: "Munnar to Kumarakom",
        description: "Drive down from the hills to the serene backwaters of Kumarakom. Check into your backwater resort and enjoy the tranquility of Vembanad Lake."
      },
      {
        day: 4,
        title: "Houseboat Experience",
        description: "Board your private houseboat at noon. Cruise through the narrow canals, enjoying authentic Kerala cuisine prepared on board. Overnight stay on the houseboat."
      },
      {
        day: 5,
        title: "Departure from Cochin",
        description: "After breakfast on the houseboat, disembark and drive back to Cochin for your onward journey."
      }
    ]
  },
  {
    slug: "family-group-holiday-tour",
    title: "Family & Group Holiday Tour",
    category: "Family",
    images: ["/images/home/why-3.png", "/images/home/why-1.png"],
    duration: "6 Days / 5 Nights",
    destinations: ["ernakulam", "idukki", "thiruvananthapuram"],
    price: "₹15,000 per person",
    includes: [
      "Accommodation in 3-star properties",
      "Daily Breakfast",
      "Spacious AC Force Traveller for the group",
      "Guided wildlife safari in Thekkady",
      "All toll, parking, and driver allowances"
    ],
    excludes: [
      "Flight/Train tickets",
      "Lunch and Dinner",
      "Entry tickets for boating/safari",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cochin",
        description: "Pick up from Cochin Airport. Half-day sightseeing in Fort Kochi, visiting Chinese Fishing Nets and Mattancherry Palace."
      },
      {
        day: 2,
        title: "Cochin to Thekkady",
        description: "Drive to Thekkady. Check into the hotel and prepare for an afternoon boat ride on Periyar Lake to spot wildlife."
      },
      {
        day: 3,
        title: "Thekkady to Kovalam",
        description: "Morning spice plantation tour. Later, proceed to Kovalam. Check in to your beach resort and relax."
      },
      {
        day: 4,
        title: "Kovalam & Trivandrum Sightseeing",
        description: "Visit the iconic Padmanabhaswamy Temple, Napier Museum, and spend the evening enjoying Kovalam beach."
      },
      {
        day: 5,
        title: "Leisure Day in Kovalam",
        description: "A free day to relax on the beach, try water sports, or indulge in an Ayurvedic massage."
      },
      {
        day: 6,
        title: "Departure",
        description: "Transfer to Trivandrum Airport/Railway station for departure."
      }
    ]
  },
  {
    slug: "luxury-houseboat-backwater-cruise",
    title: "Luxury Houseboat & Backwater Cruise",
    category: "Backwater",
    images: ["/images/home/why-2.png", "/images/home/why-3.png"],
    duration: "2 Days / 1 Night",
    destinations: ["alappuzha"],
    price: "₹8,500 per person",
    includes: [
      "Exclusive premium houseboat",
      "Welcome drink, Lunch, Evening Tea, Dinner, and Breakfast",
      "AC during sleeping hours",
      "Pick up and drop off from Alleppey/Cochin"
    ],
    excludes: [
      "Additional beverages",
      "Tips and gratuities",
      "Any services not mentioned in includes"
    ],
    itinerary: [
      {
        day: 1,
        title: "Boarding the Houseboat",
        description: "Arrive in Alleppey by 12:00 PM. Board your luxury houseboat. Enjoy a freshly prepared Kerala lunch as you cruise through Vembanad Lake."
      },
      {
        day: 2,
        title: "Morning Cruise & Checkout",
        description: "Wake up to the serene backwaters. After a traditional breakfast, cruise for a couple more hours before disembarking at 9:00 AM."
      }
    ]
  },
  {
    slug: "wayanad-nature-escape",
    title: "Wayanad Nature Escape",
    category: "Hill Station",
    images: ["/images/home/why-3.png", "/images/home/why-4.svg"],
    duration: "4 Days / 3 Nights",
    destinations: ["wayanad", "kozhikode"],
    price: "₹12,500 per person",
    includes: [
      "Accommodation in nature resort",
      "Breakfast and Dinner",
      "Private vehicle from Calicut",
      "Trekking guide assistance"
    ],
    excludes: [
      "Lunch",
      "Camera fees at tourist spots",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Calicut to Wayanad",
        description: "Pick up from Calicut and drive via the scenic Thamarassery Churam to Wayanad. Check into the resort."
      },
      {
        day: 2,
        title: "Wayanad Sightseeing",
        description: "Visit Edakkal Caves, Soochipara Waterfalls, and the Wayanad Heritage Museum."
      },
      {
        day: 3,
        title: "Banasura Sagar Dam & Pookode Lake",
        description: "Explore the largest earth dam in India, Banasura Sagar, followed by boating in Pookode Lake."
      },
      {
        day: 4,
        title: "Departure via Calicut",
        description: "Morning departure. En route, stop at Lakkidi View Point before dropping at Calicut Airport/Railway station."
      }
    ]
  }
];
