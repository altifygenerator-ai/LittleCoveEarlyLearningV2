import type { BusinessData } from "@/types/data";
import { Pacifico, Poppins } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RenovationPage({ data }: { data: BusinessData }) {
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
                Building Little Cove
              </p>

              <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] text-[#4A3024] md:mx-0 md:text-6xl">
                Follow along as Little Cove comes to life.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B4F3A] md:mx-0 md:text-lg">
                Follow along as we transform our space into a warm, safe, and
                beautiful place for your children to learn and grow.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                <a
                  href="https://m.me/TheLittleCoveEarlyLearning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#C98C6B] px-7 py-3.5 text-center font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#B87652]"
                >
                  Join the Waitlist
                </a>

                <a
                  href="/enroll"
                  className="rounded-full bg-[#4F3528] px-7 py-3.5 text-center font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#3D281F]"
                >
                  Enrollment Info
                </a>
              </div>

              <p className="mt-5 text-sm font-medium text-[#8A6D5A]">
                Renovation updates, photos, and progress from Mount Ida.
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
                    Renovation Updates
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
                "Building purchased",
                "Space updates",
                "Tour progress",
                "Opening soon",
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
              The story so far
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-5xl">
              Turning a dream into a daycare.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#6B4F3A]">
              Little Cove Early Learning is being created with a lot of love,
              prayer, work, and community support. This page will keep families
              updated as the space comes together.
            </p>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-10">
            <div className="space-y-10">
              <RenovationUpdate
                title="Say Hello to Little Cove Early Learning Location!"
                label="Building Purchased!"
                text="I seriously cannot contain my excitement anymore!! This opportunity is something I’ve prayed for, worked toward, and dreamed about, and now it’s finally happening! We are SO excited to be able to serve families in this community. There is so much room to grow, expand, and create something truly special here, and I cannot wait to see where this journey takes us. I am beyond blessed and so thankful for all the love, support, and encouragement I’ve already received. It truly means more than you know. Now that being said, I am ACTIVELY looking for all things daycare/pre-k! 🧸✨ If you or someone you know is selling gently used items, please tag them below! I’ve also attached my wishlist, but absolutely no pressure at all. Thank you all again for supporting this dream and allowing me the opportunity to provide this service. I seriously cannot wait to meet you all!! ❤️"
              >
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "/images/renovations/day1-1.jpg",
                    "/images/renovations/day1-2.jpg",
                    "/images/renovations/day1-3.jpg",
                    "/images/renovations/day1-4.jpg",
                  ].map((src, i) => (
                    <a
                      key={i}
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden rounded-2xl border border-[#E5D3C5] bg-white shadow-sm"
                    >
                      <img
                        src={src}
                        alt={`Little Cove renovation update ${i + 1}`}
                        className="h-[130px] w-full object-cover transition duration-300 group-hover:scale-105 md:h-[180px]"
                      />
                    </a>
                  ))}
                </div>
              </RenovationUpdate>

              <RenovationUpdate
                title="The First Touch"
                label="Getting Started"
                text="I feel like this is the ground breaking! Our first piece of decor in our soon-to-be check-in and Photo Booth area! SO EXCITING! We close on our house on Tuesday and then it’s full time Little Cove time so I can get this opened for my Montgomery parents! 🫶❤️"
                reverse
              >
                <a
                  href="/images/renovations/day2-1.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-[2rem] border border-[#E5D3C5] bg-white p-2 shadow-sm"
                >
                  <img
                    src="/images/renovations/day2-1.jpg"
                    alt="Little Cove renovation update"
                    className="h-[280px] w-full rounded-[1.5rem] object-cover transition duration-300 group-hover:scale-[1.02] md:h-[390px]"
                  />
                </a>
              </RenovationUpdate>

              <RenovationUpdate
                title="Update 3"
                label="Coming Soon"
                text="Coming Soon!"
              >
                <div className="flex h-[280px] items-center justify-center rounded-[2rem] border border-dashed border-[#D9BFA8] bg-white/80 p-8 text-center text-[#A38B7A] shadow-sm md:h-[390px]">
                  More renovation photos coming soon
                </div>
              </RenovationUpdate>

              <RenovationUpdate
                title="Update 4"
                label="Coming Soon"
                text="Coming Soon!"
                reverse
              >
                <div className="flex h-[280px] items-center justify-center rounded-[2rem] border border-dashed border-[#D9BFA8] bg-white/80 p-8 text-center text-[#A38B7A] shadow-sm md:h-[390px]">
                  More renovation photos coming soon
                </div>
              </RenovationUpdate>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-14">
            <div className="overflow-hidden rounded-[2rem] border border-[#E5D3C5] bg-[#4F3528] shadow-lg">
              <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <div className="bg-[#FFF8F1] p-8 md:p-10">
                  <p
                    className={`${pacifico.className} text-3xl text-[#C98C6B]`}
                  >
                    We’re getting closer
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                    We can’t wait to welcome your family into this space.
                  </h2>

                  <p className="mt-5 leading-8 text-[#6B4F3A]">
                    Little Cove is being built to feel warm, calm, safe, and
                    personal. Follow along as the space continues coming
                    together.
                  </p>

                  <a
                    href="https://m.me/TheLittleCoveEarlyLearning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-block rounded-full bg-[#C98C6B] px-7 py-3 font-semibold text-white shadow-md transition hover:bg-[#B87652]"
                  >
                    Join the Waitlist
                  </a>
                </div>

                <div className="p-8 text-white md:p-10">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F3C7A7]">
                    What we’re creating
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    A cozy home-away-from-home for little ones.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/80">
                    The goal is simple: a safe, loving, faith-based environment
                    where children can learn, play, grow, and feel cared for
                    each day.
                  </p>

                  <div className="mt-6 grid gap-3 text-sm text-white/80">
                    <div className="rounded-2xl bg-white/10 p-4">
                      Warm and welcoming daycare space
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      Early learning and daily routines
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      Personal care for local families
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-20 pt-8">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E5D3C5] bg-white p-8 text-center shadow-sm md:p-12">
              <p className={`${pacifico.className} text-3xl text-[#C98C6B]`}>
                Have questions?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                Ask about tours, updates, and waitlist details.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#6B4F3A]">
                If you’re interested in Little Cove, message us to ask about
                the renovation, current progress, enrollment, tours, and next
                steps.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="https://m.me/TheLittleCoveEarlyLearning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#C98C6B] px-8 py-4 font-semibold text-white shadow-md transition hover:bg-[#B87652]"
                >
                  Join the Waitlist
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
                  <a href="/pricing" className="transition hover:text-[#F3C7A7]">
                    Pricing
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

function RenovationUpdate({
  title,
  label,
  text,
  children,
  reverse = false,
}: {
  title: string;
  label: string;
  text: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <article className="rounded-[2rem] border border-[#E5D3C5] bg-white/90 p-5 shadow-sm md:p-6">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className={reverse ? "order-2 md:order-1" : ""}>
          {children}
        </div>

        <div className={reverse ? "order-1 md:order-2" : ""}>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C98C6B]">
            {label}
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-3xl">
            {title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#6B4F3A]">{text}</p>
        </div>
      </div>
    </article>
  );
}