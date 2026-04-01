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


        <section className="text-center py-12">
          <a
            href="https://m.me/TheLittleCoveEarlyLearning"
            target="_blank"
            className="bg-[#5C4033] text-white px-8 py-4 rounded-full shadow"
          >
            Message Us With Questions
          </a>
        </section>

      </div>
    </div>
  );
}