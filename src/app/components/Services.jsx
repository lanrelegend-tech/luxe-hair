function Services() {
  return (
    <div className="py-24 bg-[#181C1A] font-[var(--font-montserrat)]">

      {/* TITLE */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-5xl text-[#8C6A00] font-[var(--font-playfair)]">
          Our Services
        </h1>

        <p className="text-white/70 mt-4 max-w-2xl mx-auto">
          Premium hair services designed to enhance your natural beauty with precision and care.
        </p>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-10 px-6">

        {/* CARD 1 */}
        <div className="w-72 bg-[#1f2422] rounded-xl overflow-hidden border border-white/10 hover:border-[#8C6A00] transition">

          <img
            src="/hair12.jpg"
            className="h-96 w-full object-cover brightness-75 hover:scale-105 transition duration-300"
          />

          <div className="p-5">
            <h2 className="text-[#8C6A00] text-xl font-[var(--font-playfair)] mb-2">
              Haircut
            </h2>
            <p className="text-white/70 text-sm">
              Precision cuts tailored to your face shape and lifestyle.
            </p>
          </div>

        </div>

        {/* CARD 2 */}
        <div className="w-72 bg-[#1f2422] rounded-xl overflow-hidden border border-white/10 hover:border-[#8C6A00] transition">

          <img
            src="/hair10.jpg"
            className="h-96 w-full object-cover brightness-75 hover:scale-105 transition duration-300"
          />

          <div className="p-5">
            <h2 className="text-[#8C6A00] text-xl font-[var(--font-playfair)] mb-2">
              Hair Coloring
            </h2>
            <p className="text-white/70 text-sm">
              Rich, dimensional color crafted for your perfect tone.
            </p>
          </div>

        </div>

        {/* CARD 3 */}
        <div className="w-72 bg-[#1f2422] rounded-xl overflow-hidden border border-white/10 hover:border-[#8C6A00] transition">

          <img
            src="/hair9.jpg"
            className="h-96 w-full object-cover brightness-75 hover:scale-105 transition duration-300"
          />

          <div className="p-5">
            <h2 className="text-[#8C6A00] text-xl font-[var(--font-playfair)] mb-2">
              Treatment
            </h2>
            <p className="text-white/70 text-sm">
              Restore shine and strength with deep care treatments.
            </p>
          </div>

        </div>

        {/* CARD 4 */}
        <div className="w-72 bg-[#1f2422] rounded-xl overflow-hidden border border-white/10 hover:border-[#8C6A00] transition">

          <img
            src="/hair11.jpg"
            className="h-96 w-full object-cover brightness-75 hover:scale-105 transition duration-300"
          />

          <div className="p-5">
            <h2 className="text-[#8C6A00] text-xl font-[var(--font-playfair)] mb-2">
              Styling
            </h2>
            <p className="text-white/70 text-sm">
              Elegant styling for events, shoots, and everyday looks.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Services;