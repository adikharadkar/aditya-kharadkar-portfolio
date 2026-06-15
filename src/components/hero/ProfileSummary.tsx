export default function ProfileSummary() {
  return (
    <>
      <p
        className="
            mt-4 text-xl text-slate-600
            dark:text-slate-300
            max-w-2xl
          "
      >
        I’m a Frontend Developer passionate about building modern web
        experiences with React and TypeScript. Over the past 4+ years, I’ve
        worked on products ranging from customer-facing applications to
        enterprise platforms, focusing on performance, accessibility, and great
        user experience.
      </p>
      <div
        className="
            flex items-center gap-2
            text-slate-600
            dark:text-slate-300
          "
      >
        <span aria-hidden="true">📍</span>
        <span>
          <span className="sr-only">Location: </span>Pune, Maharashtra, India
        </span>
      </div>
    </>
  );
}
