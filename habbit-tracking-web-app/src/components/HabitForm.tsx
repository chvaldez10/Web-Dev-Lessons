import { Button } from "./Button";

export function HabitForm() {
  return (
    <form className="flex gap-2">
      <input
        type="text"
        placeholder="New habit"
        className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:ring-violet-500 dark:focus:ring-offset-zinc-800"
      />
      <Button>Add</Button>
    </form>
  );
}
