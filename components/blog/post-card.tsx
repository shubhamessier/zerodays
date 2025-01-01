"use client";

import { PostDate } from "./post-date";
import { PostContent } from "./post-content";
import { BlogPost } from "@/lib/types";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

interface PostCardProps {
  post: BlogPost;
  isLast: boolean;
}

export function PostCard({ post, isLast }: PostCardProps) {
  const postContentProps = {
    content: post.content,
    className: "text-base md:text-lg text-foreground mt-2",
  };

  return (
    <article
      id={`post-${post.date}`}
      className="group relative transition-all px-2 md:px-6 lg:px-8 py-5"
    >
      {/* Post Date */}
      <PostDate
        date={post.date}
        className="text-sm md:text-base text-muted-foreground"
      />

      {/* Title */}
      <h2
        className="text-2xl font-playfair text-primary transition-colors group-hover:text-primary/90 
pt-3 pb-3
md:text-3xl md:pt-6 md:mt-6 
lg:pt-[-2px] lg:pb-4 
xl:text-3xl xl:-mt-2 xl:pb-4"
      >
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

      {/* Elegant Separator */}
      {!isLast && (
        <div className="mt-12 md:mt-16 mx-auto flex justify-center gap-4">
          <ScrollLink
            to={`post-${post.date}`}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            <div className="bg-primary w-2 h-2 rounded-full shadow-md hover:scale-125 transition-transform"></div>
          </ScrollLink>
          <ScrollLink
            to={`post-${post.date}`}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            <div className="bg-primary w-2 h-2 rounded-full shadow-md hover:scale-125 transition-transform"></div>
          </ScrollLink>
          <ScrollLink
            to={`post-${post.date}`}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            <div className="bg-primary w-2 h-2 rounded-full shadow-md hover:scale-125 transition-transform"></div>
          </ScrollLink>
        </div>
      )}
    </article>
  );
}
