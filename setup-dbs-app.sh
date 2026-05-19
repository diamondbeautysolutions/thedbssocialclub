#!/bin/bash

echo "Creating The DBS Social Club app..."

mkdir -p app/auth/login
mkdir -p app/app/member-card
mkdir -p app/app/events
mkdir -p app/app/perks
mkdir -p app/app/profile
mkdir -p app/app/admin/scanner
mkdir -p components
mkdir -p public/icons

cat > package.json <<'EOF'
{
  "name": "the-dbs-social-club",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "lucide-react": "latest",
    "qrcode.react": "latest"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "autoprefixer": "latest",
    "postcss": "latest",
    "tailwindcss": "latest",
    "typescript": "latest"
  }
}
EOF

cat > next.config.mjs <<'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
EOF

cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "ES2017"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

cat > postcss.config.mjs <<'EOF'
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};

export default config;
EOF

cat > tailwind.config.ts <<'EOF'
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        dbsBlue: "#07172f",
        dbsGold: "#d7b56d",
        dbsCream: "#f5efe3",
        dbsRed: "#8f1d2c"
      }
    }
  },
  plugins: []
};

export default config;
EOF

cat > app/globals.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #07172f;
  color: white;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}
EOF

cat > app/layout.tsx <<'EOF'
import type { Metadata, Viewport } from "next";
import "./globals.css";
import PWARegister from "@/components/pwa-register";

export const metadata: Metadata = {
  title: "The DBS Social Club",
  description: "The official membership app for The DBS Social Club.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DBS Social"
  },
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#07172f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
EOF

cat > components/pwa-register.tsx <<'EOF'
"use client";

import { useEffect } from "react";

export default function PWARegister() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      process.env.NODE_ENV === "production"
    ) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch((error) => {
          console.error("Service worker registration failed:", error);
        });
      });
    }
  }, []);

  return null;
}
EOF

cat > components/app-bottom-nav.tsx <<'EOF'
"use client";

import Link from "next/link";
import { CalendarDays, Gift, Home, IdCard, User } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/app", icon: Home },
  { label: "Card", href: "/app/member-card", icon: IdCard },
  { label: "Events", href: "/app/events", icon: CalendarDays },
  { label: "Perks", href: "/app/perks", icon: Gift },
  { label: "Profile", href: "/app/profile", icon: User }
];

export default function AppBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#07172f]/95 backdrop-blur-xl">
      <div className="mx-auto grid max-w-md grid-cols-5 px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-xs transition ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <Icon className="mb-1 h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
EOF

cat > app/page.tsx <<'EOF'
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
EOF

cat > app/auth/login/page.tsx <<'EOF'
import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07172f] px-5 py-10 text-white">
      <section className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">
            The DBS
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Social Club</h1>
          <p className="mt-3 text-sm leading-6 text-white/60">
            Login to access your member card, event check-ins, perks, and
            profile.
          </p>
        </div>

        <form className="mt-8 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-white/60">Email</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <Mail className="h-5 w-5 text-white/40" />
              <input
                type="email"
                placeholder="member@email.com"
                className="w-full bg-transparent text-white outline-none placeholder:text-white/30"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-white/60">Password</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <LockKeyhole className="h-5 w-5 text-white/40" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent text-white outline-none placeholder:text-white/30"
              />
            </div>
          </label>

          <Link
            href="/app"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-semibold text-[#07172f]"
          >
            Login <ArrowRight className="h-4 w-4" />
          </Link>
        </form>

        <p className="mt-6 text-center text-xs leading-5 text-white/45">
          Demo version. Authentication can be connected later through Supabase,
          Firebase, or another member database.
        </p>
      </section>
    </main>
  );
}
EOF

cat > app/app/layout.tsx <<'EOF'
import AppBottomNav from "@/components/app-bottom-nav";

export default function AppLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#07172f] pb-24 text-white">
      <div className="mx-auto min-h-screen max-w-md px-5 py-6">
        {children}
      </div>

      <AppBottomNav />
    </main>
  );
}
EOF

