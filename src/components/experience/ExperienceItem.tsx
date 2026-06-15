import { experiences } from "../../data/experiences";

export default function ExperienceItem() {
  return (
    <>
      <ol className="relative mt-12 border-l border-slate-300">
        {experiences.map((exp) => (
          <li
            className="relative mb-16 ml-8"
            key={`${exp.company}-${exp.role}`}
          >
            <article>
              <span
                aria-hidden="true"
                aria-labelledby={`experience-${exp.company}-${exp.role}`}
                className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-red-500"
              />

              <div
                className="
              flex flex-col gap-2 md:flex-row
              md:items-start md:justify-between
            "
              >
                <div>
                  <h3
                    className="text-3xl font-bold text-slate-900 dark:text-white"
                    id={`experience-${exp.company}-${exp.role}`}
                  >
                    {exp.role}{" "}
                    <span className="text-red-500">@ {exp.company}</span>
                  </h3>

                  <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">
                    {exp.location}
                  </p>
                </div>

                <time
                  className="font-mono text-lg text-slate-500 dark:text-slate-400"
                  dateTime={exp.period}
                >
                  {exp.period}
                </time>
              </div>

              <ul className="mt-8 space-y-4">
                {exp.achievements.map((achievement) => (
                  <li className="flex gap-4" key={achievement}>
                    <span
                      aria-hidden="true"
                      className="mt-3 h-2 w-2 rounded-full bg-red-500"
                    />
                    <span className="text-lg text-slate-600 dark:text-slate-300">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-8 flex flex-wrap gap-3"
                aria-label="Technologies used"
              >
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                  rounded-full bg-slate-100 px-4 py-2
                  text-sm font-medium
                  dark:bg-stone-800 dark:text-slate-200
                "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </>
  );
}
