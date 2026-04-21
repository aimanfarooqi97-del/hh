import story from "@/assets/story.jpg";
import { Button } from "@/components/ui/button";

export const Story = () => (
  <section id="story" className="container py-20 md:py-28">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={story}
          alt="Hands stitching fabric in a sunlit atelier"
          loading="lazy"
          width={1280}
          height={960}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">Our story</p>
        <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight text-balance">
          Quietly made. <span className="italic text-clay">Loudly worn.</span>
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          A.Farooqi's was born in a small atelier with one rule — make fewer things, make them better. Every piece is cut from heavyweight cotton, sewn slowly, and built to outlast the trend cycle.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          No drops every week. No shortcuts. Just clothes that get better the more you live in them.
        </p>
        <Button className="mt-8 rounded-none bg-charcoal text-bone hover:bg-clay">
          Read the manifesto
        </Button>
      </div>
    </div>
  </section>
);
