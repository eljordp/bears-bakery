import { motion } from "framer-motion";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=1200&q=80";

export default function About() {
  return (
    <section id="about" className="relative bg-ivory paper-grain">
      <div className="max-w-zine mx-auto px-5 py-24 md:px-10 md:py-36">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-5 font-serif italic text-sm text-ink/60 md:text-base">
            About
          </div>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            The family, the <span className="italic">starter</span>, and the
            market
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="mx-auto max-w-prose font-serif text-xl leading-relaxed text-ink/90 md:text-2xl"
        >
          <p>
            We are a small family. The same hands that run a landscape business
            across the Big Island shape these loaves on Friday nights and load
            them into the truck before sunrise on Saturday. The starter is
            sixty years old. It came with our great-grandmother from a town in
            northern Italy, and it has been bubbling away in our kitchen ever
            since.
          </p>

          {/* Inline image — small, sits inside the essay */}
          <figure className="my-12 mx-auto max-w-2xl md:my-14">
            <div
              className="themed-cut overflow-hidden"
              style={{
                clipPath:
                  "polygon(3% 2%, 14% 0%, 30% 1.5%, 50% 0.5%, 70% 2%, 88% 0%, 99% 3%, 98% 18%, 100% 36%, 99% 56%, 100% 76%, 98% 95%, 90% 100%, 70% 98%, 50% 100%, 30% 99%, 12% 100%, 2% 97%, 0% 80%, 1% 60%, 0% 40%, 2% 20%)",
              }}
            >
              <img
                src={ABOUT_IMG}
                alt="Hands working dough on a wooden board"
                className="theme-photo aspect-[5/3] w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 text-center font-serif italic text-sm text-ink/55">
              The kitchen, Friday night.
            </figcaption>
          </figure>

          <p>
            Everything is mixed by hand, fermented slow, and baked in small
            batches. We are not trying to be a big bakery. We bake what fits in
            our oven and bring it to the market on Saturday. If there is
            something specific you want, send a note before Friday and we will
            put one aside for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
