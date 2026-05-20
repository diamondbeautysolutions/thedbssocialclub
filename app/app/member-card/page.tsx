import DBSLogo from "@/components/dbs-logo";
import { QRCodeSVG } from "qrcode.react";

const memberData = {
  id: "DBS-0001",
  name: "Diamond",
  membership: "VIP Member"
};

export default function MemberCardPage() {
  const qrValue = JSON.stringify(memberData);

  return (
    <div className="space-y-6 text-white">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          Digital Card
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Member Access
        </h1>
      </div>

      <section className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white p-6 text-black shadow-2xl">
        <div className="flex items-center justify-between gap-4">
          <DBSLogo />

          <div className="rounded-full border border-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]">
            VIP
          </div>
        </div>

        <div className="mt-10 flex justify-center rounded-[2rem] border border-black bg-white p-6">
          <QRCodeSVG value={qrValue} size={220} includeMargin />
        </div>

        <div className="mt-8 border-t border-black/10 pt-6">
          <p className="text-xs uppercase tracking-[0.3em] text-black/50">
            Member Name
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            {memberData.name}
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-black/40">Status</p>
              <p className="font-semibold">Active</p>
            </div>

            <div>
              <p className="text-black/40">Membership</p>
              <p className="font-semibold">{memberData.membership}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
