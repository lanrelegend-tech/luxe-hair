"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


export default function BookingPage() {
  const [service, setService] = useState("Hair Service");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // SAFE query reading (fixes hydration error)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("service");
    if (s) setService(s);
  }, []);

  const handleBooking = () => {
    const message = `Hello, I would like to book a ${service}.
Name: ${name}
Date: ${date}
Time: ${time}`;

    const whatsappUrl = `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative min-h-screen font-[var(--font-montserrat)]">

      {/* BACKGROUND */}
      <img
        src="/hair13.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />


      {/* FORM */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">

        <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10">

          <h1 className="text-white text-4xl text-center mb-6 font-[var(--font-playfair)]">
            Reserve Appointment
          </h1>

          <p className="text-white/70 text-center mb-8 text-sm">
            Booking for: <span className="text-white">{service}</span>
          </p>

          <div className="flex flex-col gap-6">

            <input
              className="p-3 rounded-lg bg-white/20 text-white border border-white/30"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="date"
              className="p-3 rounded-lg bg-white/20 text-white border border-white/30"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <input
              type="time"
              className="p-3 rounded-lg bg-white/20 text-white border border-white/30"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <button
              onClick={handleBooking}
              className="mt-4 py-3 border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-black transition"
            >
              CONFIRM BOOKING
            </button>

          </div>

        </div>
      </div>

    </div>
  );
}