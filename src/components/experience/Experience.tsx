import ExperienceItem from "./ExperienceItem";
import Header from "./Header";

export default function Experience() {
  return (
    <section
      className="max-w-5xl"
      aria-labelledby="experience-heading"
      id="experience"
    >
      <Header />
      <ExperienceItem />
    </section>
  );
}
