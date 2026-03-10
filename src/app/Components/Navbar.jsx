"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#264231] px-4 z-50">
      <div className="max-w-7xl mx-auto relative flex items-center justify-center md:justify-between">

        {/* Left (desktop only) */}
        <div className="hidden md:flex flex-1 justify-start">
          <Link
            href="#why-ayoni"
            className="text-[#CFAA75] text-lg font-bold hover:opacity-80 transition"
          >
            Trusted by 7.9 Lakh Womens
          </Link>
        </div>

        {/* Center Logo (mobile + desktop) */}
        <div className="
          relative 
          z-50 
          flex 
          justify-center 
          items-center
          w-32 
          h-16
          top-6
          md:w-40 
          md:h-20
          bg-[#264231]
          rounded-xl
        ">
          <Link href="/" className="relative w-full h-full">
            <Image
              src="/Ayoni.png"
              alt="Company Logo"
              fill
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Right (desktop only) */}
        <div className="hidden md:flex flex-1 justify-end">
          <a
            href="tel:+911234567890"
            className="flex items-center gap-2 px-6 py-1.5
                       border border-[#CFAA75]
                       text-[#CFAA75]
                       rounded-md
                       text-lg font-bold
                       hover:bg-[#CFAA75]/10
                       transition"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

      </div>
    </nav>
  );
}
