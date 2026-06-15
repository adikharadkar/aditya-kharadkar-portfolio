import { education } from "../../data/education";
import EducationTile from "./EducationTile";

export default function Education() {
  return (
    <>
      <p id="education-description" className="sr-only">
        Educational background and academic qualifications.
      </p>

      <section
        id="education"
        aria-labelledby="education-heading"
        aria-describedby="education-description"
        className="mt-32"
      >
        <div className="flex items-baseline gap-5">
          <span
            aria-hidden="true"
            className="font-mono text-lg font-medium text-red-500"
          >
            04
          </span>

          <h2
            id="education-heading"
            className="
              text-4xl font-bold tracking-tight
              text-slate-900 dark:text-white
            "
          >
            Education
          </h2>

          <div
            aria-hidden="true"
            className="h-px flex-1 bg-slate-300 dark:bg-stone-800"
          />
        </div>

        <ul className="mt-12 space-y-8">
          {education.map((item) => (
            <li key={item.id}>
              <EducationTile education={item} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
