import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Apple, PlayCircle, Star, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import typewriterImage from "figma:asset/7b4b926981c8f2b5834b29675e0eb4faf27cc08d.png";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Creative Professional",
    content: "This app has completely transformed my workflow. It's intuitive, beautiful, and powerful.",
    rating: 5,
    initials: "AJ"
  },
  {
    name: "Maria Garcia",
    role: "Designer",
    content: "I've tried many apps, but this one stands out. The attention to detail is incredible.",
    rating: 5,
    initials: "MG"
  },
  {
    name: "David Kim",
    role: "Entrepreneur",
    content: "Simple yet powerful. Exactly what I needed to bring my ideas to life.",
    rating: 5,
    initials: "DK"
  },
  {
    name: "Sophie Chen",
    role: "Artist",
    content: "The perfect blend of functionality and aesthetics. Highly recommended!",
    rating: 5,
    initials: "SC"
  }
];

const stories = [
  "Once upon a time...",
  "In a magical land...",
  "A brave dragon soared...",
  "The adventure begins...",
  "Stories come alive...",
  "Dreams take flight..."
];

export function Product() {
  const [papers, setPapers] = useState<Array<{ id: number; text: string; delay: number }>>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPapers(prev => {
        const newPaper = {
          id: nextId,
          text: stories[nextId % stories.length],
          delay: 0
        };
        setNextId(n => n + 1);
        // Keep only the last 5 papers
        return [...prev.slice(-4), newPaper];
      });
    }, 3000); // New paper every 3 seconds

    return () => clearInterval(interval);
  }, [nextId]);

  return (
    <div className="min-h-screen pb-32">
      {/* Hero Section with Animation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-12">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10 text-center lg:text-left"
            >
              <div className="space-y-6">
                <h1 className="tracking-tight leading-none text-left">
                  co-creator
                  <br />
                  <span className="text-primary">
                    of stories
                  </span>
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 text-left">
                  Inspired by how children learn to write, the app "shows, not tells" how to use words, build sentences, and form stories — through playful models like one sentence at a time or build a character. Let kids lead, and let AI assist. Make writing feel like play.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://apps.apple.com/us/app/ficta/id6503630141" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-2xl px-8 py-6 group text-center">
                    <Apple className="w-6 h-6 mr-2" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">Download on the</div>
                      <div className="text-lg">App Store</div>
                    </div>
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right Content - Animated Typewriter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[700px] hidden lg:block"
            >
              {/* Typewriter */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4">
                <motion.img
                  src={typewriterImage}
                  alt="Typewriter creating stories"
                  className="w-96 h-auto drop-shadow-2xl relative z-20"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Typing Keys Animation - Invisible hands typing */}
                <motion.div
                  className="absolute top-[45%] left-1/2 -translate-x-1/2 w-48 h-12 z-30"
                  animate={{
                    scaleY: [1, 0.95, 1, 1, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    times: [0, 0.1, 0.2, 0.8, 1]
                  }}
                >
                  {/* Individual key presses - simulated with small circles */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-foreground/30 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: '50%',
                      }}
                      animate={{
                        y: [0, 3, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 0.3,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Papers floating out */}
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full h-96">
                  <AnimatePresence>
                    {papers.map((paper, index) => (
                      <motion.div
                        key={paper.id}
                        className="absolute left-1/2 -translate-x-1/2 w-48 bg-white/90 backdrop-blur-sm shadow-2xl border border-gray-200"
                        style={{
                          transformOrigin: 'bottom center',
                        }}
                        initial={{
                          y: 100,
                          x: '-50%',
                          opacity: 0,
                          rotate: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          y: -400 - (index * 40),
                          x: `${-50 + (index % 2 === 0 ? 10 : -10) * (index + 1)}%`,
                          opacity: [0, 1, 1, 0.7, 0],
                          rotate: [(index % 2 === 0 ? 5 : -5), (index % 2 === 0 ? -3 : 3)],
                          scale: [0.8, 1, 1, 1, 0.95],
                        }}
                        exit={{
                          opacity: 0,
                          y: -500,
                        }}
                        transition={{
                          duration: 8,
                          ease: "easeOut",
                        }}
                      >
                        {/* Paper with text */}
                        <div className="p-6 space-y-3">
                          {/* Decorative header lines */}
                          <div className="space-y-1">
                            <div className="w-full h-[1px] bg-primary/20" />
                            <div className="w-full h-[1px] bg-primary/20" />
                          </div>
                          
                          {/* Story text */}
                          <motion.p
                            className="font-mono text-sm text-foreground/80 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                          >
                            {paper.text}
                          </motion.p>

                          {/* Decorative lines simulating more text */}
                          <div className="space-y-2 pt-2">
                            <motion.div
                              className="w-full h-[1px] bg-secondary/30"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ delay: 1, duration: 0.8 }}
                            />
                            <motion.div
                              className="w-3/4 h-[1px] bg-secondary/30"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ delay: 1.2, duration: 0.8 }}
                            />
                            <motion.div
                              className="w-5/6 h-[1px] bg-secondary/30"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ delay: 1.4, duration: 0.8 }}
                            />
                          </div>

                          {/* Sparkle decoration */}
                          <motion.div
                            className="flex justify-center pt-2"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6, duration: 0.4 }}
                          >
                            <Sparkles className="w-4 h-4 text-primary" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Ambient floating sparkles */}
              <motion.div
                className="absolute top-20 right-10"
                animate={{
                  y: [-15, 15, -15],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-8 h-8 text-primary/30" />
              </motion.div>

              <motion.div
                className="absolute bottom-32 right-20"
                animate={{
                  y: [10, -10, 10],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <Sparkles className="w-6 h-6 text-secondary/30" />
              </motion.div>

              <motion.div
                className="absolute top-60 left-10"
                animate={{
                  y: [-20, 20, -20],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Star className="w-8 h-8 text-secondary/25 fill-secondary/15" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}