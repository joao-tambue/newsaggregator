export default function SkeletonArticle() {
  return (
    <div>
      <div className="h-[220px] w-full bg-gray-200 animate-pulse" />

      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded w-10/12 mb-4 animate-pulse" />

        <div className="flex justify-between mt-4 text-sm">
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-12 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
