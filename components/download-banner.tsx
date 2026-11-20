import Image from "next/image";
import { cn } from "@/lib/utils";

type DownloadBannerProps = {
  variant?: "primary" | "light";
  title?: string;
  description?: string;
};

export function DownloadBanner({
  variant = "primary",
  title = "Ready to Find Your Next Equipment?",
  description = "Join buyers and vendors connecting on the world's first global engineering equipment marketplace.",
}: DownloadBannerProps) {
  const isLight = variant === "light";

  return (
    <section
      id="download"
      className={cn("overflow-hidden", isLight ? "bg-[#f3f4f6]" : "bg-primary")}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8",
          isLight
            ? "items-center py-12 lg:py-14"
            : "items-stretch py-0"
        )}
      >
        <div
          className={cn(
            "relative w-full",
            isLight
              ? "min-h-[260px] overflow-hidden rounded-2xl border border-border bg-white lg:min-h-[340px]"
              : "h-[18rem] sm:h-[22rem] lg:h-[26rem]"
          )}
        >
          <Image
            src="/images/homescreen2.png"
            alt="A-Shopper mobile app home screen"
            fill
            className={cn(
              "object-contain",
              isLight ? "object-center p-3 sm:p-4" : "object-center"
            )}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div
          className={cn(
            "text-center lg:text-left",
            !isLight && "py-10 sm:py-12 lg:py-14 lg:self-center"
          )}
        >
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight sm:text-4xl",
              isLight ? "text-foreground" : "text-white"
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mx-auto mt-3 max-w-lg text-base leading-relaxed lg:mx-0 sm:text-lg",
              isLight ? "text-muted-foreground" : "text-white/90"
            )}
          >
            {description}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href="/#download" aria-label="Download on the App Store">
              <Image
                src="/images/appstore.jpg"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="h-11 w-auto"
              />
            </a>
            <a href="/#download" aria-label="Get it on Google Play">
              <Image
                src="/images/playstore.png"
                alt="Get it on Google Play"
                width={160}
                height={48}
                className="h-11 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
