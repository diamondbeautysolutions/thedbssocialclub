import AppBottomNav from "@/components/app-bottom-nav";

export default function AppLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#07172f] text-[#f5efe3]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#8f1d2c_0%,transparent_28%),radial-gradient(circle_at_bottom_right,#d66a2c_0%,transparent_26%),linear-gradient(180deg,#07172f_0%,#020817_100%)]" />
      <div className="mx-auto min-h-screen max-w-md px-5 pb-28 pt-6">
        {children}
      </div>

      <AppBottomNav />
    </main>
  );
}
