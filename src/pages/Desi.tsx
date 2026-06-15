import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartDrawer } from "@/components/CartDrawer";
import { CategoryProductGrid } from "@/components/CategoryProductGrid";

const Desi = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <CategoryProductGrid category="Desi" />
    </main>
    <Footer />
    <WhatsAppButton />
    <CartDrawer />
  </div>
);

export default Desi;
