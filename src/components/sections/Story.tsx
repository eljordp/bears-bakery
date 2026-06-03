import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="relative bg-leaf text-ivory paper-grain">
      <div className="max-w-zine mx-auto px-5 py-20 md:px-10 md:py-28">
        <div className="flex justify-center mb-12 md:mb-16">
          <svg
            viewBox="0 0 240 14"
            className="w-40 text-oat opacity-80 md:w-56"
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
          className="mx-auto max-w-3xl text-center font-serif text-2xl italic leading-relaxed text-ivory/92 md:text-4xl"
        >
          Our starter is sixty years old. It came from a small town in northern
          Italy, kept alive in a jar through a kitchen, a suitcase, and an
          ocean. Every loaf we pull out of the oven is a descendant of one
          woman&rsquo;s afternoon.
        </motion.p>

        <div className="mt-14 grid gap-4 border-y border-ivory/20 py-6 text-center font-serif italic text-ivory/80 md:grid-cols-3 md:text-left">
          <div>Long fermentation, no commercial yeast.</div>
          <div>Mixed and shaped by hand every Friday.</div>
          <div>Sold Saturday morning, while the batch lasts.</div>
        </div>
      </div>
    </section>
  );
}
