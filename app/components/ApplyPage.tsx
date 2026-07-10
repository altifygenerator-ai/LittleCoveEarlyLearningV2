import type { BusinessData } from "@/types/data";
import { ClosingCTA, PageHero, SectionHeading, SiteFooter, SiteHeader } from "@/app/components/SiteChrome";

const applicationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe-zumDlzfSRKWmC5CGDhRiXxwjcKi2oVQkd0uqTTrx001l3A/viewform";

export default function ApplyPage({ data }: { data: BusinessData }) {
  return (
    <main className="site-page">
      <SiteHeader />
      <PageHero
        eyebrow="Careers at Little Cove"
        title="Help create something meaningful for local families."
        text="Little Cove is looking for caring, patient, dependable people who genuinely enjoy working with children and want to be part of a warm, thoughtful early learning environment."
        image="/images/updates/classroom-big-room.jpg"
        imageAlt="Little Cove classroom"
        primary={{ href: applicationUrl, label: "Start Your Application", external: true }}
        secondary={{ href: "/staff", label: "Meet the Team" }}
        note="Little Cove is currently looking for 1–2 people to join the team."
      />

      <section className="section-space site-container">
        <SectionHeading
          eyebrow="More than a job"
          title="A calm, caring place for children and the people who serve them."
          text={`${data.businessName} is being built with a lot of heart. The right team members care about children, value a warm and dependable environment, and want to contribute to something meaningful for Mount Ida families.`}
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <InfoCard icon="♡" title="Who We’re Looking For" text="Someone who genuinely enjoys being around children, has patience, brings a kind attitude, and understands the value of steady care." />
          <InfoCard icon="✦" title="The Heart Behind It" text="A faith-based environment centered on safety, warmth, encouragement, and helping children feel loved and supported." />
          <InfoCard icon="⌂" title="Local Family Care" text="A team prepared to serve families in Mount Ida, Montgomery County, and nearby communities with dependable childcare." />
        </div>
      </section>

      <section className="section-tint">
        <div className="section-space site-container">
          <div className="dark-split premium-card-dark">
            <div className="dark-split-copy bg-[#fff8ef] text-[var(--cocoa)]">
              <p className="eyebrow">We’re growing</p>
              <h2 className="section-title mt-4">Come be part of Little Cove.</h2>
              <p className="lead-copy mt-5">With so much local interest and support, Little Cove is looking for 1–2 people who can help create a safe, warm, home-away-from-home for children and their families.</p>
              <a href={applicationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7">Start Your Application</a>
            </div>
            <div className="grid gap-8 p-8 sm:grid-cols-2 sm:p-10 lg:p-12">
              <RequirementList
                title="Who we’re looking for"
                items={[
                  "Genuinely enjoys being around children",
                  "Patient, kind, and positive",
                  "Encourages children and values themselves",
                  "Reliable and dependable",
                  "18 years or older",
                ]}
              />
              <RequirementList
                title="The official details"
                items={[
                  "Background check required",
                  "CPR/First Aid certified or willing to become certified",
                  "Help is available with certification steps",
                ]}
              />
              <p className="sm:col-span-2 rounded-[1.15rem] border border-white/10 bg-white/[0.055] p-5 text-sm leading-7 text-white/78">
                This is not just about filling a position. It is about building a steady, loving place for children, parents, and the team who supports them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space site-container">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoPanel title="Experience Helps, Heart Matters" text="Childcare experience is always helpful, but the most important part is having the right heart for children. Little Cove needs people who are patient, caring, steady, and willing to learn." />
          <InfoPanel title="A Supportive Environment" text="Little Cove is designed to feel calm, warm, and personal. The team should feel that too, with people who contribute to a positive place for children, parents, and coworkers." />
        </div>
      </section>

      <ClosingCTA
        eyebrow="Ready to apply?"
        title="Take the first step toward joining Little Cove."
        text="If you love children, care about creating a safe environment, and want to be part of something local and meaningful, complete the application and Little Cove will follow up from there."
        primary={{ href: applicationUrl, label: "Start Your Application", external: true }}
        secondary={{ href: "/", label: "Return Home" }}
      />
      <SiteFooter />
    </main>
  );
}

function InfoCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <article className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="card-title mt-5">{title}</h3>
      <p className="card-copy">{text}</p>
    </article>
  );
}

function InfoPanel({ title, text }: { title: string; text: string }) {
  return (
    <article className="premium-panel p-8 sm:p-10">
      <div className="fine-rule mb-6 max-w-24" />
      <h2 className="card-title text-3xl">{title}</h2>
      <p className="card-copy mt-4">{text}</p>
    </article>
  );
}

function RequirementList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-2xl font-medium text-white">{title}</h3>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/72">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#edc9b8]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
