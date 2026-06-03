export default function Footer() {
  return (
    <footer className="bg-bark text-cream/85 relative grain">
      <div className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <div className="font-display text-3xl md:text-4xl text-cream tracking-tightest">
              Bear&rsquo;s Bakery
            </div>
            <p className="mt-5 text-cream/65 max-w-xs leading-relaxed">
              Slow-fermented sourdough and sweet treats from a sixty-year
              Italian starter. Baked on the Big Island.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-wheat mb-5">
              Find Us
            </div>
            <p className="leading-relaxed">
              Big Island Farmers Market
              <br />
              Hawaii Island
              <br />
              Saturday Mornings
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-wheat mb-5">
              Say Hello
            </div>
            <a
              href="mailto:hello@bearsbakery.com"
              className="block hover:text-wheat transition-colors"
            >
              hello@bearsbakery.com
            </a>
            <a
              href="#"
              className="block mt-2 hover:text-wheat transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-cream/15 text-xs uppercase tracking-[0.18em] text-cream/50 flex flex-col md:flex-row justify-between gap-3">
          <span>&copy; {new Date().getFullYear()} Bear&rsquo;s Bakery</span>
          <span>Baked with patience, served with aloha.</span>
        </div>
      </div>
    </footer>
  );
}
