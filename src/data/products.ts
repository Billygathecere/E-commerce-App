import { Product } from "../types";

export const productsData: Product[] = [
  {
    id: "pro-smartwatch",
    name: "Pro Smartwatch XT",
    tagline: "TECH SERIES",
    priceUSD: 299.00,
    category: "Electronics",
    description: "Crafted from aerospace-grade titanium and fitted with a sapphire crystal responsive dome, the ShopSwift Pro Smartwatch XT is a masterpiece of precision and power. Features continuous ECG heart telemetry, ambient stress tracker nodes, 7-day kinetic standby battery performance, and cellular standalone connectivity. Completely depth-safe to 50 meters, it represents the absolute apex of multi-sport electronic companion devices.",
    rating: 4.8,
    reviewsCount: 184,
    tag: "Active Tracking",
    colors: [
      {
        name: "Obsidian Silver",
        hex: "#F1F5F9",
        main: "#e2e8f0",
        accent: "#14b8a6",
        accentDark: "#1e293b"
      },
      {
        name: "Tech Black",
        hex: "#0F172A",
        main: "#1e293b",
        accent: "#06b6d4",
        accentDark: "#0f172a"
      }
    ],
    sizes: [41, 44]
  },
  {
    id: "sonicmaster-headphones",
    name: "SonicMaster ANC-90",
    tagline: "AUDIO LUX",
    priceUSD: 159.00,
    originalPriceUSD: 199.00,
    category: "Audio",
    badge: "SALE -20%",
    badgeType: "sale",
    description: "Indulge in studio-grade acoustic high-fidelity with our signature SonicMaster Active Noise Canceling headset. Built with custom 40mm bio-cellulose dynamic drivers, it is designed to isolate external noise up to -45dB. Finished with rich memory foam protein ear padding and robust bands for luxurious long-duration premium comfort.",
    rating: 4.9,
    reviewsCount: 240,
    tag: "Acoustic Silence",
    colors: [
      {
        name: "Matte Black",
        hex: "#0F172A",
        main: "#0f172a",
        accent: "#38bdf8",
        accentDark: "#020617"
      },
      {
        name: "Sandstone Gold",
        hex: "#E2E8F0",
        main: "#cbd5e1",
        accent: "#eab308",
        accentDark: "#475569"
      }
    ],
    sizes: [1]
  },
  {
    id: "hyper-dash-sneaker",
    name: "Hyper-Dash Trainer",
    tagline: "VELOCITY",
    priceUSD: 120.00,
    category: "Velocity",
    description: "Elevate your running velocity instantly with the record-breaking Hyper-Dash trainer. Fitted with carbon-fiber responsive propulsion plates embedded inside active lightweight foam and dual-density cyan cushioning shock absorber pods. Features advanced seamless knit technology for dynamic foot temperature regulation and durable grip traction.",
    rating: 5.0,
    reviewsCount: 312,
    tag: "Carbon Propulsion",
    colors: [
      {
        name: "Crimson Red",
        hex: "#E74C3C",
        main: "#E74C3C",
        accent: "#ff6c5c",
        accentDark: "#a82012"
      },
      {
        name: "Lime Green",
        hex: "#8FE31C",
        main: "#8FE31C",
        accent: "#adff3d",
        accentDark: "#5c9c04"
      },
      {
        name: "Obsidian Navy",
        hex: "#1E2D3D",
        main: "#1c2e42",
        accent: "#3a5675",
        accentDark: "#0c1521"
      },
      {
        name: "Pearl White",
        hex: "#FAFAFC",
        main: "#f8fafc",
        accent: "#94a3b8",
        accentDark: "#475569"
      }
    ],
    sizes: [7, 8, 9, 10, 11]
  },
  {
    id: "retro-shot-camera",
    name: "Retro-Shot Z1 Camera",
    tagline: "OPTIC MASTER",
    priceUSD: 849.00,
    category: "Optic",
    description: "Experience classic photography reborn. The ShopSwift Retro-Shot Z1 features a state-of-the-art 35mm full-frame 24.3 Megapixel sensor matched with an exquisite f/1.4 luxury glass prime lens. Housed inside a premium silver-aluminum magnesium alloy shell wrapped with vintage tactile non-slip vulcanite leather grip. Includes mechanical retro selector control knobs and dynamic optical hybrid navigation dials.",
    rating: 4.7,
    reviewsCount: 94,
    tag: "Mechanical Optics",
    colors: [
      {
        name: "Vintage Silver",
        hex: "#CBD5E1",
        main: "#cbd5e1",
        accent: "#10b981",
        accentDark: "#1e293b"
      }
    ],
    sizes: [35]
  }
];
