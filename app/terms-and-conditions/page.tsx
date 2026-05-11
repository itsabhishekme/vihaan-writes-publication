export default function TermsConditionsPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute left-0 top-[40%] h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-3xl" />

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
                Terms &
              </h1>

              <h1 className="mt-3 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-6xl font-black text-transparent md:text-8xl">
                Conditions
              </h1>
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-9 text-gray-400 md:text-xl">
              These Terms & Conditions govern your use of Vihaan Writes,
              including our website, stories, books, newsletters,
              creative content, digital products, and services. By
              accessing our platform, you agree to comply with these
              terms and policies.
            </p>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm text-gray-400">Website</p>

                <p className="mt-3 text-xl font-semibold text-white">
                  vihaanwrites.in
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm text-gray-400">Document Version</p>

                <p className="mt-3 text-xl font-semibold text-white">
                  Terms 1.0
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
            {/* ================= ACCEPTANCE ================= */}
            <div className="rounded-[42px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-14">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl font-bold">
                  01
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
                    Agreement
                  </p>

                  <h2 className="mt-2 text-4xl font-black">
                    Acceptance Of Terms
                  </h2>
                </div>
              </div>

              <div className="mt-10 space-y-7 text-lg leading-9 text-gray-300">
                <p>
                  By accessing or using Vihaan Writes, you acknowledge
                  that you have read, understood, and agreed to these
                  Terms & Conditions.
                </p>

                <p>
                  These terms apply to all visitors, readers,
                  subscribers, customers, contributors, and users who
                  access our platform, content, products, or services.
                </p>

                <p>
                  If you do not agree with any part of these terms, you
                  should discontinue use of the website and related
                  services immediately.
                </p>
              </div>
            </div>

            {/* ================= USE OF WEBSITE ================= */}
            <div className="rounded-[42px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-14">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 text-2xl font-bold">
                  02
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                    Website Usage
                  </p>

                  <h2 className="mt-2 text-4xl font-black">
                    Use Of Our Platform
                  </h2>
                </div>
              </div>

              <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
                <p>
                  Vihaan Writes provides creative, literary, and
                  storytelling content intended for personal and lawful
                  use only.
                </p>

                <p>
                  You agree not to misuse the platform, attempt
                  unauthorized access, interfere with functionality, or
                  engage in activities that may harm the website,
                  services, users, or reputation of Vihaan Writes.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Do not attempt unauthorized access",
                    "Do not copy or exploit content illegally",
                    "Do not distribute harmful software or spam",
                    "Respect intellectual property rights",
                    "Use the platform responsibly",
                    "Comply with applicable laws and regulations",
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

            {/* ================= INTELLECTUAL PROPERTY ================= */}
            <div className="rounded-[42px] border border-white/10 bg-gradient-to-br from-purple-900/20 via-black to-black p-10 backdrop-blur-2xl md:p-14">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 text-2xl font-bold">
                  03
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-pink-300">
                    Ownership
                  </p>

                  <h2 className="mt-2 text-4xl font-black">
                    Intellectual Property Rights
                  </h2>
                </div>
              </div>

              <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
                <p>
                  All content available on Vihaan Writes — including
                  books, writings, articles, stories, branding, logos,
                  graphics, visuals, design elements, and creative
                  assets — remains the intellectual property of Vihaan
                  Writes unless otherwise stated.
                </p>

                <p>
                  Unauthorized reproduction, modification,
                  redistribution, republication, or commercial use of
                  our content without written permission is strictly
                  prohibited.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                    <h3 className="text-2xl font-bold text-white">
                      Books
                    </h3>

                    <p className="mt-5 leading-8 text-gray-400">
                      All literary works and published writings are
                      protected under copyright laws.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                    <h3 className="text-2xl font-bold text-white">
                      Branding
                    </h3>

                    <p className="mt-5 leading-8 text-gray-400">
                      Logos, visual identity, and creative branding
                      belong exclusively to Vihaan Writes.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                    <h3 className="text-2xl font-bold text-white">
                      Website Design
                    </h3>

                    <p className="mt-5 leading-8 text-gray-400">
                      Layouts, interface elements, and designs are
                      protected intellectual property assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= USER CONTENT ================= */}
            <div className="rounded-[42px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-14">
              <h2 className="text-4xl font-black">
                04. User Contributions & Submissions
              </h2>

              <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
                <p>
                  If you submit comments, feedback, suggestions,
                  testimonials, or creative contributions to Vihaan
                  Writes, you grant us permission to use, display, and
                  publish such submissions where appropriate.
                </p>

                <p>
                  Users are solely responsible for ensuring their
                  submissions do not violate copyrights, laws, or rights
                  of third parties.
                </p>

                <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-8">
                  <p className="text-lg leading-9 text-purple-200">
                    We reserve the right to remove content considered
                    unlawful, offensive, harmful, abusive, or
                    inappropriate without notice.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= LIMITATION ================= */}
            <div className="rounded-[42px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-14">
              <h2 className="text-4xl font-black">
                05. Limitation Of Liability
              </h2>

              <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
                <p>
                  Vihaan Writes and its creators shall not be held
                  responsible for any direct, indirect, incidental, or
                  consequential damages resulting from the use or
                  inability to use our platform, content, or services.
                </p>

                <p>
                  While we strive to maintain accurate and reliable
                  information, we do not guarantee the completeness,
                  accuracy, or uninterrupted availability of the
                  website.
                </p>

                <p>
                  Users access and use the platform entirely at their
                  own discretion and risk.
                </p>
              </div>
            </div>

            {/* ================= THIRD PARTY ================= */}
            <div className="rounded-[42px] border border-white/10 bg-gradient-to-br from-cyan-900/10 to-black p-10 backdrop-blur-2xl md:p-14">
              <h2 className="text-4xl font-black">
                06. Third-Party Links & Services
              </h2>

              <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
                <p>
                  Our platform may contain links to external websites,
                  services, products, or resources operated by third
                  parties.
                </p>

                <p>
                  Vihaan Writes has no control over external websites
                  and assumes no responsibility for their content,
                  privacy policies, practices, or reliability.
                </p>

                <p>
                  Accessing third-party resources is done at your own
                  risk and discretion.
                </p>
              </div>
            </div>

            {/* ================= TERMINATION ================= */}
            <div className="rounded-[42px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-14">
              <h2 className="text-4xl font-black">
                07. Suspension & Termination
              </h2>

              <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
                <p>
                  Vihaan Writes reserves the right to suspend, restrict,
                  or terminate access to any user who violates these
                  Terms & Conditions or engages in harmful or unlawful
                  behavior.
                </p>

                <p>
                  We may also modify, discontinue, or update services
                  and features at any time without prior notice.
                </p>
              </div>
            </div>

            {/* ================= POLICY CHANGES ================= */}
            <div className="rounded-[42px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-14">
              <h2 className="text-4xl font-black">
                08. Changes To These Terms
              </h2>

              <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
                <p>
                  We reserve the right to revise or update these Terms &
                  Conditions at any time without prior notice.
                </p>

                <p>
                  Continued use of Vihaan Writes after modifications
                  indicates acceptance of the updated terms.
                </p>

                <p>
                  Users are encouraged to review this page periodically
                  to remain informed about any changes.
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
                  Need Assistance?
                </h2>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300">
                  If you have questions regarding these Terms &
                  Conditions, intellectual property, or platform usage,
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