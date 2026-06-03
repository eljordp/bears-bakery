const tablePhotos = [
  {
    src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=900&q=80",
    alt: "Sliced sourdough loaf on a wooden board",
    label: "Country loaves",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    alt: "Round seeded loaves on a dark table",
    label: "Seeded bakes",
  },
  {
    src: "https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&w=1200&q=80",
    alt: "Pastries and cake arranged on a bakery display",
    label: "Pastries and sweets",
  },
];

export default function SaturdayTable() {
  return (
    <section className="relative bg-ivory paper-grain">
      <div className="max-w-zine mx-auto px-5 pb-20 md:px-10 md:pb-28">
        <div className="mb-8 grid gap-3 border-y border-ink/15 py-5 md:grid-cols-[1fr_auto] md:items-center">
          <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">
            On the <span className="italic">Saturday table</span>
          </h2>
          <p className="max-w-md font-serif italic leading-relaxed text-ink/65">
            A small batch, photographed like food you can actually inspect.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {tablePhotos.map((photo, index) => (
            <figure key={photo.label} className="group">
              <div
                className="themed-cut overflow-hidden bg-oat"
                style={{
                  clipPath:
                    index === 1
                      ? "polygon(1% 3%, 14% 0%, 32% 2%, 52% 1%, 72% 0%, 92% 3%, 100% 1%, 99% 26%, 100% 48%, 98% 70%, 100% 98%, 82% 100%, 62% 98%, 40% 100%, 18% 98%, 1% 100%, 0% 78%, 2% 56%, 0% 32%)"
                      : "polygon(2% 1%, 18% 0%, 36% 2%, 54% 0%, 74% 2%, 98% 1%, 100% 20%, 98% 42%, 100% 66%, 98% 99%, 78% 100%, 56% 98%, 34% 100%, 12% 98%, 0% 100%, 1% 72%, 0% 46%, 2% 24%)",
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="theme-photo aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <figcaption className="mt-3 font-serif italic text-sm text-ink/55">
                {photo.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
