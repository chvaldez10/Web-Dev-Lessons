import { ThemeToggle } from "./components/ThemeToggle";
import { Header } from "./components/Header";

export default function App() {
  return (
    <>
      <div className="mx-auto flex max-w-2xl flex-col gap-4 p-4">
        <Header />
      </div>
      <ThemeToggle />
    </>
  );
}
