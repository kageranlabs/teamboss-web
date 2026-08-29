export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 bg-surface text-text">
      <div className="z-10 max-w-4xl w-full flex flex-col items-center text-center gap-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-lightblue/30 bg-brand-lightblue/10 text-brand-lightblue font-medium text-sm">
          <span className="h-2 w-2 rounded-full bg-brand-lightblue animate-pulse"></span>
          Next.js App Router & Supabase Ready
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-brand-navy">
          Team Boss <span className="text-brand-yellow">Organization</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted max-w-2xl font-normal leading-relaxed">
          High-performance web platform configured with brand design tokens,
          Google Fonts (Poppins & Inter), and full-stack Supabase integration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mt-4">
          <div className="p-4 rounded-xl border border-border bg-white shadow-sm flex flex-col items-center gap-2">
            <div className="h-4 w-12 rounded bg-brand-navy"></div>
            <span className="font-semibold text-xs text-brand-navy">Brand Navy</span>
            <span className="text-xs text-muted">#083A7A</span>
          </div>

          <div className="p-4 rounded-xl border border-border bg-white shadow-sm flex flex-col items-center gap-2">
            <div className="h-4 w-12 rounded bg-brand-yellow"></div>
            <span className="font-semibold text-xs text-brand-yellow">Brand Yellow</span>
            <span className="text-xs text-muted">#F3A516</span>
          </div>

          <div className="p-4 rounded-xl border border-border bg-white shadow-sm flex flex-col items-center gap-2">
            <div className="h-4 w-12 rounded bg-brand-lightblue"></div>
            <span className="font-semibold text-xs text-brand-lightblue">Brand Light Blue</span>
            <span className="text-xs text-muted">#039DCA</span>
          </div>
        </div>
      </div>
    </main>
  );
}
