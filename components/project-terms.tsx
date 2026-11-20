import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const OPTIONS = [
  {
    label: "Buy",
    labelClass: "bg-[#fff1e6] text-primary",
    title: "Own what moves you forward.",
    body: "Build your toolkit or grow your fleet. Compare equipment and speak directly with the vendor before you buy.",
    point: "Equip your business for the long run",
    href: "/marketplace?type=sale",
    image: "/images/ways/buy-drill.jpg",
    alt: "Teal cordless impact driver",
    fit: "object-contain",
  },
  {
    label: "Rent",
    labelClass: "bg-[#e7f6ee] text-[#178a45]",
    title: "The right machine. Just when you need it.",
    body: "Keep your project flexible. Discuss availability, rental duration and terms directly with the vendor.",
    point: "Agree a rental that fits your project",
    href: "/marketplace?type=rent",
    image: "/images/ways/rent-excavator.jpg",
    alt: "Yellow mini excavator on a job site",
    fit: "object-cover",
  },
];

export function ProjectTerms() {
  return (
    <section className="bg-[#f4f6f5]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              More ways to get to work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#102018] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Your project. Your terms.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#6b7280] sm:text-base lg:pb-1 lg:text-right">
            Make a long-term investment or get the equipment you need for the job at hand.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {OPTIONS.map((option) => (
            <Link
              key={option.label}
              href={option.href}
              className="flex flex-col gap-6 rounded-3xl bg-white p-6 transition-shadow hover:shadow-md sm:p-8 lg:flex-row lg:items-center"
            >
              <div className="min-w-0 flex-1">
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${option.labelClass}`}
                >
                  {option.label}
                </span>
                <h3 className="mt-4 max-w-sm text-2xl font-bold tracking-tight text-[#102018] sm:text-[1.7rem] sm:leading-snug">
                  {option.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6b7280] sm:text-base">
                  {option.body}
                </p>
                <p className="mt-5 inline-flex items-start gap-2 text-sm font-medium text-[#1c2430]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#178a45]" strokeWidth={2.6} />
                  {option.point}
                </p>
              </div>
              <div className="relative mx-auto h-44 w-full max-w-[16rem] shrink-0 overflow-hidden rounded-2xl bg-white sm:h-48 lg:mx-0 lg:w-52">
                <Image
                  src={option.image}
                  alt={option.alt}
                  fill
                  sizes="240px"
                  className={option.fit}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
