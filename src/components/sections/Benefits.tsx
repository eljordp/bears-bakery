import { motion } from "framer-motion";
import { Wheat, Clock, Leaf } from "lucide-react";

const items = [
  {
    icon: Wheat,
    title: "A 60-Year Starter",
    body: "Carried from a small kitchen in Italy and kept alive in our family for three generations. Every loaf carries that lineage.",
  },
  {
    icon: Clock,
    title: "Easier to Digest",
    body: "Long, slow fermentation breaks down gluten and phytic acid, the way bread was made before factories rushed it.",
  },
  {
    icon: Leaf,
    title: "No Commercial Yeast",
    body: "Just flour, water, salt, and time. Nothing else goes into the dough, and nothing else needs to.",
  },
];

export default function Benefits() {
  return (
    <section className="relative bg-cream py-32 md:py-44 overflow-hidden grain-light">
      <div className="px-6 md:px-12 lg:px-16 relative">
        <div className="max-w-3xl mb-24 md:mb-32">
          <div className="text-xs uppercase tracking-[0.32em] text-terracotta mb-8">
            <span className="rule" />
            Why Sourdough
          </div>
          <h2 className="font-display text-bark text-5xl md:text-7xl tracking-tightest leading-[1.02] font-light">
            Bread the way it was{" "}
            <span className="italic text-ember">supposed</span> to be made.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                className="md:px-6 lg:px-10 py-10 md:border-l md:border-bark/15 first:md:border-l-0"
              >
                <Icon
                  className="w-9 h-9 text-terracotta mb-10"
                  strokeWidth={1.4}
                />
                <h3 className="font-display text-3xl md:text-4xl text-bark tracking-tightest leading-tight mb-6">
                  {it.title}
                </h3>
                <p className="text-bark/70 leading-relaxed text-base md:text-lg">
                  {it.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
