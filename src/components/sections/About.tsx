import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-bark text-cream py-32 md:py-44 overflow-hidden grain"
    >
      <div className="px-6 md:px-12 lg:px-16 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left column: heading + lede */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="text-xs uppercase tracking-[0.32em] text-wheat mb-8">
              <span className="rule" />
              Our Story
            </div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tightest leading-[1.02] font-light">
              A starter older than most of us, kept{" "}
              <span className="italic text-wheat">alive</span>.
            </h2>
          </div>

          {/* Right column: body + image */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
              className="aspect-[5/3] rounded-md overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=1800&q=80"
                alt="Hands kneading dough in a warm kitchen"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="space-y-8 text-cream/85 text-lg md:text-xl leading-relaxed font-serif max-w-2xl">
              <p>
                Bear&rsquo;s Bakery started in a small kitchen with a jar of
                sourdough our great-grandmother carried from Italy. Sixty years
                later that same starter is still bubbling away, only now it
                does its work on a volcanic island in the middle of the Pacific.
              </p>
              <p>
                We are a family of growers and makers. The same hands that run
                <span className="italic"> KB Landscape</span> across the Big
                Island shape these loaves on Friday nights and load them into
                the truck before sunrise on Saturday.
              </p>
              <p>
                Everything is mixed by hand, fermented slow, and baked in small
                batches. There is no shortcut. There never has been.
              </p>
            </div>

            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="border-l-2 border-wheat pl-8 py-2"
            >
              <p className="font-display text-2xl md:text-3xl italic leading-snug text-cream">
                &ldquo;If the starter is happy, the bread is honest. We just
                listen to it.&rdquo;
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-wheat">
                &mdash; The Family
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats / details row */}
        <div className="mt-28 md:mt-40 pt-16 border-t border-cream/15 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {[
            { n: "60", l: "Years of starter" },
            { n: "24h", l: "Cold ferment" },
            { n: "1", l: "Family kitchen" },
            { n: "Sat.", l: "At the market" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl md:text-6xl text-wheat tracking-tightest">
                {s.n}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.24em] text-cream/65">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
