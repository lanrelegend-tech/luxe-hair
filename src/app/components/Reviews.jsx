 "use client"
 import { GiVanillaFlower } from "react-icons/gi";
import { useRef } from "react";

function Reviews() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center px-6">

      <div className="bg-[#181C1A] rounded-3xl max-w-6xl w-full py-16 px-8 text-white font-[var(--font-montserrat)]">

        {/* TITLE */}
        <h1 className="text-center text-5xl text-[#8C6A00] font-[var(--font-playfair)]">
          𝓣𝓮𝓼𝓽𝓲𝓶𝓸𝓷𝓲𝓪𝓵𝓼
        </h1>

        <p className="text-center text-white/70 mt-3">
          Look good, feel good, testimonials
        </p>

        {/* BUTTONS */}
        <div className="flex justify-between mt-8">
          <button
            onClick={scrollLeft}
            className="px-4 py-2 border border-[#8C6A00] text-[#8C6A00] hover:bg-[#8C6A00] hover:text-black transition"
          >
            ← Prev
          </button>

          <button
            onClick={scrollRight}
            className="px-4 py-2 border border-[#8C6A00] text-[#8C6A00] hover:bg-[#8C6A00] hover:text-black transition"
          >
            Next →
          </button>
        </div>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto scroll-smooth mt-10 pb-6"
        >

          {/* CARD 1 */}
          <div className="min-w-[300px] bg-[#1f2422] p-6 rounded-xl flex flex-col items-center text-center">

            <img
              src="/hair4.jpg"
              className="w-24 h-24 rounded-full object-cover brightness-75"
            />

            <div className="flex gap-2 text-[#8C6A00] my-4">
              <GiVanillaFlower />
              <GiVanillaFlower />
              <GiVanillaFlower />
              <GiVanillaFlower />
            </div>

            <p className="text-white/80 text-sm">
              I love Shine in the Heights! The staff is so sweet and polite.
            </p>

            <p className="mt-4 text-[#8C6A00] text-sm">Jessica</p>

          </div>

          {/* CARD 2 (example for future) */}
          <div className="min-w-[300px] bg-[#1f2422] p-6 rounded-xl flex flex-col items-center text-center">

            <img
              src="/hair5.jpg"
              className="w-24 h-24 rounded-full object-cover brightness-75"
            />

            <div className="flex gap-2 text-[#8C6A00] my-4">
              <GiVanillaFlower />
              <GiVanillaFlower />
              <GiVanillaFlower />
              <GiVanillaFlower />
            </div>

            <p className="text-white/80 text-sm">
              Amazing service and very professional stylists!
            </p>

            <p className="mt-4 text-[#8C6A00] text-sm">Sarah</p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Reviews;