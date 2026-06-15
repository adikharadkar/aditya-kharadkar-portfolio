import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "../../data/projects";

type Props = {
  project: Project;
};

export default function ProjectTile({ project }: Props) {
  const headingId = `project-${project.slug}`;

  return (
    <article aria-labelledby={headingId}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} project (opens in a new tab)`}
        className="
          group block
          rounded-2xl border border-slate-200
          bg-white p-8
          transition-all duration-300
          hover:border-red-500
          focus:outline-none
          focus-visible:border-red-500
          focus-visible:ring-2
          focus-visible:ring-red-500
          focus-visible:ring-offset-2
          dark:border-stone-800
          dark:bg-stone-900
        "
      >
        <div className="flex items-start justify-between gap-4">
          <h3
            id={headingId}
            className="
              text-lg font-semibold uppercase tracking-wide
              text-slate-900
              dark:text-slate-200
            "
          >
            {project.title}
          </h3>

          <FiArrowUpRight
            size={22}
            aria-hidden="true"
            focusable="false"
            className="
              text-slate-400
              transition-colors
              group-hover:text-red-500
              group-focus-visible:text-red-500
            "
          />
        </div>

        <p
          className="
            mt-6
            text-lg leading-relaxed
            text-slate-600
            dark:text-slate-300
          "
        >
          {project.description}
        </p>

        <ul
          className="mt-8 flex flex-wrap gap-3"
          aria-label="Technologies used"
        >
          {project.techStack.map((tech) => (
            <li key={tech}>
              <span
                className="
                  inline-flex items-center
                  rounded-xl border border-slate-200
                  bg-slate-50
                  px-4 py-2
                  text-sm font-medium
                  text-slate-700
                  dark:border-stone-700
                  dark:bg-stone-800
                  dark:text-slate-200
                "
              >
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </a>
    </article>
  );
}
