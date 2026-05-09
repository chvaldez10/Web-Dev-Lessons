import { ThemeToggle } from "@src/components/ThemeToggle";
import { Header } from "@src/components/Header";
import { HabitForm } from "@src/components/HabitForm";
import { HabitList } from "@src/components/HabitList";

export default function App() {
  return (
    <>
      <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-6 sm:px-6">
        <Header />
        <HabitForm />
        <HabitList />
      </div>
      <ThemeToggle />
    </>
  );
}
