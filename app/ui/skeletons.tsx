export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-lg bg-gray-100 p-4 shadow mt-4">
      <div className="h-40 w-full rounded bg-gray-300 mb-4" />
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-300 rounded w-1/2" />
    </div>
  );
}
