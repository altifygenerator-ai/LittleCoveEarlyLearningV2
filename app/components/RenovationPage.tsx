import type { BusinessData } from "@/types/data";
import { ClosingCTA, PageHero, SectionHeading, SiteFooter, SiteHeader } from "@/app/components/SiteChrome";

const messengerUrl = "https://m.me/TheLittleCoveEarlyLearning";

export default function RenovationPage({ data }: { data: BusinessData }) {
  return (
    <main className="site-page">
      <SiteHeader />
      <PageHero
        eyebrow="The Little Cove story"
        title="A dream becoming a place families can walk into."
        text="Follow the building, classroom, window, and learning-space updates that have turned 144 George St into Little Cove Early Learning."
        image="/images/updates/window-art-collage.jpg"
        imageAlt="Little Cove painted window artwork"
        primary={{ href: messengerUrl, label: "Message Little Cove", external: true }}
        secondary={{ href: "/enroll", label: "Enrollment Information" }}
        note="Built with prayer, hard work, community support, and a lot of heart."
      />

      <section className="site-container relative z-10 -mt-1 pb-5 pt-6">
        <div className="stat-ribbon">
          <div><strong>The building</strong><span>The place where the dream became real</span></div>
          <div><strong>Classroom spaces</strong><span>Rooms shaped around play and learning</span></div>
          <div><strong>Painted windows</strong><span>A warm welcome before families walk in</span></div>
          <div><strong>Learning centers</strong><span>Books, art, pretend play, and routines</span></div>
        </div>
      </section>

      <section className="section-space site-container">
        <SectionHeading
          eyebrow="The story so far"
          title="Turning a building into Little Cove."
          text="Little Cove has come together through prayer, work, community help, and the belief that local families deserve a warm, dependable place for their children. These updates show the rooms, details, and small milestones along the way."
          align="center"
        />

        <div className="mt-14 grid gap-10">
          <StoryBlock
            label="Building purchased"
            title="The day Little Cove became real"
            text="This opportunity was prayed for, worked toward, and dreamed about for a long time. The building created room to serve local families, grow carefully, and build something truly special in Mount Ida. The support, encouragement, and donated or gently used daycare items from the community helped the vision move forward."
          >
            <PhotoGrid
              images={[
                "/images/renovations/day1-1.jpg",
                "/images/renovations/day1-2.jpg",
                "/images/renovations/day1-3.jpg",
                "/images/renovations/day1-4.jpg",
              ]}
              alt="Little Cove building renovation"
            />
          </StoryBlock>

          <StoryBlock
            label="The first touch"
            title="The check-in area started to feel like home"
            text="The first piece of decor in the future check-in and photo area felt like a groundbreaking moment. It was a small detail, but it made the dream feel visible and helped set the warm, personal tone Joie wanted for Little Cove."
            reverse
          >
            <SinglePhoto src="/images/renovations/day2-1.jpg" alt="Early Little Cove check-in area update" />
          </StoryBlock>

          <StoryBlock
            label="Classroom update"
            title="The rooms began coming together"
            text="Centers, rugs, books, pretend play, art, and practical learning pieces began filling the rooms. The goal was never a cold classroom. It was a place children could be excited to enter, with learning built naturally into the day."
          >
            <PhotoGrid
              images={[
                "/images/updates/classroom-wide.jpg",
                "/images/updates/classroom-play-area.jpg",
                "/images/updates/classroom-big-room.jpg",
                "/images/updates/look-what-were-learning.jpg",
              ]}
              alt="Little Cove classroom"
            />
          </StoryBlock>

          <StoryBlock
            label="Painted windows"
            title="The front of the building got its Little Cove welcome"
            text="The painted windows brought color, warmth, faith, and personality to the building. They became one of the details that made the space feel welcoming before families even stepped through the door."
            reverse
          >
            <SinglePhoto src="/images/updates/window-art-collage.jpg" alt="Little Cove painted window collage" />
          </StoryBlock>
        </div>
      </section>

      <section className="section-tint">
        <div className="section-space site-container">
          <div className="dark-split premium-card-dark">
            <div className="dark-split-copy bg-[#fff8ef] text-[var(--cocoa)]">
              <p className="eyebrow">Where it is headed</p>
              <h2 className="section-title mt-4">A warm home-away-from-home for little learners.</h2>
              <p className="lead-copy mt-5">Little Cove is being built to feel calm, safe, personal, and prepared for the real rhythms of family life.</p>
              <a href="/enroll" className="btn-primary mt-7">Ask About Enrollment</a>
            </div>
            <div className="dark-tile-grid">
              <DarkTile title="Warm classrooms" text="Comfortable rooms designed for everyday routines and play." />
              <DarkTile title="Early learning" text="Books, centers, art, music, and hands-on activities." />
              <DarkTile title="Faith-based pieces" text="Age-appropriate values woven gently into the environment." />
              <DarkTile title="Personal care" text="A smaller, local center where children and families can be known." />
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        eyebrow="Follow the next chapter"
        title="Ask about tours, updates, and enrollment."
        text="Message Little Cove to ask about the center, current openings, the enrollment process, or anything you would like to know before visiting."
        primary={{ href: messengerUrl, label: "Message Little Cove", external: true }}
        secondary={{ href: "tel:5016721817", label: "Call 501-672-1817" }}
      />
      <SiteFooter />
    </main>
  );
}

function StoryBlock({
  label,
  title,
  text,
  reverse = false,
  children,
}: {
  label: string;
  title: string;
  text: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <article className="staff-profile">
      <div className={`staff-profile-grid ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="p-4 sm:p-5">{children}</div>
        <div className="staff-profile-copy">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--blush-deep)]">{label}</p>
          <h2 className="card-title mt-4 text-3xl sm:text-4xl">{title}</h2>
          <p className="lead-copy mt-5 text-sm sm:text-base">{text}</p>
        </div>
      </div>
    </article>
  );
}

function PhotoGrid({ images, alt }: { images: string[]; alt: string }) {
  return (
    <div className="gallery-mosaic">
      {images.map((src, index) => (
        <a key={src} href={src} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={`${alt} ${index + 1}`} className="h-40 sm:h-52" />
        </a>
      ))}
    </div>
  );
}

function SinglePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="gallery-mosaic">
      <a href={src} target="_blank" rel="noopener noreferrer" className="wide">
        <img src={src} alt={alt} className="h-[22rem]" />
      </a>
    </div>
  );
}

function DarkTile({ title, text }: { title: string; text: string }) {
  return <div className="dark-tile"><h3>{title}</h3><p>{text}</p></div>;
}
