"use client";

import { PostDate } from "./post-date";
import { PostContent } from "./post-content";
import { Separator } from "@/components/ui/separator";
import { BlogPost } from "@/lib/types";

interface PostCardProps {
  post: BlogPost;
  isLast: boolean;
}

export function PostCard({ post, isLast }: PostCardProps) {
  const postContentProps = {
    content: post.content,
    className: "text-base md:text-lg text-foreground mt-4",
  };

  return (
    <article className="group relative transition-all px-4 md:px-6 lg:px-8 py-6">
      {/* Post Date */}
      <PostDate
        date={post.date}
        className="text-sm md:text-base text-muted-foreground"
      />

      {/* Title */}
      <h2 className="text-xl pt-4 pb-2 md:text-3xl font-playfair md:mt-6 text-primary group-hover:text-primary/90 transition-colors">
        {post.title}
      </h2>

      {/* Content */}
      <PostContent {...postContentProps} />

      {/* Image */}
      {post.image && (
        <div className="w-full mt-8 md:mt-10">
          <img
            src={post.image}
            alt={post.title}
            className="w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto rounded-lg shadow-lg transition-transform group-hover:scale-105"
          />
        </div>
      )}

      {/* Separator */}
      {!isLast && <Separator className="mt-12 md:mt-16 mx-auto max-w-[80%]" />}
    </article>
  );
}
