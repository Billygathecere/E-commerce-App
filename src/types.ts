export interface Product {
  id: string;
  name: string;
  tagline: string;
  priceUSD: number;
  originalPriceUSD?: number;
  category: "Electronics" | "Fashion" | "Velocity" | "Audio" | "Electronics" | "Optic";
  badge?: string;
  badgeType?: "new" | "sale";
  description: string;
  rating: number;
  reviewsCount: number;
  tag: string;
  colors: {
    name: string;
    hex: string;
    main: string;
    accent: string;
    accentDark: string;
  }[];
  sizes: number[];
}

export interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  comment: string;
  tag: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: number;
}
