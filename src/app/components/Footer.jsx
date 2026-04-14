import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#181C1A] text-white font-[var(--font-montserrat)] pb-10">

      <div className="flex flex-wrap justify-center gap-16 py-20 px-6">

        {/* ABOUT */}
        <div>
          <h1 className="text-[#8C6A00] font-[var(--font-playfair)] text-lg mb-4">
            About Us
          </h1>

          <div className="flex gap-5 mt-5 text-xl">
            <FaFacebook className="hover:text-[#8C6A00] transition cursor-pointer" />
            <FaInstagram className="hover:text-[#8C6A00] transition cursor-pointer" />
            <FaTiktok className="hover:text-[#8C6A00] transition cursor-pointer" />
          </div>
        </div>

        {/* SITE MAP */}
        <div>
          <h1 className="font-[var(--font-playfair)] text-[#8C6A00] mb-4 border-b border-[#8C6A00] pb-2">
            Site Map
          </h1>

          <div className="space-y-2 text-sm text-white/80">
            <p>Home</p>
            <p>Services</p>
            <p>Contact</p>
            <p>Locations</p>
            <p>Reviews</p>
            <p>Pricing</p>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h1 className="font-[var(--font-playfair)] text-[#8C6A00] mb-4 border-b border-[#8C6A00] pb-2">
            Shine In
          </h1>

          <div className="space-y-2 text-sm text-white/80">
            <p>713-864-1977</p>
            <p>shineintheheights@gmail.com</p>
            <p>518 E. 11th Street, Houston, TX 77008</p>
          </div>
        </div>

        {/* HOURS */}
        <div>
          <h1 className="font-[var(--font-playfair)] text-[#8C6A00] mb-4 border-b border-[#8C6A00] pb-2">
            Salon Hours
          </h1>

          <div className="space-y-2 text-sm text-white/80">
            <p>Sunday: Closed</p>
            <p>Monday: Closed</p>
            <p>Tuesday: 9am - 7pm</p>
            <p>Wednesday: 9am - 7pm</p>
            <p>Thursday: 9am - 7pm</p>
            <p>Friday: 9am - 6pm</p>
            <p>Saturday: 9am - 5pm</p>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <h1 className="text-center pb-8 text-white/70 text-sm">
        © 2026 Shine with Luxe hair Salon. All rights reserved.
      </h1>

    </div>
  );
}

export default Footer;