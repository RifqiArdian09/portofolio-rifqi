"use client";

import { useState } from "react";
import type { IconType } from "react-icons";
import {
  FiAward,
  FiBriefcase,
  FiHome,
  FiImage,
  FiMail,
  FiUser,
} from "react-icons/fi";

export type NavIconKey = "home" | "user" | "briefcase" | "award" | "image" | "mail";

export interface NavLink {
  label: string;
  href: string;
  icon: NavIconKey;
}

interface SiteNavProps {
  navLinks: NavLink[];
}

const SiteNav = ({ navLinks }: SiteNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const iconMap: Record<NavIconKey, IconType> = {
    home: FiHome,
    user: FiUser,
    briefcase: FiBriefcase,
    award: FiAward,
    image: FiImage,
    mail: FiMail,
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 text-sm font-medium sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center rounded-3xl border border-white/10 bg-[#050306]/90 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:px-8">
        <div className="flex w-full items-center justify-between gap-3">
          <span className="text-lg font-semibold tracking-wide text-white">
            Rifqi<span className="text-sky-400">Port.</span>
          </span>

          <nav className="hidden flex-1 items-center justify-center gap-6 text-white/70 md:flex">
            {navLinks.map(({ label, icon, href }) => {
              const Icon = iconMap[icon];

              return (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2 rounded-full px-3 py-1.5 text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <Icon className="text-lg" aria-hidden />
                  {label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="ml-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : "translate-y-0"}`}
              />
              <span
                className={`absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : "translate-y-0"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mt-4 flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#050306]/90 p-4 text-white/80 shadow-lg">
          <p className="text-center text-base font-semibold text-white">Rifqi<span className="text-sky-400">Port.</span></p>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={handleLinkClick}
              className="rounded-xl px-3 py-2 text-base font-semibold transition hover:bg-white/10 hover:text-white"
            >
              {label}
            </a>
          ))}
         
        </div>
      </div>
    </header>
  );
};

export default SiteNav;
