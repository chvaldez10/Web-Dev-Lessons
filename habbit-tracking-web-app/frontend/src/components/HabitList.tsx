import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { HabitItem } from "@src/components/HabitItem";
import { mockHabits } from "@src/data/mockHabits";

export function HabitList() {
  const habits = mockHabits;

  if (habits.length === 0) {
    return (
      <div
        className="flex flex-col items-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/80 px-6 py-12 text-center dark:border-zinc-600 dark:bg-zinc-900/40"
        role="status"
      >
        <ClipboardDocumentListIcon
          className="mb-4 h-11 w-11 text-zinc-400 dark:text-zinc-500"
          aria-hidden
        />
        <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          No habits yet
        </p>
        <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Add your first habit above to start tracking and build streaks.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  );
}
