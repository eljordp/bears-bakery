import { motion } from "framer-motion";

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

const menu: MenuItem[] = [
  {
    name: "Country Loaf",
    description:
      "Our flagship boule. Open, custardy crumb under a deep mahogany crust.",
    price: "12",
  },
  {
    name: "Sea Salt Focaccia",
    description:
      "Olive oil pools, flaky island salt, rosemary from the garden. Sold by the slab.",
    price: "10",
  },
  {
    name: "Cinnamon Knots",
    description:
      "Sourdough laminated with cinnamon sugar, hand-tied, baked until the edges caramelize.",
    price: "5",
  },
  {
    name: "Banana Bread",
    description:
      "Local apple bananas, brown butter, sourdough discard.",
    price: "9",
  },
  {
    name: "Lilikoi Danish",
    description:
      "Buttery sourdough pastry, passionfruit curd, soft-set cream.",
    price: "6",
  },
];

function HandDivider({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 600 10"
      className="handrule w-full h-2.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <path d="M2 5 C 60 1, 120 9, 180 5 S 300 1, 360 5 S 480 9, 540 5 S 596 1, 598 5" />
    </svg>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="relative bg-ivory paper-grain">
      <div className="max-w-zine mx-auto px-6 md:px-10 py-32 md:py-56">
        {/* Heading — looks like the top of a chalkboard / printed market sheet */}
        <div className="text-center mb-20 md:mb-28">
          <div className="font-serif italic text-ink/65 text-sm md:text-base mb-6">
            This Saturday
          </div>
          <h2 className="font-display text-ink tracking-tightest leading-[0.92] text-[clamp(2.8rem,7vw,5.5rem)]">
            What we&rsquo;re <span className="italic">baking</span>
          </h2>
        </div>

        <HandDivider />

        {/* Items — name . . . . price */}
        <ul className="my-4 md:my-6">
          {menu.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.06,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="py-7 md:py-9"
            >
              <div className="flex items-baseline">
                <span className="font-display text-ink tracking-tightest text-2xl md:text-4xl">
                  {item.name}
                </span>
                <span className="leaders" />
                <span className="font-display text-ink tracking-tightest text-2xl md:text-4xl tabular-nums">
                  {item.price}
                </span>
              </div>
              <p className="mt-3 font-serif italic text-ink/70 max-w-prose text-base md:text-lg leading-relaxed">
                {item.description}
              </p>
              {i < menu.length - 1 && (
                <div className="mt-7 md:mt-9 -mb-2">
                  <HandDivider flip={i % 2 === 0} />
                </div>
              )}
            </motion.li>
          ))}
        </ul>

        <HandDivider />

        {/* Footnote + single CTA */}
        <div className="mt-20 md:mt-28 text-center space-y-10">
          <p className="font-serif italic text-ink/70 max-w-md mx-auto leading-relaxed text-base md:text-lg">
            What we bake changes by the week. Follow{" "}
            <a
              href="https://instagram.com/bearsbakery"
              className="text-umber underline decoration-umber/40 underline-offset-4 hover:decoration-umber"
            >
              @bearsbakery
            </a>{" "}
            for Saturday&rsquo;s list.
          </p>

          <a
            href="mailto:hello@bearsbakery.com?subject=Reserve%20a%20loaf"
            className="inline-block font-serif italic text-ink border-b border-ink/60 hover:border-umber hover:text-umber transition-colors pb-1 text-lg md:text-xl"
          >
            Reserve a loaf &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
