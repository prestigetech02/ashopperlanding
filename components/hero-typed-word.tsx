"use client";

import { useEffect, useState } from "react";

const WORDS = ["Equipment", "Tools", "Machines", "Materials"] as const;

type Phase = "typing" | "holding" | "deleting";

export function HeroTypedWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const current = WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 85);
      } else {
        timeout = setTimeout(() => setPhase("holding"), 1600);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 45);
    } else {
      timeout = setTimeout(() => {
        setWordIndex((index) => (index + 1) % WORDS.length);
        setPhase("typing");
      }, 220);
    }

    return () => clearTimeout(timeout);
  }, [phase, text, wordIndex]);

  return (
    <span className="inline-flex items-baseline text-primary" aria-live="polite">
      <span>{text}</span>
      <span
        aria-hidden
        className="ml-[1px] inline-block h-[0.9em] w-[2px] translate-y-[0.08em] animate-pulse bg-primary"
      />
    </span>
  );
}
