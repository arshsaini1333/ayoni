"use client";

import {
  CalendarCheck,
  Stethoscope,
  Award,
  GraduationCap,
  PhoneCall
} from "lucide-react";

export default function Hero({openModal}) {
  return (
    <section
      className="relative w-full min-h-[95vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/gyne.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 md:bg-transparent"></div>

      {/* Content */}
      <div
        className="
          relative
          w-full
          px-4
          flex
          justify-center
          md:justify-start
          md:w-[85%]
        "
      >
        <div
          className="
            w-full
            max-w-xl
            md:max-w-[60%]
            space-y-6
            text-center
            md:text-left
          "
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight text-[#264231]">
            Expert Care for PCOS, Pregnancy & Menstrual Problems
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl font-medium text-[#800000] mx-auto md:mx-0">
            Consult a <b>Senior Gynecologist</b> for appointment-based care in <br />
            M3M 65th Avenue Sector 65, Gurugram
          </h2>

          {/* Doctor Info */}
          <div className="space-y-3 pt-2 text-left mx-auto md:mx-0">
            <div className="text-lg sm:text-xl md:text-3xl font-semibold text-[#264231]">
              Dr. Gaayatri Juneja
            </div>

            <div className="space-y-2 text-sm sm:text-base md:text-lg text-[#3b5f4b]">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#E6D3A3]">
                  <Stethoscope size={16} className="text-[#264231]" />
                </span>
                Third-Generation Gynecologist
              </div>

              <div className="flex items-center gap-3">
                <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#E6D3A3]">
                  <Award size={16} className="text-[#264231]" />
                </span>
                25+ Years Experience
              </div>

              <div className="flex items-center gap-3">
                <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#E6D3A3]">
                  <GraduationCap size={16} className="text-[#264231]" />
                </span>
                MBBS, DGO, DNB (Obs & Gynae), MRCOG
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-3
                bg-[#264231] text-[#F9F9F6]
                px-8 py-3 rounded-md
                font-medium
                hover:bg-[#1f3628] transition
              "
              onClick={openModal}
            >
              <CalendarCheck size={18} />
              BOOK AN APPOINTMENT
            </button>

            <button
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-3
                bg-[#800000] text-white
                px-8 py-3 rounded-md
                font-medium
                hover:bg-[#660000] transition
              "
              onClick={() => window.open("tel:+919315991400")}
            >
              <PhoneCall size={18} />
              CALL NOW
            </button>
          </div>

          <p className="text-red-600 text-sm font-bold -mt-2 sm:text-sm pt-2">
            * Consultations by prior appointment only
          </p>
        </div>
      </div>
    </section>
  );
}
