import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import { StoryGallery } from "./StoryGallery";

export function Product() {
  return (
    <div className="min-h-screen pb-24 overflow-x-hidden">

      {/* Ambient blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-10 -left-32 w-[560px] h-[560px] bg-primary/12 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-secondary/12 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.45, 0.3, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="pt-40 px-6 lg:px-16">
        <div className="flex items-start" style={{ gap: 24 }}>
          {/* Spacer matching left card width */}
          <div style={{ flex: "1 1 0%", maxWidth: "28%" }} />

          {/* Hero text aligned to middle card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
            style={{ flex: "1.8 1 0%" }}
          >
            <h1 className="tracking-tight leading-tight text-[clamp(28px,4vw,42px)] mt-1">
              co-creator
              <br />
              <span className="text-primary">of stories</span>
            </h1>
            <p className="text-muted-foreground">
              Inspired by how children learn to write, the app &ldquo;shows, not tells&rdquo; —
              through playful models like one sentence at a time or build a character.
              Let kids lead, and let AI assist.
            </p>

            <a
              href="https://apps.apple.com/us/app/ficta/id6503630141"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black hover:bg-black/85 text-white rounded-2xl px-6 py-3 shadow-lg transition-opacity w-fit"
            >
              <Apple className="w-5 h-5 shrink-0" />
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-70">Download on the</div>
                <div className="text-sm font-medium">App Store</div>
              </div>
            </a>
          </motion.div>

          {/* Spacer matching right card width */}
          <div style={{ flex: "1 1 0%", maxWidth: "28%" }} />
        </div>
      </div>

      {/* Story card collage — full width with just side padding */}
      <motion.div
        className="px-6 lg:px-16 mt-16"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <StoryGallery />
      </motion.div>

    </div>
  );
}
