import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "icon";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
  disabled?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
  ariaLabel,
  disabled,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variant === "primary" &&
      "rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-primary-hover",
    variant === "outline" &&
      "rounded-full border border-primary bg-transparent px-5 py-2.5 text-sm text-primary hover:bg-primary-soft",
    variant === "ghost" &&
      "rounded-md px-3 py-2 text-sm text-nav hover:text-primary",
    variant === "icon" &&
      "h-10 w-10 rounded-full text-nav hover:bg-muted hover:text-primary",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
