import { useState, type KeyboardEvent } from "react";
import type { Manga } from "@/data/manga";

interface MangaCardProps {
  manga: Manga;
  index: number;
}

export default function MangaCard({ manga, index }: MangaCardProps) {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive((prev) => !prev);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className={`manga-item ${isActive ? "is-active" : ""}`}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${manga.title}. ${manga.genres.join(", ")}. ${manga.status}. Rating ${manga.rating} out of 5. Press Enter to fan the cards.`}
      aria-expanded={isActive}
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div className="fan-stack">
        {/* Pins: above all card layers */}
        <span className="pin pin--tl" aria-hidden="true" />
        <span className="pin pin--br" aria-hidden="true" />

        {/* Rear card: gradient with photo */}
        <div className={`fan-card fan-card--rear ${manga.rear2Gradient}`}>
          <img
            src={manga.tertiaryCover}
            alt=""
            loading="lazy"
            draggable={false}
            style={{ opacity: 0.45 }}
          />
        </div>

        {/* Middle card: gradient with photo */}
        <div className={`fan-card fan-card--middle ${manga.rear1Gradient}`}>
          <img
            src={manga.secondaryCover}
            alt=""
            loading="lazy"
            draggable={false}
            style={{ opacity: 0.5 }}
          />
        </div>

        {/* Front card: photo with spine, overlay, and title */}
        <div className={`fan-card fan-card--front ${manga.coverGradient}`}>
          <img
            src={manga.cover}
            alt={`Cover of ${manga.title}`}
            loading="lazy"
            draggable={false}
            style={{ opacity: 0.6 }}
          />
          <div className="fan-card__spine" />
          <div className="fan-card__overlay" />
          <div className="fan-card__title">{manga.title}</div>
        </div>
      </div>

      {/* Metadata below the stack */}
      <div className="fan-meta">
        <h3>{manga.title}</h3>
        <span className="fan-tag">
          {manga.chapters} CH · {manga.status.toUpperCase()} · {manga.genres.join(" / ")}
        </span>
      </div>
    </div>
  );
}
