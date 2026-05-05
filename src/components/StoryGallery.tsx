"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WORKER_URL = "https://fable-friends-worker.charlieevett.workers.dev";
const ADMIN_KEY = "letmecurate";

interface Story {
  id: string;
  type: string;
  image_url: string;
  opener: string;
  content?: string;
  created_at: string;
  featured: boolean;
}

interface Segment {
  text: string;
  isUser: boolean;
}

function parseSentences(content: string): Segment[] {
  return content
    .split(/(?<=[.!?])\s+(?=\.{3}|[A-Z"'])/)
    .map(s => s.trim())
    .filter(Boolean)
    .map((text, i) => ({ text, isUser: i % 2 === 0 }));
}

function StoryCard({ story, isSquare = false }: { story: Story; isSquare?: boolean }) {
  const allSegments = story.content ? parseSentences(story.content) : [];
  // Small cards show 1 sentence; middle card shows all
  const segments = isSquare ? allSegments.slice(0, 3) : allSegments;
  const date = new Date(story.created_at).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });

  return (
    <div className={"relative overflow-hidden rounded-2xl w-full shadow-sm hover:shadow-md transition-shadow duration-300 aspect-square"}>
      <img
        src={story.image_url}
        alt={story.opener}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${isSquare ? "bg-gradient-to-t from-black/70 via-black/20 to-transparent" : "bg-gradient-to-b from-black/70 via-black/20 to-transparent"}`} />
      {/* Text */}
      <div className={`absolute left-0 right-0 ${isSquare ? "bottom-0" : "top-0"}`} style={{ padding: isSquare ? "10px 12px" : "14px 16px" }}>
        <p style={{ fontSize: "1.16rem", color: "rgba(255,255,255,0.55)", marginBottom: isSquare ? 3 : 5 }}>{date}</p>
        <div className="flex flex-col" style={{ gap: 3 }}>
          {segments.map((s, i) => (
            <p
              key={i}
              style={{
                fontSize: isSquare ? "1.3rem" : "1.4rem",
                lineHeight: 1.4,
                color: s.isUser ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.65)",
                marginTop: i > 0 && s.isUser !== segments[i - 1].isUser ? 10 : 0,
              }}
            >
              {s.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StoryGallery() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    fetch(`${WORKER_URL}/admin/gallery`, {
      headers: { "x-admin-key": ADMIN_KEY },
    })
      .then(r => r.json() as Promise<{ stories: Story[] }>)
      .then(data => setStories(data.stories.filter(s => s.featured).slice(0, 3)))
      .catch(() => {});
  }, []);

  if (stories.length === 0) return null;

  return (
    <div>
        <motion.div
          className="flex items-start w-full"
          style={{ gap: 24 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Left: square, top-aligned — only if 2+ stories */}
          {stories.length >= 2 && (
            <div style={{ flex: "1 1 0%", maxWidth: "28%" }}>
              <StoryCard story={stories[1]} isSquare />
            </div>
          )}

          {/* Middle: tall — primary story */}
          <div style={{ flex: "1.8 1 0%" }}>
            <StoryCard story={stories[0]} />
          </div>

          {/* Right: square, bottom-aligned — only if 3+ stories */}
          {stories.length >= 3 && (
            <div className="flex flex-col self-stretch" style={{ flex: "1 1 0%", maxWidth: "28%", justifyContent: "flex-end" }}>
              <StoryCard story={stories[2]} isSquare />
            </div>
          )}
        </motion.div>
    </div>
  );
}
