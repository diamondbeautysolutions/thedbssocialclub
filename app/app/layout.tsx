import AppBottomNav from "@/components/app-bottom-nav";

export default function AppLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#07172f] pb-24 text-white">
      <div className="mx-auto min-h-screen max-w-md px-5 py-6">
        {children}
      </div>

      <AppBottomNav />
    </main>
  );
}
