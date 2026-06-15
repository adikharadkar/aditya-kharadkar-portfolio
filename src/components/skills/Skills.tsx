import { skills } from "../../data/skills";
import SkillTile from "./SkillTile";

export default function Skills() {
  return (
    <>
      <p id="skills-description" className="sr-only">
        Technical skills organized by category.
      </p>
      <section id="skills" aria-labelledby="skills-heading" className="mt-32">
        {/* Section Heading */}
        <div className="flex items-baseline gap-5">
          <span
            aria-hidden="true"
            className="font-mono text-lg font-medium text-red-500"
          >
            02
          </span>

          <h2
            id="skills-heading"
            className="
            text-4xl font-bold tracking-tight
            text-slate-900 dark:text-white
          "
          >
            Technical Skills
          </h2>

          <div
            aria-hidden="true"
            className="h-px flex-1 bg-slate-300 dark:bg-stone-800"
          />
        </div>

        {/* Skills Grid */}
        <ul
          className="mt-12 grid gap-8 md:grid-cols-2"
          aria-label="Skill categories"
        >
          {skills.map((skill) => (
            <li key={skill.category}>
              <SkillTile skill={skill} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
