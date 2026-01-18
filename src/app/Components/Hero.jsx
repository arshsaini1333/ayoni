"use client";

import { CalendarCheck, Stethoscope, Award, GraduationCap,PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/gyne.jpg')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 "></div>

      {/* CONTENT */}
      <div className="relative w-[80%] ml-6  px-4">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-[#264231]">
          Women’s Health &  Gynecology Care in Gurugram
          </h1>

          <h2 className="text-lg w-[80%] md:text-xl font-medium text-[#800000]">
          Consult a senior gynaecologist for appointment-based care near M3M 65th Avenue Sector 65

          </h2>

          {/* Doctor Info */}
          <div className="space-y-3 pt-2">
            <div className="text-xl md:text-2xl font-semibold text-[#264231]">
              Dr. Gaayatri Juneja
            </div>

            <div className="space-y-2 text-base md:text-lg text-[#3b5f4b]">
  <div className="flex items-center gap-3">
    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E6D3A3]">
      <Stethoscope size={18} className="text-[#264231]" />
    </span>
    Third-Generation Gynecologist
  </div>

  <div className="flex items-center gap-3">
    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E6D3A3]">
      <Award size={18} className="text-[#264231]" />
    </span>
    25+ Years Experience
  </div>

  <div className="flex items-center gap-3">
    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E6D3A3]">
      <GraduationCap size={18} className="text-[#264231]" />
    </span>
    MBBS, DGO, DNB (Obs & Gynae), MRCOG
  </div>
</div>
</div>

          {/* CTA */}

<div className="pt-2 flex flex-wrap gap-4">
  <button
    className="inline-flex items-center gap-3 
               bg-[#264231] 
               text-[#F9F9F6] 
               px-8 py-3 
               rounded-md 
               font-medium 
               hover:bg-[#1f3628] 
               transition"
  >
    <CalendarCheck size={20} />
    BOOK APPOINTMENT
  </button>

  <button
    className="inline-flex items-center gap-3 
               bg-[#800000] 
               text-white 
               px-8 py-3 
               rounded-md 
               font-medium 
               hover:bg-[#660000] 
               transition"
  >
    <PhoneCall size={20} />
    CALL NOW
  </button>
</div>

          <p className="text-red-600 text-sm -mt-3 ml-2">* Consultations by prior appointment only</p>
        </div>
      </div>
    </section>
  );
}
