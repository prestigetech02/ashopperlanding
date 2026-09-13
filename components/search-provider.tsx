"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { SearchModal } from "@/components/search-modal";

type SearchContextValue = {
  open: boolean;
  query: string;
  openSearch: (initialQuery?: string) => void;
  closeSearch: () => void;
  setQuery: (query: string) => void;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const openSearch = useCallback((initialQuery = "") => {
    setQuery(initialQuery);
    setOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({ open, query, openSearch, closeSearch, setQuery }),
    [open, query, openSearch, closeSearch]
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
      <SearchModal />
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within SearchProvider");
  return ctx;
}
