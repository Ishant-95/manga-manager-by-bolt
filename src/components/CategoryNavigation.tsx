import { categories, type MangaCategory } from "@/data/manga";

interface CategoryNavigationProps {
  active: MangaCategory;
  onSelect: (cat: MangaCategory) => void;
  counts: Record<MangaCategory, number>;
}

export default function CategoryNavigation({
  active,
  onSelect,
  counts,
}: CategoryNavigationProps) {
  return (
    <nav
      className="flex items-center justify-center gap-1.5 overflow-x-auto pb-1"
      aria-label="Manga categories"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          className={`nav-tab ${active === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
          aria-pressed={active === cat}
        >
          {cat}
          <span className="ml-1.5 text-[10px] text-[var(--text-faint)]">
            {counts[cat] ?? 0}
          </span>
        </button>
      ))}
    </nav>
  );
}
