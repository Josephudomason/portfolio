"use client";

import { useAppContext } from "@/Hook/UseContext";
import { FaMoon, FaSun } from "react-icons/fa";

export function Header() {
  const { theme, isThemeReady, toggleTheme } = useAppContext();
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="brand nav-fade">
          Joseph Udomason
        </a>



        <nav aria-label="Primary navigation" className="site-nav">
          <a className="nav-fade" href="#projects">
            Projects
          </a>
          <a className="nav-fade" href="#toolbox">
            Toolbox
          </a>
          <a className="nav-fade" href="#contact">
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
