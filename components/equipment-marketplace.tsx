import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    title: "Heavy machinery",
    subtitle: "Excavators, loaders & more",
    image: "/images/categories/heavy-machinery.jpg",
    href: "/marketplace?category=Heavy Machinery",
  },
  {
    title: "Power tools",
    subtitle: "Drills, grinders & saws",
    image: "/images/categories/power-tools.jpg",
    href: "/marketplace?category=Power Tools",
  },
  {
    title: "Welding equipment",
    subtitle: "Machines, cables & accessories",
    image: "/images/categories/welding.jpg",
    href: "/marketplace?category=Welding",
  },
  {
    title: "Compressors & industrial gear",
    subtitle: "Power for demanding jobs",
    image: "/images/categories/compressor.jpg",
    href: "/marketplace?search=compressor",
  },
  {
    title: "Safety equipment",
    subtitle: "Protection from head to toe",
    image: "/images/categories/safety.jpg",
    href: "/marketplace?category=Safety Gear",
  },
  {
    title: "Scaffolding",
    subtitle: "A solid foundation for every height",
    image: "/images/categories/scaffolding.jpg",
    href: "/marketplace?category=Scaffolding",
  },
];

export function EquipmentMarketplace() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              The equipment marketplace
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#102018] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              For every job. For every ambition.
            </h2>
          </div>

          <div className="max-w-sm lg:pb-1 lg:text-right">
            <p className="text-sm leading-relaxed text-[#6b7280] sm:text-base">
              From everyday essentials to heavy-duty machines. Find what your next project needs
              in the app.
            </p>
            <Link
              href="/#download"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1c2430] transition-colors hover:text-primary"
            >
              Explore categories in the app
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <li key={category.title}>
              <Link
                href={category.href}
                className="group flex h-full flex-col rounded-2xl bg-[#f4f5f7] p-3 transition-colors hover:bg-[#eef0f3]"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
                  <div>
                    <h3 className="text-base font-semibold text-[#1c2430]">{category.title}</h3>
                    <p className="mt-0.5 text-sm text-[#6b7280]">{category.subtitle}</p>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e1e4e8] bg-white text-[#1c2430] transition-colors group-hover:border-primary group-hover:text-primary">
                    <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
