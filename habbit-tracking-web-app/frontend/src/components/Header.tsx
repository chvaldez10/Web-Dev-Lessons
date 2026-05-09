import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { Button } from "@src/components/Button";

const navButtonClass =
  "inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium";

export function Header() {
  return (
    <header className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0 space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Habbit Tracker
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            1/1 done today
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:min-w-0 sm:items-end sm:text-right">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              This week
            </p>
            <p className="mt-0.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              April 6 – April 12
            </p>
          </div>
          <nav
            className="flex items-center justify-start gap-2 sm:justify-end"
            aria-label="Week navigation"
          >
            <Button variant="secondary" type="button" className={navButtonClass}>
              <ChevronLeftIcon className="h-4 w-4 shrink-0" aria-hidden />
              Previous
            </Button>
            <Button variant="secondary" type="button" className={navButtonClass}>
              Next
              <ChevronRightIcon className="h-4 w-4 shrink-0" aria-hidden />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
