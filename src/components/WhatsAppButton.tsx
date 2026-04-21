import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => (
  <a
    href="https://wa.me/10000000000?text=Hi%20A.Farooqi's%2C%20I%20have%20a%20question."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-soft transition-all hover:scale-105 hover:shadow-lg"
  >
    <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
    <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
  </a>
);
