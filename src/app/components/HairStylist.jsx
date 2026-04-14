function HairStylist() {
  return (
    <div className="relative min-h-screen bg-[#F7F4EF] font-[var(--font-montserrat)] mb-20">

      {/* SECTION WRAPPER */}
      <div className="py-20 bg-[#181C1A] flex flex-col items-center justify-center px-6">

        {/* TITLE */}
        <h1 className="text-center text-5xl py-4 text-[#8C6A00] font-[var(--font-playfair)]">
          Featured Hair Stylists
        </h1>

        {/* DESCRIPTION */}
        <p className="text-center text-white/80 max-w-3xl leading-6">
          Each featured stylist brings something unique to the chair—from their approach to consultations to the work they create. <br />
          Get to know the team, explore their portfolios, <br />
          and see why guests keep coming back to the stylists who truly understand their vision.
        </p>

        {/* CARDS */}
        <div className="flex gap-16 mt-14 flex-wrap justify-center">

          {/* CARD 1 */}
          <div className="flex flex-col max-w-sm text-white">

            <img
              src="/hair5.jpg"
              className="w-80 h-80 object-cover rounded-xl opacity-80 brightness-75"
            />

            <h1 className="text-xl py-4 font-[var(--font-playfair)]">
              Get to know Brianna
            </h1>

            <p className="text-sm leading-6 text-white/80">
              Brianna is the kind of stylist who makes you feel like the only person in the room.
              Known for her calm confidence, thoughtful consultations, and love for connection.
            </p>

            <button className="mt-4 py-2 border border-[#8C6A00] text-[#8C6A00] hover:bg-[#8C6A00] hover:text-black transition">
              Explore her work
            </button>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col max-w-sm text-white">

            <img
              src="/hair6.jpg"
              className="w-80 h-80 object-cover rounded-xl opacity-80 brightness-75"
            />

            <h1 className="text-xl py-4 font-[var(--font-playfair)]">
              Get to know Nataya
            </h1>

            <p className="text-sm leading-6 text-white/80">
              Nataya is the kind of stylist who makes you feel like the only person in the room.
              Known for her calm confidence and strong attention to detail.
            </p>

            <button className="mt-4 py-2 border border-[#8C6A00] text-[#8C6A00] hover:bg-[#8C6A00] hover:text-black transition">
              Explore her work
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HairStylist;