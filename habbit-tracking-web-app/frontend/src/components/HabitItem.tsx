import type { Habit } from "@src/types/Habit";
import { twMerge } from "tailwind-merge";
import { Button } from "@src/components/Button";
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isFuture,
  isSameDay,
} from "date-fns";

type HabitItemProps = {
  habit: Habit;
  onDeleteHabit: (id: string) => void;
};

export function HabitItem({ habit, onDeleteHabit }: HabitItemProps) {
  const today = new Date();
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(today),
    end: endOfWeek(today),
  });

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="truncate font-medium text-zinc-900 dark:text-zinc-100">
            {habit.name}
          </span>
          <span
            className="shrink-0 text-sm text-amber-600 dark:text-amber-400"
            aria-hidden
          >
            🔥
          </span>
        </div>
        <Button
          variant="ghost-destructive"
          className="shrink-0 text-sm"
          onClick={() => onDeleteHabit(habit.id)}
        >
          Delete
        </Button>
      </div>
      <div className="flex gap-1.5 rounded-lg bg-zinc-50 p-1.5 dark:bg-zinc-950/70">
        {visibleDates.map((date) => {
          const isToday = isSameDay(date, today);
          const future = isFuture(date) && !isSameDay(date, today);
          const isDisabled = future;

          return (
            <button
              key={date.toISOString()}
              type="button"
              disabled={isDisabled}
              className={twMerge(
                "flex min-w-0 flex-1 cursor-pointer flex-col items-center gap-0.5 rounded-md border px-1 py-2 text-[0.6875rem] leading-tight transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900",
                "disabled:cursor-not-allowed disabled:opacity-40",
                isToday
                  ? "border-violet-500 bg-violet-100 text-violet-900 hover:bg-violet-100 dark:border-violet-400 dark:bg-violet-950/70 dark:text-violet-100 dark:hover:bg-violet-950/80"
                  : "border-zinc-200/90 bg-white text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-700",
              )}
            >
              <span className="font-medium">{format(date, "EEE")}</span>
              <span
                className={
                  isToday
                    ? "text-violet-700 dark:text-violet-200"
                    : "text-zinc-500 dark:text-zinc-400"
                }
              >
                {format(date, "d")}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
