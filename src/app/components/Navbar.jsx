"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 font-[var(--font-montserrat)]">

      {/* ================= TOP BANNER ================= */}
      <div className="bg-black border-b border-white/10 flex flex-col items-center justify-center py-3 text-sm">
        <h1 className="text-white tracking-wide">
          Online booking is now available!
        </h1>

        <p className="text-[#A3917A] mt-1 tracking-widest hover:text-[#C9A227] transition cursor-pointer">
          MAKE A RESERVATION
        </p>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="relative flex items-center justify-between px-6 md:px-10 py-5 bg-white/10 backdrop-blur-xl border-b border-black/10">

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-xs font-bold tracking-wide text-black">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/#reviews">Reviews</Link>
          <Link href="/blog">Blog</Link>
        </div>

        {/* LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 text-black font-bold text-[18px] tracking-wider">
          LUXE HAIR
        </div>

        {/* RESERVE BUTTON */}
        <Link href="/booking">
          <button className="border border-black px-4 py-2 text-xs font-bold bg-black text-white hover:bg-[#C9A227] hover:text-black transition">
            RESERVE
          </button>
        </Link>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-[4px]"
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>

        {/* ================= BACKDROP ================= */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 z-[9998]"
          />
        )}

        {/* ================= BLACK DRAWER ================= */}
        <div
          className={`fixed top-0 left-0 h-full w-[75%]
          !bg-black
          text-white flex flex-col gap-8 p-10
          border-r border-black shadow-2xl
          
          transition-transform duration-500
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="text-white text-3xl self-end"
          >
            ✕
          </button>

          {/* LINKS */}
          <div className="flex flex-col bg-black gap-7 px-9 py-15 rounded-2xl
           items-center ">
          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="/pricing">Pricing</Link>
          <Link onClick={() => setOpen(false)} href="/about">About</Link>
          <Link onClick={() => setOpen(false)} href="/booking">Booking</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
          <Link onClick={() => setOpen(false)} href="/#reviews">Reviews</Link>
          <Link onClick={() => setOpen(false)} href="/blog">Blog</Link>
</div>
        </div>

      </div>
    </div>
  );
}