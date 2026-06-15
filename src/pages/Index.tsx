import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Story } from "@/components/Story";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard, PlaceholderCard } from "@/components/ProductCard";
import { useProducts } from "@/context/ProductContext";
import { Link } from "react-router-dom";

const Index = () => {
  const { products } = useProducts();
  const featured = products.slice(0, 4);
  const placeholders = Math.max(0, 4 - featured.length);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Categories />

        <section id="shop" className="bg-gradient-fade py-20 md:py-28">
          <div className="container">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-clay mb-3">The drop</p>
                <h2 className="font-display text-3xl md:text-5xl font-medium text-balance">
                  New this season.
                </h2>
              </div>
              <Link to="/western" className="hidden md:inline text-sm text-muted-foreground hover:text-clay transition-colors">
                Shop all →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
              {featured.map((p) => <ProductCard key={p.id} product={p} />)}
              {Array.from({ length: placeholders }).map((_, i) => <PlaceholderCard key={i} />)}
            </div>
          </div>
        </section>

        <Story />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </div>
  );
};

export default Index;
