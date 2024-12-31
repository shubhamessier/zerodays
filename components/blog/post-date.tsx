"use client";

import { formatDate } from "@/lib/utils";

interface PostDateProps {
  date: string;
  className?: string; // Add the optional className prop
}

export function PostDate({ date, className }: PostDateProps) {
  const dateObj = new Date(date);

  return (
    <div
      className={`flex items-center justify-between text-sm text-muted-foreground font-source ${
        className || ""
      }`}
    >
      <time dateTime={date} className="transition-colors">
        {formatDate(dateObj)}
      </time>
      <span>
        {dateObj.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </span>
    </div>
  );
}
