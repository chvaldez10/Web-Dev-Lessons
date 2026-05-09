import { type ReactNode } from "react";
import { isSameDay } from "date-fns";
import { HabitContext } from "@src/context/useHabits";
import type { Habit } from "@src/types/Habit";
import { useLocalStorage } from "@src/hooks/useLocalStorage";

type HabitProviderProps = {
  children: ReactNode;
};

export function HabitProvider({ children }: HabitProviderProps) {
  const [habits, setHabits] = useLocalStorage<Habit[]>("Habits", []);

  function addHabit(name: string) {
    // Functional update avoids stale closures if multiple adds batch together.
    setHabits((currentHabits) => [
      ...currentHabits,
      { id: crypto.randomUUID(), name, completions: [] },
    ]);
  }

  function deleteHabit(id: string) {
    setHabits((currentHabits) =>
      currentHabits.filter((habit) => habit.id !== id),
    );
  }

  function toggleHabitCompletion(id: string, date: Date) {
    setHabits((currentHabits) =>
      currentHabits.map((habit) => {
        if (habit.id !== id) {
          return habit;
        }

        // Same calendar day counts as one completion, regardless of clock time.
        const alreadyCompleted = habit.completions.some((completedDate) =>
          isSameDay(completedDate, date),
        );

        const completions = alreadyCompleted
          ? habit.completions.filter(
              (completedDate) => !isSameDay(completedDate, date),
            )
          : [...habit.completions, date];

        return { ...habit, completions };
      }),
    );
  }

  return (
    <HabitContext
      value={{ habits, addHabit, deleteHabit, toggleHabitCompletion }}
    >
      {children}
    </HabitContext>
  );
}
