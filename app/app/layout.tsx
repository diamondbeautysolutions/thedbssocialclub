import AppBottomNav from "@/components/app-bottom-nav";

export default function AppLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08)_0%,transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06)_0%,transparent_22%),linear-gradient(180deg,#000000_0%,#050505_100%)]" />

      <div className="mx-auto min-h-screen max-w-md px-5 pb-28 pt-6">
        {children}
      </div>

      <AppBottomNav />
    </main>
  );
}
