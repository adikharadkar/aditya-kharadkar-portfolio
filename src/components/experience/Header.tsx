import { profileSummary } from "../../data/experiences";

export default function Header() {
  return (
    <>
      {/* Heading Row */}
      <div className="flex items-baseline gap-5">
        <span
          className="text-red-500 font-mono text-lg font-medium"
          aria-hidden="true"
        >
          01
        </span>

        <h2
          className="text-4xl font-bold tracking-tight
                text-slate-900 dark:text-white
                sm:text-4xl"
          id="experience-heading"
        >
          Experience
        </h2>

        <div className="h-px flex-1 bg-slate-300" aria-hidden="true" />
      </div>

      {/* Description */}
      <p
        className="
              mt-12 max-w-4xl text-xl
              text-slate-600 leading-relaxed
              dark:text-slate-300
            "
      >
        {profileSummary}
      </p>
    </>
  );
}
