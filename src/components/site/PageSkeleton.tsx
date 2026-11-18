export function PageSkeleton({ en, title, desc }: { en: string; title: string; desc: string }) {
  return (
    <main className="mx-auto min-h-[70vh] max-w-6xl px-6 pb-24 pt-40">
      <p className="text-xs font-medium tracking-[0.3em] text-primary">{en}</p>
      <h1 className="mt-3 text-4xl font-bold text-foreground">{title}</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{desc}</p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => <div key={i} className="h-48 rounded-2xl border border-border bg-surface" />)}
      </div>
    </main>
  );
}
