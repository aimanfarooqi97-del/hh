import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ShopProviders } from "@/context/ShopProviders";
import Index from "./pages/Index.tsx";
import Desi from "./pages/Desi.tsx";
import Western from "./pages/Western.tsx";
import CartPage from "./pages/CartPage.tsx";
import Admin from "./pages/Admin.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ShopProviders>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/desi" element={<Desi />} />
            <Route path="/western" element={<Western />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ShopProviders>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
