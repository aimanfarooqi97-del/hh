import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useProducts } from "@/context/ProductContext";
import { useState } from "react";
import { CheckoutModal } from "@/components/CheckoutModal";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items, format, totalUSD, updateQuantity, removeItem } = useCart();
  const { products } = useProducts();
  const [checkout, setCheckout] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container py-12 md:py-20">
        <h1 className="font-display text-3xl md:text-5xl font-medium mb-8">Your Bag</h1>

        {items.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-muted-foreground mb-6">Your bag is empty.</p>
            <Link to="/desi">
              <Button className="rounded-none bg-charcoal text-bone hover:bg-clay">Continue shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-[1fr_320px] gap-10">
            <ul className="space-y-6">
              {items.map((it) => {
                const p = products.find((x) => x.id === it.productId);
                if (!p) return null;
                return (
                  <li key={it.productId} className="flex gap-4 border-b border-border pb-6">
                    <img src={p.imageURL} alt={p.name} className="h-32 w-24 object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium">{p.name}</p>
                      <p className="text-sm text-muted-foreground">{p.category} · {p.subcategory}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <button onClick={() => updateQuantity(it.productId, it.quantity - 1)} className="h-8 w-8 grid place-items-center border border-border" aria-label="Decrease">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center tabular-nums">{it.quantity}</span>
                        <button onClick={() => updateQuantity(it.productId, it.quantity + 1)} className="h-8 w-8 grid place-items-center border border-border" aria-label="Increase">
                          <Plus className="h-3 w-3" />
                        </button>
                        <button onClick={() => removeItem(it.productId)} className="ml-4 text-muted-foreground hover:text-destructive" aria-label="Remove">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <p className="font-medium tabular-nums">{format(p.priceUSD * it.quantity)}</p>
                  </li>
                );
              })}
            </ul>

            <aside className="border border-border p-6 h-fit space-y-4">
              <h2 className="font-display text-xl">Summary</h2>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="tabular-nums">{format(totalUSD)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <Button onClick={() => setCheckout(true)} className="w-full rounded-none bg-charcoal text-bone hover:bg-clay">
                Checkout
              </Button>
            </aside>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
      <CheckoutModal open={checkout} onOpenChange={setCheckout} />
    </div>
  );
};

export default CartPage;
