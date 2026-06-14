import { Product } from "../types";

export const productsData: Product[] = [
  {
    id: "coretime-elite",
    name: "CoreTime Elite",
    tagline: "WEARABLES",
    priceUSD: 142.30769, // Exactly 18,500 KES inside system simulator
    category: "Wearables",
    description: "Experience premium wrist craftsmanship with the CoreTime Elite smartwatch. Features physical metal bezel dials, deep heart-rate monitoring, activity tracking telemetry, 7-day battery configurations, and stand-alone notifications. Fully customized to sync instantly inside our Lipa na M-Pesa ledger environment.",
    rating: 4.7,
    reviewsCount: 890,
    tag: "Time & Fitness",
    colors: [
      {
        name: "Classic White",
        hex: "#FAFAFC",
        main: "#fafafc",
        accent: "#cbd5e1",
        accentDark: "#1e293b"
      },
      {
        name: "Noir Black",
        hex: "#0F172A",
        main: "#0f172a",
        accent: "#334155",
        accentDark: "#020617"
      }
    ],
    sizes: [41, 44]
  },
  {
    id: "swiftsound-studio",
    name: "SwiftSound Studio Pro",
    tagline: "AUDIO",
    priceUSD: 73.84615, // Exactly 9,600 KES inside system simulator
    originalPriceUSD: 92.30769, // Exactly 12,000 KES inside system simulator (-20% discount)
    category: "Audio",
    badge: "-20%",
    badgeType: "sale",
    description: "Premium high-fidelity active noise canceling (ANC) headphones designed for extreme audio clarity. Features thick leatherette memory foam pads, lightweight aluminum frames, and dual 40mm acoustic drivers that block ambient disturbances so you can focus on coding and productivity.",
    rating: 4.9,
    reviewsCount: 2400,
    tag: "High-Fidelity Audio",
    colors: [
      {
        name: "Matte Black",
        hex: "#0F172A",
        main: "#0f172a",
        accent: "#10b981",
        accentDark: "#020617"
      }
    ],
    sizes: [1]
  },
  {
    id: "airsync-pods",
    name: "AirSync Pods Pro",
    tagline: "AUDIO",
    priceUSD: 40.00, // Exactly 5,200 KES inside system simulator
    category: "Audio",
    badge: "Best Seller",
    badgeType: "new",
    description: "Your perfect on-the-go wireless acoustic solution. The AirSync Pods Pro features touch controls, adaptive transparency nodes, and three green LED indicators that display charge states in real-time. Charges instantly via USB-C or induction.",
    rating: 5.0,
    reviewsCount: 4100,
    tag: "True Wireless",
    colors: [
      {
        name: "Tech Charcoal",
        hex: "#1E293B",
        main: "#1e293b",
        accent: "#22c55e",
        accentDark: "#090d16"
      }
    ],
    sizes: [1]
  },
  {
    id: "novapad-x10",
    name: "NovaPad X10",
    tagline: "COMPUTERS",
    priceUSD: 346.1538, // Exactly 45,000 KES inside system simulator
    category: "Computers",
    description: "A gorgeous 11-inch active canvas display with fluid 120Hz refresh profiles. NovaPad X10 is configured with high-performance octa-core processors, making drawing, streaming, and editing spreadsheet dashboards seamless.",
    rating: 4.6,
    reviewsCount: 152,
    tag: "Speed & Clarity",
    colors: [
      {
        name: "Space Grey",
        hex: "#334155",
        main: "#334155",
        accent: "#f97316",
        accentDark: "#0f172a"
      }
    ],
    sizes: [128, 256]
  },
  {
    id: "clickmaster-mech",
    name: "ClickMaster Pro",
    tagline: "ACCESSORIES",
    priceUSD: 65.3846, // Exactly 8,500 KES inside system simulator
    category: "Accessories",
    description: "Experience absolute mechanical typing perfection. Designed with high-durability tactile custom switches and vibrant, customizable dual-tone keycaps underlaid with ice-teal glowing customizable LED matrices.",
    rating: 4.8,
    reviewsCount: 450,
    tag: "Tactile Precision",
    colors: [
      {
        name: "Teal Matrix",
        hex: "#0D9488",
        main: "#0d9488",
        accent: "#14b8a6",
        accentDark: "#0f172a"
      }
    ],
    sizes: [75, 100]
  },
  {
    id: "visioncore-27",
    name: "VisionCore 27\"",
    tagline: "DISPLAYS",
    priceUSD: 246.1538, // Exactly 32,000 KES inside system simulator
    category: "Displays",
    description: "A gorgeous 27-inch 4K resolution Studio-Display workspace monitor. Featuring ultra-thin bezels, aluminum stands, and custom color profiles engineered specifically to monitor live transactional APIs and logs.",
    rating: 4.9,
    reviewsCount: 230,
    tag: "Visual Real Estate",
    colors: [
      {
        name: "Alloy Silver",
        hex: "#94A3B8",
        main: "#94a3b8",
        accent: "#14b8a6",
        accentDark: "#475569"
      }
    ],
    sizes: [27]
  }
];
