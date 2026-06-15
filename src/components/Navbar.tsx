import { useState } from "react";

import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="
        sticky top-0 z-50
        flex items-center justify-between
        p-4
        bg-white dark:bg-stone-950
        border-b border-slate-300 dark:border-stone-800
      "
    >
      <a
        className="
          text-lg font-bold
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500 rounded
        "
        href="#top"
      >
        My App
      </a>
      {isMenuOpen && (
        <ul
          id="mobile-menu"
          className="
          absolute top-full left-0 w-full
          bg-white dark:bg-stone-950
          border-b border-slate-300
          dark:border-stone-800
        "
        >
          {navLinks.map((link) => (
            <li key={link.name} className="md:hidden flex flex-col">
              <a
                href={link.href}
                className="
                px-4 py-3 border-t border-slate-300
                dark:border-stone-800
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
      <ul className="hidden md:flex">
        {navLinks.map((link) => (
          <li className="hidden md:flex" key={link.name}>
            <a
              href={link.href}
              className="
              mx-4 text-gray-700
              dark:text-gray-300
              active:color-red:500
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500 rounded
            "
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <button
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          onClick={toggleTheme}
          className="
            px-4 py-2 cursor-pointer
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500 rounded
          "
        >
          {theme === "dark" ? (
            <span aria-hidden="true">☀️</span>
          ) : (
            <span aria-hidden="true">🌙</span>
          )}
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="
            md:hidden px-2 cursor-pointer
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500 rounded"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}
