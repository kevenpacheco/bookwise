export default function ProfileLoading() {
  return (
    <>
      <div className="w-36 h-8 bg-gray-600 animate-pulse" />

      <div className="grid grid-cols-[1fr_308px] items-start gap-16 mt-10">
        <div className="flex flex-col gap-8">
          <div className="w-full h-12 bg-gray-600 animate-pulse rounded" />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="w-14 h-5 bg-gray-600 animate-pulse" />

              <div className="w-full h-72 bg-gray-600 animate-pulse rounded-lg" />
            </div>

            <div className="flex flex-col gap-2">
              <span className="w-14 h-5 bg-gray-600 animate-pulse" />

              <div className="w-full h-72 bg-gray-600 animate-pulse rounded-lg" />
            </div>

            <div className="flex flex-col gap-2">
              <span className="w-14 h-5 bg-gray-600 animate-pulse" />

              <div className="w-full h-72 bg-gray-600 animate-pulse rounded-lg" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 rounded-[10px]">
          <div className="w-[72px] h-[72px] bg-gray-600 animate-pulse rounded-full" />

          <div className="flex flex-col items-center">
            <span className="mt-5 w-36 h-7 bg-gray-600 animate-pulse" />
            <span className="mt-2 w-24 h-5 bg-gray-600 animate-pulse" />
          </div>

          <div className="w-8 h-1 rounded-full bg-horizontal-gradient my-8"></div>

          <div className="py-5 px-14 flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <div className="w-8 h-8 bg-gray-600 animate-pulse" />

              <div className="flex flex-col flex-1">
                <span className="w-7 h-4 bg-gray-600 animate-pulse" />
                <span className="mt-2 w-20 h-4 bg-gray-600 animate-pulse" />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-8 h-8 bg-gray-600 animate-pulse" />

              <div className="flex flex-col flex-1">
                <span className="w-7 h-4 bg-gray-600 animate-pulse" />
                <span className="mt-2 w-20 h-4 bg-gray-600 animate-pulse" />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-8 h-8 bg-gray-600 animate-pulse" />

              <div className="flex flex-col flex-1">
                <span className="w-7 h-4 bg-gray-600 animate-pulse" />
                <span className="mt-2 w-20 h-4 bg-gray-600 animate-pulse" />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-8 h-8 bg-gray-600 animate-pulse" />

              <div className="flex flex-col flex-1">
                <span className="w-7 h-4 bg-gray-600 animate-pulse" />
                <span className="mt-2 w-20 h-4 bg-gray-600 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
