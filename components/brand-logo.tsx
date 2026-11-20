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
        src="/images/ashopper-logo.png"
        alt="A Shopper"
        width={1046}
        height={351}
        className="h-10 w-auto object-contain sm:h-12"
        priority
      />
    </Link>
  );
}
