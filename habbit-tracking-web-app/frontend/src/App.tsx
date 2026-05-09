import { useState, useEffect } from "react";
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";

import { ThemeToggle } from "@src/components/ThemeToggle";
import { Header } from "@src/components/Header";
import { HabitForm } from "@src/components/HabitForm";
import { HabitList } from "@src/components/HabitList";
import { HabitProvider } from "@src/context/HabitProvider";

export default function App() {
  const [weekOffset, setWeekOffset] = useState(0);

  const week = addWeeks(new Date(), weekOffset);
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week),
    end: endOfWeek(week),
  });

  useEffect(() => {
    function handler() {
      console.log("weekOffset", weekOffset);
    }
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [weekOffset]);

  return (
    <>
      <div
        className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-6 
      sm:px-6"
      >
        <HabitProvider>
          <Header
            visibleDates={visibleDates}
            onPreviousWeek={() => setWeekOffset(weekOffset - 1)}
            onNextWeek={() => setWeekOffset(weekOffset + 1)}
          />
          <HabitForm />
          <HabitList visibleDates={visibleDates} />
        </HabitProvider>
      </div>
      <ThemeToggle />
    </>
  );
}
