import { useState } from "react";
import { toast } from "sonner";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  tag?: string;
};

const STORE: Record<string, number> = {};

export function useCart() {
  const [count, setCount] = useState(
    Object.values(STORE).reduce((a, b) => a + b, 0)
  );
  const add = (p: Product) => {
    STORE[p.id] = (STORE[p.id] ?? 0) + 1;
    setCount(Object.values(STORE).reduce((a, b) => a + b, 0));
    toast.success(`Added to cart`, {
      description: `${p.name} — $${p.price.toFixed(2)}`,
    });
  };
  return { count, add };
}
