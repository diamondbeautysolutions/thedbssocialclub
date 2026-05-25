import { CalendarDays, FileText, ShieldCheck, Users } from "lucide-react";

const adminTools = [
  {
    title: "Manage Memberships",
    description: "Edit member tiers, IDs, access, and account information.",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Manage Events",
    description: "Create events, update RSVPs, and manage check-ins.",
    icon: <CalendarDays className="h-6 w-6" />
  },
  {
    title: "Products & Classes",
    description: "Control digital drops, VIP products, and class access.",
    icon: <FileText className="h-6 w-6" />
  },
  {
    title: "Admin Notes & Access",
    description: "Manage permissions, notes, and internal member access.",
    icon: <ShieldCheck className="h-6 w-6" />
  }
];

export default function AdminPage() {
  return (
    <div className="space-y-5 text-white">
      <header>
        <img src="/dbs-social-logo.svg" alt="The DBS Social Club" className="h-20 w-auto invert" />
        <p className="mt-5 text-sm uppercase tracking-widest text-orange-100/60">Admin Portal</p>
        <h1 className="mt-2 text-4xl font-semibold">Management Hub</h1>
      </header>

      {adminTools.map((tool) => (
        <section key={tool.title} className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8ddc8] text-black">{tool.icon}</div>
          <h2 className="mt-5 text-2xl font-semibold">{tool.title}</h2>
          <p className="mt-2 text-sm leading-7 text-white/55">{tool.description}</p>
          <button className="mt-5 rounded-full bg-[#e8ddc8] px-5 py-3 text-sm font-semibold text-black">Open</button>
        </section>
      ))}
    </div>
  );
}
