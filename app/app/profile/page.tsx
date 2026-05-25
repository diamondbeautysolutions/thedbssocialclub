import { Crown, Mail, Phone, ShieldCheck, User } from "lucide-react";

const member = {
  name: "China Meili",
  email: "chinameili00@gmail.com",
  phone: "(443) 303-9809",
  tier: "Admin",
  status: "Active",
  id: "DBS-0001"
};

export default function ProfilePage() {
  return (
    <div className="space-y-6 text-white">
      <div>
        <img src="/dbs-social-logo.svg" alt="The DBS Social Club" className="h-20 w-auto invert" />
        <h1 className="mt-5 text-3xl font-semibold">Profile</h1>
      </div>

      <section className="rounded-[2rem] border border-white/10 bg-white/10 p-6 text-center shadow-2xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/10">
          <User className="h-10 w-10 text-orange-100" />
        </div>

        <h2 className="mt-4 text-2xl font-semibold">{member.name}</h2>
        <p className="mt-1 text-sm text-white/50">{member.email}</p>
      </section>

      <section className="space-y-3">
        <ProfileRow icon={<Crown />} label="Membership Tier" value={member.tier} />
        <ProfileRow icon={<ShieldCheck />} label="Status" value={member.status} />
        <ProfileRow icon={<Mail />} label="Email" value={member.email} />
        <ProfileRow icon={<Phone />} label="Phone" value={member.phone} />
        <ProfileRow icon={<User />} label="Member ID" value={member.id} />
      </section>
    </div>
  );
}

function ProfileRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/10 p-5 shadow-xl">
      <div className="flex items-center gap-3">
        <div className="text-orange-100">{icon}</div>
        <p className="text-sm text-white/60">{label}</p>
      </div>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
