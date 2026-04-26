import { Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import yingDongImage from "figma:asset/d92992a735857595aeb9bf21070812a7f561e673.png";

const teamMembers = [
  {
    name: "Ying Dong",
    role: "Founder",
    image: yingDongImage,
    linkedin: "https://www.linkedin.com/in/dongying/",
    twitter: "https://twitter.com/yingatcambridge",
    description: "I love building products that focus on human interaction. Prior to Ficta, I worked in product management and data science for consumer products. I believe AI-powered apps can be a positive experience with thoughtful design — and Claude Code and Figma Make have made building Ficta possible as a small team."
  },
  {
    name: "Horatio Han",
    role: "Design advisor",
    image: { src: "/images/team/horatio-han.png" },
    linkedin: "https://www.linkedin.com/in/horatiohan/",
    twitter: "",
    description: "I am a goal-oriented industrial and product designer who enjoys solving problems through design. I currently lead design for accessible mobility technology. Previously, I helped design and deliver a flagship shared scooter from the ground up. My graduate work focused on helping robots and autonomous machines improve their social skills — collaborating better with human partners."
  }
];

export function Team() {
  return (
    <div className="min-h-screen pb-32 pt-20">
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-20"
          >
            <p className="text-muted-foreground text-left mt-20 text-[24px]">
              Behind Ficta:
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group bg-card border border-border/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden max-w-3xl w-full"
              >
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                <div className="relative space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                      <img
                        src={member.image.src}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl">{member.name}</h3>
                      <p className="text-primary">{member.role}</p>
                    </div>
                  </div>

                  {member.description && (
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  )}

                  {(member.linkedin || member.twitter) && (
                    <div className="flex gap-3 pt-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
