import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Sparkles,
  TicketCheck
} from "lucide-react";

export default function AppHomePage() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#f5efe3] p-6 text-[#07172f] shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#8f1d2c]">
              The DBS Social Club
            </p>

            <h1 className="mt-3 text-4xl font-semibold leading-tight">
              Welcome back,
              <br />
              Diamond
            </h1>
          </div>

          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D7B56D] via-[#F8E8B8] to-[#8A6A2F] shadow-lg shadow-black/20">
            <div className="absolute inset-[6px] rounded-xl border border-white/30" />

            <div className="relative h-7 w-7 rotate-45 rounded-[5px] border border-white/70 bg-white/20 shadow-inner">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/25" />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/25" />
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-xs text-sm leading-6 text-[#07172f]/70">
          Beauty. Wellness. Culture. Community. Your DBS Social Club membership experience all in one place.
        </p>

        <Link
          href="/app/events"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#07172f] px-5 py-3 text-sm font-semibold text-[#f5efe3]"
        >
          Explore Events
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <Link
          href="/app/member-card"
          className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5efe3] text-[#07172f]">
            <TicketCheck className="h-6 w-6" />
          </div>

          <h2 className="mt-5 text-lg font-semibold text-[#f5efe3]">
            Member Card
          </h2>

          <p className="mt-2 text-sm leading-6 text-white/60">
            Access your digital membership card and QR check-in.
          </p>
        </Link>

        <Link
          href="/app/events"
          className="rounded-[2rem] border border-[#8f1d2c]/20 bg-[#8f1d2c]/20 p-5 backdrop-blur-xl"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5efe3] text-[#8f1d2c]">
            <CalendarDays className="h-6 w-6" />
          </div>

          <h2 className="mt-5 text-lg font-semibold text-[#f5efe3]">
            Events
          </h2>

          <p className="mt-2 text-sm leading-6 text-white/70">
            RSVP, event updates, check-ins, and exclusive experiences.
          </p>
        </Link>
      </section>

      <section className="rounded-[2rem] border border-[#d7b56d]/20 bg-gradient-to-br from-[#d66a2c] to-[#8f1d2c] p-6 shadow-xl">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-[#f5efe3]" />

          <p className="text-xs uppercase tracking-[0.35em] text-[#f5efe3]/70">
            Member Benefits
          </p>
        </div>

        <h2 className="mt-4 text-2xl font-semibold text-[#f5efe3]">
          Your community beyond the salon chair.
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#f5efe3]/80">
          Enjoy exclusive drops, curated conversations, private events, networking experiences, and member-only access through The DBS Social Club.
        </p>
      </section>

      <Link
        href="/app/admin/scanner"
        className="block rounded-[2rem] border border-white/10 bg-[#f5efe3] px-5 py-5 text-center text-base font-semibold text-[#07172f] shadow-xl"
      >
        Admin / Team QR Scanner
      </Link>
    </div>
  );
}
