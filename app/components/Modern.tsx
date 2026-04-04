<meta name="google-site-verification" content="2BwurFuZChwt31SjVIuSzFaqkjDO3wz5lQSDVxZGVos" />
import type { BusinessData } from "@/types/data";
import { Pacifico, Poppins } from "next/font/google";
<meta name="google-site-verification" content="2BwurFuZChwt31SjVIuSzFaqkjDO3wz5lQSDVxZGVos" />
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function Modern({ data }: { data: BusinessData }) {
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
<h1 className="text-sm font-semibold">
  Daycare & Early Learning Center in Mount Ida, AR
</h1>
  <nav className="flex gap-6 text-sm">
    <a href="/enroll" className="hover:underline">Enroll</a>
    <a href="/pricing" className="hover:underline">Pricing</a>
    <a href="/renovation" className="hover:underline">Renovation</a>
    <a href="/apply" className="hover:underline">Careers</a>
  </nav>

</header>
      <div className="min-h-screen bg-[#F5EFE7]/50">
      {data.announcement?.enabled && (
  <div className="px-4 pt-4">
    <div className="max-w-4xl mx-auto bg-[#FCE8D5] border border-[#E5D3C5] text-[#5C4033] text-center py-3 px-4 rounded-2xl shadow-sm">
      
      <a
        href={data.announcement.link}
        target="_blank"
        className="hover:underline font-medium"
      >
        {data.announcement.text}
      </a>

    </div>
  </div>

)}

        <section className="text-center py-20 px-4">

          <img src="/images/logo.png" className="h-20 mx-auto mb-6" />

          <h1 className={`${pacifico.className} text-5xl md:text-6xl`}>
            {data.businessName}
          </h1>

          <p className="tracking-[0.2em] text-sm mt-2 text-[#8C6F5A]">
            EARLY LEARNING
          </p>

          <p className="mt-6 text-[#6B4F3A] max-w-xl mx-auto">
            {data.tagline}
          </p>

          <div className="flex justify-center gap-4 mt-6">

            <a
              href="/enroll"
             
              className="bg-[#C98C6B] text-white px-6 py-3 rounded-full shadow"
            >
              Enroll My Child
            </a>

            <a
              href="tel:8703425563"
              className="bg-[#5C4033] text-white px-6 py-3 rounded-full shadow"
            >
              Call Now
            </a>

          </div>

          <p className="mt-4 text-sm text-[#A38B7A]">
            Now accepting early interest + waitlist
          </p>

        </section>
        <section className="max-w-4xl mx-auto p-6 grid md:grid-cols-3 gap-6">
          {data.services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm text-center border border-[#E5D3C5]"
            >
              {service}
            </div>
          ))}
        </section>
        <section className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8 items-center">

          <img
            src="/images/interior.png"
            className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl shadow-md"
          />

          <div className="grid gap-4">
            {data.features?.map((item, i) => (
              <div
                key={i}
                className="bg-[#F5EFE7] p-5 rounded-xl shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
          

        </section> 

<section className="max-w-4xl mx-auto p-6">
  <h2 className="text-2xl mb-6 text-center">Announcements</h2>

  <div className="grid gap-4">
    {data.announcements?.map((item: any, i: number) => (
      <div
        key={i}
        className="bg-white p-5 rounded-2xl shadow-sm border border-[#E5D3C5]"
      >
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-[#8C6F5A] mb-2">{item.date}</p>
        <p>{item.text}</p>
      </div>
    ))}
  </div>
</section>
        <section className="max-w-3xl mx-auto p-6">
          <h2 className="text-xl mb-4 text-center">What Parents Are Saying</h2>
          {data.reviews.map((review, i) => (
            <div key={i} className="bg-white p-4 mb-4 rounded-xl shadow-sm">
              <div>{"⭐".repeat(review.rating)}</div>
              <p>"{review.text}"</p>
              <small>- {review.name}</small>
            </div>
          ))}
        </section>
        <section className="max-w-4xl mx-auto p-6 text-center">
          <h2 className="mb-4">Location</h2>
          <iframe
            src={`https://www.google.com/maps?q=146+S+George+St+Mount+Ida+AR+71957&output=embed`}
            className="w-full h-64 rounded"
          />
        </section>
        <h2 className="text-2xl mt-12 font-medium text-center mx-auto">
  A Local Daycare You Can Trust
</h2>

<p className="mt-2 text-gray-600 max-w-2xl text-center mx-auto">
  Located in Mount Ida, Little Cove Early Learning is designed to give children a safe, engaging space to grow while giving parents peace of mind.
</p>
        <section className="text-center p-6">
          <h2 className="mb-2">Hours</h2>
          {data.hours.map((hour, i) => (
            <p key={i}>{hour}</p>
            
          ))}
        </section>

        <section className="text-center py-12">
          <a
            href="/enroll"
            
            className="bg-[#C98C6B] text-white px-8 py-4 rounded-full shadow"
          >
            Enroll My Child
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