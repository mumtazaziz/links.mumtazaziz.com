export default function HomeLoading() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex animate-pulse items-center gap-4 rounded-lg p-4">
        <div className="size-6 rounded-full dark:bg-neutral-300" />
        <div className="h-4 w-24 dark:bg-neutral-300" />
        <div className="bg-secondary ms-auto h-4 w-16"></div>
      </div>
      <div className="flex animate-pulse items-center gap-4 rounded-lg p-4">
        <div className="size-6 rounded-full dark:bg-neutral-300" />
        <div className="h-4 w-32 dark:bg-neutral-300" />
        <div className="bg-secondary ms-auto h-4 w-12"></div>
      </div>
      <div className="flex animate-pulse items-center gap-4 rounded-lg p-4">
        <div className="size-6 rounded-full dark:bg-neutral-300" />
        <div className="h-4 w-16 dark:bg-neutral-300" />
        <div className="bg-secondary ms-auto h-4 w-24"></div>
      </div>
    </div>
  );
}
