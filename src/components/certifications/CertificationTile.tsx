import type { Certification } from "../../data/certifications";

type Props = {
  certification: Certification;
};

export default function CertificationTile({ certification }: Props) {
  const headingId = `certification-${certification.title
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
  return (
    <article
      aria-labelledby={headingId}
      className="
        rounded-2xl border border-slate-200
        bg-white p-8
        transition-colors
        dark:border-stone-800
        dark:bg-stone-900
      "
    >
      <h3
        id={headingId}
        className="
          text-2xl font-semibold
          text-slate-900
          dark:text-white
        "
      >
        {certification.title}
      </h3>

      <p
        className="
          mt-4 text-base
          text-slate-600
          dark:text-slate-200
        "
      >
        {certification.issuer} ·{" "}
        <time dateTime={certification.year}>{certification.year}</time>
      </p>
    </article>
  );
}
