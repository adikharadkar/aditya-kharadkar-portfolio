import { FaLinkedin, FaGithubSquare, FaChevronDown } from "react-icons/fa";

export default function Contact() {
  const secondaryActionStyles = `
    inline-flex items-center justify-center gap-2
    w-full sm:w-auto
    px-4 py-3
    rounded-xl
    border border-slate-300
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus-visible:ring-offset-2
    cursor-pointer
    transition-colors
    hover:bg-slate-100
    dark:border-stone-800
    dark:hover:bg-stone-800
  `;

  return (
    <>
      <ul
        className="
        flex flex-col gap-4
        sm:flex-row sm:flex-wrap sm:items-center
      "
        aria-label="Contact options"
      >
        <li>
          <a
            href="public\Aditya_Kharadkar_Frontend_Developer_4.7yrs.pdf"
            download
            className="
            inline-flex items-center justify-center
            w-full sm:w-auto
            px-6 py-3
            rounded-xl
            bg-red-500
            text-slate-100
            transition-colors
            cursor-pointer
            hover:bg-red-600
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus-visible:ring-offset-2
          "
          >
            Download Resume
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/aditya-kharadkar-6352ba174/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className={secondaryActionStyles}
          >
            <FaLinkedin aria-hidden="true" focusable="false" />
            LinkedIn
          </a>
        </li>

        <li>
          <a
            href="https://github.com/adikharadkar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className={secondaryActionStyles}
          >
            <FaGithubSquare aria-hidden="true" focusable="false" />
            GitHub
          </a>
        </li>
      </ul>

      <div className="mt-6 flex items-center sm:justify-start justify-center">
        <a
          href="#experience-heading"
          aria-label="Scroll to explore"
          className="inline-flex items-center gap-3 text-lg text-slate-800 transition-colors hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100"
        >
          <span>Scroll to explore</span>
          <FaChevronDown
            aria-hidden="true"
            focusable="false"
            className="w-5 h-5 text-slate-600 dark:text-slate-300 animate-bounce-slow"
          />
        </a>
      </div>
    </>
  );
}
