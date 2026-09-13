import Image from "next/image";

export function DownloadBanner() {
  return (
    <section className="bg-primary">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-14">
        <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-white/20 bg-white/10 lg:min-h-[280px]">
          <div className="flex h-full min-h-[220px] items-center justify-center text-sm text-white/80 lg:min-h-[280px]">
            Download banner image
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Find Your Next Equipment?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-white/90 lg:mx-0 sm:text-lg">
            Join buyers and vendors connecting on the world&apos;s first global engineering
            equipment marketplace.
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
