import hero from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="grid min-h-[78vh] grid-cols-1 lg:grid-cols-12">
      <div className="relative lg:col-span-5 flex items-center bg-gradient-fade px-6 py-16 lg:px-16">
        <div className="max-w-md animate-fade-up">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-clay">SS26 — Vol. 01</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] text-balance text-foreground">
            Refined.<br />
            <span className="italic text-clay">Rebellious.</span><br />
            Built to last.
          </h1>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed">
            Heavyweight hoodies, utility cargos, and essentials cut for the ones who care about how things are made.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-none bg-charcoal text-bone hover:bg-clay">
              Shop the drop <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-none border-foreground/40">
              The Story
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <span>● Limited run</span>
            <span>● Free US shipping $120+</span>
          </div>
        </div>
      </div>
      <div className="relative lg:col-span-7 min-h-[420px]">
        <img
          src={hero}
          alt="Two models wearing oversized hoodies and cargo pants against a warm clay wall"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/30 lg:to-background/60" />
      </div>
    </div>
  </section>
);
