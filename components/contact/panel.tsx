import { ContactChannels } from "@/components/contact/channels";
import { ContactForm } from "@/components/contact/form";

export function ContactPanel() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-10 lg:px-8 lg:py-16">
        <ContactChannels />
        <ContactForm />
      </div>
    </section>
  );
}
