import { motion } from "framer-motion";
import { ArrowDown, Star } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=2000&q=80";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col bg-cream overflow-hidden grain-light"
    >
      {/* Background photograph */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Crackling sourdough loaf fresh from the oven"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/55 via-bark/35 to-bark/75" />
        <div className="absolute inset-0 bg-gradient-to-tr from-bark/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-20 md:pb-28 pt-40">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex items-center gap-3 text-cream/80 text-xs uppercase tracking-[0.32em] mb-10"
          >
            <span className="w-10 h-px bg-cream/70" />
            Big Island Hawaii &nbsp;&middot;&nbsp; Est. with a 60-Year Starter
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.1,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="font-display text-cream font-light tracking-tightest leading-[0.92] text-[clamp(3rem,9vw,9rem)]"
          >
            Bear&rsquo;s
            <br />
            <span className="italic font-normal text-wheat">Bakery.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="mt-10 max-w-xl text-cream/85 text-lg md:text-xl leading-relaxed font-serif"
          >
            Slow-fermented sourdough and sweet treats baked in small batches
            from a sixty-year Italian starter our family has kept alive across
            two continents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.55,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-4 bg-terracotta hover:bg-ember text-cream px-9 py-5 md:px-12 md:py-6 rounded-full text-base md:text-lg uppercase tracking-[0.22em] transition-all duration-300 shadow-2xl shadow-bark/40"
            >
              Order Fresh Bread
              <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <div className="flex items-center gap-3 text-cream/80">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-wheat text-wheat"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm tracking-wide">
                Loved at the farmers market
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div className="relative z-10 border-t border-cream/15 bg-bark/30 backdrop-blur-sm">
        <div className="px-6 md:px-12 lg:px-16 py-5 flex flex-wrap items-center justify-between gap-4 text-cream/75 text-xs uppercase tracking-[0.28em]">
          <span>Saturdays &middot; Farmers Market</span>
          <span className="hidden md:inline">Sourdough &middot; Pastries &middot; Sweet Treats</span>
          <span>Family-Run Since the Boot of Italy</span>
        </div>
      </div>
    </section>
  );
}
