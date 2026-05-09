import type { Habit } from "@src/types/Habit";

export function HabitItem({ habit }: { habit: Habit }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
        {habit.name}
      </p>
    </div>
  );
}
