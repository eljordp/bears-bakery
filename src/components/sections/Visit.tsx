import { motion } from "framer-motion";
import { MapPin, Clock, Mail, AtSign } from "lucide-react";

export default function Visit() {
  return (
    <section
      id="visit"
      className="relative bg-cream py-32 md:py-44 overflow-hidden grain-light"
    >
      <div className="px-6 md:px-12 lg:px-16 relative">
        <div className="max-w-3xl mb-20 md:mb-28">
          <div className="text-xs uppercase tracking-[0.32em] text-terracotta mb-8">
            <span className="rule" />
            Find Us
          </div>
          <h2 className="font-display text-bark text-5xl md:text-7xl tracking-tightest leading-[1.02] font-light">
            Saturdays at the <span className="italic text-ember">market</span>.
          </h2>
          <p className="mt-10 text-bark/70 text-lg md:text-xl leading-relaxed max-w-xl">
            Come by early. The loaves come out warm, and they tend to leave the
            same way. If you want to hold something specific, send a note before
            Friday.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Info cards */}
          <div className="lg:col-span-5 space-y-2">
            {[
              {
                icon: MapPin,
                label: "Where",
                lines: ["Big Island Farmers Market", "Hawaii Island"],
              },
              {
                icon: Clock,
                label: "When",
                lines: ["Saturday Mornings", "From 7am, until sold out"],
              },
              {
                icon: Mail,
                label: "Reservations",
                lines: ["hello@bearsbakery.com"],
                href: "mailto:hello@bearsbakery.com",
              },
              {
                icon: AtSign,
                label: "Follow Along",
                lines: ["@bearsbakery"],
                href: "#",
              },
            ].map((row, i) => {
              const Icon = row.icon;
              const Content = (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                  className="flex gap-6 py-8 border-t border-bark/15 group"
                >
                  <Icon
                    className="w-6 h-6 text-terracotta mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-bark/55 mb-3">
                      {row.label}
                    </div>
                    {row.lines.map((l) => (
                      <div
                        key={l}
                        className="font-display text-2xl md:text-3xl text-bark tracking-tightest leading-snug"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
              return row.href ? (
                <a
                  key={row.label}
                  href={row.href}
                  className="block hover:text-terracotta transition-colors"
                >
                  {Content}
                </a>
              ) : (
                <div key={row.label}>{Content}</div>
              );
            })}
            <div className="border-t border-bark/15" />
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="aspect-[4/5] md:aspect-[5/6] rounded-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&w=1600&q=80"
                alt="Farmers market stall with fresh bread"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.24em] text-bark/55">
              At the stall, around sunrise
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
