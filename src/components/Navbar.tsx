import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { socials } from "./SocialIcons";

type Props = { cartCount: number };

export const Navbar = ({ cartCount }: Props) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      {/* Announcement marquee */}
      <div className="overflow-hidden bg-charcoal text-bone">
        <div className="marquee flex w-max gap-12 whitespace-nowrap py-2 text-xs uppercase tracking-[0.25em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              <span>Free US shipping over $120</span>
              <span>·</span>
              <span>New drop — SS26</span>
              <span>·</span>
              <span>Crafted with intent</span>
              <span>·</span>
              <span>Free US shipping over $120</span>
              <span>·</span>
              <span>New drop — SS26</span>
              <span>·</span>
              <span>Crafted with intent</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container flex h-16 items-center justify-between gap-4">
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#shop" className="hover:text-clay transition-colors">Shop</a>
          <a href="#categories" className="hover:text-clay transition-colors">Categories</a>
          <a href="#story" className="hover:text-clay transition-colors">Story</a>
          <a href="#contact" className="hover:text-clay transition-colors">Contact</a>
        </nav>

        <a href="#" className="font-display text-xl md:text-2xl font-semibold tracking-tight">
          A.Farooqi<span className="text-clay">'s</span>
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearch(!search)}
            aria-label="Search"
            className="text-foreground/80 hover:text-clay transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          <div className="hidden lg:flex items-center gap-2 text-xs text-foreground/70">
            {socials.slice(0, 3).map((s) => (
              <a key={s.name} href={s.href} aria-label={s.name} className="hover:text-clay transition-colors">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <span className="hidden md:inline text-xs font-medium text-foreground/70 border border-border rounded px-2 py-1">
            USD $
          </span>
          <button aria-label="Cart" className="relative text-foreground/90 hover:text-clay transition-colors">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-accent-foreground">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {search && (
        <div className="border-t border-border bg-background animate-fade-up">
          <div className="container py-3">
            <div className="flex items-center gap-3 rounded border border-border bg-card px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                autoFocus
                placeholder="Search hoodies, cargos, tees…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button onClick={() => setSearch(false)} aria-label="Close search">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-up">
          <nav className="container flex flex-col py-4 text-sm font-medium">
            {["Shop", "Categories", "Story", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="py-2 text-foreground/80" onClick={() => setOpen(false)}>
                {l}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
