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
