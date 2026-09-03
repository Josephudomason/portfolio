"use client";

import { useAppContext } from "@/Hook/UseContext";
import { Menu, X } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

export function Header() {
  const { theme, isThemeReady, toggleTheme } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nextTheme = theme === "dark" ? "light" : "dark";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="brand nav-fade">
          Joseph Udomason
        </a>

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={`site-nav${isMenuOpen ? " site-nav--open" : ""}`}
        >
          <a className="nav-fade" href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a className="nav-fade" href="#toolbox" onClick={closeMenu}>
            Toolbox
          </a>
          <a className="nav-fade" href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <button
            type="button"
            className="theme-toggle nav-fade"
            onClick={toggleTheme}
            aria-label={
              isThemeReady ? `Activate ${nextTheme} mode` : "Toggle theme"
            }
            title={isThemeReady ? `${nextTheme} mode` : "Toggle theme"}
            aria-pressed={isThemeReady ? theme === "light" : false}
          >
            <span className="theme-toggle__icon" aria-hidden="true">
              {(isThemeReady ? theme : "dark") === "dark" ? <FaMoon /> : <FaSun />}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
