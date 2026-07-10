import type { BusinessData } from "@/types/data";
import { ClosingCTA, PageHero, SectionHeading, SiteFooter, SiteHeader } from "@/app/components/SiteChrome";

const tourUrl = "https://calendly.com/littlecoveearlylearning/30min";
const messengerUrl = "https://m.me/TheLittleCoveEarlyLearning";

export default function EnrollPage({ data }: { data: BusinessData }) {
  return (
    <main className="site-page">
      <SiteHeader />
      <PageHero
        eyebrow="Enrollment"
        title="A simple, personal start for your family."
        text={`Schedule a tour, ask about current openings, or call with questions about care, tuition, and next steps at ${data.businessName}.`}
        image="/images/updates/enrollment-agreement.jpg"
        imageAlt="Little Cove enrollment agreement"
        primary={{ href: tourUrl, label: "Schedule a Tour", external: true }}
        secondary={{ href: messengerUrl, label: "Message Little Cove", external: true }}
        note="Toddler and Pre-K enrollment is open. Spots are limited."
      />

      <section className="site-container relative z-10 -mt-1 pb-4 pt-6">
        <div className="stat-ribbon md:grid-cols-3">
          <div><strong>Toddler</strong><span>Current openings</span></div>
          <div><strong>Pre-K</strong><span>Ages 3–5</span></div>
          <div><strong>$35 Enrollment</strong><span>Reserves a confirmed spot</span></div>
        </div>
      </section>

      <section className="section-space site-container">
        <SectionHeading
          eyebrow="How enrollment works"
          title="Three clear steps, with room to ask every question."
          text="We want the process to feel comfortable for families. Tell us your child’s age group, visit the space, and we will walk through availability, paperwork, questions, and possible start dates."
          align="center"
        />
        <div className="steps-grid mt-12">
          <StepCard number="01" title="Schedule a Tour" text="Choose a time to see the space, meet Little Cove, ask questions, and get a feel for the classrooms." />
          <StepCard number="02" title="Confirm Availability" text="We will talk through your child’s age group, your family’s schedule, and the spots currently available." />
          <StepCard number="03" title="Reserve the Spot" text="After availability is confirmed and the packet is submitted, the $35 enrollment fee reserves the spot." />
        </div>
      </section>

      <section className="section-sage">
        <div className="section-space site-container grid gap-6 lg:grid-cols-2">
          <InfoPanel
            icon="♡"
            eyebrow="What families can expect"
            title="Warm, calm, and personal care."
            text="Little Cove is designed to feel like a home-away-from-home where children are cared for, encouraged, and given room to grow through play, structure, early learning, and daily connection."
          />
          <InfoPanel
            icon="✦"
            eyebrow="Faith-based care"
            title="Values shared in a gentle, welcoming way."
            text="Soft worship music may be part of the day, and portions of the curriculum are faith-based. The heart behind it is a loving, safe environment where each child feels supported."
          />
        </div>
      </section>

      <section className="section-space site-container">
        <div className="dark-split premium-card-dark">
          <div className="dark-split-copy bg-[#fff8ef] text-[var(--cocoa)]">
            <p className="eyebrow">Ready to visit?</p>
            <h2 className="section-title mt-4">Come see Little Cove in person.</h2>
            <p className="lead-copy mt-5">
              A tour gives your family time to see the rooms, ask about routines, and learn more before making an enrollment decision.
            </p>
            <a href={tourUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7">Schedule a Tour</a>
          </div>
          <div className="dark-split-copy">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#edc9b8]">Current enrollment</p>
            <h3 className="font-display mt-4 text-3xl font-medium text-white">Limited toddler and Pre-K spots</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">Spots are reserved in the order completed enrollment steps are received.</p>
            <ul className="mt-7 grid gap-3">
              {[
                "Schedule a tour and see the space",
                "Request and submit the enrollment packet",
                "Confirm availability before paying the fee",
                "Submit the $35 enrollment fee to reserve the spot",
              ].map((item) => (
                <li key={item} className="rounded-[1rem] border border-white/10 bg-white/[0.055] p-4 text-sm text-white/78">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-space-sm site-container">
        <SectionHeading eyebrow="Parent questions" title="A few things families usually ask." align="center" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <QuestionCard question="Are spots limited?" answer="Yes. Toddler and Pre-K openings are currently available, and completed enrollment steps determine the order spots are reserved." />
          <QuestionCard question="Can I schedule a tour?" answer="Yes. Families can visit the center, see the space, ask questions, and learn more before enrolling." />
          <QuestionCard question="Where is Little Cove?" answer="Little Cove Early Learning is at 144 George St in Mount Ida, serving families throughout Montgomery County and nearby communities." />
        </div>
      </section>

      <ClosingCTA
        eyebrow="Have questions?"
        title="Let’s talk through enrollment together."
        text="Schedule a tour, message Little Cove, or call if you need help deciding which program or next step fits your family."
        primary={{ href: tourUrl, label: "Schedule a Tour", external: true }}
        secondary={{ href: "tel:5016721817", label: "Call 501-672-1817" }}
      />
      <SiteFooter />
    </main>
  );
}

function StepCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <article className="step-card">
      <span className="number-mark">{number}</span>
      <h3 className="card-title mt-5">{title}</h3>
      <p className="card-copy">{text}</p>
    </article>
  );
}

function InfoPanel({ icon, eyebrow, title, text }: { icon: string; eyebrow: string; title: string; text: string }) {
  return (
    <article className="premium-panel p-8 sm:p-10">
      <div className="feature-icon">{icon}</div>
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[var(--blush-deep)]">{eyebrow}</p>
      <h2 className="card-title mt-4 text-3xl">{title}</h2>
      <p className="card-copy mt-4">{text}</p>
    </article>
  );
}

function QuestionCard({ question, answer }: { question: string; answer: string }) {
  return (
    <article className="question-card">
      <div className="feature-icon">?</div>
      <h3 className="card-title mt-5">{question}</h3>
      <p className="card-copy">{answer}</p>
    </article>
  );
}
