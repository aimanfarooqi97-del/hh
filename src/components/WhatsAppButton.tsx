import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-soft transition-all hover:scale-105 hover:shadow-lg"
  >
    <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
    <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
  </a>
);
