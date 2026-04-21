import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { Product } from "@/hooks/use-cart";
import hoodieImg from "@/assets/product-hoodie.jpg";
import cargoImg from "@/assets/product-cargo.jpg";
import teeImg from "@/assets/product-tee.jpg";
import accImg from "@/assets/product-acc.jpg";

const products: Product[] = [
  { id: "h-01", name: "Heavyweight Clay Hoodie", price: 128, category: "Hoodies", image: hoodieImg, tag: "New" },
  { id: "c-01", name: "Field Cargo — Olive", price: 142, category: "Cargos" },
  { id: "t-01", name: "Bone Fitted Tee", price: 48, category: "Tees", image: teeImg },
  { id: "a-01", name: "Atelier Tote & Belt", price: 86, category: "Accessories", image: accImg, tag: "Limited" },
].map((p) => ({ ...p, image: p.image ?? cargoImg })) as Product[];

products[1].image = cargoImg;

type Props = { onAdd: (p: Product) => void };

export const ProductGrid = ({ onAdd }: Props) => (
  <section id="shop" className="bg-gradient-fade py-20 md:py-28">
    <div className="container">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-clay mb-3">The drop</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-balance">
            New this season.
          </h2>
        </div>
        <span className="hidden md:inline text-sm text-muted-foreground">Showing 4 of 24</span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
        {products.map((p) => (
          <article key={p.id} className="group">
            <div className="relative overflow-hidden bg-muted aspect-[4/5]">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {p.tag && (
                <span className="absolute left-3 top-3 bg-charcoal text-bone text-[10px] uppercase tracking-widest px-2 py-1">
                  {p.tag}
                </span>
              )}
              <Button
                onClick={() => onAdd(p)}
                size="sm"
                className="absolute bottom-3 right-3 rounded-none bg-bone text-charcoal hover:bg-clay hover:text-bone shadow-card opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Plus className="mr-1 h-3.5 w-3.5" /> Add
              </Button>
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-medium text-foreground">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{p.category}</p>
              </div>
              <p className="text-sm font-medium text-foreground tabular-nums">
                ${p.price.toFixed(2)}
              </p>
            </div>
            <Button
              onClick={() => onAdd(p)}
              variant="outline"
              size="sm"
              className="mt-3 w-full rounded-none border-foreground/30 text-xs uppercase tracking-widest md:hidden"
            >
              Add to cart
            </Button>
          </article>
        ))}
      </div>
    </div>
  </section>
);
