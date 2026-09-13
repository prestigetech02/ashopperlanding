import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  href?: string;
  className?: string;
};

export function BrandLogo({ href = "/", className }: BrandLogoProps) {
  return (
    <Link href={href} className={cn("flex shrink-0 items-center", className)}>
      <Image
        src="/images/as-logo-lockup.png"
        alt="A Shopper Global Limited"
        width={253}
        height={81}
        className="h-10 w-auto object-contain sm:h-11"
        priority
      />
    </Link>
  );
}
