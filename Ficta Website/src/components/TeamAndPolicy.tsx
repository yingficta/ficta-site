import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram, Twitter, Linkedin, FileText } from "lucide-react";
import { motion } from "motion/react";
import yingDongImage from "figma:asset/d92992a735857595aeb9bf21070812a7f561e673.png";

const teamMembers = [
  {
    name: "Ying Dong",
    role: "Co-founder",
    image: yingDongImage,
    linkedin: "https://www.linkedin.com/in/dongying/",
    twitter: "https://twitter.com/yingatcambridge",
    description: "Having lived and worked across continents, I'm drawn by how culture shapes technology and behavior. Building for diverse markets means understanding not just language or UI, but what motivates people differently — what feels intuitive in one place may be surprising in another. I've found the best teams are the ones that mirror their users' diversity, where every perspective sharpens the product and expands its reach."
  }
];

const colors = [
  "bg-primary",
  "bg-primary/90",
  "bg-primary/80",
  "bg-primary",
  "bg-primary/90",
  "bg-primary/80"
];

export function TeamAndPolicy() {
  return (
    <div className="min-h-screen pb-32 pt-20">
      {/* Team Section */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-20"
          >
            <p className="text-muted-foreground text-left mt-20 text-[24px]">
              Creators. Thinkers. Makers.
            </p>
          </motion.div>

          {/* Team Members Grid */}
          <div className="flex justify-start">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group bg-card border border-border/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden max-w-3xl w-full"
              >
                {/* Background on Hover */}
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <div className="relative space-y-6">
                  {/* Avatar and Info */}
                  <div className="flex gap-6 items-start">
                    {/* Avatar */}
                    <div className="w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="space-y-2">
                      <h3 className="text-2xl">{member.name}</h3>
                      <p className="text-primary">{member.role}</p>
                    </div>
                  </div>

                  {/* Description */}
                  {member.description && (
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  )}

                  {/* Social Links */}
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

      {/* Policy Section */}
      <section className="px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
          </motion.div>

          {/* Policy Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group bg-white rounded-3xl overflow-hidden border border-border/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
          >
            {/* Background on Hover */}
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            <div className="px-3 py-6 md:px-4 md:py-8 lg:px-4 lg:py-10 max-w-4xl mx-auto text-base text-black relative">
              <div className="space-y-8">
                <div>
                  <h2 className="text-base mb-2 text-black">Privacy Policy for Ficta</h2>
                  <p className="text-base text-black">Effective Date: 10/27/2025</p>
                </div>

                <p className="text-base text-black">
                  Ficta ("we," "our," "us") is committed to protecting the privacy of our users, especially children under the age of 13. This Privacy Policy explains how we collect, use, and store data provided by users of our app, Ficta. It also describes the rights of parents and guardians under the Children's Online Privacy Protection Act (COPPA).
                </p>

                <p className="text-base text-black">
                  If you are a under the age of 13, you may only use our services with your parent's or guardian's express consent.
                </p>

                <div>
                  <h3 className="text-base mb-4 text-black">1. Information We Collect</h3>
                  <p className="mb-4 text-base text-black">Ficta collects only the following data from users:</p>
                  <p className="mb-2 text-base text-black">
                    <strong>Stories Created:</strong> Ficta collects the stories that users create within the app.
                  </p>
                  <p className="mb-4 text-base text-black">
                    <strong>Favorite Books, Subjects, and Hobbies:</strong> If users choose to share information about their favorite books, subjects, or hobbies, we collect that information.
                  </p>
                  <p className="text-base text-black">
                    This data is provided directly by the user when they engage with the app. We do not collect any personally identifiable information (PII) unless explicitly provided by the user.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">2. How We Use User Data</h3>
                  <p className="mb-4 text-base text-black">We use the data we collect to:</p>
                  <p className="mb-2 text-base text-black">
                    <strong>Improve User Experience:</strong> We analyze the stories and preferences shared to enhance the app's features and overall user experience.
                  </p>
                  <p className="mb-4 text-base text-black">
                    <strong>Analytics:</strong> We collect data for the purpose of analytics, to understand how the app is used and to make improvements.
                  </p>
                  <p className="text-base text-black">
                    Ficta does not share any of the collected information with third parties. Additionally, Ficta does not display any ads or run any advertising within the app.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">3. Data Retention</h3>
                  <p className="text-base text-black">
                    Ficta stores the stories created by users on our servers. There is currently no set timeline for when these stories will be deleted, but we retain them to improve the app's functionality and enhance user experiences. Users can contact us at any time if they wish to request the deletion of any specific data.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">4. Data Security</h3>
                  <p className="text-base text-black">
                    We implement reasonable physical, technical, and administrative measures to protect user data from unauthorized access, alteration, or disclosure. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">5. Children's Privacy</h3>
                  <p className="mb-4 text-base text-black">
                    Ficta is designed for users of all ages, with a primary focus on children under 13 years of age. We comply with the Children's Online Privacy Protection Act (COPPA), ensuring that we take steps to protect the privacy of children online.
                  </p>
                  <p className="text-base text-black">
                    We do not collect any personally identifiable information (PII) from children under 13 without verifiable parental consent. Parents and guardians can review, amend, or delete any information their child has provided.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">6. Parental Rights</h3>
                  <p className="mb-4 text-base text-black">In compliance with COPPA, parents and guardians have the following rights regarding their child's data:</p>
                  <p className="mb-2 text-base text-black">
                    <strong>Review and Access:</strong> Parents can request to review any data collected about their child by contacting us at the email address provided below.
                  </p>
                  <p className="mb-2 text-base text-black">
                    <strong>Revocation of Consent:</strong> Parents can revoke consent at any time, which will stop us from collecting any further data.
                  </p>
                  <p className="text-base text-black">
                    <strong>Data Deletion:</strong> Parents can request the deletion of their child's data by contacting us. We will respond to such requests promptly and in compliance with COPPA.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">7. How Users Can Revoke Consent and Request Data Deletion</h3>
                  <p className="mb-4 text-base text-black">If you are a parent or guardian, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-base text-black">
                    <li>Review the data we have collected about your child.</li>
                    <li>Revoke your consent for data collection at any time.</li>
                    <li>Request that we delete your child's data from our servers.</li>
                  </ul>
                  <p className="text-base text-black">
                    To exercise any of these rights, please contact us via email at{" "}
                    <a href="mailto:ying@ficta.ai" className="text-black hover:text-black/80 underline">
                      ying@ficta.ai
                    </a>
                    . We will process these requests in accordance with COPPA requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">8. Changes to This Privacy Policy</h3>
                  <p className="text-base text-black">
                    We may update this Privacy Policy from time to time. Any changes will be posted in the app, and the updated policy will reflect the date it was last revised. If any significant changes occur that may affect how we collect, use, or share personal information, we will notify parents and guardians.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">9. Contact Us</h3>
                  <p className="text-base text-black">
                    If you have any questions or concerns about this Privacy Policy, or if you wish to exercise your rights under COPPA, please contact us at:{" "}
                    <a href="mailto:ying@ficta.ai" className="text-black hover:text-black/80 underline">
                      ying@ficta.ai
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
