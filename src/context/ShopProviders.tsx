import { ReactNode } from "react";
import { ProductProvider, useProducts } from "./ProductContext";
import { CartProvider } from "./CartContext";

const CartWithProducts = ({ children }: { children: ReactNode }) => {
  const { products } = useProducts();
  const lookup = (id: string) => products.find((p) => p.id === id);
  return <CartProvider productsLookup={lookup}>{children}</CartProvider>;
};

export const ShopProviders = ({ children }: { children: ReactNode }) => (
  <ProductProvider>
    <CartWithProducts>{children}</CartWithProducts>
  </ProductProvider>
);
