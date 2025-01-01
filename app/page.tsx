"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { PostCard } from "@/components/blog/post-card";
import { motion } from "framer-motion"; // Import motion from framer-motion

import { posts } from "@/lib/data/posts";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-background transition-colors"
      initial={{ opacity: 0 }} // Start with 0 opacity for the whole page
      animate={{ opacity: 1 }} // Fade in to full opacity for the whole page
      transition={{
        duration: 1.5, // Duration of the fade-in animation
        ease: "easeInOut", // Smooth easing function for a natural effect
      }}
    >
      {/* Navbar */}

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 md:py-5 max-w-screen-lg md:mt-15">
        <header className="pt-4 sm:pt-7 mb-6 md:mb-16 text-center ">
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

        <ScrollArea className="h-[calc(92vh-11rem)] md:h-[calc(100vh-12rem)]">
          <motion.div
            className="space-y-12 md:space-y-16"
            initial={{ opacity: 0 }} // Initial opacity for the list of posts
            animate={{ opacity: 1 }} // Fade-in effect for the posts
            transition={{
              duration: 1.5, // Duration of fade-in for the posts as well
              ease: "easeInOut", // Same smooth easing function
            }}
          >
            {posts.map((post, index) => (
              <div key={post.date}>
                <PostCard post={post} isLast={index === posts.length - 1} />
              </div>
            ))}
          </motion.div>
        </ScrollArea>
      </div>
    </motion.main>
  );
}
