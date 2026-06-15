import type { SkillGroup } from "../../data/skills";

export default function SkillTile(skill: { skill: SkillGroup }) {
  return (
    <article
      aria-labelledby={`skill-category-${skill.skill.category}`}
      className="
                  rounded-2xl border border-slate-200
                  bg-white p-8
                  dark:border-stone-800
                  dark:bg-stone-900
                "
    >
      <h3
        id={`skill-category-${skill.skill.category}`}
        className="
                text-lg font-semibold uppercase tracking-wide
                text-slate-900 dark:text-slate-200
              "
      >
        {skill.skill.category}
      </h3>

      <ul
        className="mt-6 flex flex-wrap gap-3"
        aria-label={`${skill.skill.category} skills`}
      >
        {skill.skill.items.map((item: string) => (
          <li key={item}>
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
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
