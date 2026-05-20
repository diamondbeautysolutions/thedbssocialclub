import Link from "next/link";
import {
  Bell,
  Crown,
  FileText,
  MessageCircle,
  Plus,
  QrCode,
  Sparkles,
  TicketCheck
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function AppHomePage() {
  const qrValue = JSON.stringify({
    id: "DBS-0001",
    name: "Diamond",
    membership: "VIP Member",
    status: "Active"
  });

  return (
    <div className="min-h-screen bg-[#d9d9d9] px-1 pb-4 pt-3 text-black">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#d9d9d9] px-4 pb-6 pt-5 shadow-2xl">
        <div className="absolute left-5 top-5 text-3xl leading-none">☼</div>
        <div className="absolute right-5 top-5 flex items-center gap-3 rounded-full bg-white/70 px-3 py-1 text-xs shadow-sm">
          <span>VIP</span>
          <span className="h-4 w-px bg-black/30" />
          <span>01</span>
        </div>

        <div className="mt-12 text-center">
          <img
            src="/dbs-social-logo.svg"
            alt="The DBS Social Club"
            className="mx-auto h-40 w-auto object-contain text-black"
          />
          <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-black/30">
            Beauty. Wellness. Culture. Community.
          </p>
        </div>

        <div className="mt-8 text-center">
          <h1 className="text-4xl font-light tracking-tight">
            Welcome back, Diamond
          </h1>
          <p className="mt-2 text-base text-black/55">
            diamond@thedbssocial.com
          </p>
        </div>

        <div className="mt-7 flex items-center justify-between text-2xl leading-none">
          <Plus className="h-5 w-5" />
          <Plus className="h-5 w-5" />
        </div>

        <section className="mt-4 grid grid-cols-2 gap-3">
          <Link
            href="/app/member-card"
            className="min-h-[160px] rounded-xl bg-white p-4 text-black shadow-lg"
          >
            <h2 className="text-3xl font-medium leading-none">Member</h2>
            <p className="mt-2 text-sm text-black/55">Digital card</p>
            <div className="mt-7 flex items-end justify-between">
              <QrCode className="h-16 w-16" />
              <span className="text-3xl">→</span>
            </div>
          </Link>

          <Link
            href="/app/digital-products"
            className="min-h-[160px] rounded-xl bg-black p-4 text-white shadow-lg"
          >
            <h2 className="text-3xl font-medium leading-none">Digital</h2>
            <p className="mt-2 text-sm text-white/60">Classes + files</p>
            <div className="mt-7 flex items-end justify-between">
              <FileText className="h-16 w-16" />
              <span className="text-3xl">→</span>
            </div>
          </Link>
        </section>

        <section className="mt-4 rounded-xl bg-white p-4 text-black shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-3xl font-medium leading-none">VIP</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-black/45">
                Membership Card
              </p>
            </div>
            <Crown className="h-7 w-7" />
          </div>

          <div className="mt-5 grid grid-cols-[1fr_auto] items-end gap-4">
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div>
                <p className="text-black/45">Points</p>
                <p className="mt-1 text-2xl font-medium">0</p>
              </div>
              <div>
                <p className="text-black/45">Balance</p>
                <p className="mt-1 text-2xl font-medium">0</p>
              </div>
              <div>
                <p className="text-black/45">Level</p>
                <p className="mt-1 text-2xl font-medium">VIP</p>
              </div>
            </div>

            <div className="rounded-lg border border-black/10 bg-white p-2">
              <QRCodeSVG value={qrValue} size={70} includeMargin />
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-xl bg-black p-4 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium uppercase tracking-[0.18em]">
              Social Card
            </p>
            <p className="text-lg">0/5</p>
          </div>

          <div className="mt-5 flex items-center justify-between">
            {[0, 1, 2, 3, 4].map((item) => (
              <Sparkles key={item} className="h-5 w-5 text-white/45" />
            ))}
            <TicketCheck className="h-6 w-6 text-white" />
          </div>
        </section>

        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.25em] text-black/25">
          The conversation continues here
        </p>

        <div className="mt-4 flex items-center justify-between text-2xl leading-none">
          <Plus className="h-5 w-5" />
          <Plus className="h-5 w-5" />
        </div>

        <section className="mt-3 grid grid-cols-2 gap-3">
          <Link
            href="/app/info-chat"
            className="rounded-xl bg-white p-4 text-black shadow-lg"
          >
            <MessageCircle className="h-7 w-7" />
            <p className="mt-4 text-lg font-medium">Ask DBS</p>
            <p className="mt-1 text-xs text-black/50">Info chat</p>
          </Link>

          <Link
            href="/app/events"
            className="rounded-xl bg-white p-4 text-black shadow-lg"
          >
            <Bell className="h-7 w-7" />
            <p className="mt-4 text-lg font-medium">Events</p>
            <p className="mt-1 text-xs text-black/50">RSVP + check in</p>
          </Link>
        </section>
      </div>
    </div>
  );
}
