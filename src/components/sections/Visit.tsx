import { motion } from "framer-motion";
import { AtSign, Clock, Mail, MapPin } from "lucide-react";

const visitRows = [
  {
    icon: MapPin,
    label: "Where",
    lines: ["Big Island Farmers Market", "Hawai‘i Island"],
  },
  {
    icon: Clock,
    label: "When",
    lines: ["Saturday mornings", "7 a.m. until sold out"],
  },
  {
    icon: Mail,
    label: "Reserve",
    lines: ["hello@bearsbakery.com"],
    href: "mailto:hello@bearsbakery.com?subject=Reserve%20a%20Saturday%20loaf",
  },
  {
    icon: AtSign,
    label: "Updates",
    lines: ["@bearsbakery"],
    href: "https://instagram.com/bearsbakery",
  },
];

const VISIT_IMG =
  "https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&w=1200&q=80";

export default function Visit() {
  return (
    <section id="visit" className="relative bg-oat paper-grain">
      <div className="max-w-zine mx-auto px-5 py-24 md:px-10 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
        >
          <div>
            <div className="mb-5 font-serif italic text-sm text-ink/60 md:text-base">
              Visit
            </div>
            <h2 className="font-display text-5xl leading-none text-ink md:text-7xl">
              Saturdays at the <span className="italic">market</span>
            </h2>
            <p className="mt-8 max-w-md font-serif text-xl leading-relaxed text-ink/75 md:text-2xl">
              Come early, send a note by Friday, or watch Instagram for the
              weekly bake list before the table sells through.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-y border-ink/20">
              {visitRows.map((row) => {
                const Icon = row.icon;
                const content = (
                  <div className="flex gap-5 border-b border-ink/20 py-6 last:border-b-0">
                    <Icon
                      className="mt-1 h-5 w-5 shrink-0 text-leaf"
                      strokeWidth={1.7}
                    />
                    <div>
                      <div className="font-serif italic text-sm text-ink/55">
                        {row.label}
                      </div>
                      <div className="mt-2 font-display text-2xl leading-snug text-ink md:text-3xl">
                        {row.lines.map((line) => (
                          <div key={line}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                );

                return row.href ? (
                  <a
                    key={row.label}
                    href={row.href}
                    className="block transition-colors hover:text-leaf"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={row.label}>{content}</div>
                );
              })}
            </div>

            <figure>
              <div
                className="themed-cut overflow-hidden bg-ivory"
                style={{
                  clipPath:
                    "polygon(2% 2%, 16% 0%, 36% 2%, 58% 0%, 78% 2%, 99% 1%, 100% 24%, 98% 48%, 100% 72%, 98% 98%, 80% 100%, 58% 98%, 38% 100%, 18% 98%, 1% 100%, 0% 74%, 2% 52%, 0% 28%)",
                }}
              >
                <img
                  src={VISIT_IMG}
                  alt="Bakery pastries and loaves arranged for pickup"
                  className="theme-photo aspect-[4/3] w-full object-cover md:aspect-[16/10]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 font-serif italic text-sm text-ink/55">
                What the pickup table should feel like: visible, limited, real.
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
