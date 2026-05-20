import Link from "next/link";
import { ArrowRight, CalendarDays, Crown, QrCode, ShieldCheck, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <img
            src="/dbs-social-logo.svg"
            alt="The DBS Social Club"
            className="h-16 w-auto invert"
          />

          <Link
            href="/auth/login"
            className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white"
          >
            Member Login
          </Link>
        </header>

        <div className="grid flex-1 items-center gap-12 py-16 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-orange-100">
              Beauty. Wellness. Culture. Connection.
            </p>

            <h1 className="max-w-2xl text-5xl font-semibold leading-none tracking-tight md:text-7xl">
              Your DBS Social Club membership lives here.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Access your member card, event check-ins, VIP perks, digital products,
              community updates, and DBS Social Club information in one clean app
              experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/auth/login"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-black"
              >
                Enter Member Portal <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl">
            <div className="rounded-3xl bg-neutral-900 p-6 shadow-inner">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/45">
                    Member Card
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    DBS Social Club
                  </h3>
                </div>

                <Crown className="h-9 w-9 text-orange-200" />
              </div>

              <div className="mt-12 rounded-3xl bg-white p-6 text-black shadow-xl">
                <QrCode className="mx-auto h-36 w-36" />
                <p className="mt-4 text-center text-xs uppercase tracking-widest text-black/50">
                  Scan for Entry
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-white/40">Status</p>
                  <p className="font-semibold">Active</p>
                </div>

                <div>
                  <p className="text-white/40">Tier</p>
                  <p className="font-semibold">Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-4 pb-8 md:grid-cols-3">
          <FeatureCard
            icon={<CalendarDays />}
            title="Private Events"
            text="RSVP, view updates, and check in with your member QR code."
          />

          <FeatureCard
            icon={<Sparkles />}
            title="Digital Products"
            text="Access DBS classes, downloads, templates, and VIP-only files."
          />

          <FeatureCard
            icon={<ShieldCheck />}
            title="Member Support"
            text="Ask questions, manage your profile, and stay connected to the club."
          />
        </section>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  text
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl">
      <div className="mb-4 text-orange-200">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
    </div>
  );
}
