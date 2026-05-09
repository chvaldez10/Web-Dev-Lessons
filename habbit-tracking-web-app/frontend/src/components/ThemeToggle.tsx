import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const STORAGE_KEY = "habbit-theme";

type Theme = "light" | "dark";

function getStoredOrSystemTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

const iconClass = "h-6 w-6 shrink-0";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof window === "undefined" ? "light" : getStoredOrSystemTheme(),
  );

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="cursor-pointer fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 text-zinc-900 shadow-lg transition hover:bg-zinc-300 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600 dark:focus-visible:outline-zinc-500"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <SunIcon className={iconClass} aria-hidden />
      ) : (
        <MoonIcon className={iconClass} aria-hidden />
      )}
    </button>
  );
}
