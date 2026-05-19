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
