import { motion } from "framer-motion";

export function Opportunity() {
  return (
    <div className="min-h-screen pb-32 pt-20">
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl">Join FICTA</h1>
            </div>

            {/* Single Card with All Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group bg-card border border-border/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative space-y-8">
                {/* Job Title */}
                <div className="text-center">
                  <h2 className="text-2xl text-black text-left mb-2">Co-founder, Education/Creative Writing</h2>
                  <p className="text-muted-foreground text-left">Posted: 11/13/2025</p>
                </div>

                {/* About Ficta */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-black mt-8">About Ficta</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Ficta is an iOS and Android app where children co-create stories with AI through playful word games.
                    </p>
                    <p>
                      Kids love making up stories with friends or parents. They bring imagination, while adults bring language - though not always patience or playfulness. Ficta fuels a child's imagination by giving them access to a wider range of words and phrases. It shows rather than tells how to use words, build sentences, and shape stories. Through playful modes like "create a character" or "one sentence at a time", kids learn by doing — making writing feel like play. 
                    </p>
                    <p>
                      I've tested Ficta with more than twenty families of elementary-school children. Many kids played for half an hour or more, filling digital pages with their own words. They said things like, "It's super fun." and "It made me laugh so much."
                    </p>
                    <p>
                      In the years ahead, Ficta will offer an even broader range of creative paths — from open-ended word games to guided writing prompts. Children lead, and AI provides gentle assistance, suggesting engaging, age-appropriate and educational words and phrases. Each interaction introduces new vocabulary and storytelling techniques. Over time, Ficta helps young writers grow more confident and expressive — without ever taking over their voice.
                    </p>
                  </div>
                </div>

                {/* The Team */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-black">The Team</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm Ying, the creator of Ficta. I leveraged AI-powered tools to build and ship the latest versions of the app. Before this journey, I worked as a product manager for consumer products. I began in data and engineering but found my home in designing experiences that help people connect and create. Over the years, I've worked across early-stage startups (Bluefin Labs), growth-stage companies (Superpedestrian) , and global teams (Twitter, Apple) — learning how ideas take shape and grow into products people love.
                    </p>
                    <p>
                      Ficta is supported by a small circle of advisors in education, writing, and design, along with engineering friends who've helped shape the early prototypes. We're still a small operation — focused, scrappy, and moving with purpose.
                    </p>
                  </div>
                </div>

                {/* A Partner with Complementary Skills */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-black">A Partner with Complementary Skills</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      The best products come from different kinds of minds meeting in the middle. My strength is in product and design — thinking about how people move through an experience. I'm also a parent, which gives me a close-up view of how children write and play. What Ficta needs next is a partner whose professional work centers on how kids practice storytelling.
                    </p>
                    <p>
                      That perspective might come from teaching, writing, designing curriculum, or building playful learning tools. It's someone who understands how children build worlds with words — how a sentence becomes a story, and how curiosity turns into expression. You bring an instinct for tone, humor, and the small sparks that make kids linger in a story longer than they planned to.
                    </p>
                    <p>
                      This app wouldn't exist without the recent breakthroughs in large language models. Understanding how to work with AI — and ensuring safety for children — will always be at the heart of what we build. Fluency with AI expands your creativity and helps turn imagination into something useful. (Bonus if you've worked on natural-language-processing projects.)
                    </p>
                    <p>
                      Together, we can balance product and pedagogy, blending technical clarity with creative depth to build something that helps kids want to write more — and learn more — through play.
                    </p>
                  </div>
                </div>

                {/* Build a Startup Together */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-black">Build a Startup Together</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Early-stage building is rarely linear. It's messy, surprising, and deeply human — but that's what makes it worth doing. This stage rewards curiosity, persistence, and the belief that what we're creating deserves to exist. We'll figure things out by imagining and doing, by talking to users, by testing ideas that sometimes fail — and then building again.
                    </p>
                    <p>
                      This work calls for resourcefulness and resilience in the face of chaos. Some days will feel wide open, others like a puzzle missing half its pieces. The people who thrive here move easily between strategy and scrappy execution — brainstorming a new story mode one hour, debugging a prototype the next, or reaching out to a partner program for feedback. Progress happens when we stay curious and keep momentum, even when the path is uncertain.
                    </p>
                    <p>
                      Ficta is still early and flexible — at a formative moment, pre-incorporation, pre-funding, and full of possibility. This is the stage where every decision shapes what the company will become. Formal structures will come later, but the intent is clear: the new co-founder will share in both the creative direction and meaningful ownership of the company.
                    </p>
                    <p className="pt-4">
                      If this sounds like your kind of adventure, reach out at ying@ficta.ai.
                    </p>
                    <p className="pt-6 text-left">
                      Ying Dong<br />
                      Creator of Ficta
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}