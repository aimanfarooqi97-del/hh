import { useState } from "react";
import { Category, SUBCATS } from "@/types/shop";
import { useProducts } from "@/context/ProductContext";
import { ProductCard, PlaceholderCard } from "./ProductCard";
import { cn } from "@/lib/utils";

export const CategoryProductGrid = ({ category }: { category: Category }) => {
  const { products } = useProducts();
  const subs = SUBCATS[category];
  const [active, setActive] = useState<string>(subs[0].name);

  const list = products.filter((p) => p.category === category && p.subcategory === active);
  const slots = subs.find((s) => s.name === active)?.slots ?? 0;
  const placeholders = Math.max(0, slots - list.length);

  return (
    <section className="container py-12 md:py-20">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-clay mb-3">{category} collection</p>
        <h1 className="font-display text-3xl md:text-5xl font-medium">
          {category === "Desi" ? "Desi Clothes" : "Western Clothes"}
        </h1>
      </header>

      <div className="mb-8 flex flex-wrap gap-2 border-b border-border">
        {subs.map((s) => (
          <button
            key={s.name}
            onClick={() => setActive(s.name)}
            className={cn(
              "px-4 py-2 text-sm uppercase tracking-widest transition-colors -mb-px border-b-2",
              active === s.name
                ? "border-clay text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {s.name} <span className="text-xs text-muted-foreground">({s.slots})</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-x-6">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {Array.from({ length: placeholders }).map((_, i) => (
          <PlaceholderCard key={`ph-${i}`} />
        ))}
      </div>
    </section>
  );
};
