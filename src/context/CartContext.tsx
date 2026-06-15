import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { CartItem, Product, USD_TO_PKR } from "@/types/shop";
import { toast } from "sonner";

const CART_KEY = "afarooqi.cart.v1";
const CURR_KEY = "afarooqi.currency.v1";

export type Currency = "USD" | "PKR";

interface Ctx {
  items: CartItem[];
  count: number;
  totalUSD: number;
  totalPKR: number;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  format: (usd: number) => string;
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (p: Product, size?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, qty: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<Ctx | null>(null);

export const CartProvider = ({
  children,
  productsLookup,
}: {
  children: ReactNode;
  productsLookup: (id: string) => Product | undefined;
}) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    return [];
  });
  const [currency, setCurrencyState] = useState<Currency>(() => {
    return (localStorage.getItem(CURR_KEY) as Currency) || "USD";
  });
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  const setCurrency = (c: Currency) => {
    localStorage.setItem(CURR_KEY, c);
    setCurrencyState(c);
  };

  const totals = useMemo(() => {
    let totalUSD = 0;
    items.forEach((it) => {
      const p = productsLookup(it.productId);
      if (p) totalUSD += p.priceUSD * it.quantity;
    });
    return { totalUSD, totalPKR: Math.round(totalUSD * USD_TO_PKR) };
  }, [items, productsLookup]);

  const count = items.reduce((a, b) => a + b.quantity, 0);

  const format = (usd: number) =>
    currency === "USD"
      ? `$${usd.toFixed(2)}`
      : `₨${Math.round(usd * USD_TO_PKR).toLocaleString()}`;

  const addItem = (p: Product, size?: string) => {
    setItems((cur) => {
      const idx = cur.findIndex((i) => i.productId === p.id && i.selectedSize === size);
      if (idx >= 0) {
        const next = [...cur];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [...cur, { productId: p.id, quantity: 1, selectedSize: size }];
    });
    toast.success("Added to cart", { description: `${p.name} — ${format(p.priceUSD)}` });
  };

  const removeItem = (productId: string) =>
    setItems((cur) => cur.filter((i) => i.productId !== productId));

  const updateQuantity = (productId: string, qty: number) =>
    setItems((cur) =>
      qty <= 0
        ? cur.filter((i) => i.productId !== productId)
        : cur.map((i) => (i.productId === productId ? { ...i, quantity: qty } : i))
    );

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        totalUSD: totals.totalUSD,
        totalPKR: totals.totalPKR,
        currency,
        setCurrency,
        format,
        drawerOpen,
        openDrawer: () => setDrawerOpen(true),
        closeDrawer: () => setDrawerOpen(false),
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
