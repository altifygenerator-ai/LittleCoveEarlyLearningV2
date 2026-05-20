import type { BusinessData } from "@/types/data";
import { Pacifico, Poppins } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function ApplyPage({ data }: { data: BusinessData }) {
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
            <a href="/pricing" className="transition hover:text-[#B87652]">
              Pricing
            </a>
            <a href="/renovation" className="transition hover:text-[#B87652]">
              Renovation
            </a>
          </nav>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe-zumDlzfSRKWmC5CGDhRiXxwjcKi2oVQkd0uqTTrx001l3A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#C98C6B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#B87652]"
          >
            Apply
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
                Join Our Team
              </p>

              <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] text-[#4A3024] md:mx-0 md:text-6xl">
                Help us build something special for local families.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B4F3A] md:mx-0 md:text-lg">
                We’re looking for caring, patient, dependable people who
                genuinely love working with children. If that sounds like you,
                we’d love to hear from you.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe-zumDlzfSRKWmC5CGDhRiXxwjcKi2oVQkd0uqTTrx001l3A/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#C98C6B] px-7 py-3.5 text-center font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#B87652]"
                >
                  Start Your Application
                </a>

                <a
                  href="/enroll"
                  className="rounded-full bg-[#4F3528] px-7 py-3.5 text-center font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#3D281F]"
                >
                  Learn About Little Cove
                </a>
              </div>

              <p className="mt-5 text-sm font-medium text-[#8A6D5A]">
                Currently looking for 1–2 amazing people to join Little Cove.
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
                    Now Accepting Applications
                  </p>
                  <p className="mt-1 text-sm text-[#7B5F4D]">
                    Mount Ida, Arkansas
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 pb-10">
            <div className="grid gap-3 rounded-[2rem] border border-[#E5D3C5] bg-white/85 p-4 shadow-sm md:grid-cols-4">
              {[
                "Patient & kind",
                "Dependable",
                "Loves kids",
                "Positive attitude",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#FFF8F1] px-4 py-4 text-center text-sm font-semibold text-[#5C4033]"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-5 py-12 text-center">
            <p
              className={`${pacifico.className} text-3xl text-[#C98C6B] md:text-4xl`}
            >
              More than just a job
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-5xl">
              We’re creating a cozy, safe, home-away-from-home.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#6B4F3A]">
              Little Cove Early Learning is being built with a lot of heart. We
              want people on the team who care about children, value a calm and
              loving environment, and want to be part of something meaningful for
              local families.
            </p>
          </section>

          <section className="mx-auto grid max-w-6xl gap-5 px-5 py-8 md:grid-cols-3">
            <InfoCard
              title="Who We’re Looking For"
              text="Someone who genuinely loves being around kids, has patience, brings a kind attitude, and understands how important steady care is for little ones."
            />

            <InfoCard
              title="The Heart Behind It"
              text="This is a faith-based childcare environment focused on safety, warmth, encouragement, and helping children feel loved and supported each day."
            />

            <InfoCard
              title="Local Family Care"
              text="Little Cove is being created for families in Mount Ida, Montgomery County, and nearby communities who need dependable childcare."
            />
          </section>

          <section className="mx-auto max-w-6xl px-5 py-14">
            <div className="overflow-hidden rounded-[2rem] border border-[#E5D3C5] bg-[#4F3528] shadow-lg">
              <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <div className="bg-[#FFF8F1] p-8 md:p-10">
                  <p
                    className={`${pacifico.className} text-3xl text-[#C98C6B]`}
                  >
                    We’re growing
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                    Come be part of Little Cove.
                  </h2>

                  <p className="mt-5 leading-8 text-[#6B4F3A]">
                    It’s getting real over here. With so much love and interest
                    coming in, we’re looking to bring on 1–2 amazing people to
                    join Little Cove Early Learning.
                  </p>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe-zumDlzfSRKWmC5CGDhRiXxwjcKi2oVQkd0uqTTrx001l3A/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-block rounded-full bg-[#C98C6B] px-7 py-3 font-semibold text-white shadow-md transition hover:bg-[#B87652]"
                  >
                    Start Your Application
                  </a>
                </div>

                <div className="p-8 text-white md:p-10">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="font-bold">Who we’re looking for</h3>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
                        <li>Genuinely loves being around kids</li>
                        <li>Patient, kind, and positive attitude</li>
                        <li>Values themselves and encourages kids</li>
                        <li>Reliable and dependable</li>
                        <li>18 years or older</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold">The official stuff</h3>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
                        <li>Background check required</li>
                        <li>
                          CPR/First Aid certified or willing to get certified
                        </li>
                        <li>Help available for certification steps</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-8 rounded-2xl bg-white/10 p-5 text-sm leading-7 text-white/85">
                    This isn’t just a job. We’re building something special: a
                    cozy, safe, home-away-from-home for these babies and their
                    families.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl items-stretch gap-6 px-5 py-12 md:grid-cols-2">
            <InfoPanel
              title="Experience Helps, Heart Matters"
              text="Childcare experience is always helpful, but the biggest thing is having the right heart for kids. We’re looking for people who are patient, caring, steady, and willing to learn."
            />

            <InfoPanel
              title="A Supportive Environment"
              text="Little Cove is being built to feel calm, warm, and personal. The team should feel that too. We want people who can help create a positive place for children, parents, and staff."
            />
          </section>

          <section className="px-5 pb-20 pt-8">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E5D3C5] bg-white p-8 text-center shadow-sm md:p-12">
              <p className={`${pacifico.className} text-3xl text-[#C98C6B]`}>
                Ready to apply?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                Start your application with Little Cove.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#6B4F3A]">
                If you love children, care about creating a safe environment,
                and want to be part of something local and meaningful, fill out
                the application and we’ll take it from there.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe-zumDlzfSRKWmC5CGDhRiXxwjcKi2oVQkd0uqTTrx001l3A/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#C98C6B] px-8 py-4 font-semibold text-white shadow-md transition hover:bg-[#B87652]"
                >
                  Start Your Application
                </a>

                <a
                  href="/"
                  className="rounded-full bg-[#4F3528] px-8 py-4 font-semibold text-white shadow-md transition hover:bg-[#3D281F]"
                >
                  Back to Home
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
                  <a href="/pricing" className="transition hover:text-[#F3C7A7]">
                    Pricing
                  </a>
                  <a
                    href="/renovation"
                    className="transition hover:text-[#F3C7A7]"
                  >
                    Renovation Updates
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
        </div>
      </div>
    </main>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-3xl border border-[#E5D3C5] bg-white/90 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FCE8D5] text-lg">
        ♥
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