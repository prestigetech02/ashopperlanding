"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

const SUBJECTS = [
  "General Support",
  "Buyer Support",
  "Vendor & Partnerships",
  "Other",
];

const fieldClass =
  "h-11 w-full rounded-xl border border-border bg-white px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !subject || !message) return;

    setSending(true);

    const body = [`Name: ${name}`, `Email: ${email}`, `Subject: ${subject}`, "", message].join(
      "\n"
    );
    const mailto = `mailto:support@ashopper.africa?subject=${encodeURIComponent(
      `[A-Shopper Contact] ${subject}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      form.reset();
    }, 400);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-background px-6 py-12 text-center sm:px-10 lg:h-full lg:px-8">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <CircleCheck className="h-6 w-6" strokeWidth={2.2} />
        </span>
        <h2 className="mt-5 text-2xl font-bold text-foreground">Message ready to send</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your email client should open with your message to support@ashopper.africa. If it
          didn&apos;t, email us directly and we&apos;ll respond as soon as we can.
        </p>
        <Button type="button" className="mt-6" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">Send a message</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill in the form below and we&apos;ll follow up from our support inbox.
      </p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-foreground">
            Full Name
            <input
              id="name"
              name="name"
              required
              placeholder="Jane Doe"
              className={fieldClass}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-foreground">
            Email
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@company.com"
              className={fieldClass}
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-foreground">
          Subject
          <Select
            id="subject"
            name="subject"
            required
            defaultValue=""
            placeholder="Select a topic"
            options={SUBJECTS.map((subject) => ({ value: subject, label: subject }))}
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-foreground">
          Message
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us how we can help..."
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>

        <Button type="submit" disabled={sending}>
          {sending ? "Opening mail..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
