"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WORKER_URL = "https://fable-friends-worker.charlieevett.workers.dev";

interface Character {
  id: string;
  image_url: string;
  description: string;
  words: string[];
}

function CharacterCard({ char }: { char: Character }) {
  return (
    <div className="relative flex-shrink-0 w-52 rounded-2xl overflow-hidden group cursor-default mx-2 bg-card shadow-sm">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={char.image_url}
          alt={char.description}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-3 space-y-2">
        <div className="flex flex-wrap gap-1">
          {char.words.map((word) => (
            <span key={word} className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-primary/15 text-primary border border-primary/20">
              {word}
            </span>
          ))}
        </div>
        <p className="text-xs text-foreground/70 leading-snug">{char.description}</p>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", duration = 40 }: {
  items: Character[];
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
        {doubled.map((char, i) => <CharacterCard key={`${char.id}-${i}`} char={char} />)}
      </motion.div>
    </div>
  );
}

export function CharacterGallery() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch(`${WORKER_URL}/featured?type=character`)
      .then(r => r.json() as Promise<Character[]>)
      .then(setCharacters)
      .catch(() => {});
  }, []);

  if (characters.length === 0) return null;

  const third = Math.ceil(characters.length / 3);
  const row1 = characters.slice(0, third);
  const row2 = characters.slice(third, third * 2);
  const row3 = characters.slice(third * 2);

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
          meet the <span className="text-primary">characters</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-md mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Every character is brought to life by a child's words. Here are a few from our community.
        </motion.p>
      </div>
      <div className="space-y-4">
        <MarqueeRow items={row1} direction="left" duration={60} />
        {row2.length > 0 && <MarqueeRow items={row2} direction="right" duration={75} />}
        {row3.length > 0 && <MarqueeRow items={row3} direction="left" duration={50} />}
      </div>
    </section>
  );
}
