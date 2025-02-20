"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Card className="flex">
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm group">
              {href ? (
                <Link
                  href={href}
                  className="inline-flex items-center gap-1 relative group"
                >
                  <span className="relative">
                    {title}
                    <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-current transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                  <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              ) : (
                <span className="relative group">
                  {title}
                  <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-current transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </span>
              )}
              {badges && (
                <span className="inline-flex gap-x-1 ml-2">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          {description && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-current mt-2 flex items-center gap-1 group"
            >
              {isExpanded ? "Masquer les détails" : "Afficher les détails"}
              <ChevronDownIcon
                className={cn(
                  "size-4 transform translate-y-[0.5px] opacity-0 transition-all duration-300 ease-out group-hover:translate-y-[2px] group-hover:opacity-100",
                  isExpanded ? "-rotate-180" : ""
                )}
              />
            </button>
          )}
        </CardHeader>
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="px-6 pb-6 text-xs sm:text-sm"
          >
            {description}
          </motion.div>
        )}
      </div>
    </Card>
  );
};
