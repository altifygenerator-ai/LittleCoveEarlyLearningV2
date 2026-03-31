import type { BusinessData } from "@/types/data";
import { Pacifico, Poppins } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function ApplyPage({ data }: { data: BusinessData }) {
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
      {/* NAV (copy from your other pages) */}
      <header className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-semibold text-lg">Little Cove</div>

        <nav className="flex gap-6 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/enroll" className="hover:underline">Enroll</a>
          <a href="/pricing" className="hover:underline">Pricing</a>
          <a href="/renovation" className="hover:underline">Renovation</a>
        </nav>
      </header>

      {/* CONTENT */}
      <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className={`${pacifico.className} text-4xl mb-4`}>
          Join Our Team
        </h1>

        <p className="max-w-xl text-lg mb-8">
          We’re looking for caring, passionate individuals who love working with
          children. If that sounds like you, we’d love to hear from you.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe-zumDlzfSRKWmC5CGDhRiXxwjcKi2oVQkd0uqTTrx001l3A/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#c8a27a] text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
        >
          Start Your Application
        </a>
      </main>
    </div>
  );
}