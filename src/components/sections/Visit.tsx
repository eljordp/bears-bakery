import { motion } from "framer-motion";

export default function Visit() {
  return (
    <section id="visit" className="relative bg-ivory paper-grain">
      <div className="max-w-zine mx-auto px-6 md:px-10 py-32 md:py-56">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center max-w-xl mx-auto"
        >
          <div className="font-serif italic text-ink/60 text-sm md:text-base mb-6">
            Visit
          </div>
          <h2 className="font-display text-ink tracking-tightest leading-[0.92] text-[clamp(2.4rem,6vw,4.5rem)]">
            Saturdays at the <span className="italic">market</span>
          </h2>

          {/* Address */}
          <div className="mt-16 md:mt-20 font-display text-ink tracking-tightest text-2xl md:text-3xl leading-snug">
            Big Island Farmers Market
            <br />
            Hawai&lsquo;i Island
          </div>

          {/* Hours — stacked block */}
          <div className="mt-14 md:mt-16 font-serif italic text-ink/80 text-lg md:text-xl leading-[1.9]">
            Saturday mornings
            <br />
            From 7 a.m., until sold out
          </div>

          {/* Hand divider */}
          <div className="flex justify-center mt-16 md:mt-20">
            <svg
              viewBox="0 0 240 14"
              className="handrule w-36"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            >
              <path d="M2 7 C 30 2, 60 12, 92 7 S 152 2, 184 7 S 230 12, 238 7" />
            </svg>
          </div>

          {/* IG line */}
          <p className="mt-12 font-serif italic text-ink/85 text-lg md:text-xl leading-relaxed">
            We bake on Saturdays. See you there.
            <br />
            <a
              href="https://instagram.com/bearsbakery"
              className="text-umber underline decoration-umber/40 underline-offset-4 hover:decoration-umber"
            >
              @bearsbakery
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
