export default function DashboardLoading() {
  return (
    <>
      <div className="w-36 h-8 bg-gray-600 animate-pulse" />

      <div className="flex gap-16 mt-10">
        <div className="flex-1">
          <div className="w-40 h-5 bg-gray-600 animate-pulse" />

          <div className="mt-4 flex flex-col gap-3">
            <div className="w-full h-72 bg-gray-600 animate-pulse rounded-lg" />
            <div className="w-full h-72 bg-gray-600 animate-pulse rounded-lg" />
            <div className="w-full h-72 bg-gray-600 animate-pulse rounded-lg" />
          </div>
        </div>

        <div className="w-[324px]">
          <div className="text-gray-100 text-sm flex items-center justify-between">
            <span className="w-24 h-5 bg-gray-600 animate-pulse" />
            <span className="w-24 h-5 bg-gray-600 animate-pulse" />
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div className="w-full h-32 bg-gray-600 animate-pulse rounded-lg" />
            <div className="w-full h-32 bg-gray-600 animate-pulse rounded-lg" />
            <div className="w-full h-32 bg-gray-600 animate-pulse rounded-lg" />
            <div className="w-full h-32 bg-gray-600 animate-pulse rounded-lg" />
            <div className="w-full h-32 bg-gray-600 animate-pulse rounded-lg" />
          </div>
        </div>
      </div>
    </>
  )
}
