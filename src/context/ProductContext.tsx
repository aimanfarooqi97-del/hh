import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Product, toPKR } from "@/types/shop";
import hoodieImg from "@/assets/product-hoodie.jpg";
import cargoImg from "@/assets/product-cargo.jpg";
import teeImg from "@/assets/product-tee.jpg";
import accImg from "@/assets/product-acc.jpg";

const STORAGE_KEY = "afarooqi.products.v1";

const seed: Product[] = [
  { id: "d-m-1", name: "Classic Kurta — Ivory", category: "Desi", subcategory: "Men", priceUSD: 65, pricePKR: toPKR(65), imageURL: teeImg, description: "Cotton-linen kurta with mandarin collar." },
  { id: "d-m-2", name: "Shalwar Kameez — Charcoal", category: "Desi", subcategory: "Men", priceUSD: 89, pricePKR: toPKR(89), imageURL: hoodieImg },
  { id: "d-w-1", name: "Embroidered Lawn Suit", category: "Desi", subcategory: "Women", priceUSD: 95, pricePKR: toPKR(95), imageURL: accImg, description: "Hand-embroidered 3-piece lawn." },
  { id: "d-w-2", name: "Silk Dupatta — Rose", category: "Desi", subcategory: "Women", priceUSD: 42, pricePKR: toPKR(42), imageURL: cargoImg },
  { id: "w-s-1", name: "Two-Piece Suit — Navy", category: "Western", subcategory: "Men's Suits", priceUSD: 220, pricePKR: toPKR(220), imageURL: hoodieImg },
  { id: "w-w-1", name: "Tailored Blazer Dress", category: "Western", subcategory: "Women's Clothes", priceUSD: 138, pricePKR: toPKR(138), imageURL: accImg },
  { id: "w-h-1", name: "Heavyweight Hoodie — Clay", category: "Western", subcategory: "Hoodies", priceUSD: 84, pricePKR: toPKR(84), imageURL: hoodieImg },
  { id: "w-h-2", name: "Oversized Hoodie — Bone", category: "Western", subcategory: "Hoodies", priceUSD: 78, pricePKR: toPKR(78), imageURL: teeImg },
];

interface Ctx {
  products: Product[];
  addProduct: (p: Omit<Product, "id" | "pricePKR"> & { id?: string }) => void;
  updateProduct: (id: string, patch: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<Ctx | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw) as Product[];
    } catch {}
    return seed;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const addProduct: Ctx["addProduct"] = (p) =>
    setProducts((cur) => [
      ...cur,
      {
        ...p,
        id: p.id ?? `p-${Date.now()}`,
        pricePKR: toPKR(p.priceUSD),
      } as Product,
    ]);

  const updateProduct: Ctx["updateProduct"] = (id, patch) =>
    setProducts((cur) =>
      cur.map((p) =>
        p.id === id
          ? { ...p, ...patch, pricePKR: patch.priceUSD ? toPKR(patch.priceUSD) : p.pricePKR }
          : p
      )
    );

  const deleteProduct: Ctx["deleteProduct"] = (id) =>
    setProducts((cur) => cur.filter((p) => p.id !== id));

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProducts must be used within ProductProvider");
  return ctx;
};
