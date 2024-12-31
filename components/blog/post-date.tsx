"use client";

import { formatDate } from "@/lib/utils";

interface PostDateProps {
  date: string;
}

export function PostDate({ date }: PostDateProps) {
  const dateObj = new Date(date);
  
  return (
    <div className="flex items-center justify-between text-sm text-muted-foreground font-source">
      <time dateTime={date} className="transition-colors">
        {formatDate(dateObj)}
      </time>
      <span>
        {dateObj.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit', 
          hour12: true 
        })}
      </span>
    </div>
  );
}