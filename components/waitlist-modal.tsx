"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CircleCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type WaitlistModalProps = {
  open: boolean;
  onClose: () => void;
};

const fieldClass =
  "h-11 w-full rounded-xl border border-border bg-white px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring";

const BLOCKED_EMAIL_DOMAINS = new Set([
  "example.com",
  "example.org",
  "example.net",
  "test.com",
  "test.org",
  "test.net",
  "xyz.com",
  "mailinator.com",
  "tempmail.com",
  "temp-mail.org",
  "guerrillamail.com",
  "10minutemail.com",
  "yopmail.com",
  "trashmail.com",
  "fakeinbox.com",
  "sharklasers.com",
  "throwawaymail.com",
  "dispostable.com",
  "localhost",
]);

const BLOCKED_LOCAL_PARTS = new Set(["test", "testing", "fake", "noreply", "no-reply"]);

function getEmailValidationError(email: string) {
  const normalized = email.trim().toLowerCase();
  const atIndex = normalized.lastIndexOf("@");

  if (atIndex <= 0 || atIndex === normalized.length - 1) {
    return "Enter a valid email address.";
  }

  const localPart = normalized.slice(0, atIndex);
  const domain = normalized.slice(atIndex + 1);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return "Enter a valid email address.";
  }

  if (
    BLOCKED_EMAIL_DOMAINS.has(domain) ||
    domain.endsWith(".test") ||
    domain.endsWith(".invalid") ||
    domain.endsWith(".local") ||
    domain.endsWith(".example")
  ) {
    return "Please use a real email address, not a test or placeholder one.";
  }

  if (BLOCKED_LOCAL_PARTS.has(localPart)) {
    return "Please use a real email address, not a test or placeholder one.";
  }

  return null;
}

export function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const titleId = useId();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = requestAnimationFrame(() => {
      nameRef.current?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setSending(false);
      setEmailError(null);
    }
  }, [open]);

  if (!open) return null;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const interest = String(data.get("interest") || "").trim();

    if (!name || !email || !interest) return;

    const validationError = getEmailValidationError(email);
    if (validationError) {
      setEmailError(validationError);
      emailRef.current?.focus();
      return;
    }

    setEmailError(null);
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      form.reset();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10 sm:px-6">
      <button
        type="button"
        aria-label="Close waitlist"
        className="absolute inset-0 bg-[#1b365d]/45"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-border bg-background shadow-[0_24px_60px_-28px_rgba(16,32,24,0.45)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <div>
            <h2 id={titleId} className="text-xl font-bold tracking-tight text-foreground">
              Join our waitlist
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-nav hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-5 py-5 sm:px-6 sm:py-6">
          {submitted ? (
            <div className="py-4 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CircleCheck className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">You&apos;re on the list</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Thanks for joining. We&apos;ll reach out when A-Shopper is ready for you.
              </p>
              <Button type="button" className="mt-6" onClick={onClose}>
                Done
              </Button>
            </div>
          ) : (
            <>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Be first to download A-Shopper and start buying, selling, or renting engineering
                equipment.
              </p>

              <form onSubmit={onSubmit} className="mt-5 grid gap-4">
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Full name
                  <input
                    ref={nameRef}
                    id="waitlist-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className={fieldClass}
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Email
                  <input
                    ref={emailRef}
                    id="waitlist-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    aria-invalid={Boolean(emailError)}
                    className={cn(fieldClass, emailError && "border-red-500 focus-visible:ring-red-500")}
                    onChange={() => {
                      if (emailError) setEmailError(null);
                    }}
                  />
                  {emailError && <span className="text-xs font-normal text-red-600">{emailError}</span>}
                </label>

                <fieldset className="grid gap-2">
                  <legend className="text-sm font-medium text-foreground">I want to</legend>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: "buy", label: "Buy" },
                      { value: "rent", label: "Rent" },
                      { value: "sell", label: "Sell" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={cn(
                          "flex cursor-pointer items-center justify-center rounded-xl border border-border px-2 py-2.5 text-sm font-medium text-nav has-[:checked]:border-primary has-[:checked]:bg-primary-soft has-[:checked]:text-primary"
                        )}
                      >
                        <input
                          type="radio"
                          name="interest"
                          value={option.value}
                          required
                          className="sr-only"
                          defaultChecked={option.value === "buy"}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <Button type="submit" className="mt-1 w-full" disabled={sending}>
                  {sending ? "Joining..." : "Join waitlist"}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
