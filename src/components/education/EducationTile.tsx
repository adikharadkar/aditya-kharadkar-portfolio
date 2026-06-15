import { PiGraduationCap } from "react-icons/pi";
import type { Education } from "../../data/education";

type Props = {
  education: Education;
};

export default function EducationTile({ education }: Props) {
  const headingId = `education-${education.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className="
        rounded-2xl border border-slate-300
        bg-slate-50 p-8
        dark:border-stone-800
        dark:bg-stone-900
      "
    >
      <div
        className="
          flex flex-col gap-6
          md:flex-row md:items-center
          md:justify-between
        "
      >
        <div className="flex items-center gap-5">
          {/* Icon */}
          <div
            aria-hidden="true"
            className="
              flex h-14 w-14 items-center justify-center
              rounded-xl
              bg-slate-200
              dark:bg-stone-800
            "
          >
            <PiGraduationCap size={28} className="text-red-500" />
          </div>

          {/* Degree Info */}
          <div>
            <h3
              id={headingId}
              className="
                text-2xl font-bold
                text-slate-900
                dark:text-white
              "
            >
              {education.degree}
            </h3>

            <address
              className="
                mt-1 text-lg
                text-slate-600
                dark:text-slate-300
              "
            >
              {education.institution}
            </address>
          </div>
        </div>

        {/* Years */}
        <p
          className="
            font-mono text-lg
            text-slate-600
            dark:text-slate-300
          "
        >
          <time dateTime={education.startYear.toString()}>
            {education.startYear}
          </time>
          {" — "}
          <time dateTime={education.endYear.toString()}>
            {education.endYear}
          </time>
        </p>
      </div>
    </article>
  );
}
