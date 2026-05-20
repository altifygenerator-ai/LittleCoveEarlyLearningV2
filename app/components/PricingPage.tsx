import type { BusinessData } from "@/types/data";
import { Pacifico, Poppins } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function PricingPage({ data }: { data: BusinessData }) {
  return (
    <main
      className={`${poppins.className} min-h-screen overflow-x-hidden bg-[#FBF6EF] text-[#4F3528]`}
    >
      <header className="sticky top-0 z-40 border-b border-[#EAD9C8] bg-[#FBF6EF]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="leading-tight">
            <p className="text-base font-bold tracking-tight md:text-lg">
              Little Cove
            </p>
            <p className="text-xs text-[#8A6D5A] md:text-sm">
              Early Learning
            </p>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#6B4F3A] md:flex">
            <a href="/" className="transition hover:text-[#B87652]">
              Home
            </a>
            <a href="/enroll" className="transition hover:text-[#B87652]">
              Enroll
            </a>
            <a href="/renovation" className="transition hover:text-[#B87652]">
              Renovation
            </a>
            <a href="/apply" className="transition hover:text-[#B87652]">
              Careers
            </a>
          </nav>

          <a
            href="https://m.me/TheLittleCoveEarlyLearning"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#C98C6B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#B87652]"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      <div className="relative overflow-hidden bg-[#FBF6EF]">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage: "url('/images/clouds.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "900px auto",
            backgroundPosition: "top center",
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FBF6EF]/65 via-[#FBF6EF]/85 to-[#FBF6EF]" />

        <div className="relative">
          <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-14 md:grid-cols-[1.05fr_0.95fr] md:pb-20 md:pt-20">
            <div className="text-center md:text-left">
              <p
                className={`${pacifico.className} mb-4 text-3xl text-[#C98C6B] md:text-4xl`}
              >
                Pricing
              </p>

              <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] text-[#4A3024] md:mx-0 md:text-6xl">
                Simple weekly childcare rates.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B4F3A] md:mx-0 md:text-lg">
                Simple, transparent weekly rates designed to provide
                high-quality, personalized care at {data.businessName}.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                <a
                  href="https://m.me/TheLittleCoveEarlyLearning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#C98C6B] px-7 py-3.5 text-center font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#B87652]"
                >
                  Message to Join Waitlist
                </a>

                <a
                  href="/enroll"
                  className="rounded-full bg-[#4F3528] px-7 py-3.5 text-center font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#3D281F]"
                >
                  Enrollment Info
                </a>
              </div>

              <p className="mt-5 text-sm font-medium text-[#8A6D5A]">
                Spots are limited to keep care personal and high quality.
              </p>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="rounded-[2rem] border border-[#E5D3C5] bg-white/85 p-5 shadow-xl shadow-[#9C6B4F]/10 backdrop-blur">
                <img
                  src="/images/logo.png"
                  alt="Little Cove Early Learning logo"
                  className="mx-auto h-auto max-h-[290px] w-full object-contain"
                />

                <div className="mt-5 rounded-3xl bg-[#FFF8F1] p-5 text-center">
                  <p className="text-sm font-semibold text-[#4F3528]">
                    Weekly Childcare Rates
                  </p>
                  <p className="mt-1 text-sm text-[#7B5F4D]">
                    Mount Ida, Arkansas
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 pb-10">
            <div className="grid gap-5 md:grid-cols-3">
              <PricingCard
                title="Infants"
                age="6 weeks – 18 months"
                price="$175"
              />

              <PricingCard
                title="Toddlers"
                age="18 months – 3 years"
                price="$165"
              />

              <PricingCard title="Pre-K" age="3 – 5 years" price="$150" />
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-5 py-12 text-center">
            <p
              className={`${pacifico.className} text-3xl text-[#C98C6B] md:text-4xl`}
            >
              Simple Weekly Childcare Rates
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-5xl">
              Clear pricing for growing families.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#6B4F3A]">
              Our weekly rates are set up to keep things simple and clear for
              families. Little Cove Early Learning is focused on dependable
              care, early learning, daily structure, and a warm environment
              where children feel safe and loved.
            </p>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-12">
            <div className="overflow-hidden rounded-[2rem] border border-[#E5D3C5] bg-[#4F3528] shadow-lg">
              <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                <div className="bg-[#FFF8F1] p-8 md:p-10">
                  <p
                    className={`${pacifico.className} text-3xl text-[#C98C6B]`}
                  >
                    What’s Included
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                    Care that feels personal, safe, and steady.
                  </h2>

                  <p className="mt-5 leading-8 text-[#6B4F3A]">
                    Little Cove is being built around warmth, structure, early
                    learning, and a cozy home-like environment for children.
                  </p>
                </div>

                <div className="p-8 text-white md:p-10">
                  <div className="grid gap-3 text-sm leading-6 text-white/85 md:grid-cols-2">
                    {[
                      "Small group, attentive care",
                      "Structured daily schedule",
                      "Learning through play + early education",
                      "Soft faith-based learning and worship music at times",
                      "A cozy, home-like environment",
                      "And of course… lots of love 🤍",
                    ].map((item) => (
                      <div key={item} className="rounded-2xl bg-white/10 p-4">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl items-stretch gap-6 px-5 py-12 md:grid-cols-2">
            <InfoPanel
              title="Why Rates May Vary"
              text="Childcare rates are based on age group because each stage needs a different level of attention, routine, supervision, and hands-on care. Infants require more one-on-one care, while older children are able to participate in more structured group activities."
            />

            <InfoPanel
              title="Limited Availability"
              text="Spots are limited so Little Cove can keep care personal, safe, and intentional. Joining the waitlist early is the best way to stay updated on openings, tour options, and next steps for enrollment."
            />
          </section>

          <section className="mx-auto max-w-6xl px-5 py-12">
            <div className="rounded-[2rem] border border-[#E5D3C5] bg-white/90 p-8 text-center shadow-sm md:p-10">
              <p className={`${pacifico.className} text-3xl text-[#C98C6B]`}>
                A personal note
              </p>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#6B4F3A]">
                I understand that every family’s situation is different. My
                heart is to work with good families who need reliable childcare.
                If you have questions or need to talk through options, don’t
                hesitate to reach out 🫶
              </p>

              <p className="mt-5 text-sm font-medium text-[#8A6D5A]">
                Spots are limited to keep care personal and high quality.
              </p>
            </div>
          </section>

          <section className="px-5 pb-20 pt-8">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E5D3C5] bg-white p-8 text-center shadow-sm md:p-12">
              <p className={`${pacifico.className} text-3xl text-[#C98C6B]`}>
                Have questions?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                Message us about pricing and availability.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#6B4F3A]">
                If you’re unsure which age group applies, want to ask about
                openings, or need to talk through care options, send us a
                message and we’ll help from there.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="https://m.me/TheLittleCoveEarlyLearning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#C98C6B] px-8 py-4 font-semibold text-white shadow-md transition hover:bg-[#B87652]"
                >
                  Message to Join Waitlist
                </a>

                <a
                  href="/enroll"
                  className="rounded-full bg-[#4F3528] px-8 py-4 font-semibold text-white shadow-md transition hover:bg-[#3D281F]"
                >
                  Enrollment Info
                </a>
              </div>
            </div>
          </section>

          <footer className="border-t border-[#E5D3C5] bg-[#4F3528] px-5 py-12 text-white">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
              <div>
                <p className={`${pacifico.className} text-3xl text-[#F3C7A7]`}>
                  Little Cove
                </p>

                <h2 className="mt-3 text-xl font-bold tracking-[-0.02em] text-white">
                  Early Learning
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
                  A cozy faith-based daycare and early learning center being
                  created for families in Mount Ida, Montgomery County, and the
                  surrounding communities.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F3C7A7]">
                  Contact
                </h3>

                <div className="mt-4 space-y-3 text-sm text-white/75">
                  <p>146 S George St</p>
                  <p>Mount Ida, AR 71957</p>
                  <a
                    href="https://m.me/TheLittleCoveEarlyLearning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition hover:text-[#F3C7A7]"
                  >
                    Message Little Cove
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F3C7A7]">
                  Quick Links
                </h3>

                <div className="mt-4 grid gap-3 text-sm text-white/75">
                  <a href="/" className="transition hover:text-[#F3C7A7]">
                    Home
                  </a>
                  <a href="/enroll" className="transition hover:text-[#F3C7A7]">
                    Enrollment
                  </a>
                  <a
                    href="/renovation"
                    className="transition hover:text-[#F3C7A7]"
                  >
                    Renovation Updates
                  </a>
                  <a href="/apply" className="transition hover:text-[#F3C7A7]">
                    Careers
                  </a>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} Little Cove Early Learning. All
                rights reserved.
              </p>

              <p>
                Website by{" "}
                <a
                  href="https://hometownwebservicesar.cc"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#F3C7A7] transition hover:text-white"
                >
                  Hometown Web Services
                </a>
              </p>
            </div>
          </footer>

          <div className="sr-only">
            daycare Mount Ida AR, childcare Mount Ida Arkansas, preschool Mount
            Ida, early learning center Mount Ida AR
          </div>
        </div>
      </div>
    </main>
  );
}

function PricingCard({
  title,
  age,
  price,
}: {
  title: string;
  age: string;
  price: string;
}) {
  return (
    <article className="rounded-[2rem] border border-[#E5D3C5] bg-white/90 p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C98C6B]">
        {title}
      </p>

      <p className="mt-3 text-sm text-[#8C6F5A]">{age}</p>

      <p className="mt-5 text-4xl font-bold tracking-[-0.03em] text-[#4A3024]">
        {price}
        <span className="text-base font-semibold text-[#8A6D5A]">/week</span>
      </p>
    </article>
  );
}

function InfoPanel({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[2rem] border border-[#E5D3C5] bg-white/90 p-8 shadow-sm">
      <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#4A3024]">
        {title}
      </h2>

      <p className="mt-4 text-sm leading-7 text-[#6B4F3A]">{text}</p>
    </article>
  );
}