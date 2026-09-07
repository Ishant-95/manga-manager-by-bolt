import { useMemo, useState } from "react";
import { Library } from "lucide-react";
import BrowseHeader from "./BrowseHeader";
import CategoryNavigation from "./CategoryNavigation";
import MangaGrid from "./MangaGrid";
import { mangaList, categories, type MangaCategory } from "@/data/manga";

export default function Browse() {
  const [activeCategory, setActiveCategory] =
    useState<MangaCategory>("All");

  const counts = useMemo(() => {
    const c = Object.fromEntries(
      categories.map((cat) => [cat, 0]),
    ) as Record<MangaCategory, number>;
    for (const m of mangaList) {
      c.All++;
      for (const cat of m.categories) c[cat]++;
    }
    return c;
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return mangaList;
    return mangaList.filter((m) => m.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <main id="browse" className="px-6 pb-24 pt-14 lg:px-10">
      <BrowseHeader />

      <div className="mt-10 border-b border-[var(--border)] pb-3">
        <CategoryNavigation
          active={activeCategory}
          onSelect={setActiveCategory}
          counts={counts}
        />
      </div>

      <div className="mt-8">
        <MangaGrid manga={filtered} />
      </div>

      <footer className="mx-auto mt-12 flex max-w-[1180px] items-center justify-center gap-2 border-t border-[var(--border)] pt-6 font-mono text-[11px] tracking-[0.04em] text-[var(--text-faint)]">
        <Library size={13} />
        <span>{mangaList.length} SERIES IN THE CATALOGUE</span>
      </footer>
    </main>
  );
}
