import { motion } from "framer-motion";

const HERO_IMG =
  "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=1600&q=80";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-ivory paper-grain"
    >
      <div className="max-w-zine mx-auto px-6 md:px-10 pt-24 md:pt-36 pb-28 md:pb-44">
        {/* Tiny establishment line */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center font-serif italic text-ink/65 text-sm md:text-base mb-10 md:mb-14"
        >
          A small family bakery &middot; Big Island, Hawai&lsquo;i
        </motion.div>

        {/* Wordmark — bakery sign feel */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.1,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="text-center font-display text-ink leading-[0.86] tracking-tightest text-[clamp(4.5rem,15vw,11rem)]"
        >
          Bear&rsquo;s
          <br />
          <span className="italic">Bakery</span>
        </motion.h1>

        {/* Tagline — italic small caps, tucked */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="mt-10 md:mt-14 text-center font-serif italic text-ink/75 uppercase tracking-[0.32em] text-[11px] md:text-xs"
        >
          Flour &middot; Water &middot; Salt &middot; Time
        </motion.div>

        {/* Hero photo — paper-tear edge, warm sepia overlay */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="mt-20 md:mt-28 relative mx-auto max-w-[44rem]"
        >
          <div
            className="relative overflow-hidden"
            style={{
              clipPath:
                "polygon(2% 1%, 8% 0%, 18% 2%, 28% 0.5%, 40% 1.8%, 52% 0%, 64% 1.5%, 76% 0.5%, 86% 2%, 95% 0.5%, 100% 3%, 99% 12%, 100% 24%, 98% 38%, 100% 52%, 99% 66%, 100% 80%, 98% 92%, 100% 99%, 92% 100%, 78% 98%, 64% 100%, 50% 99%, 36% 100%, 22% 98%, 10% 100%, 2% 99%, 0% 88%, 1% 72%, 0% 56%, 2% 40%, 0% 24%, 1% 10%)",
            }}
          >
            <img
              src={HERO_IMG}
              alt="A loaf of sourdough cooling on linen"
              className="w-full h-[clamp(22rem,54vw,34rem)] object-cover"
              style={{ filter: "sepia(0.32) saturate(0.92) contrast(0.96)" }}
            />
            {/* warm cream overlay to kill the stock look */}
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{ backgroundColor: "rgba(244, 236, 219, 0.22)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 80% at 50% 50%, transparent 55%, rgba(43,29,18,0.18) 100%)",
              }}
            />
          </div>
          <figcaption className="mt-6 text-center font-serif italic text-ink/55 text-sm">
            From last Saturday&rsquo;s bake.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
