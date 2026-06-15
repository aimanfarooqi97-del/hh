import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { socials } from "./SocialIcons";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/desi", label: "Desi Clothes" },
  { to: "/western", label: "Western Clothes" },
  { to: "/cart", label: "Cart" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const { count, currency, setCurrency, openDrawer } = useCart();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="overflow-hidden bg-charcoal text-bone">
        <div className="marquee flex w-max gap-12 whitespace-nowrap py-2 text-xs uppercase tracking-[0.25em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              <span>Free shipping over $120</span><span>·</span>
              <span>New drop — SS26</span><span>·</span>
              <span>Crafted with intent</span><span>·</span>
              <span>Desi × Western</span><span>·</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container flex h-16 items-center justify-between gap-4">
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn("transition-colors hover:text-clay", isActive ? "text-clay" : "text-foreground/80")
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/" className="font-display text-xl md:text-2xl font-semibold tracking-tight">
          A.Farooqi<span className="text-clay">'s</span>
        </Link>

        <div className="flex items-center gap-3">
          <button onClick={() => setSearch(!search)} aria-label="Search" className="text-foreground/80 hover:text-clay transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <div className="hidden lg:flex items-center gap-2 text-foreground/70">
            {socials.slice(0, 3).map((s) => (
              <a key={s.name} href={s.href} aria-label={s.name} className="hover:text-clay transition-colors">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <button
            onClick={() => setCurrency(currency === "USD" ? "PKR" : "USD")}
            className="text-xs font-medium text-foreground/80 border border-border rounded px-2 py-1 hover:border-clay hover:text-clay transition-colors"
            aria-label="Toggle currency"
          >
            {currency === "USD" ? "USD $" : "PKR ₨"}
          </button>
          <button onClick={openDrawer} aria-label="Cart" className="relative text-foreground/90 hover:text-clay transition-colors">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-accent-foreground">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {search && (
        <div className="border-t border-border bg-background animate-fade-up">
          <div className="container py-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSearch(false); navigate("/desi"); }}
              className="flex items-center gap-3 rounded border border-border bg-card px-3 py-2"
            >
              <Search className="h-4 w-4 text-muted-foreground" />
              <input autoFocus placeholder="Search desi, western, hoodies…" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
              <button type="button" onClick={() => setSearch(false)} aria-label="Close search">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </form>
          </div>
        </div>
      )}

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-up">
          <nav className="container flex flex-col py-4 text-sm font-medium">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="py-2 text-foreground/80" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
