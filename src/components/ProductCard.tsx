import { Button } from "@/components/ui/button";
import { Plus, ImagePlus } from "lucide-react";
import { Product } from "@/types/shop";
import { useCart } from "@/context/CartContext";

export const ProductCard = ({ product }: { product: Product }) => {
  const { addItem, format } = useCart();
  return (
    <article className="group">
      <div className="relative overflow-hidden bg-muted aspect-[4/5]">
        <img
          src={product.imageURL}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <Button
          onClick={() => addItem(product)}
          size="sm"
          className="absolute bottom-3 right-3 rounded-none bg-bone text-charcoal hover:bg-clay hover:text-bone shadow-card md:opacity-0 md:group-hover:opacity-100 transition-opacity"
        >
          <Plus className="mr-1 h-3.5 w-3.5" /> Add
        </Button>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-sm font-medium text-foreground truncate">{product.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{product.subcategory}</p>
        </div>
        <p className="text-sm font-medium text-foreground tabular-nums shrink-0">
          {format(product.priceUSD)}
        </p>
      </div>
      <Button
        onClick={() => addItem(product)}
        variant="outline"
        size="sm"
        className="mt-3 w-full rounded-none border-foreground/30 text-xs uppercase tracking-widest"
      >
        Add to cart
      </Button>
    </article>
  );
};

export const PlaceholderCard = () => (
  <article className="group opacity-70 hover:opacity-100 transition-opacity">
    <div className="relative aspect-[4/5] border border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-2 text-muted-foreground">
      <ImagePlus className="h-6 w-6" />
      <span className="text-[11px] uppercase tracking-[0.25em]">Add Image</span>
    </div>
    <div className="mt-4 flex items-start justify-between gap-3">
      <p className="text-sm font-medium text-muted-foreground italic">Add Name</p>
      <p className="text-sm font-medium text-muted-foreground italic">Add Price</p>
    </div>
  </article>
);
