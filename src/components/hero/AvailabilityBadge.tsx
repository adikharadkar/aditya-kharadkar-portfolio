export default function AvailabilityBadge() {
  return (
    <div
      className="
          inline-flex items-center gap-2
          rounded-full border border-slate-200
          dark:border-stone-800
          px-4 py-2
          text-sm text-slate-600 dark:text-slate-300
        "
    >
      <span
        className="h-2 w-2 rounded-full bg-red-500"
        aria-hidden="true"
      ></span>
      <span>Available for new opportunities</span>
    </div>
  );
}
