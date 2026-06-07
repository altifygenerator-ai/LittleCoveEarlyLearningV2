import type { BusinessData } from "@/types/data";
const pacifico = { className: "font-script" };
const poppins = { className: "font-sans" };

export default function Modern({ data }: { data: BusinessData }) {
  return (
    <main className={`${poppins.className} min-h-screen overflow-x-hidden bg-[#FBF6EF] text-[#4F3528]`}>
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
            <a href="/enroll" className="transition hover:text-[#B87652]">
              Enroll
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
            href="/enroll"
            className="rounded-full bg-[#C98C6B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#B87652]"
          >
            Enroll
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

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FBF6EF]/65 via-[#FBF6EF]/80 to-[#FBF6EF]" />

        <div className="relative">
          {data.announcement?.enabled && (
            <div className="px-5 pt-5">
              <div className="mx-auto max-w-5xl rounded-2xl border border-[#E5CDB8] bg-[#FCE8D5]/95 px-5 py-3 text-center text-sm font-medium text-[#5C4033] shadow-sm">
                <a
                  href={data.announcement.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {data.announcement.text}
                </a>
              </div>
            </div>
          )}

          <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 md:grid-cols-[1.05fr_0.95fr] md:pb-24 md:pt-20">
            <div className="text-center md:text-left">
              <p className={`${pacifico.className} mb-4 text-3xl text-[#C98C6B] md:text-4xl`}>
                Welcome to Little Cove
              </p>

              <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] text-[#4A3024] md:mx-0 md:text-6xl">
                Not just a daycare. A place kids can actually be excited about.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B4F3A] md:mx-0 md:text-lg">
                {data.tagline}
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                <a
                  href="/enroll"
                  className="rounded-full bg-[#C98C6B] px-7 py-3.5 text-center font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#B87652]"
                >
                  Get Enrollment Info
                </a>

                <a
                  href="tel:5016721817"
                  className="rounded-full bg-[#4F3528] px-7 py-3.5 text-center font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#3D281F]"
                >
                  Call Now
                </a>
              </div>

              <p className="mt-5 text-sm font-medium text-[#8A6D5A]">
                Enrollment forms are going out now
              </p>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="rounded-[2rem] border border-[#E5D3C5] bg-white/80 p-5 shadow-xl shadow-[#9C6B4F]/10 backdrop-blur">
                <img
                  src="/images/updates/classroom-wide.jpg"
                  alt="Little Cove classroom set up with learning centers"
                  className="mx-auto h-[320px] w-full rounded-[1.5rem] object-cover"
                />

                <div className="mt-5 rounded-3xl bg-[#FFF8F1] p-5 text-center">
                  <p className="text-sm font-semibold text-[#4F3528]">
                    Opening updates are here
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
                "159 N George St",
                "Open Mon-Fri",
                "6:00 AM - 5:30 PM",
                "Infants, toddlers & Pre-K",
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
            <p className={`${pacifico.className} text-3xl text-[#C98C6B] md:text-4xl`}>
              What we’re building
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-5xl">
              Cool kid hangout, learning included.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#6B4F3A]">
              Little Cove is being built for the babies, toddlers, and pre-k kiddos of Mount Ida. Think cozy rooms, learning centers, books, pretend play, daily routines, and a place that feels more like a little home than a cold classroom.
            </p>
          </section>

          <section className="mx-auto grid max-w-6xl gap-5 px-5 py-8 md:grid-cols-3">
            <ValueCard
              title="Safe, loving care"
              text="The first goal is simple: every child should feel safe, known, and loved when they walk through the door."
            />

            <ValueCard
              title="Learning through play"
              text="The rooms are set up for hands-on learning, stories, music, art, pretend play, and all the little moments that help kids grow."
            />

            <ValueCard
              title="A place for local families"
              text="Little Cove is here for Mount Ida and Montgomery County families who need dependable care with a real personal touch."
            />
          </section>

          <section className="mx-auto max-w-6xl px-5 py-12">
            <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C98C6B]">
                  Take a peek
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                  The space is finally starting to feel like Little Cove.
                </h2>
                <p className="mt-5 leading-8 text-[#6B4F3A]">
                  We’ve been working hard behind the scenes getting rooms ready,
                  setting up centers, adding color, and making the building feel
                  warm for opening. It may still look a little plain in spots,
                  but the cozy touches are coming.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {["/images/updates/classroom-play-area.jpg", "/images/updates/classroom-big-room.jpg", "/images/updates/window-bible-art.jpg", "/images/updates/window-bear-art.jpg"].map((src, i) => (
                  <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-3xl border border-[#E5D3C5] bg-white p-2 shadow-sm">
                    <img src={src} alt={`Little Cove update photo ${i + 1}`} className="h-44 w-full rounded-2xl object-cover transition duration-300 group-hover:scale-[1.03]" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-14">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C98C6B]">
                Care options
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                Infants, toddlers, and Pre-K.
              </h2>
              <p className="mt-4 leading-7 text-[#6B4F3A]">
                Weekly care is set up by age group. Current posted rates are $175/week for infants, $165/week for toddlers, and $150/week for preschool / pre-k.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {data.services.map((service, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-[#E5D3C5] bg-white p-6 text-center font-semibold text-[#5C4033] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {service}
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -left-3 -top-3 hidden h-full w-full rounded-[2rem] bg-[#EFD6BF] md:block" />
              <img
                src="/images/updates/window-art-collage.jpg"
                alt="Inside Little Cove Early Learning in Mount Ida Arkansas"
                className="relative h-[280px] w-full rounded-[2rem] object-cover shadow-lg md:h-[430px]"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C98C6B]">
                What matters most
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                A lot of love, a lot of work, and yes, a playground.
              </h2>

              <div className="mt-6 grid gap-4">
                {data.features?.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-[#E5D3C5] bg-white/90 p-5 leading-7 text-[#6B4F3A] shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-12">
            <div className="grid gap-6 md:grid-cols-2">
              <InfoPanel
                title="For parents"
                text="Choosing childcare is a big deal. Send a message, ask the questions, come see the space, and we’ll walk through the next steps without making it complicated."
              />

              <InfoPanel
                title="Outdoor play update"
                text="Yes, there is a fenced-in playground area right across the alley from the building. Inside is the first priority for opening, but outdoor play is part of the plan."
              />
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-12">
            <div className="mb-8 text-center">
              <p className={`${pacifico.className} text-3xl text-[#C98C6B]`}>
                Little Cove updates
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                Announcements
              </h2>
            </div>

            <div className="grid gap-5">
              {data.announcements?.map((item: any, i: number) => (
                <article
                  key={i}
                  className="rounded-3xl border border-[#E5D3C5] bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-lg font-bold text-[#4A3024]">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-[#A07861]">
                      {item.date}
                    </p>
                  </div>

                  <p className="mt-3 leading-7 text-[#6B4F3A]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-12">
            <div className="mb-8 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C98C6B]">
                Community love
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                What People Are Saying
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {data.reviews.map((review, i) => (
                <article
                  key={i}
                  className="rounded-3xl border border-[#E5D3C5] bg-white p-6 shadow-sm"
                >
                  <div className="text-lg">{"⭐".repeat(review.rating)}</div>
                  <p className="mt-4 leading-7 text-[#6B4F3A]">
                    “{review.text}”
                  </p>
                  <p className="mt-4 text-sm font-bold text-[#4A3024]">
                    — {review.name}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-14">
            <div className="overflow-hidden rounded-[2rem] border border-[#E5D3C5] bg-[#4F3528] shadow-lg">
              <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <div className="bg-[#FFF8F1] p-8 md:p-10">
                  <p className={`${pacifico.className} text-3xl text-[#C98C6B]`}>
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
                    href="/apply"
                    className="mt-7 inline-block rounded-full bg-[#C98C6B] px-7 py-3 font-semibold text-white shadow-md transition hover:bg-[#B87652]"
                  >
                    Apply to Join Our Team
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
                        <li>CPR/First Aid certified or willing to get certified</li>
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

          <section className="mx-auto max-w-6xl px-5 py-14">
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-[2rem] border border-[#E5D3C5] bg-white p-3 shadow-sm">
                <iframe
                  title="Little Cove Early Learning location map"
                  src="https://www.google.com/maps?q=159+N+George+St+Mount+Ida+AR+71957&output=embed"
                  className="h-72 w-full rounded-[1.5rem] md:h-96"
                  loading="lazy"
                />
              </div>

              <div className="rounded-[2rem] border border-[#E5D3C5] bg-white p-8 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C98C6B]">
                  Visit us
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024]">
                  Location & Hours
                </h2>

                <p className="mt-4 leading-7 text-[#6B4F3A]">
                  Located in Mount Ida, Little Cove Early Learning is designed
                  to give children a safe, engaging space to grow while giving
                  parents peace of mind.
                </p>

                <div className="mt-6 rounded-2xl bg-[#FFF8F1] p-5">
                  <p className="font-bold text-[#4A3024]">
                    159 N George St
                  </p>
                  <p className="text-sm text-[#6B4F3A]">
                    Mount Ida, AR 71957
                  </p>
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="font-bold text-[#4A3024]">Hours</h3>
                  {data.hours.map((hour, i) => (
                    <p key={i} className="text-sm text-[#6B4F3A]">
                      {hour}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-5 py-10 text-center">
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
              Little Cove Early Learning in Mount Ida
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-[#6B4F3A]">
              Little Cove Early Learning is located at 159 N George St in Mount
              Ida, Arkansas. We serve local families with infant care, toddler
              care, preschool / pre-k, early learning routines, faith-based pieces,
              and a space built with a lot of heart.
            </p>
          </section>

          <section className="px-5 pb-20 pt-8">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E5D3C5] bg-white p-8 text-center shadow-sm md:p-12">
              <p className={`${pacifico.className} text-3xl text-[#C98C6B]`}>
                Have questions?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#4A3024] md:text-4xl">
                Need an enrollment form?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#6B4F3A]">
                Enrollment forms are going out now. Current spots are limited,
                so message or call if you need one.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/enroll"
                  className="rounded-full bg-[#C98C6B] px-8 py-4 font-semibold text-white shadow-md transition hover:bg-[#B87652]"
                >
                  Get Enrollment Info
                </a>

                <a
                  href="tel:5016721817"
                  className="rounded-full bg-[#4F3528] px-8 py-4 font-semibold text-white shadow-md transition hover:bg-[#3D281F]"
                >
                  Call Now
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
                  A cozy, faith-based daycare and early learning center in Mount Ida, built with a lot of love for local families.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F3C7A7]">
                  Contact
                </h3>

                <div className="mt-4 space-y-3 text-sm text-white/75">
                  <p>159 N George St</p>
                  <p>Mount Ida, AR 71957</p>
                  <a
                    href="tel:5016721817"
                    className="block transition hover:text-[#F3C7A7]"
                  >
                    501-672-1817
                  </a>
                  <a
                    href="mailto:littlecoveearlylearning@outlook.com"
                    className="block transition hover:text-[#F3C7A7]"
                  >
                    littlecoveearlylearning@outlook.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F3C7A7]">
                  Quick Links
                </h3>

                <div className="mt-4 grid gap-3 text-sm text-white/75">
                  <a href="/enroll" className="transition hover:text-[#F3C7A7]">
                    Enrollment
                  </a>
                  <a href="/pricing" className="transition hover:text-[#F3C7A7]">
                    Pricing
                  </a>
                  <a href="/renovation" className="transition hover:text-[#F3C7A7]">
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
        </div>
      </div>
    </main>
  );
}

function ValueCard({ title, text }: { title: string; text: string }) {
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
    <article className="rounded-[2rem] border border-[#E5D3C5] bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#4A3024]">
        {title}
      </h2>

      <p className="mt-4 text-sm leading-7 text-[#6B4F3A]">{text}</p>
    </article>
  );
}