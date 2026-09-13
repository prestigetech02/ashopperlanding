"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  name?: string;
  id?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: "field" | "ghost";
  align?: "start" | "end";
  ariaLabel?: string;
};

export function Select({
  name,
  id,
  value,
  defaultValue = "",
  onChange,
  options,
  placeholder = "Select",
  required,
  disabled,
  className,
  variant = "field",
  align = "start",
  ariaLabel,
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const selectedValue = value ?? internalValue;
  const selected = options.find((option) => option.value === selectedValue);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const choose = (next: string) => {
    if (value === undefined) setInternalValue(next);
    onChange?.(next);
    setOpen(false);
  };

  return (
    <div className={cn("relative min-w-0", className)} ref={ref}>
      {name ? (
        <input
          type="hidden"
          id={selectId}
          name={name}
          value={selectedValue}
          required={required}
        />
      ) : null}

      <button
        type="button"
        disabled={disabled}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={ariaLabel ?? placeholder}
        aria-controls={`${selectId}-listbox`}
        onClick={() => setOpen((current) => !current)}
        className={cn(
          "flex items-center justify-between gap-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60",
          variant === "field" &&
            "h-11 w-full rounded-xl border border-border bg-white px-3 text-left hover:border-primary/40",
          variant === "field" && open && "border-primary ring-2 ring-ring",
          variant === "ghost" &&
            "h-10 w-auto rounded-full px-3 font-medium text-nav hover:bg-muted hover:text-primary",
        )}
      >
        <span
          className={cn(
            "truncate",
            selected ? "text-foreground" : "text-muted-foreground",
            variant === "ghost" && "text-nav"
          )}
        >
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180",
            variant === "ghost" && "h-3.5 w-3.5"
          )}
        />
      </button>

      {open && (
        <ul
          id={`${selectId}-listbox`}
          role="listbox"
          className={cn(
            "absolute z-50 mt-2 max-h-64 overflow-auto rounded-xl border border-border bg-background py-1.5 shadow-lg",
            align === "end" ? "right-0" : "left-0",
            variant === "field" ? "w-full" : "min-w-[9rem]"
          )}
        >
          {options.map((option) => {
            const isActive = option.value === selectedValue;
            return (
              <li key={option.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => choose(option.value)}
                  className={cn(
                    "flex w-full px-4 py-2 text-left text-sm transition-colors hover:bg-muted hover:text-primary",
                    isActive ? "font-semibold text-primary" : "text-nav"
                  )}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
