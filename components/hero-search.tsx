"use client";

import { Search } from "lucide-react";
import { useSearch } from "@/components/search-provider";

export function HeroSearch() {
  const { openSearch, query } = useSearch();

  return (
    <div className="mt-8 flex max-w-xl flex-col gap-2 rounded-2xl border border-border bg-white p-2 sm:flex-row sm:items-center sm:rounded-full sm:p-1.5">
      <div className="flex min-w-0 flex-1 items-center gap-2 px-2 sm:px-0">
        <Search className="ml-1 h-5 w-5 shrink-0 text-muted-foreground sm:ml-3" />
        <input
          type="search"
          value={query}
          onFocus={() => openSearch(query)}
          onChange={(event) => openSearch(event.target.value)}
          placeholder="Search for equipment, tools, machinery..."
          className="h-10 min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          autoComplete="off"
          aria-haspopup="dialog"
        />
      </div>
      <button
        type="button"
        onClick={() => openSearch(query)}
        className="w-full shrink-0 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover sm:w-auto"
      >
        Search
      </button>
    </div>
  );
}
