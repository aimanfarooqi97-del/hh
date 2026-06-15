import { Mail, MessageCircle } from "lucide-react";
import { socials } from "./SocialIcons";
import { Button } from "@/components/ui/button";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  MAILTO_URL,
  CONTACT_EMAIL,
} from "@/lib/contact";

export const Footer = () => (
  <footer id="contact" className="bg-charcoal text-bone">
    <div className="container py-16">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl md:text-4xl font-medium leading-tight">
            Join the inner circle.
          </h3>
          <p className="mt-3 text-bone/70 max-w-md text-sm leading-relaxed">
            Early drops, behind-the-scenes, and 10% off your first order. No spam, ever.
          </p>
          <form className="mt-6 flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 bg-transparent border border-bone/30 text-bone placeholder:text-bone/50 px-4 py-3 text-sm outline-none focus:border-clay"
            />
            <Button type="submit" className="rounded-none bg-clay text-bone hover:bg-terracotta">
              Subscribe
            </Button>
          </form>

          <div className="mt-8">
            <h4 className="text-xs uppercase tracking-[0.25em] text-bone/60 mb-4">Get in touch</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-bone/85 hover:text-clay transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <span>WhatsApp · {WHATSAPP_DISPLAY}</span>
              </a>
              <a
                href={MAILTO_URL}
                className="group flex items-center gap-3 text-bone/85 hover:text-clay transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay/20 text-clay group-hover:bg-clay group-hover:text-bone transition-colors">
                  <Mail className="h-4 w-4" />
                </span>
                <span>{CONTACT_EMAIL}</span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-bone/60 mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-bone/85">
            <li><a href="/" className="hover:text-clay">Home</a></li>
            <li><a href="/desi" className="hover:text-clay">Desi Clothes</a></li>
            <li><a href="/western" className="hover:text-clay">Western Clothes</a></li>
            <li><a href="/cart" className="hover:text-clay">Cart</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-bone/60 mb-4">Help</h4>
          <ul className="space-y-2 text-sm text-bone/85">
            <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-clay">Support</a></li>
            <li><a href={MAILTO_URL} className="hover:text-clay">Email Us</a></li>
            <li><a href="#" className="hover:text-clay">Shipping</a></li>
            <li><a href="#" className="hover:text-clay">Returns</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-bone/15 pt-8">
        <p className="text-xs text-bone/60">© {new Date().getFullYear()} A.Farooqi's. All rights reserved.</p>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.name}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone/75 hover:text-clay hover:scale-110 transition-all"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="text-xs text-bone/60">Prices in USD $</p>
      </div>
    </div>
  </footer>
);
