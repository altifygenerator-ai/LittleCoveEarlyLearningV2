import type { BusinessData } from "@/types/data";
import { Pacifico, Poppins } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function RenovationPage({ data }: { data: BusinessData }) {
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
          <a href="/pricing" className="hover:underline">Pricing</a>
        </nav>
      </header>

      <div className="min-h-screen bg-[#F5EFE7]/50">

        {/* HERO */}
        <section className="text-center py-20 px-4">

          <img src="/images/logo.png" className="h-20 mx-auto mb-6" />

          <h1 className={`${pacifico.className} text-5xl md:text-6xl`}>
            Building Little Cove
          </h1>

          <p className="mt-6 text-[#6B4F3A] max-w-xl mx-auto">
            Follow along as we transform our space into a warm, safe, and beautiful place
            for your children to learn and grow.
          </p>

        </section>

        {/* TIMELINE / STORY */}
        <section className="max-w-5xl mx-auto p-6 space-y-12">

          {/* STEP 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* IMAGE PLACEHOLDER */}
            <div className="bg-white h-[250px] md:h-[350px] rounded-2xl shadow-md border border-[#E5D3C5] flex items-center justify-center text-[#A38B7A]">
              Image Placeholder
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-2xl mb-2">Day 1 — Getting Started</h2>
              <p className="text-sm text-[#8C6F5A] mb-3">Initial cleanout & planning</p>
              <p>
                We began by clearing out the space and planning how each area will be used.
                Our goal is to create a safe, cozy, and functional environment for every age group.
              </p>
            </div>

          </div>

          {/* STEP 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="order-2 md:order-1">
              <h2 className="text-2xl mb-2">Painting & Brightening</h2>
              <p className="text-sm text-[#8C6F5A] mb-3">Creating a warm atmosphere</p>
              <p>
                Fresh paint is bringing the space to life. We're choosing soft, calming tones
                to create a peaceful and welcoming environment for the children.
              </p>
            </div>

            <div className="order-1 md:order-2 bg-white h-[250px] md:h-[350px] rounded-2xl shadow-md border border-[#E5D3C5] flex items-center justify-center text-[#A38B7A]">
              Image Placeholder
            </div>

          </div>

          {/* STEP 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="bg-white h-[250px] md:h-[350px] rounded-2xl shadow-md border border-[#E5D3C5] flex items-center justify-center text-[#A38B7A]">
              Image Placeholder
            </div>

            <div>
              <h2 className="text-2xl mb-2">Setting Up Learning Areas</h2>
              <p className="text-sm text-[#8C6F5A] mb-3">Designing each space intentionally</p>
              <p>
                Each section is being thoughtfully designed for infants, toddlers, and pre-K,
                making sure every child has the right environment to learn and grow.
              </p>
            </div>

          </div>

          {/* STEP 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="order-2 md:order-1">
              <h2 className="text-2xl mb-2">Finishing Touches</h2>
              <p className="text-sm text-[#8C6F5A] mb-3">Details that matter</p>
              <p>
                From decor to safety features, we’re putting in the final touches that will
                make Little Cove feel like a second home.
              </p>
            </div>

            <div className="order-1 md:order-2 bg-white h-[250px] md:h-[350px] rounded-2xl shadow-md border border-[#E5D3C5] flex items-center justify-center text-[#A38B7A]">
              Image Placeholder
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center py-12">

          <p className="mb-4 text-[#6B4F3A]">
            We can’t wait to welcome your family into this space 🤍
          </p>

          <a
            href="https://m.me/TheLittleCoveEarlyLearning"
            target="_blank"
            className="bg-[#C98C6B] text-white px-8 py-4 rounded-full shadow"
          >
            Join the Waitlist
          </a>

        </section>

      </div>
    </div>
  );
}