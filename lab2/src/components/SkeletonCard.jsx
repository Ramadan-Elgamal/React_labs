import { Card, CardHeader, CardTitle } from './ui/card';
import { Skeleton } from './ui/skeleton';

const SkeletonCard = () => (
  <Card className="overflow-hidden border border-border bg-card p-0 shadow-sm">
    <CardHeader className="border-b border-border p-0">
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <Skeleton className="h-full w-full rounded-none" />
        <Skeleton className="absolute left-3 top-3 h-6 w-24 rounded-full bg-background/90" />
      </div>
      <div className="space-y-2 px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="w-full">
            <Skeleton className="h-5 w-3/4" />
          </CardTitle>
          <Skeleton className="h-6 w-16 shrink-0 rounded-full" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
      </div>
    </CardHeader>

    <div className="space-y-4 px-4 py-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[75%]" />
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-3">
        <Skeleton className="h-14 rounded-md" />
        <Skeleton className="h-14 rounded-md" />
        <Skeleton className="h-14 rounded-md" />
      </div>

      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-7 w-16 rounded-full" />
        <Skeleton className="h-7 w-20 rounded-full" />
        <Skeleton className="h-7 w-14 rounded-full" />
      </div>
    </div>

    <div className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
      <div className="flex items-center justify-between gap-3">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-24" />
      </div>
      <div className="mt-2 flex items-center justify-between gap-3">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  </Card>
);

export { SkeletonCard };