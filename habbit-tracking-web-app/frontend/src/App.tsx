import { useState } from "react";
// import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";

import { ThemeToggle } from "@src/components/ThemeToggle";
import { Header } from "@src/components/Header";
import { HabitForm } from "@src/components/HabitForm";
import { HabitList } from "@src/components/HabitList";
import { mockHabits } from "@src/data/mockHabits";
import type { Habit } from "@src/types/Habit";

export default function App() {
  const [habits, setHabits] = useState<Habit[]>(mockHabits);

  function handleAddHabit(name: string) {
    setHabits([...habits, { id: crypto.randomUUID(), name }]);
  }

  function handleDeleteHabit(id: string) {
    setHabits(habits.filter((habit) => habit.id !== id));
  }

  return (
    <>
      <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-6 sm:px-6">
        <Header />
        <HabitForm addHabit={handleAddHabit} />
        <HabitList habits={habits} onDeleteHabit={handleDeleteHabit} />
      </div>
      <ThemeToggle />
    </>
  );
}
