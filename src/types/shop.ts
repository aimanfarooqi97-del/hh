export type Category = "Desi" | "Western";

export interface Product {
  id: string;
  name: string;
  category: Category;
  subcategory: string; // "Men" | "Women" | "Men's Suits" | "Women's Clothes" | "Hoodies"
  priceUSD: number;
  pricePKR: number;
  imageURL: string;
  description?: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  selectedSize?: string;
}

export interface Cart {
  items: CartItem[];
  totalUSD: number;
  totalPKR: number;
}

export const USD_TO_PKR = 280;
export const toPKR = (usd: number) => Math.round(usd * USD_TO_PKR);

export const SUBCATS: Record<Category, { name: string; slots: number }[]> = {
  Desi: [
    { name: "Men", slots: 15 },
    { name: "Women", slots: 15 },
  ],
  Western: [
    { name: "Men's Suits", slots: 5 },
    { name: "Women's Clothes", slots: 7 },
    { name: "Hoodies", slots: 9 },
  ],
};
