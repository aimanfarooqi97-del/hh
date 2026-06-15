import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useProducts } from "@/context/ProductContext";
import { toast } from "sonner";

export const CheckoutModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) => {
  const { items, totalUSD, format, clearCart, closeDrawer } = useCart();
  const { products } = useProducts();
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Order placed successfully (demo mode)", {
      description: `Thank you, ${form.name}. We will contact you shortly.`,
    });
    clearCart();
    onOpenChange(false);
    closeDrawer();
    setForm({ name: "", phone: "", address: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Checkout</DialogTitle>
        </DialogHeader>

        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="co-name">Full name</Label>
            <Input id="co-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="co-phone">Phone</Label>
            <Input id="co-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="co-addr">Shipping address</Label>
            <Textarea id="co-addr" rows={3} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
          </div>

          <div className="rounded border border-border p-3 bg-muted/40">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Order summary</p>
            <ul className="space-y-1 text-sm">
              {items.map((it) => {
                const p = products.find((x) => x.id === it.productId);
                if (!p) return null;
                return (
                  <li key={it.productId} className="flex justify-between">
                    <span className="truncate pr-2">{p.name} × {it.quantity}</span>
                    <span className="tabular-nums">{format(p.priceUSD * it.quantity)}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-2 pt-2 border-t border-border flex justify-between text-sm font-medium">
              <span>Total</span>
              <span className="tabular-nums">{format(totalUSD)}</span>
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full rounded-none bg-charcoal text-bone hover:bg-clay">
              Confirm order
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
