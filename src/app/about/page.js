"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen font-[var(--font-montserrat)]">

      {/* ================= HERO ================= */}
      <div className="relative h-[85vh] flex items-center justify-center px-6 overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="/hair8.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center p-10 rounded-2xl
          bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

          <h1 className="text-5xl md:text-6xl font-[var(--font-playfair)] text-white tracking-wide">
            About Luxe Hair
          </h1>

          <p className="mt-6 text-white/70 max-w-xl mx-auto text-sm leading-7">
            A private London studio focused on precision, elegance, and effortless hair that lasts beyond the salon chair.
          </p>

        </div>
      </div>

      {/* ================= PHILOSOPHY ================= */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-28">

        <img
          src="/hair16.jpg"
          className="w-72 h-[420px] object-cover rounded-2xl shadow-2xl"
        />

        <div className="max-w-2xl space-y-6 p-8 rounded-2xl
          bg-white/40 backdrop-blur-md border border-white/30">

          <h2 className="text-3xl font-[var(--font-playfair)] text-[#8C6A00]">
            Our Philosophy
          </h2>

          <p className="text-sm leading-7 text-black/70">
            Luxe Hair is built on the belief that great hair should not depend on daily effort.
            Every cut is designed to grow naturally, hold its shape, and fit your lifestyle.
          </p>

          <p className="text-sm leading-7 text-black/70">
            We focus on structure, movement, and balance — not trends. The result is hair that improves over time, not worse.
          </p>

          <p className="text-sm leading-7 text-black/70">
            This is a private, intentional experience designed for clients who value quality over speed.
          </p>

        </div>
      </div>

      {/* ================= STUDIO EXPERIENCE ================= */}
      <div className="relative bg-black text-white px-10 py-28 overflow-hidden">

        {/* 🌟 RIGHT EDGE VERTICAL WORD */}
        <div className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2
          rotate-90 text-white/10 text-[70px] md:text-[120px]
          font-[var(--font-playfair)] tracking-[0.5em]
          select-none pointer-events-none">

          LUXURY
        </div>

        {/* TITLE */}
        <h2 className="text-center text-3xl md:text-4xl font-[var(--font-playfair)] text-[#C9A227] mb-16">
          The Studio Experience
        </h2>

        {/* CONTENT */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* IMAGE */}
          <img
            src="/hair1.jpg"
            className="w-72 h-[420px] object-cover rounded-2xl shadow-2xl opacity-90"
          />

          {/* TEXT */}
          <div className="flex flex-col gap-6 max-w-2xl">

            {/* ARROW LINE */}
            <div className="flex items-center gap-4">
              <div className="w-28 md:w-40 h-[1px] bg-[#C9A227]"></div>
              <div className="text-[#C9A227] text-2xl">→</div>
            </div>

            <p className="text-white/70 text-sm leading-7">
              Every appointment is private, intentional, and unhurried. We design each look based on natural hair movement.
            </p>

            <p className="text-white/70 text-sm leading-7">
              The studio is calm, focused, and detail-driven — no rush, no noise, only precision work.
            </p>

            <p className="text-white/70 text-sm leading-7">
              Clients return for consistency and results that last far beyond the salon visit.
            </p>

          </div>

        </div>
      </div>

    {/* ================= GALLERY (LUXURY OVERLAY STACK) ================= */}
<div className="relative px-10 py-28 bg-white overflow-hidden">

  <h2 className="text-center text-3xl font-[var(--font-playfair)] text-black mb-16">
    Inside Luxe Hair
  </h2>

  {/* IMAGE STACK CONTAINER */}
  <div className="relative flex items-center justify-center min-h-[500px]">

    {/* BACK LEFT */}
    <img
      src="/hair15.jpg"
      className="absolute left-0 md:left-10 top-10 w-52 md:w-64 h-64 object-cover rounded-2xl
      shadow-2xl opacity-50 hover:opacity-90 hover:scale-105 transition duration-500"
    />

    {/* BACK RIGHT */}
    <img
      src="/hair14.jpg"
      className="absolute right-0 md:right-10 top-20 w-52 md:w-64 h-64 object-cover rounded-2xl
      shadow-2xl opacity-50 hover:opacity-90 hover:scale-105 transition duration-500"
    />

    {/* CENTER MAIN */}
    <img
      src="/hair13.jpg"
      className="relative z-10 w-72 md:w-80 h-96 object-cover rounded-2xl
      shadow-2xl opacity-95 hover:scale-110 transition duration-500"
    />

    {/* TOP CENTER FLOAT */}
    <img
      src="/hair17.jpg"
      className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-44 h-56 object-cover rounded-2xl
      shadow-xl opacity-40 hover:opacity-80 transition duration-500"
    />

    {/* BOTTOM LEFT FLOAT */}
    <img
      src="/hair6.jpg"
      className="absolute bottom-0 left-10 w-44 h-56 object-cover rounded-2xl
      shadow-xl opacity-40 hover:opacity-80 transition duration-500"
    />

    {/* BOTTOM RIGHT FLOAT */}
    <img
      src="/hair10.jpg"
      className="absolute bottom-0 right-10 w-44 h-56 object-cover rounded-2xl
      shadow-xl opacity-40 hover:opacity-80 transition duration-500"
    />

  </div>

  {/* FADE OVERLAY FOR LUXURY DEPTH */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white" />

</div>

      {/* ================= CTA ================= */}
      <div className="text-center py-24 bg-[#EFE9DF]">

        <h2 className="text-3xl font-[var(--font-playfair)] text-black">
          Ready for a better hair experience?
        </h2>

        <p className="text-black/60 mt-4 text-sm">
          Book your appointment and experience Luxe Hair.
        </p>

        <Link href="/booking">
          <button className="mt-8 px-6 py-3 border border-[#8C6A00] text-[#8C6A00]
            tracking-widest hover:bg-[#8C6A00] hover:text-black transition">
            BOOK NOW
          </button>
        </Link>

      </div>

    </div>
  );
}