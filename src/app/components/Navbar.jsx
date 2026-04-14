import React from "react";

function Navbar() {
  return (
    <div className="sticky top-0 z-50">

      <div className="
        flex flex-col items-center justify-center
        py-3 text-sm font-[var(--font-montserrat)]
        bg-black backdrop-blur-xl
        border-b border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      ">

        <h1 className="text-white tracking-wide">
          Online booking is now available!
        </h1>

        <p className="
          text-[#A3917A] mt-1 tracking-widest cursor-pointer
          hover:text-[#C9A227] transition duration-300
        ">
          MAKE A RESERVATION
        </p>

      </div>

    </div>
  );
}

export default Navbar;