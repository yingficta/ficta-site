import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram, Twitter, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";
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
                        src={member.image.src}
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
                  <p className="text-base text-black">(Apple App Store + Google Play Families Compliant)</p>
                  <p className="text-base text-black">Effective Date: 11/23/2025</p>
                </div>

                <p className="text-base text-black">
                  Ficta ("we," "our," "us") is committed to protecting the privacy of all of our users, especially children under the age of 13. This Privacy Policy explains how we collect, use, store, and safeguard data in our app, and describes the rights of parents and guardians under the Children's Online Privacy Protection Act (COPPA), as well as additional requirements for the Apple App Store, Google Play Store, and applicable international privacy laws such as GDPR Article 8.
                </p>

                <p className="text-base text-black">
                  If you are under the age of 13, you may only use our services with your parent's or guardian's express consent.
                </p>

                <div>
                  <h3 className="text-base mb-4 text-black">1. Information We Collect</h3>
                  <p className="mb-4 text-base text-black">
                    Ficta collects only the minimum information needed for children to create and save stories. We intentionally avoid collecting unnecessary personal data.
                  </p>
                  <p className="mb-2 text-base text-black">
                    1.1 Stories Created<br />
                    We collect the stories that users create within the app so they can be saved, edited, and accessed later.
                  </p>
                  <p className="mb-2 text-base text-black">
                    1.2 Optional Creative Preferences<br />
                    If users choose to share their favorite books, subjects, or hobbies, we collect that information to improve their experience.
                  </p>
                  <p className="mb-2 text-base text-black">
                    1.3 No Automatically Collected Personal Information<br />
                    We do not collect any personally identifiable information (PII) unless explicitly provided by the user. We do not access location, contacts, photos, microphone, device identifiers, or other sensitive data.
                  </p>
                  <p className="text-base text-black">
                    1.4 No Third-Party Tracking<br />
                    Ficta does not use advertising networks, cross-app identifiers, tracking SDKs, cookies, or behavioral profiling tools.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">2. How We Use User Data</h3>
                  <p className="mb-4 text-base text-black">We use the limited information we collect only for the following purposes:</p>
                  <p className="mb-2 text-base text-black">
                    2.1 Improve User Experience<br />
                    We analyze non-personal patterns in stories and preferences to enhance app features.
                  </p>
                  <p className="mb-4 text-base text-black">
                    2.2 Analytics (Minimal and Non-Identifying)<br />
                    Analytics are used only to understand how the app is being used and to improve its functionality. We do not use any third-party analytics SDKs that collect data from children.
                  </p>
                  <p className="text-base text-black">
                    2.3 No Sharing with Third Parties<br />
                    Ficta does not share, sell, or disclose user information to third parties. We do not display ads or run any advertising within the app.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">3. Data Retention</h3>
                  <p className="mb-4 text-base text-black">
                    Stories created by users are stored securely on our servers.
                  </p>
                  <p className="mb-4 text-base text-black">To meet Apple and Google requirements, our retention policy is:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-base text-black">
                    <li>Active users: Stories are kept unless deleted by the user or parent.</li>
                    <li>Inactive users: Stories are deleted after 18 months of inactivity to minimize stored data.</li>
                    <li>Parent or user request: We will delete data within 7 days of receiving a deletion request.</li>
                  </ul>
                  <p className="text-base text-black">
                    Parents or guardians may request deletion at any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">4. Data Security</h3>
                  <p className="mb-4 text-base text-black">
                    We use reasonable physical, technical, and administrative safeguards to protect user data. This includes encryption in transit (HTTPS/SSL) and restricted access controls.
                  </p>
                  <p className="text-base text-black">
                    No method of electronic storage is 100% secure, but we take appropriate steps to protect user data from unauthorized access or disclosure.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">5. Children's Privacy</h3>
                  <p className="mb-4 text-base text-black">
                    Ficta is designed for children under 13, and we comply with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-base text-black">
                    <li>COPPA (Children's Online Privacy Protection Act – U.S.)</li>
                    <li>Apple App Store Children's App Requirements</li>
                    <li>Google Play Families Policy</li>
                    <li>GDPR Article 8 (Children's Data – EU)</li>
                    <li>UK Data Protection Act</li>
                  </ul>
                  <p className="mb-4 text-base text-black">
                    5.1 Parental Consent<br />
                    We do not collect personal information from children under 13 without verifiable parental consent. Parental consent may be obtained through a parent-controlled email address or another legally accepted method.
                  </p>
                  <p className="text-base text-black">
                    If a child enters personal details (such as their name) in a text field, we treat it as creative content and do not use it for identification.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">6. Parent Rights</h3>
                  <p className="mb-4 text-base text-black">Parents and guardians have the following rights regarding their child's information:</p>
                  <p className="mb-2 text-base text-black">
                    Review & Access<br />
                    Parents may request a copy of the data collected from their child.
                  </p>
                  <p className="mb-2 text-base text-black">
                    Revoke Consent<br />
                    Parents can revoke consent at any time, which will stop any further data collection.
                  </p>
                  <p className="text-base text-black">
                    Deletion of Data<br />
                    Parents can request that all of their child's data be deleted from our servers, and we will complete the deletion within 7 days.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">7. How to Revoke Consent or Request Deletion</h3>
                  <p className="mb-4 text-base text-black">Parents or guardians may at any time:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-base text-black">
                    <li>Review the data we have collected</li>
                    <li>Revoke consent</li>
                    <li>Request deletion of their child's data</li>
                  </ul>
                  <p className="mb-4 text-base text-black">
                    To submit a request, please contact us at:{" "}
                    <a href="mailto:ying@ficta.ai" className="text-black hover:text-black/80 underline">
                      ying@ficta.ai
                    </a>
                  </p>
                  <p className="text-base text-black">
                    We will respond in accordance with COPPA, Apple, Google, and international requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">8. User-Generated Content (UGC)</h3>
                  <p className="mb-4 text-base text-black">
                    Ficta allows children to create stories and characters for private use.
                  </p>
                  <p className="mb-4 text-base text-black">To comply with Apple and Google requirements:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-base text-black">
                    <li>All stories are private by default</li>
                    <li>Stories are not visible to other users</li>
                    <li>The app does not have chat, messaging, or social sharing features</li>
                    <li>Any export or sharing outside the app must be initiated by a parent</li>
                  </ul>
                  <p className="text-base text-black">
                    Because stories are not shared publicly, content moderation requirements for social features do not apply.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">9. No Ads, No Purchases, No Tracking</h3>
                  <p className="mb-4 text-base text-black">Ficta does not include:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-base text-black">
                    <li>Advertising</li>
                    <li>Behavioral tracking</li>
                    <li>Third-party SDKs that collect data</li>
                    <li>In-app purchases</li>
                    <li>Cross-app identifiers</li>
                    <li>Links to external apps without parental gates</li>
                  </ul>
                  <p className="text-base text-black">
                    This meets Apple "Kids Category" requirements and Google Play "Families" program standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">10. International Users</h3>
                  <p className="mb-4 text-base text-black">For users in the European Union, United Kingdom, and other regions:</p>
                  <ul className="list-disc pl-6 space-y-2 text-base text-black">
                    <li>We only process children's data with parental consent</li>
                    <li>Parents may request deletion or revoke consent at any time</li>
                    <li>We comply with GDPR Article 8 and similar international laws</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">11. Changes to This Privacy Policy</h3>
                  <p className="mb-4 text-base text-black">
                    We may update this Privacy Policy from time to time. If we make significant changes, we will:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base text-black">
                    <li>Update the effective date</li>
                    <li>Post the updated policy in the app and on our website</li>
                    <li>Notify parents when required by law</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">12. Contact Us</h3>
                  <p className="mb-4 text-base text-black">
                    If you have questions, concerns, or would like to exercise your rights, please contact:
                  </p>
                  <p className="text-base text-black">
                    Email:{" "}
                    <a href="mailto:ying@ficta.ai" className="text-black hover:text-black/80 underline">
                      ying@ficta.ai
                    </a>
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
