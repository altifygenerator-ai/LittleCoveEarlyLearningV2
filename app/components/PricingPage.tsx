import type { BusinessData } from "@/types/data";
import { Pacifico, Poppins } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function PricingPage({ data }: { data: BusinessData }) {
  return (
    <div
      className={`${poppins.className} text-[#5C4033]`}
      style={{
        backgroundImage: "url('/images/clouds.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* NAV */}
      <header className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-semibold text-lg">Little Cove</div>

        <nav className="flex gap-6 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/enroll" className="hover:underline">Enroll</a>
          <a href="/renovation" className="hover:underline">Renovation</a>
        </nav>
      </header>

      <div className="min-h-screen bg-[#F5EFE7]/50">

        {/* HERO */}
        <section className="text-center py-20 px-4">

          <img src="/images/logo.png" className="h-20 mx-auto mb-6" />

          <h1 className={`${pacifico.className} text-5xl md:text-6xl`}>
            Pricing
          </h1>

          <p className="mt-6 text-[#6B4F3A] max-w-xl mx-auto">
            Simple, transparent weekly rates designed to provide high-quality, personalized care.
          </p>

        </section>

        {/* PRICING CARDS */}
        <section className="max-w-5xl mx-auto p-6 grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5D3C5] text-center">
            <h3 className="text-lg mb-2">Infants</h3>
            <p className="text-sm text-[#8C6F5A] mb-4">6 weeks – 18 months</p>
            <p className="text-2xl font-semibold">$175<span className="text-sm">/week</span></p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5D3C5] text-center">
            <h3 className="text-lg mb-2">Toddlers</h3>
            <p className="text-sm text-[#8C6F5A] mb-4">18 months – 3 years</p>
            <p className="text-2xl font-semibold">$165<span className="text-sm">/week</span></p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5D3C5] text-center">
            <h3 className="text-lg mb-2">Pre-K</h3>
            <p className="text-sm text-[#8C6F5A] mb-4">3 – 5 years</p>
            <p className="text-2xl font-semibold">$150<span className="text-sm">/week</span></p>
          </div>

        </section>

        {/* WHAT'S INCLUDED */}
        <section className="max-w-3xl mx-auto p-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5D3C5]">

            <h2 className="text-xl mb-4 text-center">What’s Included</h2>

            <ul className="space-y-2 text-center">
              <li>✔️ Small group, attentive care</li>
              <li>✔️ Structured daily schedule</li>
              <li>✔️ Learning through play + early education</li>
              <li>✔️ Optional faith-based activities</li>
              <li>✔️ A cozy, home-like environment</li>
              <li>✔️ And of course… lots of love 🤍</li>
            </ul>

          </div>

        </section>

        {/* PERSONAL NOTE */}
        <section className="max-w-3xl mx-auto p-6 text-center">

          <div className="bg-[#F5EFE7] p-6 rounded-xl shadow-sm">

            <p className="text-[#6B4F3A]">
              I understand that every family’s situation is different. My heart is to work
              with good families who need reliable childcare. If you have questions or need
              to talk through options, don’t hesitate to reach out 🫶
            </p>

            <p className="mt-4 text-sm text-[#8C6F5A]">
              Spots are limited to keep care personal and high quality.
            </p>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center py-12">

          <a
            href="https://m.me/TheLittleCoveEarlyLearning"
            target="_blank"
            className="bg-[#C98C6B] text-white px-8 py-4 rounded-full shadow"
          >
            Message to Join Waitlist
          </a>

        </section>

      </div>
    </div>
  );
}