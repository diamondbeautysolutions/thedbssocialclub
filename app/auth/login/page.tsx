import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-5 py-10 text-white">
      <section className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
        <div className="text-center">
          <img src="/dbs-social-logo.svg" alt="The DBS Social Club" className="mx-auto h-24 w-auto invert" />
          <p className="mt-4 text-sm leading-6 text-white/60">Login to access your member card, event check-ins, perks, digital products, and profile.</p>
        </div>

        <form className="mt-8 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-white/60">Email</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
              <Mail className="h-5 w-5 text-white/40" />
              <input type="email" placeholder="member@email.com" className="w-full bg-transparent text-white outline-none placeholder:text-white/30" />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-white/60">Password</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
              <LockKeyhole className="h-5 w-5 text-white/40" />
              <input type="password" placeholder="••••••••" className="w-full bg-transparent text-white outline-none placeholder:text-white/30" />
            </div>
          </label>

          <Link href="/app" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-semibold text-black">
            Enter Member Portal <ArrowRight className="h-4 w-4" />
          </Link>
        </form>
      </section>
    </main>
  );
}
