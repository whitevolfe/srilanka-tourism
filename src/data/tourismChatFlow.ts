export type ChatOption = {
  label: string;
  next: string;
};

export type ChatNode = {
  message: string;
  options: ChatOption[];
};

const tourismChatFlow: Record<string, ChatNode> = {
  start: {
    message:
      "Hello! 👋 Welcome to CeylonVoyage. Planning a trip to beautiful Sri Lanka?",
    options: [
      {
        label: "🗺️ Explore Sri Lanka",
        next: "destinations",
      },
      {
        label: "🏝️ Find a Tour Package",
        next: "packages",
      },
      {
        label: "🎯 Plan My Trip",
        next: "trip-planning",
      },
      {
        label: "🏨 Hotels & Transfers",
        next: "services",
      },
      {
        label: "📩 Send an Inquiry",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp CeylonVoyage",
        next: "whatsapp",
      },
    ],
  },

  destinations: {
    message:
      "Which part of Sri Lanka would you like to explore?",
    options: [
      {
        label: "🏖️ South Coast",
        next: "south-coast",
      },
      {
        label: "🏔️ Hill Country",
        next: "hill-country",
      },
      {
        label: "🌴 East Coast",
        next: "east-coast",
      },
      {
        label: "🕌 Cultural Triangle",
        next: "cultural-triangle",
      },
      {
        label: "🌊 West Coast",
        next: "west-coast",
      },
      {
        label: "🐘 Wildlife & Nature",
        next: "wildlife",
      },
    ],
  },

  "south-coast": {
    message:
      "The South Coast is famous for beautiful beaches, Galle Fort, whale watching and relaxing coastal experiences.",
    options: [
      {
        label: "🏰 Explore Galle",
        next: "galle",
      },
      {
        label: "🐋 Visit Mirissa",
        next: "mirissa",
      },
      {
        label: "🏄 Weligama",
        next: "weligama",
      },
      {
        label: "🏖️ Bentota",
        next: "bentota",
      },
      {
        label: "📩 Send an Inquiry",
        next: "inquiry",
      },
    ],
  },

  galle: {
    message:
      "Galle is perfect for history, beaches and luxury stays. Explore the famous Galle Fort or enjoy the beautiful southern coastline.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Galle Trip",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  mirissa: {
    message:
      "Mirissa is one of Sri Lanka's most popular beach destinations, especially for whale watching and relaxing by the ocean.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Mirissa Trip",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  weligama: {
    message:
      "Weligama is famous for surfing, beautiful beaches and relaxed coastal experiences.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Weligama Trip",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  bentota: {
    message:
      "Bentota is ideal for beach holidays, water sports, river safaris and relaxing resort experiences.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Bentota Trip",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  "hill-country": {
    message:
      "Sri Lanka's Hill Country is perfect for tea plantations, waterfalls, scenic train rides and cool mountain landscapes.",
    options: [
      {
        label: "🚂 Visit Ella",
        next: "ella",
      },
      {
        label: "🍃 Visit Nuwara Eliya",
        next: "nuwara-eliya",
      },
      {
        label: "🛕 Visit Kandy",
        next: "kandy",
      },
      {
        label: "📩 Plan Hill Country Trip",
        next: "inquiry",
      },
    ],
  },

  ella: {
    message:
      "Ella is famous for Nine Arches Bridge, Little Adam's Peak, waterfalls and spectacular mountain views.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Ella Trip",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  "nuwara-eliya": {
    message:
      "Nuwara Eliya offers tea plantations, waterfalls, cool weather and beautiful mountain scenery.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Nuwara Eliya Trip",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  kandy: {
    message:
      "Kandy is a cultural destination famous for the Temple of the Sacred Tooth Relic, traditional culture and surrounding mountains.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Kandy Trip",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  "east-coast": {
    message:
      "Sri Lanka's East Coast is perfect for beautiful beaches, diving, snorkeling and relaxing tropical holidays.",
    options: [
      {
        label: "🏖️ Trincomalee",
        next: "trincomalee",
      },
      {
        label: "🌴 Pasikudah",
        next: "pasikudah",
      },
      {
        label: "🤿 Diving & Snorkeling",
        next: "east-coast-adventure",
      },
      {
        label: "📩 Plan East Coast Trip",
        next: "inquiry",
      },
    ],
  },

  trincomalee: {
    message:
      "Trincomalee is famous for its stunning beaches, Pigeon Island, whale watching and beautiful coastal scenery.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Trincomalee Trip",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  pasikudah: {
    message:
      "Pasikudah is known for its calm shallow waters and beautiful tropical beach resorts.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Pasikudah Trip",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  "east-coast-adventure": {
    message:
      "The East Coast offers excellent snorkeling, diving and marine experiences.",
    options: [
      {
        label: "📩 Request Adventure Trip",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  "cultural-triangle": {
    message:
      "Explore Sri Lanka's ancient heritage through Sigiriya, Dambulla, Anuradhapura and Polonnaruwa.",
    options: [
      {
        label: "🪨 Sigiriya",
        next: "sigiriya",
      },
      {
        label: "🛕 Dambulla",
        next: "dambulla",
      },
      {
        label: "🏛️ Anuradhapura",
        next: "anuradhapura",
      },
      {
        label: "📩 Plan Cultural Tour",
        next: "inquiry",
      },
    ],
  },

  sigiriya: {
    message:
      "Sigiriya Rock Fortress is one of Sri Lanka's most iconic attractions and a UNESCO World Heritage Site.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Sigiriya Trip",
        next: "inquiry",
      },
    ],
  },

  dambulla: {
    message:
      "Dambulla is famous for its ancient cave temples and impressive Buddhist artwork.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Dambulla Trip",
        next: "inquiry",
      },
    ],
  },

  anuradhapura: {
    message:
      "Anuradhapura is an ancient capital filled with historic temples, stupas and sacred Buddhist sites.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Cultural Tour",
        next: "inquiry",
      },
    ],
  },

  "west-coast": {
    message:
      "The West Coast is a convenient starting point for Sri Lanka trips and offers beaches, city experiences and cultural attractions.",
    options: [
      {
        label: "🏙️ Colombo",
        next: "colombo",
      },
      {
        label: "🏖️ Negombo",
        next: "negombo",
      },
      {
        label: "📩 Plan West Coast Trip",
        next: "inquiry",
      },
    ],
  },

  colombo: {
    message:
      "Colombo offers shopping, restaurants, nightlife, history and modern city experiences.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Colombo Trip",
        next: "inquiry",
      },
    ],
  },

  negombo: {
    message:
      "Negombo is a popular beach destination close to Colombo International Airport.",
    options: [
      {
        label: "🏝️ Explore Tour Packages",
        next: "packages",
      },
      {
        label: "📩 Request Negombo Trip",
        next: "inquiry",
      },
    ],
  },

  wildlife: {
    message:
      "Sri Lanka is an amazing wildlife destination with elephants, leopards, birds and beautiful national parks.",
    options: [
      {
        label: "🐆 Yala Safari",
        next: "yala",
      },
      {
        label: "🐘 Udawalawe Safari",
        next: "udawalawe",
      },
      {
        label: "🐘 Minneriya Safari",
        next: "minneriya",
      },
      {
        label: "📩 Request Safari Trip",
        next: "inquiry",
      },
    ],
  },

  yala: {
    message:
      "Yala National Park is famous for leopards, elephants, crocodiles and diverse wildlife.",
    options: [
      {
        label: "🐘 Explore Safari Package",
        next: "packages",
      },
      {
        label: "📩 Request Yala Safari",
        next: "inquiry",
      },
    ],
  },

  udawalawe: {
    message:
      "Udawalawe National Park is one of the best places in Sri Lanka to see elephants in their natural habitat.",
    options: [
      {
        label: "🐘 Explore Safari Package",
        next: "packages",
      },
      {
        label: "📩 Request Safari",
        next: "inquiry",
      },
    ],
  },

  minneriya: {
    message:
      "Minneriya is famous for its seasonal elephant gathering and beautiful wildlife experiences.",
    options: [
      {
        label: "🐘 Explore Safari Package",
        next: "packages",
      },
      {
        label: "📩 Request Safari",
        next: "inquiry",
      },
    ],
  },

  packages: {
    message:
      "How long are you planning to stay in Sri Lanka?",
    options: [
      {
        label: "3–4 Days",
        next: "4-days",
      },
      {
        label: "5–7 Days",
        next: "5-7-days",
      },
      {
        label: "8–10 Days",
        next: "8-10-days",
      },
      {
        label: "11–14 Days",
        next: "11-14-days",
      },
      {
        label: "14+ Days",
        next: "14-plus-days",
      },
    ],
  },

  "4-days": {
    message:
      "Great choice! A 3–4 day trip is perfect for a short Sri Lankan getaway. What experience interests you?",
    options: [
      {
        label: "🏖️ Beach Holiday",
        next: "beach-holiday",
      },
      {
        label: "🏔️ Scenic & Mountains",
        next: "scenic-mountains",
      },
      {
        label: "🐘 Wildlife & Safari",
        next: "wildlife-safari",
      },
      {
        label: "🏛️ Culture & Heritage",
        next: "culture-heritage",
      },
      {
        label: "💑 Honeymoon",
        next: "honeymoon",
      },
    ],
  },

  "5-7-days": {
    message:
      "A 5–7 day trip gives you enough time to experience several highlights of Sri Lanka. What interests you?",
    options: [
      {
        label: "🏖️ Beach Holiday",
        next: "beach-holiday",
      },
      {
        label: "🏔️ Scenic & Mountains",
        next: "scenic-mountains",
      },
      {
        label: "🐘 Wildlife & Safari",
        next: "wildlife-safari",
      },
      {
        label: "🏛️ Culture & Heritage",
        next: "culture-heritage",
      },
      {
        label: "💑 Honeymoon",
        next: "honeymoon",
      },
    ],
  },

  "8-10-days": {
    message:
      "An 8–10 day itinerary can cover many of Sri Lanka's most popular destinations. What experience are you interested in?",
    options: [
      {
        label: "🏖️ Beach Holiday",
        next: "beach-holiday",
      },
      {
        label: "🏔️ Scenic & Mountains",
        next: "scenic-mountains",
      },
      {
        label: "🐘 Wildlife & Safari",
        next: "wildlife-safari",
      },
      {
        label: "🏛️ Culture & Heritage",
        next: "culture-heritage",
      },
      {
        label: "💑 Honeymoon",
        next: "honeymoon",
      },
    ],
  },

  "11-14-days": {
    message:
      "Excellent! With 11–14 days you can enjoy a complete Sri Lankan experience covering beaches, mountains, wildlife and culture.",
    options: [
      {
        label: "🏖️ Beach & Relaxation",
        next: "beach-holiday",
      },
      {
        label: "🐘 Wildlife & Adventure",
        next: "wildlife-safari",
      },
      {
        label: "🏛️ Culture & Heritage",
        next: "culture-heritage",
      },
      {
        label: "💑 Honeymoon",
        next: "honeymoon",
      },
      {
        label: "📩 Custom Itinerary",
        next: "inquiry",
      },
    ],
  },

  "14-plus-days": {
    message:
      "With 14+ days, we can create a comprehensive Sri Lanka journey tailored around your interests.",
    options: [
      {
        label: "🌴 Complete Sri Lanka",
        next: "beach-holiday",
      },
      {
        label: "🎯 Custom Itinerary",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  "beach-holiday": {
    message:
      "🏖️ We recommend our Sri Lanka Beach Escape package.\n\nColombo → Bentota → Galle → Mirissa\n\nPerfect for travelers who want beautiful beaches, coastal sightseeing and relaxation.",
    options: [
      {
        label: "📩 Request This Package",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  "scenic-mountains": {
    message:
      "🏔️ Our scenic mountain experience can include Kandy, Nuwara Eliya and Ella with tea plantations, waterfalls and the famous scenic train journey.",
    options: [
      {
        label: "📩 Request This Package",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  "wildlife-safari": {
    message:
      "🐘 Our wildlife experience can include Yala, Udawalawe or Minneriya National Parks with guided safari experiences.",
    options: [
      {
        label: "📩 Request Safari Package",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  "culture-heritage": {
    message:
      "🏛️ Explore Sri Lanka's cultural heritage through Kandy, Sigiriya, Dambulla, Polonnaruwa and Anuradhapura.",
    options: [
      {
        label: "📩 Request Cultural Package",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  honeymoon: {
    message:
      "💑 Our Sri Lanka honeymoon experience combines romantic hotels, scenic mountains, beautiful beaches and private experiences.",
    options: [
      {
        label: "📩 Request Honeymoon Package",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  "trip-planning": {
    message:
      "Let's plan your perfect Sri Lanka trip! Who are you travelling with?",
    options: [
      {
        label: "💑 Couple",
        next: "couple-trip",
      },
      {
        label: "👨‍👩‍👧 Family",
        next: "family-trip",
      },
      {
        label: "👥 Friends",
        next: "friends-trip",
      },
      {
        label: "🧍 Solo",
        next: "solo-trip",
      },
    ],
  },

  "couple-trip": {
    message:
      "For couples, we recommend a combination of scenic mountains, romantic experiences and relaxing beaches.",
    options: [
      {
        label: "💑 Honeymoon",
        next: "honeymoon",
      },
      {
        label: "📩 Create My Itinerary",
        next: "inquiry",
      },
    ],
  },

  "family-trip": {
    message:
      "For families, we recommend cultural attractions, wildlife, beaches and comfortable private transportation.",
    options: [
      {
        label: "📩 Create My Itinerary",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  "friends-trip": {
    message:
      "For groups of friends, Sri Lanka offers beaches, surfing, hiking, wildlife and adventure experiences.",
    options: [
      {
        label: "📩 Create My Itinerary",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  "solo-trip": {
    message:
      "Sri Lanka is ideal for solo travelers looking for culture, nature, beaches and adventure.",
    options: [
      {
        label: "📩 Create My Itinerary",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  services: {
    message:
      "CeylonVoyage can help with accommodation, airport transfers and private transportation.",
    options: [
      {
        label: "🏨 Hotels",
        next: "hotels",
      },
      {
        label: "🚐 Airport Transfer",
        next: "transfers",
      },
      {
        label: "🚗 Private Transport",
        next: "transport",
      },
      {
        label: "📩 Request Assistance",
        next: "inquiry",
      },
    ],
  },

  hotels: {
    message:
      "Tell us your preferred destination, travel dates and hotel category and our team can recommend suitable accommodation.",
    options: [
      {
        label: "📩 Request Hotel Recommendations",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  transfers: {
    message:
      "We can help arrange airport transfers to Colombo, Negombo and other destinations across Sri Lanka.",
    options: [
      {
        label: "📩 Request Airport Transfer",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  transport: {
    message:
      "Private vehicle and driver services are available for customized Sri Lanka journeys.",
    options: [
      {
        label: "📩 Request Private Transport",
        next: "inquiry",
      },
      {
        label: "💬 WhatsApp Us",
        next: "whatsapp",
      },
    ],
  },

  inquiry: {
    message:
      "Great! 👋 Please fill in your details below and our CeylonVoyage team will contact you with more information.",
    options: [],
  },

  whatsapp: {
    message:
      "💬 You can contact the CeylonVoyage team directly on WhatsApp for quick assistance.",
    options: [],
  },
};

export default tourismChatFlow;