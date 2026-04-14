import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="py-5 bg-[#F7F4EF] font-[var(--font-montserrat)] min-h-screen">

    
      {/* TITLE */}
      <div className="text-center mb-20 pt-20 px-6">
        <h1 className="text-5xl md:text-6xl text-[#8C6A00] font-[var(--font-playfair)] tracking-wide">
          Pricing
        </h1>

        <p className="text-black/60 mt-6 max-w-xl mx-auto text-sm leading-7">
          A refined approach to hair. Each service is designed with precision,
          balance, and longevity in mind.
        </p>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-12 px-6">

        {[
          {
            title: "Haircut",
            price: "€100",
            desc: "Precision cut designed to grow out beautifully and naturally."
          },
          {
            title: "Hair Coloring",
            price: "€250",
            desc: "Bespoke colour tailored to your tone, depth and movement."
          },
          {
            title: "Treatment",
            price: "€150",
            desc: "Restorative treatment to strengthen and revive your hair."
          },
          {
            title: "Styling",
            price: "€80",
            desc: "Effortless styling for events and everyday elegance."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="w-80 bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-black/10 hover:border-[#8C6A00] hover:shadow-xl transition duration-300"
          >

            <h2 className="text-lg font-[var(--font-playfair)] text-[#8C6A00] mb-6 tracking-wide">
              {item.title}
            </h2>

            <p className="text-4xl font-light text-black mb-4 tracking-wide">
              {item.price}
            </p>

            <p className="text-black/60 text-sm leading-6 mb-10">
              {item.desc}
            </p>

            <Link href={`/booking?service=${item.title}`}>
              <button className="w-full py-3 border border-[#8C6A00] text-[#8C6A00] text-xs tracking-widest hover:bg-[#8C6A00] hover:text-black transition duration-300">
                RESERVE
              </button>
            </Link>

          </div>
        ))}

      </div>

      {/* FOOT NOTE */}
      <div className="text-center mt-24 text-black/50 text-xs tracking-wide">
        By appointment only · Private studio experience
      </div>

    </div>
  );
}