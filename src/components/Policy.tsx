import { motion } from "framer-motion";

export function Policy() {
  return (
    <div className="min-h-screen pb-32 pt-20">
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group bg-white rounded-3xl overflow-hidden border border-border/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
          >
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

            <div className="px-3 py-6 md:px-4 md:py-8 lg:px-4 lg:py-10 max-w-4xl mx-auto text-base text-black relative">
              <div className="space-y-8">
                <div>
                  <h2 className="text-base mb-2 text-black">Privacy Policy for Ficta</h2>
                  <p className="text-base text-black">(Apple App Store + Google Play Families Compliant)</p>
                  <p className="text-base text-black">Effective Date: November 23, 2025</p>
                  <p className="text-base text-black">Last Updated: May 7, 2026</p>
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
                    1.1 Stories and Characters Created<br />
                    We collect the stories and characters that users create within the app so they can be saved, edited, and accessed later.
                  </p>
                  <p className="mb-2 text-base text-black">
                    1.2 Optional Creative Preferences<br />
                    If users choose to share their favorite books, subjects, or hobbies, we collect that information to improve their experience.
                  </p>
                  <p className="mb-2 text-base text-black">
                    1.3 Account Information<br />
                    Users may sign in using Google Sign-In or Apple Sign-In. When they do, we receive a stable account identifier (not your full Google or Apple profile) and, optionally, an email address. We use this only to link your stories to your account across devices.
                  </p>
                  <p className="mb-2 text-base text-black">
                    Users may also use the app without signing in. In this case, we assign an anonymous identifier to save your stories locally to your account. If you sign in later, your stories are carried over automatically.
                  </p>
                  <p className="mb-2 text-base text-black">
                    1.4 Device Identifier<br />
                    We generate and store a random device identifier (UUID) on your device. This identifier is used to associate your session with your saved content. It is not linked to your name, email, or any external advertising system.
                  </p>
                  <p className="mb-2 text-base text-black">
                    1.5 Analytics<br />
                    We use PostHog, a privacy-focused analytics tool, to understand how the app is being used and to improve its features. PostHog collects anonymous usage events (for example, "story started" or "character created"). It does not collect your name, email, or any content from your stories. PostHog does not use data from Ficta for advertising or cross-app tracking.
                  </p>
                  <p className="text-base text-black">
                    1.6 No Advertising or Behavioral Tracking<br />
                    Ficta does not use advertising networks, cross-app identifiers, behavioral profiling tools, or advertising SDKs of any kind.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">2. How We Use User Data</h3>
                  <p className="mb-4 text-base text-black">We use the limited information we collect only for the following purposes:</p>
                  <p className="mb-2 text-base text-black">
                    2.1 Saving and Syncing Content<br />
                    To save stories and characters and make them available across sessions and devices.
                  </p>
                  <p className="mb-2 text-base text-black">
                    2.2 Improving the App<br />
                    We analyze anonymous usage patterns to enhance app features and fix issues.
                  </p>
                  <p className="mb-2 text-base text-black">
                    2.3 Account Management<br />
                    To link your content to your account when you sign in with Google or Apple.
                  </p>
                  <p className="mb-2 text-base text-black">
                    2.4 No Sharing with Third Parties<br />
                    Ficta does not share, sell, or disclose user information to third parties for advertising or commercial purposes. The only third-party services we use are:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base text-black">
                    <li>Supabase — authentication and account management</li>
                    <li>PostHog — anonymous usage analytics</li>
                    <li>Cloudflare — infrastructure and data storage</li>
                  </ul>
                  <p className="text-base text-black">
                    Each of these services is contractually bound to protect user data and is not permitted to use it for their own commercial purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">3. Data Retention</h3>
                  <p className="mb-4 text-base text-black">
                    Stories and characters created by users are stored securely on our servers.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-base text-black">
                    <li>Active users: Content is kept unless deleted by the user or parent.</li>
                    <li>Inactive users: Content is deleted after 18 months of inactivity.</li>
                    <li>Account deletion: When a user requests account deletion, their account enters a 30-day grace period during which they may cancel the deletion. After 30 days, all data — including stories, characters, and account information — is permanently deleted from our servers.</li>
                    <li>Parent or user request: We will initiate deletion within 7 days of receiving a verified deletion request. Full deletion completes within 30 days.</li>
                  </ul>
                  <p className="text-base text-black">
                    Parents or guardians may request deletion at any time by contacting us at ying@ficta.ai.
                  </p>
                </div>

                <div>
                  <h3 className="text-base mb-4 text-black">4. Data Security</h3>
                  <p className="mb-4 text-base text-black">
                    We use reasonable physical, technical, and administrative safeguards to protect user data. This includes encryption in transit (HTTPS/TLS) and restricted access controls.
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
                    If a child enters personal details (such as their name) in a story or character text field, we treat it as creative content and do not use it for identification.
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
                    Parents can request that all of their child's data be deleted. Deletion is initiated within 7 days and fully completed within 30 days.
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
                  <h3 className="text-base mb-4 text-black">9. No Ads, No In-App Purchases</h3>
                  <p className="mb-4 text-base text-black">Ficta does not include:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-base text-black">
                    <li>Advertising</li>
                    <li>Behavioral tracking or cross-app identifiers</li>
                    <li>In-app purchases</li>
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
                  <p className="text-base text-black">
                    Website: https://ficta.ai
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
