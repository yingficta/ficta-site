"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WORKER_URL = "https://fable-friends-worker.charlieevett.workers.dev";

interface Story {
  id: string;
  image_url: string;
  opener: string;
  excerpt?: string;
}

function StoryCard({ story }: { story: Story }) {
  return (
    <div className="relative flex-shrink-0 w-56 rounded-2xl overflow-hidden group cursor-default mx-2 bg-card shadow-sm">
      <div className="w-full h-44 overflow-hidden">
        <img
          src={story.image_url}
          alt={story.opener}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-3 space-y-2">
        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono bg-secondary/15 text-secondary border border-secondary/20">
          opening line
        </span>
        <p className="text-xs font-medium text-foreground leading-snug">{story.opener}</p>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", duration = 50 }: {
  items: Story[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex items-start"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((story, i) => <StoryCard key={`${story.id}-${i}`} story={story} />)}
      </motion.div>
    </div>
  );
}

export function StoryGallery() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    fetch(`${WORKER_URL}/featured?type=story`)
      .then(r => r.json() as Promise<Story[]>)
      .then(setStories)
      .catch(() => {});
  }, []);

  if (stories.length === 0) return null;

  const third = Math.ceil(stories.length / 3);
  const row1 = stories.slice(0, third);
  const row2 = stories.slice(third, third * 2);
  const row3 = stories.slice(third * 2);

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <motion.h2
          className="text-3xl tracking-tight mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          the <span className="text-secondary">stories</span> they tell
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-md mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Kids take turns with AI to build stories one sentence at a time. Every illustration is generated from the story itself.
        </motion.p>
      </div>
      <div className="space-y-4">
        <MarqueeRow items={row1} direction="left" duration={55} />
        {row2.length > 0 && <MarqueeRow items={row2} direction="right" duration={70} />}
        {row3.length > 0 && <MarqueeRow items={row3} direction="left" duration={45} />}
      </div>
    </section>
  );
}