cat > app/app/page.tsx <<'EOF'
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
EOF

cat > app/app/member-card/page.tsx <<'EOF'
import { Crown, QrCode } from "lucide-react";

export default function MemberCardPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          Digital Card
        </p>
        <h1 className="mt-2 text-3xl font-semibold">Member Card</h1>
      </div>

      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#091f44] to-[#020817] p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              The DBS
            </p>
            <h2 className="text-xl font-semibold">Social Club</h2>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10">
            <Crown className="h-7 w-7 text-[#d7b56d]" />
          </div>
        </div>

        <div className="mt-10 rounded-[1.5rem] bg-white p-5 text-[#07172f]">
          <div className="flex items-center justify-center">
            <QrCode className="h-32 w-32" />
          </div>

          <p className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-[#07172f]/60">
            Scan for entry
          </p>
        </div>

        <div className="mt-8">
          <p className="text-sm text-white/50">Member Name</p>
          <h3 className="text-2xl font-semibold">DBS Member</h3>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-white/40">Status</p>
            <p className="font-semibold">Active</p>
          </div>

          <div>
            <p className="text-white/40">Tier</p>
            <p className="font-semibold">Member</p>
          </div>
        </div>

        <p className="mt-8 text-xs leading-5 text-white/40">
          This card is used for DBS Social Club event entry, member perks, and
          check-in verification.
        </p>
      </section>
    </div>
  );
}
EOF

cat > app/app/events/page.tsx <<'EOF'
import { CalendarDays, MapPin, TicketCheck } from "lucide-react";

