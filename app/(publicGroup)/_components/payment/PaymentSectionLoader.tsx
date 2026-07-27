export function PaymentSectionLoader() {
  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="space-y-2 p-6 pb-2">
          <div className="flex items-center justify-between">
            <div className="h-6 w-32 rounded-md bg-muted animate-pulse" />
            <div className="h-5 w-16 rounded-full bg-muted animate-pulse" />
          </div>
          <div className="h-4 w-64 rounded bg-muted animate-pulse" />
        </div>

        <div className="space-y-4 p-6 pt-2">
          <div className="space-y-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-muted animate-pulse shrink-0" />
                <div className="h-3.5 w-40 rounded bg-muted animate-pulse" />
              </div>
            ))}
          </div>

          <div className="h-10 w-full rounded-lg bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  );
}
