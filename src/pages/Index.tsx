import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { ProductGrid } from "@/components/ProductGrid";
import { Story } from "@/components/Story";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useCart } from "@/hooks/use-cart";

const Index = () => {
  const { count, add } = useCart();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar cartCount={count} />
      <main>
        <Hero />
        <Categories />
        <ProductGrid onAdd={add} />
        <Story />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
