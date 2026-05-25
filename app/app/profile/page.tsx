"use client";

import { useState } from "react";
import { Crown, Mail, Phone, Save, ShieldCheck, User } from "lucide-react";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "China Meili",
    email: "chinameili00@gmail.com",
    phone: "(443) 303-9809",
    tier: "Admin",
    status: "Active",
    id: "DBS-0001"
  });

  return (
    <div className="space-y-6 text-white">
      <div>
        <img src="/dbs-social-logo.svg" alt="The DBS Social Club" className="h-20 w-auto invert" />
        <h1 className="mt-5 text-3xl font-semibold">Profile</h1>
      </div>

      <section className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl">
        <div className="space-y-5">
          <InputField label="Full Name" value={profile.name} onChange={(value: string) => setProfile({ ...profile, name: value })} icon={<User className="h-5 w-5" />} />
          <InputField label="Email" value={profile.email} onChange={(value: string) => setProfile({ ...profile, email: value })} icon={<Mail className="h-5 w-5" />} />
          <InputField label="Phone" value={profile.phone} onChange={(value: string) => setProfile({ ...profile, phone: value })} icon={<Phone className="h-5 w-5" />} />

          <div className="grid grid-cols-2 gap-4">
            <InfoCard label="Membership" value={profile.tier} icon={<Crown className="h-5 w-5" />} />
            <InfoCard label="Status" value={profile.status} icon={<ShieldCheck className="h-5 w-5" />} />
          </div>

          <InfoCard label="Member ID" value={profile.id} icon={<User className="h-5 w-5" />} />

          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e8ddc8] px-5 py-4 font-semibold text-black">
            <Save className="h-5 w-5" /> Save Profile
          </button>
        </div>
      </section>
    </div>
  );
}

function InputField({ label, value, onChange, icon }: any) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/60">{label}</span>
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
        <div className="text-orange-100">{icon}</div>
        <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-transparent text-white outline-none" />
      </div>
    </label>
  );
}

function InfoCard({ label, value, icon }: any) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 shadow-xl">
      <div className="flex items-center gap-3 text-orange-100">{icon}<p className="text-sm text-white/60">{label}</p></div>
      <p className="mt-3 font-semibold">{value}</p>
    </div>
  );
}
