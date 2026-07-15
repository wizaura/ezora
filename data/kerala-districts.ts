export type TouristAttraction = {
  name: string;
  description: string;
  image: string;
};

export type TravelInfo = {
  bestTimeToVisit: string;
  howToReach: string;
  nearestAirport: string;
};

export type KeralaDistrict = {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  gallery: string[];
  touristAttractions: TouristAttraction[];
  travelInfo: TravelInfo;
};

export const keralaDistricts: KeralaDistrict[] = [
  {
    slug: "kasaragod",
    name: "Kasaragod",
    description: "Known as the land of gods, forts, rivers, hills, and beautiful beaches. Kasaragod offers a unique blend of cultures and landscapes in the northernmost part of Kerala.",
    heroImage: "/images/home/why-1.png",
    gallery: ["/images/home/why-1.png", "/images/home/why-2.png"],
    touristAttractions: [
      { name: "Bekal Fort", description: "The largest fort in Kerala, offering superb views of the Arabian Sea.", image: "/images/home/why-1.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "September to March",
      howToReach: "Well connected by road and rail.",
      nearestAirport: "Mangalore International Airport (approx. 50 km)"
    }
  },
  {
    slug: "kannur",
    name: "Kannur",
    description: "Famous for its pristine beaches, Theyyam performances, and rich handloom industry. Kannur is a vibrant coastal district with deep historical roots.",
    heroImage: "/images/home/why-2.png",
    gallery: ["/images/home/why-2.png", "/images/home/why-3.png"],
    touristAttractions: [
      { name: "Muzhappilangad Drive-in Beach", description: "The longest drive-in beach in India.", image: "/images/home/why-2.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "October to March",
      howToReach: "Connected by rail and road.",
      nearestAirport: "Kannur International Airport (approx. 30 km)"
    }
  },
  {
    slug: "wayanad",
    name: "Wayanad",
    description: "A lush, green paradise nestled among the mountains of the Western Ghats. It's renowned for its spice plantations, wildlife, and waterfalls.",
    heroImage: "/images/home/why-3.png",
    gallery: ["/images/home/why-3.png", "/images/home/why-4.svg"],
    touristAttractions: [
      { name: "Edakkal Caves", description: "Famous for ancient petroglyphs dating back to the Neolithic age.", image: "/images/home/why-3.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "October to May",
      howToReach: "Accessible by road via scenic ghat passes.",
      nearestAirport: "Calicut International Airport (approx. 100 km)"
    }
  },
  {
    slug: "kozhikode",
    name: "Kozhikode",
    description: "Historically known as Calicut, this city is famous for its historical significance, culinary excellence, and beautiful beaches.",
    heroImage: "/images/home/why-1.png",
    gallery: ["/images/home/why-1.png", "/images/home/why-2.png"],
    touristAttractions: [
      { name: "Kozhikode Beach", description: "A popular spot for sunset viewing and local delicacies.", image: "/images/home/why-1.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "October to March",
      howToReach: "Major railway station and well connected by road.",
      nearestAirport: "Calicut International Airport (approx. 28 km)"
    }
  },
  {
    slug: "malappuram",
    name: "Malappuram",
    description: "A district with a rich cultural heritage, known for its historic monuments, rolling hills, and meandering rivers.",
    heroImage: "/images/home/why-2.png",
    gallery: ["/images/home/why-2.png", "/images/home/why-3.png"],
    touristAttractions: [
      { name: "Kottakkal Arya Vaidya Sala", description: "Pioneering center for authentic Ayurvedic treatment.", image: "/images/home/why-2.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "September to March",
      howToReach: "Well connected by road and rail network.",
      nearestAirport: "Calicut International Airport (approx. 25 km)"
    }
  },
  {
    slug: "palakkad",
    name: "Palakkad",
    description: "Known as the granary of Kerala, Palakkad features a mix of Tamil and Malayalam cultures, scenic landscapes, and historic forts.",
    heroImage: "/images/home/why-3.png",
    gallery: ["/images/home/why-3.png", "/images/home/why-1.png"],
    touristAttractions: [
      { name: "Palakkad Fort", description: "An old granite fort built by Hyder Ali.", image: "/images/home/why-3.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "September to March",
      howToReach: "Major railway junction connecting Kerala and Tamil Nadu.",
      nearestAirport: "Coimbatore International Airport (approx. 55 km)"
    }
  },
  {
    slug: "thrissur",
    name: "Thrissur",
    description: "The cultural capital of Kerala, known for its vibrant festivals, especially the spectacular Thrissur Pooram.",
    heroImage: "/images/home/why-1.png",
    gallery: ["/images/home/why-1.png", "/images/home/why-2.png"],
    touristAttractions: [
      { name: "Vadakkunnathan Temple", description: "An ancient Shiva temple featuring classic Kerala architecture.", image: "/images/home/why-1.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "October to March (April/May for Pooram)",
      howToReach: "Central railway station and good road connectivity.",
      nearestAirport: "Cochin International Airport (approx. 50 km)"
    }
  },
  {
    slug: "ernakulam",
    name: "Ernakulam",
    description: "The commercial hub of Kerala, blending cosmopolitan culture with historical heritage in areas like Fort Kochi.",
    heroImage: "/images/home/why-2.png",
    gallery: ["/images/home/why-2.png", "/images/home/why-3.png"],
    touristAttractions: [
      { name: "Fort Kochi", description: "Famous for Chinese fishing nets and colonial architecture.", image: "/images/home/why-2.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "October to March",
      howToReach: "Major transit hub with rail and road access.",
      nearestAirport: "Cochin International Airport (approx. 30 km)"
    }
  },
  {
    slug: "idukki",
    name: "Idukki",
    description: "A district of dense forests and rugged mountains. Home to Munnar, it is a haven for nature lovers and wildlife enthusiasts.",
    heroImage: "/images/home/why-3.png",
    gallery: ["/images/home/why-3.png", "/images/home/why-1.png"],
    touristAttractions: [
      { name: "Munnar", description: "Famous hill station known for expansive tea plantations.", image: "/images/home/why-3.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "September to May",
      howToReach: "Accessible only by road from nearby cities.",
      nearestAirport: "Cochin International Airport (approx. 100 km)"
    }
  },
  {
    slug: "kottayam",
    name: "Kottayam",
    description: "An important commercial center framed by the Western Ghats on the east and Vembanad Lake on the west. Famous for its letters, latex, and lakes.",
    heroImage: "/images/home/why-1.png",
    gallery: ["/images/home/why-1.png", "/images/home/why-2.png"],
    touristAttractions: [
      { name: "Kumarakom", description: "Renowned for its backwater tourism and bird sanctuary.", image: "/images/home/why-1.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "September to March",
      howToReach: "Connected by rail and road networks.",
      nearestAirport: "Cochin International Airport (approx. 90 km)"
    }
  },
  {
    slug: "alappuzha",
    name: "Alappuzha",
    description: "Known as the Venice of the East, famous for its picturesque canals, backwaters, beaches, and lagoons.",
    heroImage: "/images/home/why-2.png",
    gallery: ["/images/home/why-2.png", "/images/home/why-3.png"],
    touristAttractions: [
      { name: "Alleppey Backwaters", description: "World-famous for houseboat cruises.", image: "/images/home/why-2.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "October to March",
      howToReach: "Accessible by rail and road.",
      nearestAirport: "Cochin International Airport (approx. 85 km)"
    }
  },
  {
    slug: "pathanamthitta",
    name: "Pathanamthitta",
    description: "The headquarters of pilgrimage tourism in Kerala, surrounded by unspoiled natural surroundings and majestic hills.",
    heroImage: "/images/home/why-3.png",
    gallery: ["/images/home/why-3.png", "/images/home/why-1.png"],
    touristAttractions: [
      { name: "Sabarimala", description: "One of the most famous pilgrim centers in India.", image: "/images/home/why-3.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "September to February",
      howToReach: "Accessible mainly by road.",
      nearestAirport: "Trivandrum International Airport (approx. 110 km)"
    }
  },
  {
    slug: "kollam",
    name: "Kollam",
    description: "An old sea port and town on the Arabian coast. It's the southern gateway to the backwaters of Kerala.",
    heroImage: "/images/home/why-1.png",
    gallery: ["/images/home/why-1.png", "/images/home/why-2.png"],
    touristAttractions: [
      { name: "Ashtamudi Lake", description: "The most visited backwater and lake in the state.", image: "/images/home/why-1.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "October to March",
      howToReach: "Well connected by road and rail.",
      nearestAirport: "Trivandrum International Airport (approx. 70 km)"
    }
  },
  {
    slug: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    description: "The capital city of Kerala, blending rich heritage with modern infrastructure. Home to historic temples, museums, and renowned beaches.",
    heroImage: "/images/home/why-2.png",
    gallery: ["/images/home/why-2.png", "/images/home/why-3.png"],
    touristAttractions: [
      { name: "Kovalam Beach", description: "Internationally renowned beach with three crescent-shaped beaches.", image: "/images/home/why-2.png" },
    ],
    travelInfo: {
      bestTimeToVisit: "October to March",
      howToReach: "Major railway station and road network.",
      nearestAirport: "Trivandrum International Airport (approx. 5 km)"
    }
  }
];
