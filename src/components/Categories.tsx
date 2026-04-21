import catHoodies from "@/assets/cat-hoodies.jpg";
import catCargos from "@/assets/cat-cargos.jpg";
import catTees from "@/assets/cat-tees.jpg";
import catAcc from "@/assets/cat-acc.jpg";

const cats = [
  { name: "Hoodies", img: catHoodies, count: 12 },
  { name: "Cargos", img: catCargos, count: 8 },
  { name: "Tees", img: catTees, count: 14 },
  { name: "Accessories", img: catAcc, count: 9 },
];

export const Categories = () => (
  <section id="categories" className="container py-20 md:py-28">
    <div className="mb-10 flex items-end justify-between gap-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-clay mb-3">Shop by category</p>
        <h2 className="font-display text-3xl md:text-5xl font-medium text-balance">
          Built for every layer.
        </h2>
      </div>
      <a href="#shop" className="hidden md:inline text-sm text-foreground/70 hover:text-clay underline-offset-4 hover:underline">
        See everything →
      </a>
    </div>

    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {cats.map((c) => (
        <a
          key={c.name}
          href="#shop"
          className="group relative overflow-hidden bg-muted aspect-[3/4]"
        >
          <img
            src={c.img}
            alt={c.name}
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-bone">
            <h3 className="font-display text-xl md:text-2xl font-medium">{c.name}</h3>
            <p className="text-xs opacity-80">{c.count} pieces</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);
