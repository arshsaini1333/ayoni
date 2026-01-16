"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#264231] px-4 z-50 overflow-visible">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">

        {/* Left: Why Ayoni (desktop only) */}
        <div className="hidden md:flex flex-1 justify-start">
          <Link
            href="#why-ayoni"
            className="text-[#CFAA75] text-lg font-bold hover:opacity-80 transition"
          >
            Why Ayoni
          </Link>
        </div>

       {/* Center: Logo (always visible) */}
<div className="relative top-10 z-50 flex justify-center bg-[#264231] w-40 h-26 rounded-xl pb-1.5">

  <Link href="/" className="flex items-center w-full h-full">
    <div className="relative w-full h-full ">
      <Image
        src="/Ayoni.png"
        alt="Company Logo"
        fill
        priority
        className="object-contain"
      />
    </div>
  </Link>
</div>


        {/* Right: Call Now (desktop only) */}
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
