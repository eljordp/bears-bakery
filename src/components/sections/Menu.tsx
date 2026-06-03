import { motion } from "framer-motion";
import { Camera } from "lucide-react";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  comingSoon?: boolean;
};

const menu: MenuItem[] = [
  {
    name: "Country Loaf",
    description:
      "Our flagship boule. Open, custardy crumb under a deep mahogany crust. Twenty-four hour cold ferment.",
    price: "$12",
    category: "Sourdough",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Hawaiian Sea Salt Focaccia",
    description:
      "Olive oil pools, flaky island salt, finished with rosemary from the garden. Sold by the slab.",
    price: "$10",
    category: "Sourdough",
    image:
      "https://images.unsplash.com/photo-1565299543923-37dd37887442?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Cinnamon Knots",
    description:
      "Sourdough laminated with cinnamon sugar, hand-tied and baked until the edges caramelize.",
    price: "$5",
    category: "Sweet Treats",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Brown Butter Chocolate Chip",
    description:
      "Aged sourdough cookies with pools of dark chocolate and a flaky salt finish.",
    price: "$4",
    category: "Sweet Treats",
    comingSoon: true,
  },
  {
    name: "Banana Bread",
    description:
      "Local apple bananas, brown butter, sourdough discard. The kind your auntie wishes she made.",
    price: "$9",
    category: "Loaves",
    comingSoon: true,
  },
  {
    name: "Lilikoi Danish",
    description:
      "Buttery sourdough pastry, passionfruit curd, soft-set cream. A small, bright moment.",
    price: "$6",
    category: "Pastry",
    comingSoon: true,
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative bg-flour py-32 md:py-44 overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-16 relative">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-20 md:mb-28">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.32em] text-terracotta mb-8">
              <span className="rule" />
              The Menu
            </div>
            <h2 className="font-display text-bark text-5xl md:text-7xl tracking-tightest leading-[1.02] font-light">
              This Saturday&rsquo;s <span className="italic text-ember">bake.</span>
            </h2>
          </div>
          <p className="text-bark/70 max-w-sm leading-relaxed text-lg md:pb-3">
            Reserve a loaf for pickup at the market, or DM us to add something
            custom. Quantities are limited to what the oven can hold.
          </p>
        </div>

        {/* Editorial menu list */}
        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-2">
          {menu.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (i % 2) * 0.08,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="group border-t border-bark/15 py-10 md:py-12 flex gap-8 md:gap-10"
            >
              {/* Image / placeholder */}
              <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden bg-wheat/20 relative">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-bark/40 bg-wheat/15">
                    <Camera className="w-6 h-6 mb-1" strokeWidth={1.4} />
                    <span className="text-[10px] uppercase tracking-[0.18em]">
                      Photo soon
                    </span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="font-display text-2xl md:text-3xl text-bark tracking-tightest">
                    {item.name}
                  </h3>
                  <span className="font-display text-xl md:text-2xl text-ember tabular-nums">
                    {item.price}
                  </span>
                </div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-bark/55 mb-4">
                  {item.category}
                </div>
                <p className="text-bark/75 leading-relaxed mb-6 max-w-md">
                  {item.description}
                </p>
                {item.comingSoon ? (
                  <span className="inline-block text-xs uppercase tracking-[0.22em] text-bark/45 border border-bark/20 rounded-full px-4 py-2">
                    Returning next bake
                  </span>
                ) : (
                  <a
                    href="mailto:hello@bearsbakery.com?subject=Reserve%20a%20loaf"
                    className="inline-block text-xs uppercase tracking-[0.22em] text-cream bg-bark hover:bg-ember transition-colors rounded-full px-5 py-3"
                  >
                    Reserve &rarr;
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Photography placeholder strip */}
        <div className="mt-24 md:mt-32 grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="aspect-[4/5] rounded-md overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80"
              alt="Hands shaping dough"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] rounded-md overflow-hidden relative md:mt-12">
            <img
              src="https://images.unsplash.com/photo-1568471173242-461f0a730452?auto=format&fit=crop&w=1200&q=80"
              alt="Sourdough crumb"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] rounded-md overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1486887396153-fa416526c108?auto=format&fit=crop&w=1200&q=80"
              alt="Loaves cooling on a rack"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="text-center text-xs uppercase tracking-[0.28em] text-bark/45 mt-8">
          Real photos from this weekend&rsquo;s bake coming Saturday
        </p>
      </div>
    </section>
  );
}
