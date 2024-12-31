"use client";

interface PostContentProps {
  content: string[];
}

export function PostContent({ content }: PostContentProps) {
  return (
    <div className="space-y-6 prose prose-neutral dark:prose-invert max-w-none">
      {content.map((paragraph, index) => (
        <p
          key={index}
          className="leading-normal text-foreground/90 font-source text-lg"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
