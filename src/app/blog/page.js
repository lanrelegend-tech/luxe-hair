"use client";

import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen font-[var(--font-montserrat)] bg-[#F7F4EF]">

      {/* ================= HERO ================= */}
      <div className="relative h-[60vh] flex items-center justify-center px-6 overflow-hidden">

        <img
          src="/hair8.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center">

          <h1 className="text-5xl md:text-6xl font-[var(--font-playfair)] text-white tracking-wide">
            Luxe Journal
          </h1>

          <p className="mt-4 text-white/70 text-sm max-w-xl mx-auto">
            Insights, care tips, and stories from our London studio.
          </p>

        </div>
      </div>

      {/* ================= FEATURED POST ================= */}
      <div className="px-10 py-20">

        <h2 className="text-center text-3xl font-[var(--font-playfair)] mb-12 text-black">
          Featured Article
        </h2>

        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">

          <img
            src="/hair14.jpg"
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-0 p-8 text-white">

            <h3 className="text-2xl font-[var(--font-playfair)]">
              The Secret Behind Hair That Grows Beautifully
            </h3>

            <p className="text-white/70 text-sm mt-2 max-w-xl">
              Why structure matters more than styling products — and how we design haircuts that last weeks, not days.
            </p>

            <button className="mt-4 text-[#C9A227] text-xs tracking-widest">
              READ MORE →
            </button>

          </div>
        </div>
      </div>

      {/* ================= BLOG GRID ================= */}
      <div className="px-10 pb-28">

        <h2 className="text-center text-3xl font-[var(--font-playfair)] mb-12 text-black">
          Latest Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">

          {/* POST 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">

            <img src="/hair10.jpg" className="h-56 w-full object-cover" />

            <div className="p-6">
              <h3 className="font-[var(--font-playfair)] text-xl">
                Hair Care That Actually Works
              </h3>
              <p className="text-sm text-black/60 mt-2">
                Simple routines that keep your hair healthy between appointments.
              </p>
            </div>

          </div>

          {/* POST 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">

            <img src="/hair13.jpg" className="h-56 w-full object-cover" />

            <div className="p-6">
              <h3 className="font-[var(--font-playfair)] text-xl">
                Why Most Haircuts Fail After 2 Weeks
              </h3>
              <p className="text-sm text-black/60 mt-2">
                The hidden reason your hairstyle loses shape too fast.
              </p>
            </div>

          </div>

          {/* POST 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">

            <img src="/hair17.jpg" className="h-56 w-full object-cover" />

            <div className="p-6">
              <h3 className="font-[var(--font-playfair)] text-xl">
                Luxury Hair Is About Structure
              </h3>
              <p className="text-sm text-black/60 mt-2">
                How precision cutting creates effortless beauty.
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}