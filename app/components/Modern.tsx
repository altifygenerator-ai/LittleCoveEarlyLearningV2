import type { BusinessData } from "@/types/data";
import { AnnouncementBar, SectionHeading, SiteFooter, SiteHeader } from "@/app/components/SiteChrome";

const messengerUrl = "https://m.me/TheLittleCoveEarlyLearning";

export default function Modern({ data }: { data: BusinessData }) {
  return (
    <main className="site-page">
      {data.announcement?.enabled ? (
        <AnnouncementBar text={data.announcement.text} href={data.announcement.link || "/enroll"} />
      ) : null}
      <SiteHeader />

      <section className="home-hero watercolor-surface">
        <span className="star-cluster left-[3%] top-[10%]" aria-hidden="true" />
        <span className="star-cluster bottom-[4%] right-[4%] rotate-45" aria-hidden="true" />
        <div className="site-container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow justify-center before:hidden lg:justify-start lg:before:block">Early learning center in Mount Ida</p>
            <h1 className="display-title mx-auto mt-5 max-w-3xl lg:mx-0">
              A beautiful little place to learn, play, and feel known.
            </h1>
            <p className="lead-copy mx-auto mt-6 max-w-2xl lg:mx-0">{data.tagline}</p>
            <div className="home-hero-actions lg:justify-start">
              <a href="/enroll" className="btn-primary">Get Enrollment Information</a>
              <a href="tel:5016721817" className="btn-secondary">Call Little Cove</a>
            </div>
            <div className="home-hero-details lg:justify-start">
              <span>144 George St</span>
              <span>Monday–Friday</span>
              <span>6:00 AM–5:30 PM</span>
            </div>
          </div>

          <div className="home-hero-visual">
            <div className="arch-frame p-3">
              <img
                src="/images/updates/classroom-wide.jpg"
                alt="Little Cove Early Learning classroom"
                className="home-hero-image rounded-[13rem_13rem_1.55rem_1.55rem]"
              />
            </div>
            <div className="home-hero-logo logo-medallion">
              <img src="/images/logo-mark.jpg" alt="Little Cove Early Learning logo" className="aspect-square w-full object-cover" />
            </div>
            <div className="home-hero-note">
              <strong>Toddler & Pre-K</strong>
              <span>Limited openings are currently available. Enrollment packets are being accepted now.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container relative z-10 -mt-1 pb-5 pt-6">
        <div className="stat-ribbon">
          <div><strong>Infants</strong><span>Warm, attentive care</span></div>
          <div><strong>Toddlers</strong><span>Hands-on learning through play</span></div>
          <div><strong>Pre-K</strong><span>Ages 3–5</span></div>
          <div><strong>Faith-based</strong><span>Welcoming, age-appropriate values</span></div>
        </div>
      </section>

      <section className="section-space site-container">
        <SectionHeading
          eyebrow="The Little Cove experience"
          title="Thoughtful care with a warm, personal feel."
          text="Little Cove is prepared for the babies, toddlers, and Pre-K children of Mount Ida with cozy rooms, learning centers, books, art, pretend play, daily routines, and the kind of personal attention that helps children settle in and thrive."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <FeatureCard icon="♡" title="Safe, loving care" text="Every child should feel safe, known, and genuinely cared for when they walk through the door." />
          <FeatureCard icon="✦" title="Learning through play" text="Stories, music, art, books, pretend play, and hands-on activities help little learners grow naturally." />
          <FeatureCard icon="⌂" title="Made for local families" text="Dependable early learning for Mount Ida and Montgomery County families, with a real personal touch." />
        </div>
      </section>

      <section className="section-tint">
        <div className="section-space site-container editorial-grid">
          <div className="photo-collage">
            <div className="photo-card wide">
              <img src="/images/updates/classroom-wide.jpg" alt="Little Cove classroom" className="h-64 sm:h-80" />
            </div>
            <div className="photo-card">
              <img src="/images/updates/classroom-play-area.jpg" alt="Little Cove play and learning area" className="h-44 sm:h-56" />
            </div>
            <div className="photo-card">
              <img src="/images/updates/window-bible-art.jpg" alt="Painted Little Cove window art" className="h-44 sm:h-56" />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Inside Little Cove"
              title="A space that feels warm before the day even begins."
              text="The classrooms are coming together with books, learning centers, art, pretend play, and cozy details that help children feel comfortable from the moment they arrive."
            />
            <div className="info-chip-grid mt-7 sm:grid-cols-2">
              {data.features?.map((item) => <div key={item} className="info-chip">{item}</div>)}
            </div>
            <a href="/renovation" className="btn-light mt-7">See the Little Cove story</a>
          </div>
        </div>
      </section>

      <section className="section-space site-container">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <SectionHeading
            eyebrow="Care options"
            title="Programs for each early stage."
            text="Weekly care is organized by age group. Infant care is part of the program, while current available openings are in the toddler classroom and Pre-K for ages 3–5."
          />
          <a href="/pricing" className="btn-light lg:mb-1">View weekly tuition</a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {data.services.map((service, index) => (
            <article key={service} className="program-card">
              <span className="program-number">0{index + 1}</span>
              <div className="feature-icon mb-5">{index === 0 ? "☾" : index === 1 ? "✿" : "✎"}</div>
              <h3 className="card-title">{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space-sm site-container">
        <div className="dark-split premium-card-dark">
          <div className="dark-split-copy">
            <p className="eyebrow text-[#edc9b8] before:bg-[#edc9b8]">For families</p>
            <h2 className="font-display mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              Choosing childcare should feel personal, not complicated.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
              Send a message, ask questions, visit the space, and talk through what your family needs. We will walk through availability, enrollment paperwork, and the next steps with you.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="/enroll" className="btn-primary">Enrollment details</a>
              <a href={messengerUrl} target="_blank" rel="noopener noreferrer" className="btn-light">Message Little Cove</a>
            </div>
          </div>
          <div className="dark-tile-grid">
            <DarkTile title="Outdoor play" text="A fenced playground area is located across the alley, with outdoor play part of the Little Cove plan." />
            <DarkTile title="Current openings" text="Toddler and Pre-K enrollment is open, with spots filled in the order completed steps are received." />
            <DarkTile title="Enrollment fee" text="After the packet is submitted and availability is confirmed, the $35 fee reserves the spot." />
            <DarkTile title="Daily hours" text="Little Cove is open Monday through Friday from 6:00 AM to 5:30 PM." />
          </div>
        </div>
      </section>

      <section className="section-space site-container">
        <SectionHeading
          eyebrow="Meet the team"
          title="A small team with a lot of heart."
          text="Little Cove is led by people who care about building real relationships with children and families, not simply filling a classroom."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="team-preview-card">
            <div className="team-preview-media grid place-items-center p-6">
              <div className="logo-medallion w-full max-w-52">
                <img src="/images/logo-mark.jpg" alt="Little Cove Early Learning" className="aspect-square w-full object-cover" />
              </div>
            </div>
            <div className="team-preview-copy">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--blush-deep)]">Owner & Manager</p>
              <h3 className="card-title mt-3 text-3xl">Joie</h3>
              <p className="card-copy">Joie is the heart behind Little Cove and the person turning a long-held dream into a warm, dependable place for Mount Ida families.</p>
            </div>
          </article>

          <article className="team-preview-card">
            <div className="team-preview-media">
              <img src="/images/updates/kaitlyn-lead-teacher.jpg" alt="Kaitlyn, Lead Teacher at Little Cove" className="object-center" />
            </div>
            <div className="team-preview-copy">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--blush-deep)]">Lead Teacher</p>
              <h3 className="card-title mt-3 text-3xl">Kaitlyn</h3>
              <p className="card-copy">Kaitlyn brings classroom experience, a heart for young learners, and a warm, encouraging approach to every day at Little Cove.</p>
            </div>
          </article>
        </div>
        <div className="mt-7 text-center"><a href="/staff" className="btn-light">Meet our team</a></div>
      </section>

      <section className="section-sage">
        <div className="section-space site-container editorial-grid reverse">
          <div className="image-frame p-2">
            <img src="/images/rental/big-cove-collage.jpg" alt="Big Cove Rental upstairs event space" className="w-full rounded-[1.25rem] object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Upstairs at 144 George St"
              title="Big Cove Rental"
              text="The spacious top floor is available for birthdays, showers, reunions, meetings, weddings, and other celebrations. The approximately 3,000-square-foot venue includes a full kitchen and elevator access for easier loading and unloading."
            />
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rental-price"><strong>$80</strong><span>Full day</span></div>
              <div className="rental-price"><strong>$120</strong><span>Full weekend</span></div>
            </div>
            <a href="/event-space" className="btn-primary mt-7">View the event space</a>
          </div>
        </div>
      </section>

      <section className="section-space site-container">
        <SectionHeading eyebrow="Little Cove updates" title="What is happening now." align="center" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {data.announcements?.map((item) => (
            <article key={item.title} className="update-card">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--blush-deep)]">{item.date}</p>
              <h3 className="card-title mt-3">{item.title}</h3>
              <p className="card-copy">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space-sm site-container">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="premium-panel p-8 sm:p-10">
            <SectionHeading eyebrow="Community love" title="Kind words from local families." />
            <div className="mt-8 grid gap-7">
              {data.reviews.map((review) => (
                <blockquote key={review.text} className="quote-card">
                  <p className="font-display relative z-10 text-xl leading-relaxed text-[var(--cocoa-deep)]">“{review.text}”</p>
                  <footer className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">{review.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>

          <div className="map-frame">
            <iframe
              title="Little Cove Early Learning location map"
              src="https://www.google.com/maps?q=144+George+St+Mount+Ida+AR+71957&output=embed"
              className="h-[25rem] sm:h-full sm:min-h-[31rem]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section-space-sm site-container">
        <div className="closing-cta premium-card-dark">
          <p className="eyebrow justify-center text-[#edc9b8] before:hidden">Enrollment is open</p>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-6xl">
            Come see whether Little Cove feels right for your family.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
            Toddler and Pre-K openings are currently available. Schedule a tour, request an enrollment packet, or call with questions.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/enroll" className="btn-primary">Start with enrollment information</a>
            <a href="tel:5016721817" className="btn-light">Call 501-672-1817</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function FeatureCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <article className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="card-title mt-5">{title}</h3>
      <p className="card-copy">{text}</p>
    </article>
  );
}

function DarkTile({ title, text }: { title: string; text: string }) {
  return <div className="dark-tile"><h3>{title}</h3><p>{text}</p></div>;
}
