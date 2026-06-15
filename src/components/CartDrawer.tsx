import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useProducts } from "@/context/ProductContext";
import { useState } from "react";
import { CheckoutModal } from "./CheckoutModal";

export const CartDrawer = () => {
  const { drawerOpen, closeDrawer, items, updateQuantity, removeItem, format, totalUSD } = useCart();
  const { products } = useProducts();
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      <Sheet open={drawerOpen} onOpenChange={(o) => !o && closeDrawer()}>
        <SheetContent className="w-full sm:max-w-md flex flex-col">
          <SheetHeader>
            <SheetTitle className="font-display text-2xl">Your bag</SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto -mx-6 px-6 py-4">
            {items.length === 0 && (
              <p className="text-sm text-muted-foreground py-12 text-center">Your bag is empty.</p>
            )}
            <ul className="space-y-4">
              {items.map((it) => {
                const p = products.find((x) => x.id === it.productId);
                if (!p) return null;
                return (
                  <li key={it.productId} className="flex gap-3 border-b border-border pb-4">
                    <img src={p.imageURL} alt={p.name} className="h-20 w-16 object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.subcategory}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(it.productId, it.quantity - 1)}
                          className="h-7 w-7 grid place-items-center border border-border"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm tabular-nums w-6 text-center">{it.quantity}</span>
                        <button
                          onClick={() => updateQuantity(it.productId, it.quantity + 1)}
                          className="h-7 w-7 grid place-items-center border border-border"
                          aria-label="Increase"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => removeItem(it.productId)}
                          className="ml-auto text-muted-foreground hover:text-destructive"
                          aria-label="Remove"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm font-medium tabular-nums">
                      {format(p.priceUSD * it.quantity)}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <SheetFooter className="border-t border-border pt-4">
            <div className="w-full space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium tabular-nums">{format(totalUSD)}</span>
              </div>
              <Button
                disabled={items.length === 0}
                onClick={() => setCheckout(true)}
                className="w-full rounded-none bg-charcoal text-bone hover:bg-clay"
              >
                Checkout
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <CheckoutModal open={checkout} onOpenChange={setCheckout} />
    </>
  );
};
