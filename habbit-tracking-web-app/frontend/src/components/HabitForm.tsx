import { useState, type SubmitEvent } from "react";
import { Button } from "@src/components/Button";

type HabitFormProps = {
  addHabit: (habit: Habit) => void;
};

export function HabitForm({ addHabit }: HabitFormProps) {
  const [habitName, setHabitName] = useState("");

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    if (habitName.trim() === "") {
      return;
    }

    setHabitName("");
  }
  return (
    <form className="flex gap-2">
      <input
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        type="text"
        placeholder="New habit"
        className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:ring-violet-500 dark:focus:ring-offset-zinc-800"
      />
      <Button
        disabled={habitName.trim() === ""}
        type="submit"
        className="rounded-lg px-4 py-2 font-medium"
      >
        Add
      </Button>
    </form>
  );
}
