import { useContext, createContext } from "react";

import type { Habit } from "@src/types/Habit";

type HabitContextType = {
  habits: Habit[];
  addHabit: (name: string) => void;
  deleteHabit: (id: string) => void;
  toggleHabitCompletion: (id: string, date: Date) => void;
};

// null until provider mounts; useHabits enforces usage inside HabitProvider.
export const HabitContext = createContext<HabitContextType | null>(null);

export function useHabits() {
  const context = useContext(HabitContext);
  if (!context) {
    throw new Error("useHabits must be used within a HabitProvider");
  }

  return context;
}
