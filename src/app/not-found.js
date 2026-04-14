"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-[var(--font-montserrat)] bg-black">

      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src="/hair8.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-110 animate-pulse opacity-40"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* FLOATING LIGHT EFFECT */}
      <div className="absolute w-[600px] h-[600px] bg-[#C9A227]/10 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* ================= CONTENT ================= */}
      <div
        className={`relative z-10 text-center px-6 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >

        {/* 404 TEXT */}
        <h1 className="text-[120px] md:text-[160px] font-[var(--font-playfair)] text-[#C9A227] tracking-widest drop-shadow-2xl animate-bounce">
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-white text-2xl md:text-3xl font-[var(--font-playfair)]">
          You’ve stepped into the unknown
        </h2>

        {/* DESCRIPTION */}
        <p className="text-white/60 mt-4 text-sm max-w-md mx-auto leading-7">
          The page you’re looking for doesn’t exist or has been moved.
          Let’s bring you back to something beautiful.
        </p>

        {/* BUTTON */}
        <Link href="/">
          <button className="
            mt-10 px-8 py-3 border border-[#C9A227] text-[#C9A227]
            tracking-widest hover:bg-[#C9A227] hover:text-black
            transition duration-300 shadow-lg
          ">
            RETURN HOME
          </button>
        </Link>

      </div>

      {/* FLOATING ORBS */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#C9A227]/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" />

    </div>
  );
}