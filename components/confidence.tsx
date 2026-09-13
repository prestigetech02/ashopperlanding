import { MessageCircle, Search, Shield, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Search,
    title: "Browse Verified Equipment",
    body: "Search thousands of listings for power tools, heavy machinery, and rentals from verified vendors.",
  },
  {
    icon: ShieldCheck,
    title: "Buy With or Without Money Protection",
    body: "Complete your purchase directly with a vendor, or choose Money Protection for extra peace of mind, your payment is held safely and only released once your equipment is delivered and confirmed.",
  },
  {
    icon: MessageCircle,
    title: "Chat Directly With Sellers",
    body: "Message vendors in-app to ask questions, negotiate prices, and request custom quotes. Get a push alert the moment they reply.",
  },
  {
    icon: Shield,
    title: "Trusted Vendors Worldwide",
    body: "Verified sellers, ratings and reviews, for a safer buying experience.",
  },
];

export function Confidence() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Shop With Confidence
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The safest way to find engineering equipment.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Connect with trusted, verified vendors, choose how you pay, and get it delivered,
          all handled right from your phone.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="group rounded-2xl border border-border bg-surface p-5 sm:p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-white text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
