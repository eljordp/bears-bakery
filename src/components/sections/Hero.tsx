import { ArrowDown, Mail } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=1600&q=80";

export default function Hero() {
  return (
    <section id="top" className="relative bg-ivory paper-grain">
      <div className="max-w-zine mx-auto grid items-center gap-12 px-5 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="font-serif italic text-base text-ink/65 md:text-lg">
            Big Island, Hawai&lsquo;i. Small-batch Saturday bakes.
          </p>

          <h1 className="mt-7 font-display text-6xl leading-none text-ink sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="sr-only">Bear&rsquo;s Bakery</span>
            <span aria-hidden="true">
              Bear&rsquo;s
              <br />
              <span className="italic">Bakery</span>
            </span>
          </h1>

          <p className="mt-8 max-w-xl font-serif text-xl leading-relaxed text-ink/78 md:text-2xl">
            Slow-fermented sourdough, focaccia, and sweet treats from a
            sixty-year Italian starter. Baked by one family, picked up at the
            market.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@bearsbakery.com?subject=Reserve%20a%20Saturday%20loaf"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3.5 font-serif italic text-ivory transition-colors hover:bg-umber"
            >
              <Mail className="h-4 w-4" strokeWidth={1.7} />
              Reserve Saturday loaf
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/25 px-5 py-3.5 font-serif italic text-ink transition-colors hover:border-sage hover:text-leaf"
            >
              <ArrowDown className="h-4 w-4" strokeWidth={1.7} />
              See this week&rsquo;s menu
            </a>
          </div>

          <dl className="mt-10 hidden max-w-xl grid-cols-3 border-y border-ink/15 py-5 text-center sm:grid md:text-left">
            {[
              ["60 years", "starter"],
              ["7 a.m.", "market pickup"],
              ["small", "weekly batch"],
            ].map(([value, label]) => (
              <div key={label} className="px-2 first:pl-0 last:pr-0">
                <dt className="font-display text-2xl text-ink md:text-3xl">
                  {value}
                </dt>
                <dd className="mt-1 font-serif italic text-sm text-ink/60 md:text-base">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative mx-auto w-full max-w-[34rem]">
          <div
            className="relative overflow-hidden"
            style={{
              clipPath:
                "polygon(2% 1%, 8% 0%, 18% 2%, 28% 0.5%, 40% 1.8%, 52% 0%, 64% 1.5%, 76% 0.5%, 86% 2%, 95% 0.5%, 100% 3%, 99% 12%, 100% 24%, 98% 38%, 100% 52%, 99% 66%, 100% 80%, 98% 92%, 100% 99%, 92% 100%, 78% 98%, 64% 100%, 50% 99%, 36% 100%, 22% 98%, 10% 100%, 2% 99%, 0% 88%, 1% 72%, 0% 56%, 2% 40%, 0% 24%, 1% 10%)",
            }}
          >
            <img
              src={HERO_IMG}
              alt="A loaf of sourdough cooling on linen"
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
              style={{ filter: "sepia(0.32) saturate(0.92) contrast(0.96)" }}
            />
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{ backgroundColor: "rgba(244, 236, 219, 0.22)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 80% at 50% 50%, transparent 55%, rgba(43,29,18,0.18) 100%)",
              }}
            />
            <div className="absolute bottom-5 left-5 rounded-md bg-ivory/92 px-4 py-3 font-serif italic text-ink shadow-sm">
              Fresh at the Saturday market
            </div>
          </div>
          <figcaption className="mt-5 text-center font-serif italic text-sm text-ink/55">
            From last Saturday&rsquo;s bake.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
