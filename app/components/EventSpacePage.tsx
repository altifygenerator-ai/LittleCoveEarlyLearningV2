import { ClosingCTA, PageHero, SectionHeading, SiteFooter, SiteHeader } from "@/app/components/SiteChrome";

const venueSchema = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Big Cove Rental",
  description:
    "Approximately 3,000 square feet of upstairs event space with a full kitchen and elevator access in Mount Ida, Arkansas.",
  image: [
    "https://littlecoveearlylearning.com/images/rental/room-west.jpg",
    "https://littlecoveearlylearning.com/images/rental/room-east.jpg",
    "https://littlecoveearlylearning.com/images/rental/kitchen.jpg",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "144 George St",
    addressLocality: "Mount Ida",
    addressRegion: "AR",
    postalCode: "71957",
    addressCountry: "US",
  },
  telephone: "+1-501-672-1817",
};

export default function EventSpacePage() {
  return (
    <main className="site-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(venueSchema) }} />
      <SiteHeader />
      <PageHero
        eyebrow="Big Cove Rental"
        title="A spacious upstairs venue for the moments worth gathering for."
        text="The top floor at 144 George St offers approximately 3,000 square feet of open event space with a full kitchen and elevator access for easier loading and unloading."
        image="/images/rental/room-east.jpg"
        imageAlt="Big Cove Rental upstairs event room"
        primary={{ href: "tel:5016721817", label: "Ask About Availability" }}
        secondary={{ href: "mailto:littlecoveearlylearning@outlook.com?subject=Big%20Cove%20Rental%20Inquiry", label: "Email an Inquiry" }}
        note="Bring your own decorations and make the space your own."
      />

      <section className="site-container relative z-10 -mt-1 pb-5 pt-6">
        <div className="stat-ribbon">
          <div><strong>Approx. 3,000 sq. ft.</strong><span>Open upstairs layout</span></div>
          <div><strong>Full kitchen</strong><span>Convenient event prep</span></div>
          <div><strong>Elevator access</strong><span>Easier loading and unloading</span></div>
          <div><strong>Mount Ida</strong><span>144 George St</span></div>
        </div>
      </section>

      <section className="section-space site-container">
        <SectionHeading
          eyebrow="Room to celebrate"
          title="A flexible setting for all kinds of gatherings."
          text="Big Cove Rental is suited for birthdays, baby showers, bridal showers, weddings, reunions, meetings, celebrations, and other events where you need an open, practical space in the heart of Mount Ida."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {["Birthdays", "Baby & bridal showers", "Weddings & celebrations", "Reunions & meetings"].map((item, index) => (
            <article key={item} className="number-card text-center">
              <span className="number-mark">0{index + 1}</span>
              <h3 className="card-title mt-4">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-tint">
        <div className="section-space site-container">
          <div className="rental-gallery">
            <div className="photo-card large">
              <img src="/images/rental/room-west.jpg" alt="Large open floor at Big Cove Rental" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="photo-card"><img src="/images/rental/kitchen.jpg" alt="Kitchen at Big Cove Rental" className="h-56 lg:h-60" /></div>
              <div className="photo-card"><img src="/images/rental/serving-bar.jpg" alt="Serving counter at Big Cove Rental" className="h-56 lg:h-60" /></div>
            </div>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="photo-card"><img src="/images/rental/room-east.jpg" alt="Big Cove Rental room with kitchen view" className="h-64" /></div>
            <div className="photo-card"><img src="/images/rental/open-floor.jpg" alt="Open floor and columns at Big Cove Rental" className="h-64" /></div>
          </div>
        </div>
      </section>

      <section className="section-space site-container">
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="premium-card-dark p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#edc9b8]">Simple rental pricing</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <PriceCard price="$80" label="Full day" />
              <PriceCard price="$120" label="Full weekend" />
            </div>
            <p className="mt-6 text-sm leading-7 text-white/68">Availability is limited by date. Contact Big Cove before making plans or sending invitations.</p>
          </div>

          <div className="premium-panel p-8 sm:p-10 lg:p-12">
            <p className="eyebrow">What to know</p>
            <h2 className="section-title mt-4">A practical blank canvas for your event.</h2>
            <div className="rental-detail-grid mt-7">
              <Detail title="Decorations" text="Bring your own decorations and arrange the space to suit your event." />
              <Detail title="Kitchen" text="A full kitchen is available as part of the upstairs venue." />
              <Detail title="Access" text="Elevator access makes loading, unloading, and guest entry easier." />
              <Detail title="Location" text="Conveniently located at 144 George St in Mount Ida, Arkansas." />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-sm site-container">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="map-frame">
            <iframe
              title="Big Cove Rental location map"
              src="https://www.google.com/maps?q=144+George+St+Mount+Ida+AR+71957&output=embed"
              className="h-[26rem]"
              loading="lazy"
            />
          </div>
          <div className="premium-panel flex flex-col justify-center p-8 sm:p-10">
            <p className="eyebrow">Visit Big Cove</p>
            <h2 className="section-title mt-4">144 George St</h2>
            <p className="mt-2 text-[var(--muted)]">Mount Ida, AR 71957</p>
            <p className="lead-copy mt-5">Call or email to ask whether your date is available and talk through the type of gathering you are planning.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href="tel:5016721817" className="btn-primary">Call 501-672-1817</a>
              <a href="mailto:littlecoveearlylearning@outlook.com?subject=Big%20Cove%20Rental%20Inquiry" className="btn-light">Email an Inquiry</a>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        eyebrow="Reserve your date"
        title="Start planning your next gathering at Big Cove."
        text="Share your preferred date and event type so availability can be confirmed before you make final plans."
        primary={{ href: "tel:5016721817", label: "Call About Availability" }}
        secondary={{ href: "mailto:littlecoveearlylearning@outlook.com?subject=Big%20Cove%20Rental%20Inquiry", label: "Send an Email" }}
      />
      <SiteFooter />
    </main>
  );
}

function PriceCard({ price, label }: { price: string; label: string }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.055] p-6 text-center">
      <p className="font-display text-5xl font-medium text-white">{price}</p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/60">{label}</p>
    </div>
  );
}

function Detail({ title, text }: { title: string; text: string }) {
  return (
    <div className="detail-card">
      <h3 className="card-title text-xl">{title}</h3>
      <p className="card-copy mt-2">{text}</p>
    </div>
  );
}
