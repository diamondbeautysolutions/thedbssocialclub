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
