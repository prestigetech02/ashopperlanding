"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const hasMany = images.length > 1;

  useEffect(() => {
    setActive(0);
  }, [images]);

  const show = (index: number) => {
    if (!images.length) return;
    setActive((index + images.length) % images.length);
  };

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
        <Image
          src={images[active] ?? images[0]}
          alt={`${name} photo ${active + 1}`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {hasMany && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => show(active - 1)}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => show(active + 1)}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-foreground/80 px-2.5 py-1 text-[11px] font-medium text-white">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {hasMany && (
        <ul className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5">
          {images.map((src, index) => (
            <li key={`${src}-${index}`}>
              <button
                type="button"
                aria-label={`View photo ${index + 1}`}
                aria-pressed={index === active}
                onClick={() => setActive(index)}
                className={cn(
                  "relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-muted",
                  index === active ? "border-primary ring-2 ring-primary/30" : "border-border"
                )}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="120px" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
