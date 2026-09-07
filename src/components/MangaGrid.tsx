import MangaCard from "./MangaCard";
import type { Manga } from "@/data/manga";

interface MangaGridProps {
  manga: Manga[];
}

export default function MangaGrid({ manga }: MangaGridProps) {
  if (manga.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-2xl font-500 text-[var(--text-faint)]">
          No titles found
        </p>
        <p className="mt-1 text-sm text-[var(--text-faint)]">
          Try a different category.
        </p>
      </div>
    );
  }

  return (
    <div
      className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-x-[34px] gap-y-[46px] px-[30px] pb-16 pt-2.5"
      role="list"
    >
      {manga.map((m, i) => (
        <div key={m.id} role="listitem">
          <MangaCard manga={m} index={i} />
        </div>
      ))}
    </div>
  );
}
