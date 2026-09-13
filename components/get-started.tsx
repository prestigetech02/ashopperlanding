import Image from "next/image";
import { CreditCard, Search, Smartphone } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Smartphone,
    title: "Download the App",
    body: "Install A-Shopper on iOS or Android. Create your buyer account in under a minute, no business registration required.",
  },
  {
    number: "02",
    icon: Search,
    title: "Find Your Equipment",
    body: "Browse thousands of listings, filter by category and location, and chat directly with verified vendors.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Pay & Receive",
    body: "Complete your purchase, choose Money Protection if you'd like it, and confirm delivery in-app once your equipment arrives.",
  },
];

export function GetStarted() {
  return (
    <section id="download" className="bg-primary-soft">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Buy in 3 Simple Steps
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get started in minutes
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            From download to delivery, it&apos;s simple.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#download" aria-label="Download on the App Store">
              <Image
                src="/images/appstore.jpg"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="h-11 w-auto"
              />
            </a>
            <a href="#download" aria-label="Get it on Google Play">
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

        <ol className="grid gap-8 sm:grid-cols-3">
          {STEPS.map(({ number, icon: Icon, title, body }, index) => (
            <li key={number} className="relative">
              <div className="flex items-center gap-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {number}
                </span>
                <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                {index < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="ml-2 hidden h-px flex-1 border-t border-dashed border-primary/40 sm:block"
                  />
                )}
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

