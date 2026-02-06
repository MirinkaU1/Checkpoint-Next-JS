"use client";

import { ContributionCalendar, getContributionColor } from "@/lib/github";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface GithubCalendarProps {
  calendar: ContributionCalendar;
}

export function GithubCalendar({ calendar }: GithubCalendarProps) {
  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
  } | null>(null);

  // Récupérer les 52 dernières semaines (1 an)
  const recentWeeks = calendar.weeks.slice(-52);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">
            {calendar.totalContributions} contributions cette année
          </CardTitle>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>Moins</span>
            <div className="flex gap-1">
              <div className="h-3 w-3 rounded-sm bg-muted/30" />
              <div className="h-3 w-3 rounded-sm bg-green-300/60 dark:bg-green-900/40" />
              <div className="h-3 w-3 rounded-sm bg-green-400/70 dark:bg-green-800/60" />
              <div className="h-3 w-3 rounded-sm bg-green-500/80 dark:bg-green-700/80" />
              <div className="h-3 w-3 rounded-sm bg-green-600 dark:bg-green-600" />
            </div>
            <span>Plus</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Calendrier en grid */}
          <div className="flex gap-1 overflow-x-auto pb-2">
            {recentWeeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.contributionDays.map((day, dayIndex) => {
                  const date = new Date(day.date);
                  const formattedDate = date.toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  });

                  return (
                    <div
                      key={dayIndex}
                      className={`h-3 w-3 rounded-sm ${getContributionColor(
                        day.contributionCount,
                      )} hover:ring-2 hover:ring-primary/50 transition-all cursor-pointer`}
                      onMouseEnter={() =>
                        setHoveredDay({
                          date: formattedDate,
                          count: day.contributionCount,
                        })
                      }
                      onMouseLeave={() => setHoveredDay(null)}
                      title={`${day.contributionCount} contribution${
                        day.contributionCount > 1 ? "s" : ""
                      } le ${formattedDate}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Tooltip hover */}
          {hoveredDay && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-popover text-popover-foreground text-xs rounded-md shadow-md border pointer-events-none z-10">
              <p className="font-medium">
                {hoveredDay.count} contribution
                {hoveredDay.count > 1 ? "s" : ""}
              </p>
              <p className="text-muted-foreground">{hoveredDay.date}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
