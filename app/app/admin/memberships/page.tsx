"use client";

import { useEffect, useState } from "react";
import { Check, Save, UserPlus } from "lucide-react";

const initialMembers = [
  {
    id: "DBS-0001",
    name: "China Meili",
    email: "chinameili00@gmail.com",
    phone: "(443) 303-9809",
    tier: "Admin",
    status: "Active"
  }
];

export default function ManageMembershipsPage() {
  const [members, setMembers] = useState(initialMembers);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedMembers = localStorage.getItem("dbs-members");
    if (savedMembers) setMembers(JSON.parse(savedMembers));
  }, []);

  function updateMember(index: number, field: string, value: string) {
    setMembers((prev) => prev.map((member, i) => (i === index ? { ...member, [field]: value } : member)));
  }

  function saveMembers() {
    localStorage.setItem("dbs-members", JSON.stringify(members));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function addNewMember() {
    const nextNumber = String(members.length + 1).padStart(4, "0");
    setMembers((prev) => [
      ...prev,
      {
        id: `DBS-${nextNumber}`,
        name: "New Member",
        email: "newmember@email.com",
        phone: "",
        tier: "Member",
        status: "Active"
      }
    ]);
  }

  return (
    <div className="space-y-5 text-white">
      <header>
        <p className="text-sm uppercase tracking-widest text-orange-100/60">Admin Editor</p>
        <h1 className="mt-2 text-4xl font-semibold">Manage Memberships</h1>
        <p className="mt-3 text-sm leading-7 text-white/55">Edit member records, tiers, access, status, and contact information.</p>
      </header>

      {saved && <div className="rounded-2xl bg-[#e8ddc8] p-4 text-sm font-semibold text-black">Changes saved.</div>}

      {members.map((member, index) => (
        <section key={member.id} className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs uppercase tracking-widest text-orange-100/60">{member.id}</p>
            <p className="rounded-full bg-[#e8ddc8] px-3 py-1 text-xs font-semibold text-black">{member.tier}</p>
          </div>

          <div className="space-y-4">
            <Field label="Name" value={member.name} onChange={(value) => updateMember(index, "name", value)} />
            <Field label="Email" value={member.email} onChange={(value) => updateMember(index, "email", value)} />
            <Field label="Phone" value={member.phone} onChange={(value) => updateMember(index, "phone", value)} />
            <Field label="Tier" value={member.tier} onChange={(value) => updateMember(index, "tier", value)} />
            <Field label="Status" value={member.status} onChange={(value) => updateMember(index, "status", value)} />
          </div>
        </section>
      ))}

      <button onClick={addNewMember} className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-semibold text-white">
        <UserPlus className="h-5 w-5" /> Add New Member
      </button>

      <button onClick={saveMembers} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e8ddc8] px-5 py-4 font-semibold text-black">
        {saved ? <Check className="h-5 w-5" /> : <Save className="h-5 w-5" />} Save All Memberships
      </button>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/60">{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none" />
    </label>
  );
}
