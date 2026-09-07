import { BookMarked, Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-3.5 lg:px-10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card-shell)]">
            <BookMarked size={18} className="text-[var(--gold)]" />
          </div>
          <span className="font-display text-lg font-600 tracking-tight text-[var(--text)]">
            Manga<span className="text-[var(--gold)]">Forge</span>
          </span>
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          <a className="header-link active" href="#browse">Browse</a>
          <a className="header-link" href="#library">Library</a>
          <a className="header-link" href="#updates">Updates</a>
        </nav>

        <div className="flex items-center gap-1">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-soft)] transition-colors hover:bg-[var(--bg-raised)] hover:text-[var(--text)]"
            aria-label="Search"
          >
            <Search size={17} />
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-soft)] transition-colors hover:bg-[var(--bg-raised)] hover:text-[var(--text)]"
            aria-label="Notifications"
          >
            <Bell size={17} />
          </button>
          <div className="ml-1.5 h-8 w-8 rounded-full border border-[var(--border)] bg-gradient-to-br from-[var(--card-shell)] to-[var(--bg-raised)]" />
        </div>
      </div>
    </header>
  );
}
