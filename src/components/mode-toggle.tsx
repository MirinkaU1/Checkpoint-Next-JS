"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

type ModeToggleProps = React.ComponentPropsWithoutRef<typeof Button>;

export const ModeToggle = React.forwardRef<HTMLButtonElement, ModeToggleProps>(
  ({ className, onClick, ...props }, ref) => {
    const { resolvedTheme, setTheme } = useTheme();

    return (
      <Button
        ref={ref}
        variant="ghost"
        type="button"
        size="icon"
        className={cn("px-2", className)}
        onClick={(event) => {
          onClick?.(event);
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
        {...props}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
        <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
      </Button>
    );
  },
);

ModeToggle.displayName = "ModeToggle";
