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
            <div className="grid grid-cols-2 gap-3">
  {[
    "/images/renovations/day1-1.jpg",
    "/images/renovations/day1-2.jpg",
    "/images/renovations/day1-3.jpg",
    "/images/renovations/day1-4.jpg",
  ].map((src, i) => (
    <a
      key={i}
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <img
        src={src}
        alt={`Renovation ${i + 1}`}
        className="w-full h-[120px] md:h-[170px] object-cover rounded-xl shadow border border-[#E5D3C5] hover:opacity-80 transition"
      />
    </a>
  ))}
</div>

            {/* TEXT */}
            <div>
              <h2 className="text-2xl mb-2">Say Hello to Little Cove Early Learning location!</h2>
              <p className="text-sm text-[#8C6F5A] mb-3">Building Purchased!</p>
              <p>
                I seriously cannot contain my excitement anymore!! This opportunity is something I’ve prayed for, worked toward, and dreamed about, and now it’s finally happening!
We are SO excited to be able to serve families in this community. There is so much room to grow, expand, and create something truly special here, and I cannot wait to see where this journey takes us.
I am beyond blessed and so thankful for all the love, support, and encouragement I’ve already received. It truly means more than you know.
Now that being said, I am ACTIVELY looking for all things daycare/pre-k! 🧸✨  
If you or someone you know is selling gently used items, please tag them below! I’ve also attached my wishlist, but absolutely no pressure at all.
Thank you all again for supporting this dream and allowing me the opportunity to provide this service. I seriously cannot wait to meet you all!! ❤️
              </p>
            </div>

          </div>

          {/* STEP 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="order-2 md:order-1">
              <h2 className="text-2xl mb-2">Update 2</h2>
              <p className="text-sm text-[#8C6F5A] mb-3">Coming Soon</p>
              <p>
                Coming Soon!
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
              <h2 className="text-2xl mb-2">Update 3</h2>
              <p className="text-sm text-[#8C6F5A] mb-3">Coming Soon</p>
              <p>
                Coming Soon!
              </p>
            </div>

          </div>

          {/* STEP 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="order-2 md:order-1">
              <h2 className="text-2xl mb-2">Update 4</h2>
              <p className="text-sm text-[#8C6F5A] mb-3">Coming Soon</p>
              <p>
                Coming Soon!
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
<div className="sr-only">
  daycare Mount Ida AR, childcare Mount Ida Arkansas, preschool Mount Ida,
  early learning center Mount Ida AR
</div>
      </div>
    </div>
  );
}