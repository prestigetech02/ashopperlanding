"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistModal } from "@/components/waitlist-modal";

const SOLUTIONS = [
  {
    title: "Machinery dealers",
    line: "Move inventory. Reach more buyers.",
    detail:
      "List excavators, loaders, and plant equipment for sale. Chat with verified buyers in-app, negotiate in real time, and get paid through Money Protection once delivery is confirmed.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    alt: "Heavy machinery on an industrial worksite",
  },
  {
    title: "Tool & parts suppliers",
    line: "Stock listed. Buyers ready to chat.",
    detail:
      "Put power tools, spare parts, and industrial components in front of buyers who need gear for the job site. Fast listing from your phone, direct chat, and secure checkout.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
    alt: "Power tools and equipment on a workbench",
  },
  {
    title: "Rental vendors",
    line: "Idle machines earning every day.",
    detail:
      "Turn unused equipment into daily revenue. Publish rental terms, agree hire periods in chat, and receive payment through Money Protection after the renter confirms delivery.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
    alt: "Construction equipment available for hire",
  },
];

export function VendorsSolutions() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0f2a3d] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Built for every kind of equipment seller
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            List once, chat with serious buyers, and get paid through Money Protection, whether
            you sell machines, supply tools, or rent gear by the day.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SOLUTIONS.map((item) => (
            <li key={item.title}>
              <article className="group relative flex min-h-[28rem] overflow-hidden rounded-[1.75rem] sm:min-h-[30rem] lg:min-h-[32rem]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,24,40,0.88)_0%,rgba(15,24,40,0.45)_38%,rgba(15,24,40,0.08)_68%,transparent_100%)] transition-opacity duration-300 group-hover:opacity-0"
                />

                <div className="relative mt-auto flex w-full flex-col gap-2 px-6 pb-7 pt-24 transition-opacity duration-300 group-hover:opacity-0 sm:px-7 sm:pb-8">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-[1.65rem]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary sm:text-base">{item.line}</p>
                </div>

                <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-primary/80 px-6 py-8 transition-transform duration-500 ease-out group-hover:translate-y-0 sm:px-7 sm:py-9">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-[1.65rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-white/90 sm:text-base">{item.line}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/95 sm:text-[0.95rem]">
                    {item.detail}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center sm:mt-14">
          <Button type="button" onClick={() => setWaitlistOpen(true)}>
            Become a vendor
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </Button>
        </div>
      </div>

      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </section>
  );
}
