"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    const text = `Hello, my name is ${name}. ${message}`;
    const url = `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative min-h-screen py-30 font-[var(--font-montserrat)]">

      {/* BACKGROUND */}
      <img
        src="/hair14.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">

        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 shadow-2xl">

          {/* TITLE */}
          <h1 className="text-4xl text-white text-center font-[var(--font-playfair)]">
            Contact Luxe Hair
          </h1>

          <p className="text-center text-white/70 mt-4 text-sm">
            We usually reply within a few minutes.
          </p>

          {/* CONTACT INFO */}
          <div className="text-center mt-8 text-white/80 text-sm space-y-2">
            <p>📍 London Private Studio</p>
            <p>📞 +234 XXX XXX XXXX</p>
            <p>✉️ luxehairstudio@gmail.com</p>
          </div>

          {/* FORM */}
          <div className="flex flex-col gap-5 mt-10">

            <input
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/20 text-white border border-white/30 outline-none focus:border-[#C9A227]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              placeholder="Your Message..."
              rows={5}
              className="p-3 rounded-lg bg-white/20 text-white border border-white/30 outline-none focus:border-[#C9A227]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              onClick={sendWhatsApp}
              className="py-3 border border-[#C9A227] text-[#C9A227] tracking-widest hover:bg-[#C9A227] hover:text-black transition"
            >
              SEND VIA WHATSAPP
            </button>

          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link href="/booking">
              <button className="text-white underline text-sm hover:text-[#C9A227] transition">
                Or book an appointment instead →
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}