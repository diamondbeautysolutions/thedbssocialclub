import Link from "next/link";
import {
  CalendarDays,
  Crown,
  QrCode,
  Sparkles,
  TicketCheck
} from "lucide-react";

export default function AppHomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Welcome to
            </p>

            <h1 className="mt-3 text-3xl font-semibold leading-tight">
              The DBS Social Club
            </h1>
          </div>

          <Crown className="h-9 w-9 text-[#d7b56d]" />
        </div>

        <p className="mt-4 text-sm leading-6 text-white/70">
          Your digital membership card, event access, perks, and exclusive DBS
          Social Club updates all in one place.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <Link
          href="/app/member-card"
          className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5"
        >
          <QrCode className="h-7 w-7 text-[#d7b56d]" />
          <h2 className="mt-4 font-semibold">Member Card</h2>
          <p className="mt-1 text-xs text-white/60">View your QR code.</p>
        </Link>

        <Link
          href="/app/events"
          className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5"
        >
          <TicketCheck className="h-7 w-7 text-[#d7b56d]" />
          <h2 className="mt-4 font-semibold">Events</h2>
          <p className="mt-1 text-xs text-white/60">Check in and attend.</p>
        </Link>
      </section>

      <section className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-[#d7b56d]" />
          <h2 className="font-semibold">Member Perks</h2>
        </div>

        <p className="mt-3 text-sm leading-6 text-white/70">
          Enjoy priority access, exclusive DBS events, community experiences,
          and member-only updates.
        </p>
      </section>

      <section className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-6 w-6 text-[#d7b56d]" />
          <h2 className="font-semibold">Next Event</h2>
        </div>

        <p className="mt-3 text-sm text-white/60">
          No upcoming event has been added yet.
        </p>
      </section>

      <Link
        href="/app/admin/scanner"
        className="block rounded-[1.5rem] border border-white/10 bg-white px-5 py-4 text-center font-semibold text-[#07172f]"
      >
        Admin / Team QR Scanner
      </Link>
    </div>
  );
}