const events = [
  {
    title: "The Social Edit",
    date: "Coming Soon",
    location: "Atlanta, GA",
    description:
      "A curated DBS Social Club experience centered around beauty, culture, conversation, and community."
  },
  {
    title: "Hollywood in Atlanta",
    date: "Summer 2027 Concept",
    location: "Atlanta, GA",
    description:
      "A larger community event celebrating local creatives, leaders, beauty professionals, and culture shifters."
  }
];

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          DBS Social
        </p>

        <h1 className="mt-2 text-3xl font-semibold">Events</h1>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <article
            key={event.title}
            className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <CalendarDays className="h-6 w-6 text-[#d7b56d]" />
            </div>

            <h2 className="text-xl font-semibold">{event.title}</h2>

            <div className="mt-4 space-y-2 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <TicketCheck className="h-4 w-4" />
                {event.date}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {event.location}
              </p>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/65">
              {event.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
EOF

cat > app/app/perks/page.tsx <<'EOF'
import { Gift, Sparkles, Star, TicketCheck } from "lucide-react";

const perks = [
  {
    title: "Event Access",
    description: "Access to private DBS Social Club events and experiences.",
    icon: TicketCheck
  },
  {
    title: "Exclusive Drops",
    description: "Early access to DBS Social Club merchandise and releases.",
    icon: Gift
  },
  {
    title: "Community Moments",
    description: "Curated conversations, features, and member-only updates.",
    icon: Sparkles
  },
  {
    title: "Priority Invites",
    description: "Get first notice for select DBS events and activations.",
    icon: Star
  }
];

export default function PerksPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          Member Access
        </p>

        <h1 className="mt-2 text-3xl font-semibold">Perks</h1>
      </div>

      <div className="space-y-4">
        {perks.map((perk) => {
          const Icon = perk.icon;

          return (
            <article
              key={perk.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5"
            >
              <Icon className="h-7 w-7 text-[#d7b56d]" />
              <h2 className="mt-4 font-semibold">{perk.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/60">
                {perk.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
EOF

cat > app/app/profile/page.tsx <<'EOF'
import { Crown, Mail, ShieldCheck, User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          Account
        </p>

        <h1 className="mt-2 text-3xl font-semibold">Profile</h1>
      </div>

      <section className="rounded-[2rem] border border-white/10 bg-white/10 p-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/10">
          <User className="h-10 w-10 text-[#d7b56d]" />
        </div>

        <h2 className="mt-4 text-2xl font-semibold">DBS Member</h2>
        <p className="mt-1 text-sm text-white/50">member@email.com</p>
      </section>

      <section className="space-y-3">
        <ProfileRow icon={<Crown />} label="Membership Tier" value="Member" />
        <ProfileRow icon={<ShieldCheck />} label="Status" value="Active" />
        <ProfileRow icon={<Mail />} label="Contact" value="member@email.com" />
      </section>
    </div>
  );
}

function ProfileRow({
  icon,
  label,
  value
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
      <div className="flex items-center gap-3">
        <div className="text-[#d7b56d]">{icon}</div>
        <p className="text-sm text-white/60">{label}</p>
      </div>

      <p className="font-semibold">{value}</p>
    </div>
  );
}
EOF

cat > app/app/admin/scanner/page.tsx <<'EOF'
"use client";

import { useState } from "react";
import { Camera, CheckCircle2, Clock, Search, TicketCheck } from "lucide-react";

type ScanResult = {
  memberName: string;
  memberType: string;
  status: string;
  eventName: string;
  scannedAt: string;
};

export default function AdminScannerPage() {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);

  function simulateScan() {
    const now = new Date();

    setScanResult({
      memberName: "DBS Member",
      memberType: "Paid Member",
      status: "Valid Entry",
      eventName: "The DBS Social Club Event",
      scannedAt: now.toLocaleString()
    });
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          Admin / Team
        </p>
        <h1 className="mt-2 text-3xl font-semibold">QR Scanner</h1>
        <p className="mt-2 text-sm leading-6 text-white/60">
          Scan member QR codes for event entry, attendance, and time tracking.
        </p>
      </div>

      <section className="rounded-[2rem] border border-white/10 bg-white/10 p-5">
        <div className="flex aspect-square items-center justify-center rounded-[1.5rem] border border-dashed border-white/30 bg-black/20">
          <div className="text-center">
            <Camera className="mx-auto h-16 w-16 text-white/70" />
            <p className="mt-4 text-sm text-white/60">
              Camera scanner placeholder
            </p>
          </div>
        </div>

        <button
          onClick={simulateScan}
          className="mt-5 w-full rounded-2xl bg-white px-5 py-4 font-semibold text-[#07172f]"
        >
          Simulate QR Scan
        </button>
      </section>

      {scanResult && (
        <section className="rounded-[2rem] border border-emerald-400/30 bg-emerald-400/10 p-5">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-7 w-7 text-emerald-300" />
            <div>
              <h2 className="font-semibold text-emerald-100">
                {scanResult.status}
              </h2>
              <p className="text-sm text-white/60">
                Member successfully checked in.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-white/50" />
              <span>{scanResult.memberName}</span>
            </div>

            <div className="flex items-center gap-3">
              <TicketCheck className="h-5 w-5 text-white/50" />
              <span>{scanResult.memberType}</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-white/50" />
              <span>{scanResult.scannedAt}</span>
            </div>
          </div>
        </section>
      )}

      <section className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
        <h2 className="font-semibold">Scan History</h2>
        <p className="mt-2 text-sm text-white/60">
          Once connected to a database, every scan will save the member, event,
          timestamp, and scanner name.
        </p>
      </section>
    </div>
  );
}
EOF

cat > public/manifest.json <<'EOF'
{
  "name": "The DBS Social Club",
  "short_name": "DBS Social",
  "description": "The official membership app for The DBS Social Club.",
  "start_url": "/auth/login",
  "scope": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#07172f",
  "theme_color": "#07172f",
  "categories": ["lifestyle", "events", "social"],
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
EOF

cat > public/sw.js <<'EOF'
const CACHE_NAME = "dbs-social-club-v1";

const urlsToCache = ["/", "/auth/login", "/app", "/manifest.json"];

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).catch(() => caches.match("/auth/login"))
      );
    })
  );
});
EOF

echo "Done. The DBS Social Club app files have been created."
echo "Next: upload icon-192.png and icon-512.png into public/icons."
echo "Then run: npm install"
echo "Then run: npm run dev"
