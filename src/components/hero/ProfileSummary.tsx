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
        I’m a Frontend Engineer passionate about building scalable, high-performance digital experiences with React, TypeScript, and Node.js. With 5 years of experience, I’ve worked across customer-facing applications and internal developer platforms, including building custom Spotify Backstage plugins and end-to-end workflows. I enjoy turning complex requirements into intuitive, accessible interfaces while focusing on performance, reusable architecture, and reliable engineering practices.

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
