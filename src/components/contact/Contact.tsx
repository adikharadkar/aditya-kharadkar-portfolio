import { FaGithubSquare, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { FiDownload, FiMapPin, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="mt-32">
      <div
        className="
          rounded-3xl border border-slate-200
          bg-slate-50 p-8 md:p-12
          dark:border-stone-800
          dark:bg-stone-900
        "
      >
        {/* Section Label */}
        <p
          className="
            font-mono text-lg font-medium
            text-red-500
          "
        >
          05 — Contact
        </p>

        {/* Heading */}
        <h2
          id="contact-heading"
          className="
            mt-4
            text-5xl font-bold tracking-tight
            text-slate-900
            dark:text-white
            md:text-7xl
          "
        >
          Let&apos;s connect.
        </h2>

        {/* Intro */}
        <p
          className="
            mt-8 max-w-4xl
            text-xl leading-relaxed
            text-slate-600
            dark:text-slate-300
          "
        >
          I&apos;m currently seeking new opportunities where I can contribute,
          learn, and grow as a developer. If you think I&apos;d be a good fit
          for your team, I&apos;d love to connect and discuss how I can add
          value.
        </p>

        {/* Contact Grid */}
        <ul
          className="
            mt-12 grid gap-4
            md:grid-cols-2
          "
          aria-label="Contact information"
        >
          <li>
            <a
              href="mailto:adityakharadkar2706@gmail.com"
              className="
                flex items-center gap-4
                min-w-0 overflow-hidden
                rounded-2xl border border-slate-200
                bg-white px-6 py-5
                transition-colors
                hover:border-red-500
                dark:border-stone-800
                dark:bg-stone-800
              "
            >
              <FaRegEnvelope
                size={22}
                className="text-red-500 flex-shrink-0"
                aria-hidden="true"
              />

              <span className="min-w-0 break-all font-medium text-slate-900 dark:text-white">
                adityakharadkar2706@gmail.com
              </span>
            </a>
          </li>

          <li>
            <a
              href="tel:+917028281198"
              className="
                flex items-center gap-4
                min-w-0 overflow-hidden
                rounded-2xl border border-slate-200
                bg-white px-6 py-5
                transition-colors
                hover:border-red-500
                dark:border-stone-800
                dark:bg-stone-800
              "
            >
              <FiPhone
                size={22}
                className="text-red-500 flex-shrink-0"
                aria-hidden="true"
              />

              <span className="min-w-0 break-all font-medium text-slate-900 dark:text-white">
                +91 7028281198
              </span>
            </a>
          </li>

          <li className="md:col-span-2">
            <div
              className="
                flex items-center gap-4
                min-w-0 overflow-hidden
                rounded-2xl border border-slate-200
                bg-white px-6 py-5
                dark:border-stone-800
                dark:bg-stone-800
              "
            >
              <FiMapPin
                size={22}
                className="text-red-500 flex-shrink-0"
                aria-hidden="true"
              />

              <span className="min-w-0 break-words font-medium text-slate-900 dark:text-white">
                Pune, Maharashtra, India
              </span>
            </div>
          </li>
        </ul>

        {/* Actions */}
        <div
          className="
            mt-12
            flex flex-col gap-4
            sm:flex-row sm:flex-wrap
          "
        >
          <a
            href="/demo.pdf"
            download
            className="
              inline-flex items-center justify-center gap-3
              rounded-xl
              bg-red-500 px-6 py-3
              font-medium text-white
              transition-colors
              hover:bg-red-600
            "
          >
            <FiDownload aria-hidden="true" />
            Download Resume
          </a>

          <a
            href="https://github.com/adikharadkar"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-3
              rounded-xl border border-slate-300
              px-6 py-3
              font-medium
              hover:bg-slate-100
              dark:border-stone-700
              dark:hover:bg-stone-800
            "
          >
            <FaGithubSquare aria-hidden="true" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-kharadkar-6352ba174/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-3
              rounded-xl border border-slate-300
              px-6 py-3
              font-medium
              hover:bg-slate-100
              dark:border-stone-700
              dark:hover:bg-stone-800
            "
          >
            <FaLinkedin aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
