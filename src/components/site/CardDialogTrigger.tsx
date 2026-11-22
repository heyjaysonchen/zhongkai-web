import type { MouseEventHandler } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardDialogTriggerProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  arrowClassName?: string;
}

export function CardDialogTrigger({ label, onClick, arrowClassName }: CardDialogTriggerProps) {
  return (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex size-9 shrink-0 items-center justify-center rounded-md text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground group-has-[:focus-visible]:bg-accent group-has-[:focus-visible]:text-accent-foreground",
          arrowClassName,
        )}
      >
        <ArrowRight className="size-4 transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-has-[:focus-visible]:translate-x-1" />
      </span>
      <button
        type="button"
        className="interactive-card-trigger"
        aria-label={label}
        aria-haspopup="dialog"
        onClick={onClick}
      />
    </>
  );
}
