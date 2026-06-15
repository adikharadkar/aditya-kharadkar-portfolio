import AvailabilityBadge from "./AvailabilityBadge";
import Contact from "./Contact";
import Heading from "./Heading";
import ProfileSummary from "./ProfileSummary";

export default function Hero() {
  return (
    <section
      id="about"
      className="max-w-4xl min-h-screen"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col items-start gap-6">
        {/* Availability badge */}
        <AvailabilityBadge />

        {/* Heading */}
        <Heading />

        {/* Profile Summary */}
        <ProfileSummary />

        {/* Contact Info */}
        <Contact />
      </div>
    </section>
  );
}
