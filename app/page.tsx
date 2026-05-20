import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, MessageCircle, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <img src="/dbs-social-logo.svg" alt="The DBS Social Club" className="h-20 w-auto invert" />
          <Link href="/auth/login" className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white">Member Login</Link>
        </header>

        <div className="flex flex-1 items-center py-16">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-orange-100">Beauty. Wellness. Culture. Connection.</p>
            <h1 className="text-5xl font-semibold leading-none tracking-tight md:text-7xl">When your appointment ends, the conversation does not have to.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">The DBS Social Club is a digital membership space for culture, community, beauty, wellness, private events, digital drops, and exclusive member access.</p>
            <div className="mt-8"><Link href="/auth/login" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-black">Enter Member Portal <ArrowRight className="h-4 w-4" /></Link></div>
          </div>
        </div>

        <section className="grid gap-4 pb-8 md:grid-cols-4">
          <FeatureCard icon={<CalendarDays />} title="Events" text="Private experiences, RSVP updates, and QR check-ins." />
          <FeatureCard icon={<Sparkles />} title="Member Perks" text="Exclusive access, community updates, and member moments." />
          <FeatureCard icon={<BookOpen />} title="Digital Products" text="Classes, downloads, templates, and VIP-only files." />
          <FeatureCard icon={<MessageCircle />} title="Ask DBS" text="A quick information chat for DBS Social Club questions." />
        </section>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl"><div className="mb-4 text-orange-200">{icon}</div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{text}</p></div>;
}
