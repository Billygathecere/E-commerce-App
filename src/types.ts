export interface Product {
  id: string;
  name: string;
  tagline: string;
  priceUSD: number;
  originalPriceUSD?: number;
  category: string;
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

export interface OrderItem {
  productId: string;
  name: string;
  priceUSD: number;
  quantity: number;
  selectedColor: string;
  selectedSize: number;
}

export interface OrderStatusUpdate {
  status: "Placed" | "Processing" | "On the Way" | "Delivered";
  timestamp: string;
  description: string;
}

export interface Order {
  id: string;
  receiptId: string;
  date: string;
  items: OrderItem[];
  totalKES: number;
  totalUSD: number;
  status: "Placed" | "Processing" | "On the Way" | "Delivered";
  statusUpdates: OrderStatusUpdate[];
  phone: string;
  name: string;
}

