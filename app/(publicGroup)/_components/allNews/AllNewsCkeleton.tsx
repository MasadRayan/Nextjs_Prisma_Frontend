export function AllNewsSkeletonLoader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <article
          key={i}
          className="flex flex-col overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40"
        >
          <div className="relative h-48 w-full bg-muted/60 animate-pulse" />

          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="flex gap-1.5">
              <div className="h-5 w-16 rounded-full bg-muted animate-pulse" />
              <div className="h-5 w-12 rounded-full bg-muted animate-pulse" />
            </div>

            <div className="space-y-2">
              <div className="h-5 w-full rounded-md bg-muted animate-pulse" />
              <div className="h-5 w-3/4 rounded-md bg-muted animate-pulse" />
            </div>

            <div className="space-y-1.5 flex-1">
              <div className="h-3.5 w-full rounded bg-muted animate-pulse" />
              <div className="h-3.5 w-5/6 rounded bg-muted animate-pulse" />
            </div>

            <div className="flex items-center gap-3 py-3">
              <div className="h-7 w-7 rounded-full bg-muted animate-pulse shrink-0" />
              <div className="flex-1 space-y-1.5">
                <div className="h-3 w-24 rounded bg-muted animate-pulse" />
                <div className="h-2.5 w-20 rounded bg-muted animate-pulse" />
              </div>
              <div className="flex items-center gap-3">
                <div className="h-3.5 w-10 rounded bg-muted animate-pulse" />
                <div className="h-3.5 w-10 rounded bg-muted animate-pulse" />
              </div>
            </div>

            <div className="h-10 w-full rounded-lg bg-muted animate-pulse mt-2" />
          </div>
        </article>
      ))}
    </div>
  );
}
