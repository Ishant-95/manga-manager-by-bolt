import { useState, useRef, useCallback, type KeyboardEvent } from "react";
import type { Manga } from "@/data/manga";

interface MangaCardProps {
  manga: Manga;
  index: number;
}

export default function MangaCard({ manga, index }: MangaCardProps) {
  const [state, setState] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const lastStateRef = useRef(0);

  const isOpen = state > 0;

  const computeState = useCallback((clientY: number): number => {
    const el = itemRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const ratio = 1 - (clientY - rect.top) / rect.height;

    const prev = lastStateRef.current;

    let s = 0;
    if (ratio > 0.88) s = 4;
    else if (ratio > 0.68) s = 3;
    else if (ratio > 0.45) s = 2;
    else if (ratio > 0.15) s = 1;
    else s = 0;

    if (s === prev) return s;

    if (s > prev) {
      if (ratio > 0.88) s = 4;
      else if (ratio > 0.70) s = 3;
      else if (ratio > 0.48) s = 2;
      else if (ratio > 0.15) s = 1;
    } else {
      if (ratio > 0.86) s = 4;
      else if (ratio > 0.64) s = 3;
      else if (ratio > 0.40) s = 2;
      else if (ratio > 0.12) s = 1;
      else s = 0;
    }

    return s;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const s = computeState(e.clientY);
      lastStateRef.current = s;
      setState(s);
    },
    [computeState],
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setState(0);
    lastStateRef.current = 0;
  }, []);

  const handleClick = useCallback(() => {
    setState((prev) => {
      const next = prev > 0 ? 0 : 4;
      lastStateRef.current = next;
      return next;
    });
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setState((prev) => {
        const next = prev > 0 ? 0 : 4;
        lastStateRef.current = next;
        return next;
      });
    }
  }, []);

  const stateClass = isHovered || state > 0 ? `state-${state}` : "";

  return (
    <div
      ref={itemRef}
      className={`manga-item ${isOpen ? "is-open" : ""} ${stateClass}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${manga.title}. ${manga.genres.join(", ")}. ${manga.status}. Rating ${manga.rating} out of 5. Press Enter to open the drawer.`}
      aria-expanded={isOpen}
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div className="drawer">
        {/* Darker interior recess behind cards */}
        <div className="drawer__interior" />

        {/* Card 4 (back): blurred empty card */}
        <div className="drawer-card drawer-card--4 cover-ink" />

        {/* Card 3: bottom thumbnail */}
        <div className={`drawer-card drawer-card--3 ${manga.rear2Gradient}`}>
          <img
            src={manga.tertiaryCover}
            alt=""
            loading="lazy"
            draggable={false}
            style={{ opacity: 0.5 }}
          />
        </div>

        {/* Card 2: middle thumbnail */}
        <div className={`drawer-card drawer-card--2 ${manga.rear1Gradient}`}>
          <img
            src={manga.secondaryCover}
            alt=""
            loading="lazy"
            draggable={false}
            style={{ opacity: 0.55 }}
          />
        </div>

        {/* Card 1 (front): top thumbnail with title */}
        <div className={`drawer-card drawer-card--1 ${manga.coverGradient}`}>
          <img
            src={manga.cover}
            alt={`Cover of ${manga.title}`}
            loading="lazy"
            draggable={false}
            style={{ opacity: 0.65 }}
          />
          <div className="drawer-card__overlay" />
          <div className="drawer-card__title">{manga.title}</div>
        </div>

        {/* Strap / stripe */}
        <div className="drawer-strap" aria-hidden="true">
          <div className="drawer-strap__tab drawer-strap__tab--left" />
          <div className="drawer-strap__band" />
          <div className="drawer-strap__tab drawer-strap__tab--right" />
          <div className="drawer-strap__knot" />
        </div>

        {/* Front lip — clips the bottom of the cards */}
        <div className="drawer__lip" />

        {/* Side wall shadows */}
        <div className="drawer__wall drawer__wall--left" />
        <div className="drawer__wall drawer__wall--right" />

        {/* Fixed bottom anchors */}
        <span className="drawer-anchor drawer-anchor--left" aria-hidden="true" />
        <span className="drawer-anchor drawer-anchor--right" aria-hidden="true" />
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
