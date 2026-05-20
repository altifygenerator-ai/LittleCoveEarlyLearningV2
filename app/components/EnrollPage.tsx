"use client";

import type { BusinessData } from "@/types/data";
import { Pacifico, Poppins } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function EnrollPage({ data }: { data: BusinessData }) {
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
            <a href="/pricing" className="transition hover:text-[#B87652]">
              Pricing
            </a>
            <a href="/renovation" className="transition hover:text-[#B87652]">
              Renovation
            </a>
            <a href="/apply" className="transition hover:text-[#B87652]">
              Careers
            </a>
          </nav>

          <a
            href="https://calendly.com/littlecoveearlylearning/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#C98C6B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#B87652]"
          >
            Schedule Tour
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
                Enroll Your Child
              </p>

              <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] text-[#4A3024] md:mx-0 md:text-6xl">
                Start the enrollment process at Little Cove.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B4F3A] md:mx-0 md:text-lg">
                Join our waitlist, schedule a tour, or reach out with questions
                about care, availability, and next steps at {data.businessName}.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                <a
                  href="https://calendly.com/littlecoveearlylearning/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#C98C6B] px-7 py-3.5 text-center font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#B87652]"
                >
                  Schedule a Tour
                </a>

                <a
                  href="https://m.me/TheLittleCoveEarlyLearning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#4F3528] px-7 py-3.5 text-center font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#3D281F]"
                >
                  Message Us
                </a>
              </div>

              <p className="mt-5 text-sm font-medium text-[#8A6D5A]">
                Limited spots available. Early interest and waitlist now open.
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
                    Early Interest + Waitlist
                  </p>
                  <p className="mt-1 text-sm text-[#7B5F4D]">
                    Mount Ida, Arkansas
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 pb-10">
            <div className="grid gap-3 rounded-[2rem] border border-[#E5D3C5] bg-white/85 p-4 shadow-sm md:grid-cols-3">
              {["Safe Environment", "Loving Staff", "Faith-Based Care"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#FFF8F1] px-4 py-4 text-center text-sm font-semibold text-[#5C4033]"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-5 py-12 text-center">
            <p
              className={`${pacifico.className} text-3xl text-[#C98C6B] md:text-4xl`}
            >
              Simple next steps
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-5xl">
              How Enrollment Works
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#6B4F3A]">
              We want the process to feel simple and comfortable for families.
              Start by joining the waitlist or scheduling a tour, then we’ll help
              walk you through availability, questions, paperwork, and start
              dates.
            </p>
          </section>

          <section className="mx-auto grid max-w-6xl gap-5 px-5 py-8 md:grid-cols-3">
            <StepCard
              number="01"
              title="Join the Waitlist"
              text="Start by reaching out so we can learn more about your child, their age, and what kind of care your family is needing."
            />

            <StepCard
              number="02"
              title="Schedule a Tour"
              text="Come see the Little Cove space, ask questions, and get a feel for the environment we’re creating for local families."
            />

            <StepCard
              number="03"
              title="Save Your Spot"
              text="Once availability is confirmed, we’ll walk you through the next steps for enrollment paperwork and start dates."
            />
          </section>

          <section className="mx-auto grid max-w-6xl items-stretch gap-6 px-5 py-12 md:grid-cols-2">
            <InfoPanel
              title="What Families Can Expect"
              text="Little Cove Early Learning is being built to feel warm, calm, safe, and personal. Our goal is to create a home-away-from-home where children are cared for, encouraged, and given space to grow through play, structure, early learning, and daily connection."
            />

            <InfoPanel
              title="Faith-Based Care"
              text="Little Cove will include soft worship music at times, and parts of the curriculum will be faith-based. The heart behind everything is to create a loving, safe, and welcoming environment where children feel cared for and supported."
            />
          </section>

          <section className="mx-auto max-w-6xl px-5 py-12">
            <div className="overflow-hidden rounded-[2rem] border border-[#E5D3C5] bg-[#4F3528] shadow-lg">
              <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <div className="bg-[#FFF8F1] p-8 md:p-10">
                  <p
                    className={`${pacifico.className} text-3xl text-[#C98C6B]`}
                  >
                    Ready to visit?
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                    Schedule a tour with Little Cove.
                  </h2>

                  <p className="mt-5 leading-8 text-[#6B4F3A]">
                    Families can schedule a tour to see the space, ask
                    questions, and learn more about Little Cove before
                    enrolling.
                  </p>

                  <a
                    href="https://calendly.com/littlecoveearlylearning/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-block rounded-full bg-[#C98C6B] px-7 py-3 font-semibold text-white shadow-md transition hover:bg-[#B87652]"
                  >
                    Schedule a Tour
                  </a>
                </div>

                <div className="p-8 text-white md:p-10">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F3C7A7]">
                    Enrollment Interest
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    Limited spots available
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/80">
                    Spots will be limited as we get started, so joining the
                    waitlist or reaching out early is the best way to stay
                    updated on availability.
                  </p>

                  <div className="mt-6 grid gap-3 text-sm text-white/80">
                    <div className="rounded-2xl bg-white/10 p-4">
                      Ask about age groups and availability
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      Learn about tours and enrollment steps
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      Get updates as Little Cove continues growing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-12">
            <div className="mb-8 text-center">
              <p
                className={`${pacifico.className} text-3xl text-[#C98C6B] md:text-4xl`}
              >
                Quick Questions
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                A few things parents usually ask.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <QuestionCard
                question="Are spots limited?"
                answer="Yes. Spots will be limited as we get started, so joining the waitlist is the best way to stay updated on availability."
              />

              <QuestionCard
                question="Can I schedule a tour?"
                answer="Yes. Families can schedule a tour to see the space, ask questions, and learn more about Little Cove before enrolling."
              />

              <QuestionCard
                question="Where is Little Cove located?"
                answer="Little Cove Early Learning is located in Mount Ida, Arkansas and will serve families in Mount Ida and the surrounding Montgomery County area."
              />
            </div>
          </section>

          <section className="px-5 pb-20 pt-8">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E5D3C5] bg-white p-8 text-center shadow-sm md:p-12">
              <p className={`${pacifico.className} text-3xl text-[#C98C6B]`}>
                Have questions?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                Message us about enrollment and next steps.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#6B4F3A]">
                Whether you’re ready to join the waitlist or just want to ask a
                few questions, we’d be happy to hear from you.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="https://calendly.com/littlecoveearlylearning/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#C98C6B] px-8 py-4 font-semibold text-white shadow-md transition hover:bg-[#B87652]"
                >
                  Schedule a Tour
                </a>

                <a
                  href="https://m.me/TheLittleCoveEarlyLearning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#4F3528] px-8 py-4 font-semibold text-white shadow-md transition hover:bg-[#3D281F]"
                >
                  Message Us
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
                  <a href="/pricing" className="transition hover:text-[#F3C7A7]">
                    Pricing
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

function StepCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-3xl border border-[#E5D3C5] bg-white/90 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCE8D5] text-sm font-bold text-[#C98C6B]">
        {number}
      </div>

      <h3 className="text-lg font-bold text-[#4A3024]">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-[#6B4F3A]">{text}</p>
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

function QuestionCard({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <article className="rounded-3xl border border-[#E5D3C5] bg-white p-6 shadow-sm">
      <h3 className="font-bold text-[#4A3024]">{question}</h3>

      <p className="mt-3 text-sm leading-7 text-[#6B4F3A]">{answer}</p>
    </article>
  );
}