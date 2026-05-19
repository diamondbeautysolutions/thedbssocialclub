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
