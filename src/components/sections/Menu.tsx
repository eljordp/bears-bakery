import { motion } from "framer-motion";
import { Mail } from "lucide-react";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
};

const menu: MenuItem[] = [
  {
    name: "Country Loaf",
    description:
      "Our flagship boule. Open, custardy crumb under a deep mahogany crust.",
    price: "12",
    category: "Sourdough",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Sea Salt Focaccia",
    description:
      "Olive oil pools, flaky island salt, rosemary from the garden. Sold by the slab.",
    price: "10",
    category: "Savory",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Cinnamon Knots",
    description:
      "Sourdough laminated with cinnamon sugar, hand-tied, baked until the edges caramelize.",
    price: "5",
    category: "Sweet",
    image:
      "https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Banana Bread",
    description: "Local apple bananas, brown butter, sourdough discard.",
    price: "9",
    category: "Sweet",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Lilikoi Danish",
    description:
      "Buttery sourdough pastry, passionfruit curd, soft-set cream.",
    price: "6",
    category: "Pastry",
    image:
      "https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&w=700&q=80",
  },
];

function reserveHref(itemName: string) {
  const subject = encodeURIComponent(`Reserve ${itemName}`);
  return `mailto:hello@bearsbakery.com?subject=${subject}`;
}

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
      <div className="max-w-zine mx-auto px-5 py-24 md:px-10 md:py-36">
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-[1fr_20rem] md:items-end">
          <div>
            <div className="font-serif italic text-sm text-ink/65 md:text-base">
              This Saturday
            </div>
            <h2 className="mt-4 font-display text-5xl leading-none text-ink md:text-7xl">
              What we&rsquo;re <span className="italic">baking</span>
            </h2>
          </div>
          <p className="font-serif italic leading-relaxed text-ink/70 md:text-lg">
            Reserve by Friday. Pickup starts Saturday at 7 a.m. and ends when
            the table is empty.
          </p>
        </div>

        <HandDivider />

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
              className="py-7 md:py-8"
            >
              <div className="grid gap-5 md:grid-cols-[8rem_1fr_auto] md:items-start">
                <div
                  className="themed-cut overflow-hidden bg-oat"
                  style={{
                    clipPath:
                      "polygon(3% 2%, 20% 0%, 42% 2%, 64% 0%, 86% 2%, 99% 4%, 98% 24%, 100% 52%, 98% 78%, 100% 98%, 76% 100%, 52% 98%, 28% 100%, 2% 97%, 0% 72%, 2% 48%, 0% 20%)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={`${item.name} from Bear's Bakery`}
                    className="theme-photo aspect-[4/3] w-full object-cover md:aspect-square"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="flex items-baseline">
                    <span className="font-display text-2xl text-ink md:text-4xl">
                      {item.name}
                    </span>
                    <span className="leaders" />
                    <span className="font-display text-2xl tabular-nums text-ink md:text-4xl">
                      ${item.price}
                    </span>
                  </div>
                  <div className="mt-2 font-serif italic text-sm text-leaf">
                    {item.category}
                  </div>
                  <p className="mt-3 max-w-prose font-serif italic text-base leading-relaxed text-ink/70 md:text-lg">
                    {item.description}
                  </p>
                </div>
                <a
                  href={reserveHref(item.name)}
                  className="inline-flex w-fit items-center gap-2 rounded-md border border-ink/20 px-4 py-2.5 font-serif italic text-ink transition-colors hover:border-sage hover:text-leaf"
                  aria-label={`Reserve ${item.name}`}
                >
                  <Mail className="h-4 w-4" strokeWidth={1.7} />
                  Reserve
                </a>
              </div>
              {i < menu.length - 1 && (
                <div className="mt-7 md:mt-9 -mb-2">
                  <HandDivider flip={i % 2 === 0} />
                </div>
              )}
            </motion.li>
          ))}
        </ul>

        <HandDivider />

        <div className="mt-16 space-y-8 text-center md:mt-20">
          <p className="mx-auto max-w-md font-serif italic text-base leading-relaxed text-ink/70 md:text-lg">
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
            className="inline-flex items-center gap-2 rounded-md bg-sage px-5 py-3 font-serif italic text-ivory transition-colors hover:bg-leaf"
          >
            <Mail className="h-4 w-4" strokeWidth={1.7} />
            Reserve a loaf
          </a>
        </div>
      </div>
    </section>
  );
}
