export default function DBSLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3 text-black">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-black bg-white">
        <div className="h-6 w-6 rotate-45 border border-black bg-white" />
        <div className="absolute h-px w-6 bg-black" />
        <div className="absolute h-6 w-px bg-black" />
      </div>

      {!compact && (
        <div className="leading-none">
          <p className="text-[10px] uppercase tracking-[0.35em] text-black/60">
            The DBS
          </p>
          <p className="mt-1 text-xl font-semibold tracking-tight">
            Social Club
          </p>
        </div>
      )}
    </div>
  );
}
