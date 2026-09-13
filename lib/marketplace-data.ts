export type ListingType = "sale" | "rent";

export type PlaceholderProduct = {
  id: string;
  name: string;
  category: string;
  type: ListingType;
  price: number;
  vendor: string;
  rating: number;
  createdAt: number;
  image: string;
};

export const MARKETPLACE_CATEGORIES = [
  "Heavy Machinery",
  "Power Tools",
  "Generators",
  "Welding",
  "Safety Gear",
  "Scaffolding",
] as const;

export const PLACEHOLDER_PRODUCTS: PlaceholderProduct[] = [
  {
    id: "1",
    name: "CAT 320 Hydraulic Excavator",
    category: "Heavy Machinery",
    type: "sale",
    price: 277500000,
    vendor: "Prime Plant Hire",
    rating: 4.8,
    createdAt: 12,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "DeWalt 20V MAX Cordless Drill Kit",
    category: "Power Tools",
    type: "sale",
    price: 480000,
    vendor: "ToolHub Supplies",
    rating: 4.6,
    createdAt: 11,
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "50kVA Diesel Generator",
    category: "Generators",
    type: "rent",
    price: 142500,
    vendor: "PowerLease Co.",
    rating: 4.7,
    createdAt: 10,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    name: "Lincoln Electric MIG Welder",
    category: "Welding",
    type: "sale",
    price: 2175000,
    vendor: "WeldRight Ltd",
    rating: 4.5,
    createdAt: 9,
    image:
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "5",
    name: "Mobile Scaffolding Tower 8m",
    category: "Scaffolding",
    type: "rent",
    price: 60000,
    vendor: "Access Rentals",
    rating: 4.4,
    createdAt: 8,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    name: "Bosch Angle Grinder 9-Inch",
    category: "Power Tools",
    type: "sale",
    price: 315000,
    vendor: "ToolHub Supplies",
    rating: 4.3,
    createdAt: 7,
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "7",
    name: "JCB 3CX Backhoe Loader",
    category: "Heavy Machinery",
    type: "rent",
    price: 420000,
    vendor: "Prime Plant Hire",
    rating: 4.9,
    createdAt: 6,
    image:
      "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "8",
    name: "Full Body Safety Harness Set",
    category: "Safety Gear",
    type: "sale",
    price: 127500,
    vendor: "SiteSafe Gear",
    rating: 4.6,
    createdAt: 5,
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "9",
    name: "Honda 6.5kVA Petrol Generator",
    category: "Generators",
    type: "sale",
    price: 1335000,
    vendor: "PowerLease Co.",
    rating: 4.5,
    createdAt: 4,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "10",
    name: "Miller TIG Welding Machine",
    category: "Welding",
    type: "rent",
    price: 82500,
    vendor: "WeldRight Ltd",
    rating: 4.7,
    createdAt: 3,
    image:
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "11",
    name: "Komatsu WA380 Wheel Loader",
    category: "Heavy Machinery",
    type: "sale",
    price: 213000000,
    vendor: "EarthMove Traders",
    rating: 4.8,
    createdAt: 2,
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "12",
    name: "Makita Circular Saw 7-1/4\"",
    category: "Power Tools",
    type: "sale",
    price: 262500,
    vendor: "ToolHub Supplies",
    rating: 4.4,
    createdAt: 1,
    image:
      "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export type MarketplaceFilters = {
  search?: string;
  category?: string;
  type?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
};

export function filterPlaceholderProducts(filters: MarketplaceFilters) {
  const search = filters.search?.trim().toLowerCase() ?? "";
  const category = filters.category || "all";
  const type = filters.type === "sale" || filters.type === "rent" ? filters.type : "all";
  const min = Number(filters.minPrice);
  const max = Number(filters.maxPrice);
  const sort = filters.sort || "newest";

  let items = PLACEHOLDER_PRODUCTS.filter((item) => {
    if (search) {
      const haystack = `${item.name} ${item.category} ${item.vendor}`.toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    if (category !== "all" && item.category !== category) return false;
    if (type !== "all" && item.type !== type) return false;
    if (Number.isFinite(min) && filters.minPrice && item.price < min) return false;
    if (Number.isFinite(max) && filters.maxPrice && item.price > max) return false;
    return true;
  });

  if (sort === "price-low") items = [...items].sort((a, b) => a.price - b.price);
  else if (sort === "price-high") items = [...items].sort((a, b) => b.price - a.price);
  else items = [...items].sort((a, b) => b.createdAt - a.createdAt);

  return items;
}

export type ProductSpec = { label: string; value: string };

export type ProductDetail = PlaceholderProduct & {
  description: string;
  location: string;
  condition: string;
  reviews: number;
  specs: ProductSpec[];
  images: string[];
};

const PRODUCT_DETAILS: Record<
  string,
  Omit<ProductDetail, keyof PlaceholderProduct | "images">
> = {
  "1": {
    description:
      "A verified CAT 320 hydraulic excavator listed for sale by Prime Plant Hire. Photos and specs are provided by the vendor; inspect on delivery and confirm in-app before funds are released through Money Protection.",
    location: "Lagos, Nigeria",
    condition: "Used, inspected",
    reviews: 24,
    specs: [
      { label: "Make / model", value: "CAT 320" },
      { label: "Year", value: "2019" },
      { label: "Hours", value: "4,200 hrs" },
      { label: "Operating weight", value: "22.5 tonnes" },
      { label: "Delivery", value: "Available" },
    ],
  },
  "2": {
    description:
      "Complete DeWalt 20V MAX cordless drill kit from a verified tool supplier. Chat with the vendor in the A-Shopper app to confirm stock, spare bits, and delivery before you pay.",
    location: "Accra, Ghana",
    condition: "New",
    reviews: 41,
    specs: [
      { label: "Brand", value: "DeWalt" },
      { label: "Voltage", value: "20V MAX" },
      { label: "Kit includes", value: "Drill, battery, charger, case" },
      { label: "Warranty", value: "Vendor warranty" },
    ],
  },
  "3": {
    description:
      "50kVA diesel generator available to rent by the day. Ideal for sites that need backup power without a capital purchase. Confirm rental term and delivery in-app before checkout.",
    location: "Port Harcourt, Nigeria",
    condition: "Serviced",
    reviews: 18,
    specs: [
      { label: "Output", value: "50kVA" },
      { label: "Fuel", value: "Diesel" },
      { label: "Rental term", value: "Daily" },
      { label: "Delivery", value: "Site delivery available" },
    ],
  },
  "4": {
    description:
      "Lincoln Electric MIG welder listed by a verified welding supplier. Ask questions, request extras, and pay with Money Protection so funds stay held until the unit arrives as described.",
    location: "Johannesburg, South Africa",
    condition: "Used, good",
    reviews: 12,
    specs: [
      { label: "Brand", value: "Lincoln Electric" },
      { label: "Process", value: "MIG" },
      { label: "Duty cycle", value: "Industrial" },
      { label: "Power", value: "Three-phase" },
    ],
  },
  "5": {
    description:
      "Mobile 8m scaffolding tower for short-term site access. Rent from a verified vendor, agree the hire period in chat, and only release payment after the tower is delivered and confirmed.",
    location: "Abuja, Nigeria",
    condition: "Hire-ready",
    reviews: 9,
    specs: [
      { label: "Height", value: "8 metres" },
      { label: "Type", value: "Mobile tower" },
      { label: "Rental term", value: "Daily" },
      { label: "Safety", value: "Guard rails included" },
    ],
  },
  "6": {
    description:
      "Bosch 9-inch angle grinder for cutting and grinding on site. Listed by a verified tool vendor. Continue in the app to confirm accessories and delivery.",
    location: "Nairobi, Kenya",
    condition: "New",
    reviews: 33,
    specs: [
      { label: "Brand", value: "Bosch" },
      { label: "Disc size", value: "9 inch" },
      { label: "Use", value: "Cutting / grinding" },
      { label: "Power", value: "Corded" },
    ],
  },
  "7": {
    description:
      "JCB 3CX backhoe loader available for daily hire. A verified plant vendor handles dispatch; track delivery in the app and confirm on arrival before rental payment is released.",
    location: "Kumasi, Ghana",
    condition: "Used, working",
    reviews: 15,
    specs: [
      { label: "Make / model", value: "JCB 3CX" },
      { label: "Type", value: "Backhoe loader" },
      { label: "Rental term", value: "Daily" },
      { label: "Operator", value: "Ask vendor in chat" },
    ],
  },
  "8": {
    description:
      "Full body safety harness set for working at height. Sold by a verified PPE supplier. Check sizing and certification with the vendor in-app before you buy.",
    location: "Lagos, Nigeria",
    condition: "New",
    reviews: 27,
    specs: [
      { label: "Type", value: "Full body harness" },
      { label: "Use", value: "Working at height" },
      { label: "Set includes", value: "Harness and lanyard" },
      { label: "Standards", value: "Ask vendor for certs" },
    ],
  },
  "9": {
    description:
      "Honda 6.5kVA petrol generator for workshops and smaller sites. Listed for sale by a verified power vendor. Pay with Money Protection if you want funds held until delivery is confirmed.",
    location: "Ibadan, Nigeria",
    condition: "New",
    reviews: 22,
    specs: [
      { label: "Brand", value: "Honda" },
      { label: "Output", value: "6.5kVA" },
      { label: "Fuel", value: "Petrol" },
      { label: "Start", value: "Recoil" },
    ],
  },
  "10": {
    description:
      "Miller TIG welding machine on daily hire for fabrication jobs. Message the vendor to lock dates, then checkout in the app with Money Protection.",
    location: "Cape Town, South Africa",
    condition: "Serviced",
    reviews: 11,
    specs: [
      { label: "Brand", value: "Miller" },
      { label: "Process", value: "TIG" },
      { label: "Rental term", value: "Daily" },
      { label: "Use", value: "Fabrication / pipework" },
    ],
  },
  "11": {
    description:
      "Komatsu WA380 wheel loader listed for sale. Heavy plant from a verified earthmoving vendor. Use in-app chat for inspection notes, then pay with Money Protection so the loader is confirmed on arrival.",
    location: "Dubai, UAE",
    condition: "Used, inspected",
    reviews: 8,
    specs: [
      { label: "Make / model", value: "Komatsu WA380" },
      { label: "Type", value: "Wheel loader" },
      { label: "Year", value: "2018" },
      { label: "Hours", value: "6,100 hrs" },
    ],
  },
  "12": {
    description:
      "Makita 7-1/4 inch circular saw for framing and site cutting. Listed by a verified tool supplier. Continue in the A-Shopper app to chat, pay, and track delivery.",
    location: "Accra, Ghana",
    condition: "New",
    reviews: 19,
    specs: [
      { label: "Brand", value: "Makita" },
      { label: "Blade", value: "7-1/4 inch" },
      { label: "Use", value: "Framing / site cutting" },
      { label: "Power", value: "Corded" },
    ],
  },
};

const PRODUCT_GALLERIES: Record<string, string[]> = {
  "1": [
    "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  ],
  "2": [
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
    "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
  "3": [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  ],
  "4": [
    "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
  "5": [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  ],
  "6": [
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
    "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
  "7": [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
  ],
  "9": [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  ],
  "10": [
    "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
  "11": [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  ],
  "12": [
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
  ],
};

export function getProductById(id: string): ProductDetail | null {
  const product = PLACEHOLDER_PRODUCTS.find((item) => item.id === id);
  const details = PRODUCT_DETAILS[id];
  if (!product || !details) return null;
  const extras = PRODUCT_GALLERIES[id] ?? [];
  const images = [product.image, ...extras.filter((url) => url !== product.image)];
  return { ...product, ...details, images };
}

export function getRelatedProducts(id: string, category: string, limit = 4) {
  return PLACEHOLDER_PRODUCTS.filter((item) => item.id !== id && item.category === category).slice(
    0,
    limit
  );
}
