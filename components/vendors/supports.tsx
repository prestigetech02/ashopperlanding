const SUPPORTS = [
  {
    title: "Fast payout",
    points: [
      "Get paid once the buyer confirms delivery",
      "Track payout status straight from the vendor app",
    ],
  },
  {
    title: "Settlement in local currency",
    points: [
      "Receive payouts in your local currency",
      "Clear amounts shown before you accept an order",
    ],
  },
  {
    title: "Global marketplace to sell",
    points: [
      "List equipment for buyers beyond your city",
      "Reach engineering buyers across the A-Shopper network",
    ],
  },
  {
    title: "No hidden charges",
    points: [
      "Free to join",
      "You only pay when you sell, on terms shown in the app",
    ],
  },
];

export function VendorsSupports() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#f97316_0%,#fb923c_22%,#fdba74_42%,#fff7ed_72%,#ffffff_92%)]">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.55rem] lg:leading-[1.15]">
            A-Shopper supports for vendors
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            List equipment, talk to buyers, and get paid with confidence, all from the phone you
            already use on site.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:gap-6">
          {SUPPORTS.map((item) => (
            <li
              key={item.title}
              className="rounded-[1.75rem] bg-white p-6 sm:p-7"
            >
              <h3 className="text-xl font-bold tracking-tight text-[#0f2a3d] sm:text-2xl">
                {item.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
