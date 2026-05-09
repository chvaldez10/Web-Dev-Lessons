import { Button } from "./Button";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Habbit Tracker</h1>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {" "}
          1/1 done today
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          April 6 - April 12
        </span>
        <div className="flex items-center gap-3">
          <Button>Previous</Button>
          <Button>Next</Button>
        </div>
      </div>
    </header>
  );
}
