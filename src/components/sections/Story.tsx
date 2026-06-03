import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="relative bg-ivory paper-grain">
      <div className="max-w-zine mx-auto px-6 md:px-10 py-32 md:py-56">
        {/* hand-drawn divider above */}
        <div className="flex justify-center mb-20 md:mb-28">
          <svg
            viewBox="0 0 240 14"
            className="handrule w-40 md:w-56"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          >
            <path d="M2 7 C 30 2, 60 12, 92 7 S 152 2, 184 7 S 230 12, 238 7" />
            <circle cx="120" cy="7" r="1.4" fill="currentColor" stroke="none" />
          </svg>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-serif italic text-ink/90 text-center max-w-prose mx-auto leading-[1.55] text-[clamp(1.35rem,2.6vw,2rem)]"
        >
          Our starter is sixty years old. It came from a small town in northern
          Italy, kept alive in a jar through a kitchen, a suitcase, and an
          ocean. Every loaf we pull out of the oven is a descendant of one
          woman&rsquo;s afternoon.
        </motion.p>

        <div className="flex justify-center mt-20 md:mt-28">
          <svg
            viewBox="0 0 240 14"
            className="handrule w-40 md:w-56"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          >
            <path d="M2 7 C 30 12, 60 2, 92 7 S 152 12, 184 7 S 230 2, 238 7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
