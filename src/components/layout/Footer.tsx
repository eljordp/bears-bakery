export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-ink/15">
      <div className="max-w-zine mx-auto px-6 md:px-10 py-12 text-center">
        <p className="font-serif italic text-ink/65 text-sm md:text-base">
          Bear&rsquo;s Bakery &middot; Big Island &middot; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
