import Link from "next/link";
import { CalendarDays, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const member = {
  name: "Diamond",
  id: "DBS-0001",
  tier: "VIP Member"
};

const events = [
  {
    title: "The Social Edit",
    date: "Coming Soon",
    status: "RSVP opens soon"
  },
  {
    title: "DBS Social Club Mixer",
    date: "Coming Soon",
    status: "Members first"
  }
];

export default function AppHomePage() {
  const qrValue = member.id;

  return (
    <div className="space-y-5 text-white">
      <header className="pt-2 text-center">
        <img
          src="/dbs-social-logo.svg"
          alt="The DBS Social Club"
          className="mx-auto h-20 w-auto invert"
        />
      </header>

      <section className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl">
        <p className="text-sm text-white/50">Welcome back,</p>
        <h1 className="mt-1 text-4xl font-semibold tracking-tight">
          {member.name}
        </h1>
        <p className="mt-2 text-sm text-orange-100/70">{member.tier}</p>
      </section>

      <section className="rounded-3xl bg-white p-6 text-black shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-black/45">
              Member ID
            </p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight">
              {member.id}
            </h2>
          </div>
          <QrCode className="h-7 w-7" />
        </div>

        <div className="mt-6 flex justify-center rounded-3xl border border-black/10 bg-white p-4">
          <QRCodeSVG value={qrValue} size={210} includeMargin />
        </div>

        <p className="mt-4 text-center text-xs uppercase tracking-widest text-black/45">
          Scan for member check-in
        </p>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Events</h2>
          <Link href="/app/events" className="text-sm text-white/50">
            View all
          </Link>
        </div>

        {events.map((event) => (
          <article
            key={event.title}
            className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                <CalendarDays className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-semibold">{event.title}</h3>
                <p className="mt-1 text-sm text-white/55">{event.date}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-orange-100/60">
                  {event.status}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
