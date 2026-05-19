import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Crown,
  QrCode,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07172f] text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              The DBS
            </p>
            <h1 className="text-xl font-semibold">Social Club</h1>
          </div>

          <Link
            href="/auth/login"
            className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            Login
          </Link>
        </header>

        <div className="grid flex-1 items-center gap-12 py-16 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/70">
              Beauty. Wellness. Culture. Connection.
            </p>

            <h2 className="text-5xl font-semibold leading-tight md:text-6xl">
              When your appointment ends, the conversation does not have to.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              The DBS Social Club is a digital membership experience created for
              community, events, perks, stories, and exclusive access beyond the
              salon chair.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/auth/login"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-[#07172f]"
              >
                Enter the App <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/app"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 font-semibold text-white"
              >
                View Demo
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-[#102b5c] to-[#020817] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                    Member Card
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    DBS Social Club
                  </h3>
                </div>
                <Crown className="h-9 w-9 text-[#d7b56d]" />
              </div>

              <div className="mt-12 rounded-[1.5rem] bg-white p-6 text-[#07172f]">
                <QrCode className="mx-auto h-36 w-36" />
                <p className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-[#07172f]/50">
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
            text="Exclusive access to DBS Social Club experiences."
          />
          <FeatureCard
            icon={<Sparkles />}
            title="Member Perks"
            text="Special drops, benefits, and community-only perks."
          />
          <FeatureCard
            icon={<ShieldCheck />}
            title="Admin Scanning"
            text="Team QR scanning for check-ins and attendance tracking."
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
    <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
      <div className="mb-4 text-[#d7b56d]">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
    </div>
  );
}
