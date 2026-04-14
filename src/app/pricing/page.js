import React from "react";
export default function PricingPage() {
  return (
    <div className="py-24 bg-[#F7F4EF] font-[var(--font-montserrat)] min-h-screen">

      {/* TITLE */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-5xl text-[#8C6A00] font-[var(--font-playfair)]">
          Pricing
        </h1>

        <p className="text-black/70 mt-4 max-w-2xl mx-auto">
          Transparent pricing for premium hair services tailored to your needs.
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="flex flex-wrap justify-center gap-10 px-6">

        {/* CARD 1 */}
        <div className="w-72 bg-white rounded-xl shadow-md p-6 border border-black/10 hover:border-[#8C6A00] transition">

          <h2 className="text-xl font-[var(--font-playfair)] text-[#8C6A00] mb-4">
            Haircut
          </h2>

          <p className="text-3xl font-bold text-black mb-2">
            ₦10,000
          </p>

          <p className="text-black/60 text-sm mb-6">
            Precision cut tailored to your face shape and style.
          </p>

          <button className="w-full py-2 border border-[#8C6A00] text-[#8C6A00] hover:bg-[#8C6A00] hover:text-black transition">
            Book Now
          </button>

        </div>

        {/* CARD 2 */}
        <div className="w-72 bg-white rounded-xl shadow-md p-6 border border-black/10 hover:border-[#8C6A00] transition">

          <h2 className="text-xl font-[var(--font-playfair)] text-[#8C6A00] mb-4">
            Hair Coloring
          </h2>

          <p className="text-3xl font-bold text-black mb-2">
            ₦25,000
          </p>

          <p className="text-black/60 text-sm mb-6">
            Rich, long-lasting color tailored to your tone.
          </p>

          <button className="w-full py-2 border border-[#8C6A00] text-[#8C6A00] hover:bg-[#8C6A00] hover:text-black transition">
            Book Now
          </button>

        </div>

        {/* CARD 3 */}
        <div className="w-72 bg-white rounded-xl shadow-md p-6 border border-black/10 hover:border-[#8C6A00] transition">

          <h2 className="text-xl font-[var(--font-playfair)] text-[#8C6A00] mb-4">
            Treatment
          </h2>

          <p className="text-3xl font-bold text-black mb-2">
            ₦15,000
          </p>

          <p className="text-black/60 text-sm mb-6">
            Deep repair treatment for healthy, shiny hair.
          </p>

          <button className="w-full py-2 border border-[#8C6A00] text-[#8C6A00] hover:bg-[#8C6A00] hover:text-black transition">
            Book Now
          </button>

        </div>

        {/* CARD 4 */}
        <div className="w-72 bg-white rounded-xl shadow-md p-6 border border-black/10 hover:border-[#8C6A00] transition">

          <h2 className="text-xl font-[var(--font-playfair)] text-[#8C6A00] mb-4">
            Styling
          </h2>

          <p className="text-3xl font-bold text-black mb-2">
            ₦8,000
          </p>

          <p className="text-black/60 text-sm mb-6">
            Elegant styling for events and special occasions.
          </p>

          <button className="w-full py-2 border border-[#8C6A00] text-[#8C6A00] hover:bg-[#8C6A00] hover:text-black transition">
            Book Now
          </button>

        </div>

      </div>
    </div>
  );
}