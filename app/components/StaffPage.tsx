import { ClosingCTA, PageHero, SectionHeading, SiteFooter, SiteHeader } from "@/app/components/SiteChrome";

export default function StaffPage() {
  return (
    <main className="site-page">
      <SiteHeader />
      <PageHero
        eyebrow="Our team"
        title="The people caring for Little Cove families."
        text="Little Cove is intentionally personal. Our team is here to know the children in our care, build relationships with their families, and create a classroom environment that feels safe, steady, and joyful."
        image="/images/updates/kaitlyn-lead-teacher.jpg"
        imageAlt="Kaitlyn, Lead Teacher at Little Cove Early Learning"
        primary={{ href: "/enroll", label: "Ask About Enrollment" }}
        secondary={{ href: "https://m.me/TheLittleCoveEarlyLearning", label: "Message Little Cove", external: true }}
      />

      <section className="section-space site-container">
        <SectionHeading
          eyebrow="Meet Little Cove"
          title="A small team built around care, consistency, and connection."
          text="The center’s warm feel starts with the people inside it. Joie leads Little Cove with a deeply personal vision for local families, while Kaitlyn brings classroom experience and an encouraging presence to the children she teaches."
          align="center"
        />

        <div className="mt-14 grid gap-8">
          <article className="staff-profile">
            <div className="staff-profile-grid">
              <div className="staff-profile-media grid place-items-center p-8 sm:p-12">
                <div className="logo-medallion w-full max-w-[23rem]">
                  <img src="/images/logo-mark.jpg" alt="Little Cove Early Learning logo" className="aspect-square w-full object-cover" />
                </div>
              </div>
              <div className="staff-profile-copy">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--blush-deep)]">Owner & Manager</p>
                <h2 className="section-title mt-4">Joie</h2>
                <p className="lead-copy mt-6">
                  Joie is the owner and manager behind Little Cove Early Learning. The center grew from something she prayed for, worked toward, and dreamed about: a warm, dependable place where Mount Ida families could feel confident leaving their little ones each day.
                </p>
                <p className="lead-copy mt-4">
                  She has guided the building, classroom setup, enrollment process, and every small detail with a hands-on approach. Her goal is not to create a large, impersonal daycare. It is to build a close-knit early learning center where children feel known and families feel welcome.
                </p>
                <div className="rental-detail-grid mt-8">
                  <ProfileDetail title="Her role" text="Center leadership, family communication, operations, and the day-to-day Little Cove vision." />
                  <ProfileDetail title="Her focus" text="A safe, faith-based, personal environment built thoughtfully for local families." />
                </div>
              </div>
            </div>
          </article>

          <article className="staff-profile reverse">
            <div className="staff-profile-grid">
              <div className="staff-profile-media">
                <img src="/images/updates/kaitlyn-lead-teacher.jpg" alt="Kaitlyn, Lead Teacher at Little Cove Early Learning" className="object-center" />
              </div>
              <div className="staff-profile-copy">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--blush-deep)]">Lead Teacher</p>
                <h2 className="section-title mt-4">Kaitlyn</h2>
                <p className="lead-copy mt-6">
                  Kaitlyn has worked at Head Start as an Assistant Pre-K Teacher for a little over a year, with about a year and a half of school experience overall. Working with young children has been rewarding for her, and she loves helping them learn, grow, and have fun each day.
                </p>
                <p className="lead-copy mt-4">
                  As Little Cove’s Lead Teacher, Kaitlyn brings classroom experience, a heart for children, and a genuine excitement about building relationships with families. She looks forward to creating a safe, fun, and loving classroom where every child can feel supported.
                </p>
                <div className="rental-detail-grid mt-8">
                  <ProfileDetail title="Classroom approach" text="Hands-on learning, encouragement, structure, play, and a warm daily rhythm." />
                  <ProfileDetail title="What she values" text="Helping children feel comfortable, capable, and excited to learn with their classmates." />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-sage">
        <div className="section-space site-container">
          <SectionHeading eyebrow="How we care" title="What guides the Little Cove team." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ValueCard icon="♡" title="Children are known" text="Small class sizes and personal attention help the team learn each child’s routines, personality, and needs." />
            <ValueCard icon="✦" title="Families are included" text="Questions are welcome, communication matters, and parents should feel comfortable talking through their child’s care." />
            <ValueCard icon="⌂" title="The room feels welcoming" text="Warmth, consistency, hands-on learning, and age-appropriate faith-based values shape the daily environment." />
          </div>
        </div>
      </section>

      <ClosingCTA
        eyebrow="Meet us in person"
        title="Schedule a tour and get to know Little Cove."
        text="Visit the center, see the classrooms, and ask the questions that matter most to your family."
        primary={{ href: "https://calendly.com/littlecoveearlylearning/30min", label: "Schedule a Tour", external: true }}
        secondary={{ href: "/enroll", label: "Enrollment Information" }}
      />
      <SiteFooter />
    </main>
  );
}

function ProfileDetail({ title, text }: { title: string; text: string }) {
  return (
    <div className="profile-detail">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--blush-deep)]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
    </div>
  );
}

function ValueCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <article className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="card-title mt-5">{title}</h3>
      <p className="card-copy">{text}</p>
    </article>
  );
}
