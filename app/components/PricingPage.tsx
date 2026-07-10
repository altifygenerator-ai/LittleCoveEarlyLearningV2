import type { BusinessData } from "@/types/data";
import { ClosingCTA, PageHero, SectionHeading, SiteFooter, SiteHeader } from "@/app/components/SiteChrome";

const messengerUrl = "https://m.me/TheLittleCoveEarlyLearning";

export default function PricingPage({ data }: { data: BusinessData }) {
  return (
    <main className="site-page">
      <SiteHeader />
      <PageHero
        eyebrow="Weekly tuition"
        title="Clear rates for each early stage."
        text="Infant, toddler, and Pre-K tuition is posted clearly so families can understand the weekly cost before starting the enrollment process."
        image="/images/updates/classroom-play-area.jpg"
        imageAlt="Little Cove learning and play area"
        primary={{ href: messengerUrl, label: "Request Enrollment Forms", external: true }}
        secondary={{ href: "/enroll", label: "Enrollment Information" }}
        note="Spots are limited to keep care personal and attentive."
      />

      <section className="section-space-sm site-container">
        <div className="pricing-grid">
          <PricingCard title="Infants" age="6 weeks–18 months" price="$175" />
          <PricingCard title="Toddlers" age="18 months–3 years" price="$165" featured />
          <PricingCard title="Pre-K" age="3–5 years" price="$150" />
        </div>
      </section>

      <section className="section-space site-container">
        <SectionHeading
          eyebrow="Simple weekly rates"
          title="Dependable care without hidden guesswork."
          text="Rates are organized by age because each stage requires a different level of attention, routine, supervision, and hands-on care. Little Cove’s focus remains the same across every group: a warm environment, steady daily structure, and thoughtful early learning."
          align="center"
        />
      </section>

      <section className="section-tint">
        <div className="section-space site-container">
          <div className="dark-split premium-card-dark">
            <div className="dark-split-copy bg-[#fff8ef] text-[var(--cocoa)]">
              <p className="eyebrow">What is included</p>
              <h2 className="section-title mt-4">A complete Little Cove day.</h2>
              <p className="lead-copy mt-5">
                Tuition supports the daily care, structure, learning activities, and warm home-like environment families expect from Little Cove.
              </p>
            </div>
            <div className="dark-tile-grid">
              {[
                "Small-group, attentive care",
                "A structured daily schedule",
                "Learning through play and early education",
                "Gentle faith-based learning and worship music at times",
                "A cozy, home-like environment",
                "Plenty of encouragement, connection, and love",
              ].map((item) => (
                <div key={item} className="dark-tile"><p className="mt-0 text-white/76">{item}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space site-container">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoPanel
            eyebrow="Why rates vary"
            title="Different ages need different levels of care."
            text="Infants require more one-on-one support and hands-on routines, while older children can take part in more structured group activities. Weekly rates reflect those different care needs."
          />
          <InfoPanel
            eyebrow="Current availability"
            title="Toddler and Pre-K openings are available."
            text="Message Little Cove for an enrollment packet or to confirm current availability before submitting the $35 enrollment fee."
          />
        </div>
      </section>

      <section className="section-space-sm site-container">
        <div className="premium-panel relative overflow-hidden p-8 text-center sm:p-12">
          <span className="star-cluster left-2 top-2" aria-hidden="true" />
          <span className="star-cluster bottom-1 right-2 rotate-45" aria-hidden="true" />
          <p className="font-display text-3xl italic text-[var(--blush-deep)] sm:text-4xl">A personal note</p>
          <p className="lead-copy mx-auto mt-5 max-w-3xl">
            Every family’s situation is different. Joie’s goal is to work with good families who need reliable childcare, so please reach out if you have questions or need to talk through the options.
          </p>
          <div className="fine-rule mx-auto mt-7 max-w-lg" />
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Limited enrollment helps keep care personal and high quality.</p>
        </div>
      </section>

      <ClosingCTA
        eyebrow="Tuition questions"
        title="Let’s find the right program for your child."
        text="Message Little Cove to ask about age groups, openings, enrollment forms, or anything else you need before getting started."
        primary={{ href: messengerUrl, label: "Message Little Cove", external: true }}
        secondary={{ href: "/enroll", label: "View Enrollment Steps" }}
      />
      <SiteFooter />
    </main>
  );
}

function PricingCard({ title, age, price, featured = false }: { title: string; age: string; price: string; featured?: boolean }) {
  return (
    <article className={`pricing-card ${featured ? "featured" : ""}`}>
      {featured ? <span className="absolute right-5 top-5 rounded-full bg-[var(--blush-deep)] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white">Openings</span> : null}
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--blush-deep)]">{title}</p>
      <p className="mt-3 text-sm text-[var(--muted)]">{age}</p>
      <p className="pricing-price mt-8">{price}<small>/week</small></p>
      <div className="fine-rule my-7" />
      <ul className="check-list">
        <li>Warm, attentive daily care</li>
        <li>Age-appropriate routines and learning</li>
        <li>A personal, home-like environment</li>
      </ul>
    </article>
  );
}

function InfoPanel({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <article className="feature-card p-8 sm:p-10">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--blush-deep)]">{eyebrow}</p>
      <h2 className="card-title mt-4 text-3xl">{title}</h2>
      <p className="card-copy mt-4">{text}</p>
    </article>
  );
}
