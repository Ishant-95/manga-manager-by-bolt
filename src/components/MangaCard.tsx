import { useState, useRef, useCallback, type KeyboardEvent } from "react";
import type { Manga } from "@/data/manga";

interface MangaCardProps {
  manga: Manga;
  index: number;
}

export default function MangaCard({ manga, index }: MangaCardProps) {
  const [revealLevel, setRevealLevel] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const isRevealed = revealLevel > 0;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = itemRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const ratio = 1 - y / rect.height;

      let level = 0;
      if (ratio > 0.85) level = 4;
      else if (ratio > 0.65) level = 3;
      else if (ratio > 0.45) level = 2;
      else if (ratio > 0.2) level = 1;
      else level = 0;

      setRevealLevel(level);
    },
    [],
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRevealLevel(0);
  }, []);

  const handleClick = useCallback(() => {
    setRevealLevel((prev) => (prev > 0 ? 0 : 4));
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setRevealLevel((prev) => (prev > 0 ? 0 : 4));
    }
  }, []);

  const revealClass = isHovered || revealLevel > 0
    ? `reveal-${revealLevel}`
    : "";

  return (
    <div
      ref={itemRef}
      className={`manga-item ${isRevealed ? "is-revealed" : ""} ${revealClass}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${manga.title}. ${manga.genres.join(", ")}. ${manga.status}. Rating ${manga.rating} out of 5. Press Enter to reveal the stack.`}
      aria-expanded={isRevealed}
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div className="folder-clip">
        {/* Layer 4 (back): blurred empty card */}
        <div className="folder-thumb folder-thumb--empty cover-ink" />

        {/* Layer 3: bottom thumbnail */}
        <div className={`folder-thumb folder-thumb--back ${manga.rear2Gradient}`}>
          <img
            src={manga.tertiaryCover}
            alt=""
            loading="lazy"
            draggable={false}
            style={{ opacity: 0.5 }}
          />
        </div>

        {/* Layer 2: middle thumbnail */}
        <div className={`folder-thumb folder-thumb--mid ${manga.rear1Gradient}`}>
          <img
            src={manga.secondaryCover}
            alt=""
            loading="lazy"
            draggable={false}
            style={{ opacity: 0.55 }}
          />
        </div>

        {/* Layer 1 (front): top thumbnail with title */}
        <div className={`folder-thumb folder-thumb--front ${manga.coverGradient}`}>
          <img
            src={manga.cover}
            alt={`Cover of ${manga.title}`}
            loading="lazy"
            draggable={false}
            style={{ opacity: 0.65 }}
          />
          <div className="folder-thumb__overlay" />
          <div className="folder-thumb__title">{manga.title}</div>
        </div>

        {/* Stripe/strap */}
        <div className="folder-stripe" aria-hidden="true">
          <div className="folder-stripe__knot" />
        </div>

        {/* Fixed bottom anchors */}
        <span className="folder-anchor folder-anchor--left" aria-hidden="true" />
        <span className="folder-anchor folder-anchor--right" aria-hidden="true" />
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
