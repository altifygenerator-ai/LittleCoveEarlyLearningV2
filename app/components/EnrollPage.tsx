"use client";
import type { BusinessData } from "@/types/data";
import { Pacifico, Poppins } from "next/font/google";
const calendlyLink = "#"; // replace later with real Calendly link
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function EnrollPage({ data }: { data: BusinessData }) {
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
  
      <header className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-semibold text-lg">
          Little Cove
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/pricing" className="hover:underline">Pricing</a>
          <a href="/renovation" className="hover:underline">Renovation</a>
        </nav>
      </header>

  
      <div className="min-h-screen bg-[#F5EFE7]/50">


        <section className="text-center py-20 px-4">

          <img src="/images/logo.png" className="h-20 mx-auto mb-6" />

          <h1 className={`${pacifico.className} text-5xl md:text-6xl`}>
            Enroll Your Child
          </h1>

          <p className="mt-6 text-[#6B4F3A] max-w-xl mx-auto">
            Join our waitlist to secure your child’s spot at {data.businessName}.
          </p>

          <p className="mt-4 text-sm text-[#A38B7A]">
            Limited spots available
          </p>
          <div className="mt-8">
  <a
  href="https://calendly.com/littlecoveearlylearning/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#C08457] text-white px-6 py-3 rounded-full"
>
  Schedule a Tour
</a>
</div>

        </section>

      
    

  
        <section className="max-w-4xl mx-auto p-6 grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-[#E5D3C5]">
            Safe Environment
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-[#E5D3C5]">
            Loving Staff
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-[#E5D3C5]">
            Faith-Based Care
          </div>

        </section>
<section className="max-w-4xl mx-auto px-6 py-10">
  <div className="bg-white/90 rounded-3xl shadow-sm border border-[#E5D3C5] p-8">
    <h2 className={`${pacifico.className} text-4xl mb-4 text-center`}>
      How Enrollment Works
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
      <div>
        <h3 className="font-semibold mb-2">1. Join the Waitlist</h3>
        <p className="text-sm text-[#6B4F3A]">
          Start by reaching out so we can learn more about your child, their age,
          and what kind of care your family is needing.
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">2. Schedule a Tour</h3>
        <p className="text-sm text-[#6B4F3A]">
          Come see the Little Cove space, ask questions, and get a feel for the
          environment we’re creating for local families.
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">3. Save Your Spot</h3>
        <p className="text-sm text-[#6B4F3A]">
          Once availability is confirmed, we’ll walk you through the next steps
          for enrollment paperwork and start dates.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="max-w-4xl mx-auto px-6 py-6">
  <div className="grid md:grid-cols-2 gap-6 items-stretch">
    <div className="bg-[#FFF8F1]/90 rounded-3xl border border-[#E5D3C5] p-8 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">What Families Can Expect</h2>
      <p className="text-sm leading-7 text-[#6B4F3A]">
        Little Cove Early Learning is being built to feel warm, calm, safe, and
        personal. Our goal is to create a home-away-from-home where children are
        cared for, encouraged, and given space to grow through play, structure,
        early learning, and daily connection.
      </p>
    </div>

    <div className="bg-white/90 rounded-3xl border border-[#E5D3C5] p-8 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Faith-Based Care</h2>
      <p className="text-sm leading-7 text-[#6B4F3A]">
        Little Cove will include soft worship music at times, and parts of the
        curriculum will be faith-based. The heart behind everything is to create
        a loving, safe, and welcoming environment where children feel cared for
        and supported.
      </p>
    </div>
  </div>
</section>

<section className="max-w-4xl mx-auto px-6 py-10">
  <div className="bg-white/90 rounded-3xl shadow-sm border border-[#E5D3C5] p-8">
    <h2 className={`${pacifico.className} text-4xl mb-6 text-center`}>
      Quick Questions
    </h2>

    <div className="space-y-5 text-sm text-[#6B4F3A]">
      <div>
        <h3 className="font-semibold text-[#5C4033] mb-1">
          Are spots limited?
        </h3>
        <p>
          Yes. Spots will be limited as we get started, so joining the waitlist
          is the best way to stay updated on availability.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-[#5C4033] mb-1">
          Can I schedule a tour?
        </h3>
        <p>
          Yes. Families can schedule a tour to see the space, ask questions, and
          learn more about Little Cove before enrolling.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-[#5C4033] mb-1">
          Where is Little Cove located?
        </h3>
        <p>
          Little Cove Early Learning is located in Mount Ida, Arkansas and will
          serve families in Mount Ida and the surrounding Montgomery County area.
        </p>
      </div>
    </div>
  </div>
</section>

        <section className="text-center py-12">
          <a
            href="https://m.me/TheLittleCoveEarlyLearning"
            target="_blank"
            className="bg-[#5C4033] text-white px-8 py-4 rounded-full shadow"
          >
            Message Us With Questions
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