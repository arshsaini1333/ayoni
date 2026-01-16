"use client";

import { CalendarCheck } from "lucide-react";
import { Stethoscope, Award, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#F8FCFC] py-20">
      <div className="w-[95%] mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-[#264231]">
            Expert Gynaecology Care for Every Stage of a Woman’s Life
          </h1>

          <h2 className="text-lg md:text-xl font-medium text-[#4DA6A6]">
            Struggling with PCOS, pregnancy issues, or hormonal problems?
          </h2>

          {/* Doctor Info */}
          <div className="space-y-3 pt-2">
            <div className="text-xl md:text-2xl font-semibold text-[#264231]">
              Dr. Gaayatri Juneja
            </div>

            <div className="space-y-2 text-base md:text-lg text-[#3b5f4b]">
              <div className="flex items-center gap-2">
                <Stethoscope size={18} className="text-[#4DA6A6]" />
                Third-Generation Gynecologist
              </div>

              <div className="flex items-center gap-2">
                <Award size={18} className="text-[#4DA6A6]" />
                25+ Years Experience
              </div>

              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-[#4DA6A6]" />
                MBBS, DGO, DNB (Obs & Gynae), MRCOG
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
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
              Book Private Consultation
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#4DA6A6]/10 rounded-2xl blur-2xl"></div>
            <img
              src="/doc3.jpeg" // replace with actual image
              alt="Dr. Gaayatri Juneja"
              className="relative w-65 md:w-135 rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
