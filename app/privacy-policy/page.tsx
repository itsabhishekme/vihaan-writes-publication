export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute left-0 top-[45%] h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
              <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />

              <p className="text-sm uppercase tracking-[0.4em] text-gray-300">
                Vihaan Writes
              </p>
            </div>

            <div className="mt-12">
              <h1 className="text-6xl font-black leading-none md:text-8xl">
                Privacy
              </h1>

              <h1 className="mt-3 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-6xl font-black text-transparent md:text-8xl">
                Policy
              </h1>
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-9 text-gray-400 md:text-xl">
              At Vihaan Writes, your privacy is treated with deep respect.
              This Privacy Policy explains how information is collected,
              stored, protected, and used while you interact with our
              website, creative platform, books, stories, newsletters,
              podcasts, blogs, and digital experiences.
            </p>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm text-gray-400">Website</p>

                <p className="mt-3 text-xl font-semibold text-white">
                  vihaanwrites.in
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm text-gray-400">Version</p>

                <p className="mt-3 text-xl font-semibold text-white">
                  Privacy Policy 1.0
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm text-gray-400">Last Updated</p>

                <p className="mt-3 text-xl font-semibold text-white">
                  May 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="space-y-14">
            {/* ================= INTRODUCTION ================= */}
            <div className="rounded-[42px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-14">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl font-bold">
                  01
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
                    Introduction
                  </p>

                  <h2 className="mt-2 text-4xl font-black">
                    Welcome To Vihaan Writes
                  </h2>
                </div>
              </div>

              <div className="mt-10 space-y-7 text-lg leading-9 text-gray-300">
                <p>
                  Vihaan Writes is a creative storytelling and writing
                  platform built around emotional depth, literature,
                  human connection, books, ideas, and artistic
                  expression.
                </p>

                <p>
                  We understand the importance of privacy in today’s
                  digital world. Whether you are reading a blog,
                  subscribing to newsletters, purchasing books, or
                  simply exploring the platform, your information
                  deserves transparency and protection.
                </p>

                <p>
                  This Privacy Policy explains the types of information
                  we may collect, how we use it, and the steps taken to
                  ensure your data remains secure.
                </p>

                <p>
                  By using our website and services, you agree to the
                  practices described in this policy.
                </p>
              </div>
            </div>

            {/* ================= INFORMATION COLLECTION ================= */}
            <div className="rounded-[42px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-14">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 text-2xl font-bold">
                  02
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                    Data Collection
                  </p>

                  <h2 className="mt-2 text-4xl font-black">
                    Information We Collect
                  </h2>
                </div>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
                  <h3 className="text-2xl font-bold text-white">
                    Personal Information
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    Information you voluntarily provide while using our
                    platform.
                  </p>

                  <ul className="mt-8 space-y-4 text-gray-300">
                    <li>• Full name</li>
                    <li>• Email address</li>
                    <li>• Contact information</li>
                    <li>• Newsletter subscriptions</li>
                    <li>• Messages and inquiries</li>
                    <li>• Feedback and responses</li>
                    <li>• Purchase-related information</li>
                    <li>• User-generated submissions</li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
                  <h3 className="text-2xl font-bold text-white">
                    Technical Information
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    Data collected automatically for analytics and
                    performance purposes.
                  </p>

                  <ul className="mt-8 space-y-4 text-gray-300">
                    <li>• IP address</li>
                    <li>• Browser type and version</li>
                    <li>• Device information</li>
                    <li>• Operating system</li>
                    <li>• Pages visited</li>
                    <li>• Time spent on pages</li>
                    <li>• Website interaction behavior</li>
                    <li>• Cookies and analytics data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ================= HOW WE USE DATA ================= */}
            <div className="rounded-[42px] border border-white/10 bg-gradient-to-br from-purple-900/20 via-black to-black p-10 backdrop-blur-2xl md:p-14">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 text-2xl font-bold">
                  03
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-pink-300">
                    Usage
                  </p>

                  <h2 className="mt-2 text-4xl font-black">
                    How Your Information Is Used
                  </h2>
                </div>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {[
                  "Improve website functionality and user experience",
                  "Respond to messages and inquiries",
                  "Send newsletters and platform updates",
                  "Analyze audience engagement",
                  "Enhance creative storytelling experiences",
                  "Maintain security and prevent misuse",
                  "Optimize performance and speed",
                  "Develop future features and services",
                  "Provide customer and technical support",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:bg-white/[0.06]"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="leading-8 text-gray-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= COOKIES ================= */}
            <div className="rounded-[42px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-14">
              <h2 className="text-4xl font-black">
                04. Cookies & Tracking Technologies
              </h2>

              <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
                <p>
                  Vihaan Writes may use cookies and related technologies
                  to improve browsing experience, remember user
                  preferences, monitor traffic patterns, and understand
                  visitor behavior.
                </p>

                <p>
                  Cookies are small files stored on your device that help
                  websites recognize returning visitors and improve
                  performance.
                </p>

                <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-8">
                  <p className="text-lg leading-9 text-purple-200">
                    You may disable cookies through your browser
                    settings, though certain parts of the website may not
                    function properly afterward.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= THIRD PARTY ================= */}
            <div className="rounded-[42px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-14">
              <h2 className="text-4xl font-black">
                05. Third-Party Services
              </h2>

              <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
                <p>
                  We may use trusted third-party platforms or tools for
                  analytics, hosting, payments, communication, and
                  content delivery.
                </p>

                <p>
                  These third parties may collect limited technical or
                  interaction-related information according to their own
                  privacy policies.
                </p>

                <p>
                  We encourage users to review the privacy practices of
                  any external services connected with our platform.
                </p>
              </div>
            </div>

            {/* ================= SECURITY ================= */}
            <div className="rounded-[42px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-14">
              <h2 className="text-4xl font-black">
                06. Data Protection & Security
              </h2>

              <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
                <p>
                  We use reasonable administrative, technical, and
                  organizational safeguards to protect information
                  against unauthorized access, misuse, disclosure, or
                  destruction.
                </p>

                <p>
                  Although we work hard to maintain secure systems, no
                  digital platform can guarantee complete protection from
                  cyber threats or unauthorized breaches.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
                  <h3 className="text-2xl font-bold text-white">
                    Encryption
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    Secure technologies may be used to protect data
                    transfers and communication.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
                  <h3 className="text-2xl font-bold text-white">
                    Access Control
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    Access to information is limited to necessary and
                    authorized purposes only.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
                  <h3 className="text-2xl font-bold text-white">
                    Monitoring
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    Systems may continuously monitor activity to identify
                    and prevent threats.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= USER RIGHTS ================= */}
            <div className="rounded-[42px] border border-white/10 bg-gradient-to-br from-cyan-900/10 to-black p-10 backdrop-blur-2xl md:p-14">
              <h2 className="text-4xl font-black">
                07. Your Rights & Choices
              </h2>

              <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
                <p>
                  Depending on applicable privacy laws and regulations,
                  you may have certain rights regarding your personal
                  information.
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    "Request access to your personal information",
                    "Correct inaccurate or outdated information",
                    "Request deletion of personal data",
                    "Withdraw consent at any time",
                    "Opt out of promotional communications",
                    "Manage cookie preferences",
                    "Ask questions regarding privacy practices",
                    "Request clarification regarding stored data",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-3xl border border-white/10 bg-black/30 p-6"
                    >
                      <p className="leading-8 text-gray-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= POLICY CHANGES ================= */}
            <div className="rounded-[42px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-14">
              <h2 className="text-4xl font-black">
                08. Changes To This Policy
              </h2>

              <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
                <p>
                  Vihaan Writes reserves the right to modify or update
                  this Privacy Policy at any time without prior notice.
                </p>

                <p>
                  Any changes become effective immediately upon posting
                  on this page. Continued use of the platform after
                  updates constitutes acceptance of the revised policy.
                </p>
              </div>
            </div>

            {/* ================= CONTACT ================= */}
            <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-purple-700/20 via-black to-cyan-700/10 p-12 backdrop-blur-3xl md:p-16">
              <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl" />

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.4em] text-purple-300">
                  Contact
                </p>

                <h2 className="mt-5 text-5xl font-black md:text-6xl">
                  Get In Touch
                </h2>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300">
                  If you have questions about this Privacy Policy,
                  personal information, or data protection practices,
                  feel free to contact us anytime.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-xl">
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                      Website
                    </p>

                    <p className="mt-4 text-2xl font-semibold text-white">
                      vihaanwrites.in
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-xl">
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                      Email Address
                    </p>

                    <p className="mt-4 break-all text-2xl font-semibold text-white">
                      contact@vihaanwrites.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}