function LandingPage() {
  return (
    <div className="bg-[#F7F4EF] font-[var(--font-montserrat)]">

      {/* NAVBAR */}
      <div className="flex items-center justify-between px-10 py-6 relative z-20">

        {/* MENU */}
        <div className="flex text-black gap-6 text-xs font-bold tracking-wide">
          <h1 className="hover:text-[#C9A227] transition cursor-pointer">Home</h1>
          <h1 className="hover:text-[#C9A227] transition cursor-pointer">Pricing</h1>
          <h1 className="hover:text-[#C9A227] transition cursor-pointer">About</h1>
          <h1 className="hover:text-[#C9A227] transition cursor-pointer">Booking</h1>
          <h1 className="hover:text-[#C9A227] transition cursor-pointer">Contact</h1>
          <h1 className="hover:text-[#C9A227] transition cursor-pointer">Reviews</h1>
          <h1 className="hover:text-[#C9A227] transition cursor-pointer">Blog</h1>
        </div>

        {/* LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 text-black font-bold text-[18px] tracking-wider">
          LUXE HAIR
        </div>

        {/* BUTTON */}
        <button className="border border-black px-4 py-2 text-xs font-bold bg-black text-white hover:bg-[#C9A227] hover:text-black transition">
          RESERVE NOW
        </button>

      </div>

      {/* HERO */}
      <div className="relative min-h-screen flex items-center justify-center text-center px-6">

        {/* BACK IMAGES */}
        <img
          src="/project3.jpg"
          className="absolute top-16 left-1/2 -translate-x-1/2 w-[620px] h-[260px] object-cover rounded-xl opacity-70 brightness-50"
        />

        <img
          src="/hair7.jpg"
          className="hidden md:block absolute left-10 top-1/2 -translate-y-1 w-56 h-80 object-cover rounded-xl opacity-70 brightness-50"
        />

        <img
          src="/hair1.jpg"
          className="hidden md:block absolute right-10 top-1/2 -translate-y-1/9 w-64 h-96 object-cover rounded-xl opacity-70 brightness-50"
        />

        {/* HERO TEXT */}
        <div className="relative z-20 flex flex-col mt-50 items-center">

          {/* GREAT VIBES */}
          <div className="font-[var(--font-great-vibes)] text-[55px] md:text-[85px] leading-[1.1]">

            <p className="text-[#2E2E2E] opacity-60 tracking-[0.35em]">
              ABOUT
            </p>

            <h1 className="text-[#C9A227] tracking-wider hover:scale-105 transition duration-300 drop-shadow-md">
              LUXE HAIR
            </h1>

            <p className="text-[#2E2E2E] opacity-60 tracking-[0.4em]">
              LONDON
            </p>

          </div>

          {/* SUB TEXT */}
          <h1 className="mt-5 text-black text-lg font-medium">
            This one is built to last.
          </h1>

          <p className="text-black/80 text-sm max-w-md mt-2 leading-6">
            For people who want their hair to work without thinking about it.
          </p>

          {/* LOGO */}
          <img
            src="/salon.png"
            alt="Salon Logo"
            className="mt-10 w-20 h-20 object-contain opacity-70 hover:opacity-100 transition"
          />

        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-10 py-24">

        {/* IMAGE */}
        <img
          src="/hair8.jpg"
          className="w-64 h-96 object-cover rounded-xl opacity-90 brightness-75 hover:scale-105 transition"
        />

        {/* TEXT */}
        <div className="text-black max-w-2xl text-sm leading-7 space-y-4">

          <h1 className="text-xl font-bold">
            LUXE HAIR is a one-to-one studio in LONDON
          </h1>

          <p>
            Specialising in cuts built to last. Each cut is designed to hold its shape naturally without relying on styling.
          </p>

          <p>
            It’s based on how your hair grows, moves, and settles — not trends or templates.
          </p>

          <p>
            The result is consistent, balanced hair that requires less daily correction and stays in shape longer.
          </p>

          <h2 className="font-bold text-[#C9A227] mt-6">
            Why most haircuts stop working
          </h2>

          <p>
            Most haircuts are designed for the day you leave the salon — not for the weeks after. They rely on styling or product to hold shape.
          </p>

        </div>

      </div>

    </div>
  );
}

export default LandingPage;