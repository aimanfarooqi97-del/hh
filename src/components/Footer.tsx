import { socials } from "./SocialIcons";
import { Button } from "@/components/ui/button";

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
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-bone/60 mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-bone/85">
            <li><a href="#shop" className="hover:text-clay">All</a></li>
            <li><a href="#" className="hover:text-clay">Hoodies</a></li>
            <li><a href="#" className="hover:text-clay">Cargos</a></li>
            <li><a href="#" className="hover:text-clay">Tees</a></li>
            <li><a href="#" className="hover:text-clay">Accessories</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-bone/60 mb-4">Help</h4>
          <ul className="space-y-2 text-sm text-bone/85">
            <li><a href="#" className="hover:text-clay">Shipping</a></li>
            <li><a href="#" className="hover:text-clay">Returns</a></li>
            <li><a href="#" className="hover:text-clay">Sizing</a></li>
            <li><a href="#" className="hover:text-clay">Contact</a></li>
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
              className="text-bone/75 hover:text-clay transition-colors"
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
