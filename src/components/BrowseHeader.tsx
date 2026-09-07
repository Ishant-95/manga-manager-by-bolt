export default function BrowseHeader() {
  return (
    <div className="mx-auto max-w-[640px] text-center">
      <span className="mb-2.5 block font-mono text-[11px] tracking-[0.08em] text-[var(--text-faint)]">
        BROWSE — DISCOVER
      </span>
      <h1 className="font-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-600 leading-tight text-[var(--text)]">
        Find your next obsession
      </h1>
      <p className="mt-2.5 text-[14.5px] leading-relaxed text-[var(--text-soft)]">
        Hover any title to fan its card stack and glimpse the covers beneath.
        Tap on mobile to spread the cards.
      </p>
    </div>
  );
}
