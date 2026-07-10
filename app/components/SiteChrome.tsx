const navItems = [
  { href: "/", label: "Home" },
  { href: "/enroll", label: "Enrollment" },
  { href: "/pricing", label: "Tuition" },
  { href: "/staff", label: "Our Team" },
  { href: "/renovation", label: "Our Story" },
  { href: "/event-space", label: "Big Cove Rental" },
  { href: "/apply", label: "Careers" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <a href="/" className="site-brand" aria-label="Little Cove Early Learning home">
          <span className="site-brand-mark">
            <img src="/images/logo-mark.jpg" alt="" className="h-full w-full object-cover" />
          </span>
          <span className="min-w-0">
            <span className="site-brand-name">Little Cove</span>
            <span className="site-brand-subtitle">Early Learning</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.slice(1).map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="tel:5016721817" className="desktop-only-action text-sm font-bold text-[var(--cocoa)] transition hover:text-[var(--blush-deep)]">
            501-672-1817
          </a>
          <a href="/enroll" className="btn-primary min-h-[2.8rem] px-5 py-2 text-sm">
            Ask About a Spot
          </a>

          <details className="mobile-menu relative">
            <summary className="mobile-menu-button" aria-label="Open navigation menu">
              <span />
              <span />
              <span />
            </summary>
            <div className="menu-panel">
              <nav aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href}>{item.label}</a>
                ))}
              </nav>
              <div className="mt-3 grid gap-2 border-t border-[var(--line)] pt-3">
                <a href="/enroll" className="btn-primary min-h-[2.85rem] text-sm">Ask About a Spot</a>
                <a href="tel:5016721817" className="btn-light min-h-[2.85rem] text-sm">Call 501-672-1817</a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer-grid">
        <div>
          <div className="flex items-center gap-4">
            <span className="logo-medallion h-16 w-16 shrink-0">
              <img src="/images/logo-mark.jpg" alt="Little Cove Early Learning logo" className="h-full w-full object-cover" />
            </span>
            <div>
              <p className="font-display text-2xl font-semibold">Little Cove</p>
              <p className="mt-1 text-[0.66rem] font-bold uppercase tracking-[0.24em] text-[#edc9b8]">Early Learning</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
            A warm, faith-based early learning center in Mount Ida, thoughtfully prepared for infants, toddlers, Pre-K children, and the families who love them.
          </p>
        </div>

        <div>
          <p className="site-footer-title">Visit & Contact</p>
          <div className="site-footer-links">
            <p>144 George St</p>
            <p>Mount Ida, AR 71957</p>
            <p>Monday–Friday · 6:00 AM–5:30 PM</p>
            <a href="tel:5016721817">501-672-1817</a>
            <a href="mailto:littlecoveearlylearning@outlook.com" className="break-all">littlecoveearlylearning@outlook.com</a>
            <a href="https://m.me/TheLittleCoveEarlyLearning" target="_blank" rel="noopener noreferrer">Message Little Cove</a>
          </div>
        </div>

        <div>
          <p className="site-footer-title">Explore</p>
          <div className="site-footer-links grid-cols-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="site-container footer-bottom">
        <p>© {new Date().getFullYear()} Little Cove Early Learning. All rights reserved.</p>
        <p>
          Website by{" "}
          <a href="https://hometownwebservicesar.cc" target="_blank" rel="noreferrer" className="font-semibold text-[#edc9b8] hover:text-white">
            Hometown Web Services
          </a>
        </p>
      </div>
    </footer>
  );
}

export function AnnouncementBar({ text, href = "/enroll" }: { text: string; href?: string }) {
  return (
    <div className="announcement-bar">
      <a href={href}>{text} <span aria-hidden="true">→</span></a>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "center" ? "centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {text ? <p className="lead-copy mt-5">{text}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  primary,
  secondary,
  note,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  primary: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
  note?: string;
}) {
  return (
    <section className="page-hero watercolor-surface">
      <span className="star-cluster left-[4%] top-[8%]" aria-hidden="true" />
      <span className="star-cluster bottom-[5%] right-[5%] rotate-45" aria-hidden="true" />
      <div className="site-container page-hero-grid">
        <div className="page-hero-copy">
          <p className="eyebrow justify-center before:hidden lg:justify-start lg:before:block">{eyebrow}</p>
          <h1 className="display-title mx-auto mt-5 max-w-3xl lg:mx-0">{title}</h1>
          <p className="lead-copy mx-auto mt-6 max-w-2xl lg:mx-0">{text}</p>
          <div className="page-hero-actions lg:justify-start">
            <a
              href={primary.href}
              target={primary.external ? "_blank" : undefined}
              rel={primary.external ? "noopener noreferrer" : undefined}
              className="btn-primary"
            >
              {primary.label}
            </a>
            {secondary ? (
              <a
                href={secondary.href}
                target={secondary.external ? "_blank" : undefined}
                rel={secondary.external ? "noopener noreferrer" : undefined}
                className="btn-secondary"
              >
                {secondary.label}
              </a>
            ) : null}
          </div>
          {note ? <p className="page-hero-note">{note}</p> : null}
        </div>

        <div className="page-hero-media">
          <div className="arch-frame p-3">
            <img src={image} alt={imageAlt} className="rounded-[13rem_13rem_1.55rem_1.55rem]" />
          </div>
          <div className="page-hero-badge" aria-hidden="true">
            <img src="/images/logo-mark.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClosingCTA({
  eyebrow,
  title,
  text,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  text: string;
  primary: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
}) {
  return (
    <section className="section-space-sm site-container">
      <div className="closing-cta premium-card-dark">
        <p className="eyebrow justify-center text-[#edc9b8] before:hidden">{eyebrow}</p>
        <h2 className="font-display mx-auto mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-6xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">{text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={primary.href}
            target={primary.external ? "_blank" : undefined}
            rel={primary.external ? "noopener noreferrer" : undefined}
            className="btn-primary"
          >
            {primary.label}
          </a>
          {secondary ? (
            <a
              href={secondary.href}
              target={secondary.external ? "_blank" : undefined}
              rel={secondary.external ? "noopener noreferrer" : undefined}
              className="btn-light"
            >
              {secondary.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
