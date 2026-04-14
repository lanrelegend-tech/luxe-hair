import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="bg-[#F7F4EF] font-[var(--font-montserrat)] overflow-hidden">

      {/* ================= HERO ================= */}
      <header className="relative min-h-screen flex items-center justify-center text-center px-6">

        {/* BACK IMAGES */}
        <img
          src="/project3.jpg"
          alt="Salon interior"
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[620px] h-[260px] object-cover rounded-xl opacity-70 brightness-50"
        />

        <img
          src="/hair7.jpg"
          alt="Hair style left"
          className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 w-56 h-80 object-cover rounded-xl opacity-70 brightness-50"
        />

        <img
          src="/hair1.jpg"
          alt="Hair style right"
          className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 w-64 h-96 object-cover rounded-xl opacity-70 brightness-50"
        />

        {/* HERO TEXT */}
        <div className="relative z-20 flex flex-col items-center">

          {/* MAIN BRAND (SEO H1 FIXED) */}
          <h1 className="text-[#C9A227] font-[var(--font-great-vibes)] text-[60px] md:text-[90px] mt-30 leading-none">
            LUXE HAIR
          </h1>

          <p className="mt-3 text-black text-lg font-medium">
            This one is built to last.
          </p>

          <p className="text-black/70 text-sm max-w-md mt-2 leading-6">
            For people who want their hair to work without thinking about it.
          </p>

          <img
            src="/salon.png"
            alt="Salon logo"
            className="mt-10 w-20 h-20 object-contain opacity-70 hover:opacity-100 transition"
          />

        </div>
      </header>

      {/* ================= ABOUT SECTION ================= */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-10 py-24">

        <img
          src="/hair8.jpg"
          alt="About Luxe Hair"
          className="w-full md:w-64 h-96 object-cover rounded-xl brightness-75 hover:scale-105 transition"
        />

        <div className="text-black max-w-2xl text-sm leading-7 space-y-4">

          <h2 className="text-xl font-bold">
            LUXE HAIR is a one-to-one studio in LONDON
          </h2>

          <p>
            Specialising in cuts built to last. Each cut is designed to hold its shape naturally without daily styling.
          </p>

          <p>
            It’s based on how your hair grows, moves, and settles — not trends or templates.
          </p>

          <p>
            The result is consistent, balanced hair that grows beautifully over time.
          </p>

          <h3 className="font-bold text-[#C9A227] mt-6">
            Why most haircuts stop working
          </h3>

          <p>
            Most haircuts are designed for the moment you leave the salon — not long-term wear.
          </p>

        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section
        id="reviews"
        className="text-center py-24 bg-[#EFE9DF]"
      >

        <h2 className="text-3xl font-[var(--font-playfair)] text-black">
          What Clients Are Saying
        </h2>

        <p className="text-black/60 mt-4 text-sm">
          Real experiences from Luxe Hair clients in London.
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center px-6">

          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm">
            <p className="text-sm text-black/70">
              “The best haircut I’ve ever had. It still looks perfect weeks later.”
            </p>
            <h4 className="mt-4 font-bold text-[#8C6A00]">— Sarah</h4>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm">
            <p className="text-sm text-black/70">
              “Super clean, professional and very detailed.”
            </p>
            <h4 className="mt-4 font-bold text-[#8C6A00]">— Daniel</h4>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm">
            <p className="text-sm text-black/70">
              “Finally a salon that understands structure.”
            </p>
            <h4 className="mt-4 font-bold text-[#8C6A00]">— Amara</h4>
          </div>

        </div>

      </section>

    </section>
  );
}