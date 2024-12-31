"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { PostCard } from "@/components/blog/post-card";
import { posts } from "@/lib/data/posts";

export default function Home() {
  return (
    <main className="min-h-screen bg-background transition-colors">
      {/* Navbar */}

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 md:py-5 max-w-screen-lg md:mt-15">
        <header className="pt-6 mb-6 md:mb-16 text-center">
          <h2 className="text-4xl sm:text-4xl pt-5 md:text-5xl font-LibreBaskerville lg:mt-0 mb-4 tracking-tight">
            The Zero Days of Life
          </h2>
          <a
            href="https://gaurshubham.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors font-ebgaramond text-lg md:text-xl"
          >
            by Shubham Gaur
          </a>
        </header>

        <ScrollArea className="h-[calc(130vh-11rem)] md:h-[calc(100vh-12rem)]">
          <div className="space-y-12 md:space-y-16">
            {posts.map((post, index) => (
              <div key={post.date}>
                <PostCard post={post} isLast={index === posts.length - 1} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </main>
  );
}
