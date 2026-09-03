"use client";

import {
  createContext,
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export type Theme = "light" | "dark";

type AppContextValue = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  isThemeReady: boolean;
  toggleTheme: () => void;
};

export const AppContext = createContext<AppContextValue | undefined>(undefined);

type AppContextProviderProps = {
  children: ReactNode;
};

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const currentTheme =
        document.documentElement.dataset.theme === "light" ? "light" : "dark";

      setTheme(currentTheme);
      setIsThemeReady(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isThemeReady) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [isThemeReady, theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      isThemeReady,
      toggleTheme,
    }),
    [theme, isThemeReady, toggleTheme],
  );

  return createElement(AppContext.Provider, { value }, children);
}
