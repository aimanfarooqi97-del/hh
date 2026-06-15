import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartDrawer } from "@/components/CartDrawer";
import { CategoryProductGrid } from "@/components/CategoryProductGrid";

const Western = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <CategoryProductGrid category="Western" />
    </main>
    <Footer />
    <WhatsAppButton />
    <CartDrawer />
  </div>
);

export default Western;
