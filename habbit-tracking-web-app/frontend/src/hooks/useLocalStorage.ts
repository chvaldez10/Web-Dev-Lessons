import { useState, useEffect } from "react";
import { parseISO } from "date-fns";

/** Syncs state with localStorage; survives refresh.*/
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() =>
    readStorageValue(key, initialValue),
  );

  // Mirror React state to disk whenever it changes (or key changes).
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Quota / private mode / disabled storage: keep in-memory state only.
    }
  }, [value, key]);

  return [value, setValue] as const;
}

function readStorageValue<T>(key: string, initialValue: T): T {
  // SSR / pre-hydration: no localStorage.
  if (typeof window === "undefined") return initialValue;

  try {
    const item = localStorage.getItem(key);
    // Missing key is null; JSON.parse(null) would yield null, not T.
    if (item === null) return initialValue;

    return JSON.parse(item, dateReviver) as T;
  } catch {
    // Corrupt JSON or unexpected shape: treat as empty.
    return initialValue;
  }
}

/** Rehydrate Dates from JSON.stringify (ISO strings). Matches toISOString(). */
function dateReviver(_key: string, value: unknown) {
  if (
    typeof value === "string" &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value)
  ) {
    return parseISO(value);
  }

  return value;
}
