export type CurrencyCode = "NGN" | "USD" | "GBP" | "EUR";

export type Currency = {
  code: CurrencyCode;
  symbol: string;
  label: string;
  ngnPerUnit: number;
};

export const CURRENCIES: Currency[] = [
  { code: "NGN", symbol: "₦", label: "NGN", ngnPerUnit: 1 },
  { code: "USD", symbol: "$", label: "USD", ngnPerUnit: 1500 },
  { code: "GBP", symbol: "£", label: "GBP", ngnPerUnit: 1900 },
  { code: "EUR", symbol: "€", label: "EUR", ngnPerUnit: 1650 },
];

export const DEFAULT_CURRENCY = CURRENCIES[0];

export function getCurrency(code: string | null | undefined) {
  return CURRENCIES.find((item) => item.code === code) ?? DEFAULT_CURRENCY;
}

export function formatAmount(ngn: number, currency: Currency, perDay = false) {
  const value = ngn / currency.ngnPerUnit;
  const formatted = new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: currency.code === "NGN" ? 0 : 0,
  }).format(Math.round(value));

  return `${currency.symbol}${formatted}${perDay ? " / day" : ""}`;
}
