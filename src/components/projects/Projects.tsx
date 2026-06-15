import { projects } from "../../data/projects";
import ProjectTile from "./ProjectTile";

export default function Projects() {
  return (
    <>
      <p id="projects-description" className="sr-only">
        Featured software projects and applications.
      </p>

      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="mt-32"
      >
        <div className="flex items-baseline gap-5">
          <span
            aria-hidden="true"
            className="font-mono text-lg font-medium text-red-500"
          >
            03
          </span>

          <h2
            id="projects-heading"
            className="
              text-4xl font-bold tracking-tight
              text-slate-900 dark:text-white
            "
          >
            Key Projects
          </h2>

          <div
            aria-hidden="true"
            className="h-px flex-1 bg-slate-300 dark:bg-stone-800"
          />
        </div>

        <ul
          className="mt-12 grid gap-8 lg:grid-cols-2"
          aria-label="Featured projects"
        >
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectTile project={project} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
