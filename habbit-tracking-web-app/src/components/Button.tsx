import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "ghost-destructive";

type ButtonProps = {
  variant?: Variant;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "cursor-pointer transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed",
        getVariantStyles(variant),
        className,
      )}
    />
  );
}

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case "primary":
      return [
        "text-white",
        "bg-violet-600 hover:bg-violet-500",
        "dark:bg-violet-500 dark:hover:bg-violet-400",
      ].join(" ");
    case "secondary":
      return [
        "bg-zinc-200 text-zinc-900 hover:bg-zinc-300",
        "dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600",
      ].join(" ");
    case "ghost-destructive":
      return [
        "text-red-700 hover:bg-red-50 hover:text-red-800",
        "dark:text-red-400 dark:hover:bg-red-950/80 dark:hover:text-red-100",
      ].join(" ");
    default:
      throw new Error(`Invalid variant: ${variant satisfies never}`);
  }
}
