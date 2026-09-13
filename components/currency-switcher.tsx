"use client";

import { Select } from "@/components/ui/select";
import { CURRENCIES, useCurrency } from "@/components/currency-provider";

export function CurrencySwitcher({ compact = false }: { compact?: boolean }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <Select
      variant="ghost"
      align="end"
      ariaLabel="Select currency"
      value={currency.code}
      onChange={(code) => setCurrency(code as typeof currency.code)}
      options={CURRENCIES.map((item) => ({
        value: item.code,
        label: `${item.symbol} ${item.code}`,
      }))}
      className={compact ? "w-full" : "w-auto"}
    />
  );
}
