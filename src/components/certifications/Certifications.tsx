import { certifications } from "../../data/certifications";
import CertificationTile from "./CertificationTile";

export default function Certifications() {
  return (
    <>
      <p id="certifications-description" className="sr-only">
        Professional certifications and credentials.
      </p>

      <section
        id="certifications"
        aria-labelledby="certifications-heading"
        className="mt-32"
      >
        {/* Section Heading */}
        <div className="flex items-baseline gap-5">
          <span
            aria-hidden="true"
            className="font-mono text-lg font-medium text-red-500"
          >
            03
          </span>

          <h2
            id="certifications-heading"
            className="
              text-4xl font-bold tracking-tight
              text-slate-900 dark:text-white
            "
          >
            Certifications
          </h2>

          <div
            aria-hidden="true"
            className="h-px flex-1 bg-slate-300 dark:bg-stone-800"
          />
        </div>

        {/* Certifications Grid */}
        <ul
          className="mt-12 grid gap-8 lg:grid-cols-3"
          aria-label="Certifications"
        >
          {certifications.map((certification) => (
            <li key={certification.title}>
              <CertificationTile certification={certification} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
