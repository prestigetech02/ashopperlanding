"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  CURRENCIES,
  DEFAULT_CURRENCY,
  formatAmount,
  getCurrency,
  type Currency,
  type CurrencyCode,
} from "@/lib/currency";

const STORAGE_KEY = "ashopper-currency";

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (ngn: number, perDay?: boolean) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(DEFAULT_CURRENCY);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    setCurrencyState(getCurrency(saved));
  }, []);

  const value = useMemo<CurrencyContextValue>(
    () => ({
      currency,
      setCurrency: (code) => {
        const next = getCurrency(code);
        setCurrencyState(next);
        window.localStorage.setItem(STORAGE_KEY, next.code);
      },
      formatPrice: (ngn, perDay = false) => formatAmount(ngn, currency, perDay),
    }),
    [currency]
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
}

export { CURRENCIES };
