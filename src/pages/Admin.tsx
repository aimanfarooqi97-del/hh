import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useProducts } from "@/context/ProductContext";
import { Category, SUBCATS } from "@/types/shop";
import { Trash2, Pencil, X } from "lucide-react";
import { toast } from "sonner";

const empty = {
  name: "",
  category: "Desi" as Category,
  subcategory: "Men",
  priceUSD: 0,
  imageURL: "",
  description: "",
};

const Admin = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.imageURL || form.priceUSD <= 0) {
      toast.error("Name, image URL and price are required");
      return;
    }
    if (editingId) {
      updateProduct(editingId, form);
      toast.success("Product updated");
    } else {
      addProduct(form);
      toast.success("Product added");
    }
    setForm(empty);
    setEditingId(null);
  };

  const startEdit = (id: string) => {
    const p = products.find((x) => x.id === id);
    if (!p) return;
    setEditingId(id);
    setForm({
      name: p.name,
      category: p.category,
      subcategory: p.subcategory,
      priceUSD: p.priceUSD,
      imageURL: p.imageURL,
      description: p.description ?? "",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container py-12 md:py-16">
        <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">Admin Panel</h1>
        <p className="text-sm text-muted-foreground mb-10">
          Demo-only. Products are saved to your browser (localStorage).
        </p>

        <div className="grid lg:grid-cols-[400px_1fr] gap-10">
          <form onSubmit={submit} className="border border-border p-6 space-y-4 h-fit">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl">{editingId ? "Edit product" : "Add product"}</h2>
              {editingId && (
                <button type="button" onClick={() => { setEditingId(null); setForm(empty); }} className="text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="space-y-2">
              <Label>Name</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>Category</Label>
                <select
                  className="w-full h-10 rounded border border-input bg-background px-3 text-sm"
                  value={form.category}
                  onChange={(e) => {
                    const cat = e.target.value as Category;
                    setForm({ ...form, category: cat, subcategory: SUBCATS[cat][0].name });
                  }}
                >
                  <option value="Desi">Desi</option>
                  <option value="Western">Western</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Subcategory</Label>
                <select
                  className="w-full h-10 rounded border border-input bg-background px-3 text-sm"
                  value={form.subcategory}
                  onChange={(e) => setForm({ ...form, subcategory: e.target.value })}
                >
                  {SUBCATS[form.category].map((s) => (
                    <option key={s.name} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Price (USD)</Label>
              <Input type="number" min={0} step="0.01" value={form.priceUSD || ""} onChange={(e) => setForm({ ...form, priceUSD: parseFloat(e.target.value) || 0 })} />
            </div>

            <div className="space-y-2">
              <Label>Image URL</Label>
              <Input value={form.imageURL} onChange={(e) => setForm({ ...form, imageURL: e.target.value })} placeholder="https://…" />
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </div>

            <Button type="submit" className="w-full rounded-none bg-charcoal text-bone hover:bg-clay">
              {editingId ? "Save changes" : "Add product"}
            </Button>
          </form>

          <div>
            <h2 className="font-display text-xl mb-4">All products ({products.length})</h2>
            <ul className="divide-y divide-border border border-border">
              {products.map((p) => (
                <li key={p.id} className="flex items-center gap-4 p-3">
                  <img src={p.imageURL} alt={p.name} className="h-14 w-12 object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.category} · {p.subcategory} · ${p.priceUSD}</p>
                  </div>
                  <button onClick={() => startEdit(p.id)} className="p-2 hover:text-clay" aria-label="Edit">
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button onClick={() => { deleteProduct(p.id); toast.success("Deleted"); }} className="p-2 hover:text-destructive" aria-label="Delete">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
