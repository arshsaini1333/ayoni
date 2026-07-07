"use client";

import {
  Stethoscope,
  Award,
  Building2,
  MessageCircle
} from "lucide-react";

export default function QuickTrustBar() {
  return (
    <section className="w-full mt-5 py-5 ">
      <div className="w-[95%] mx-auto px-1 py-4">

        <div className="
          grid 
          grid-cols-2 
          md:grid-cols-4 
          gap-4 
          text-[#264231]
        ">
          
          <div className="flex flex-col items-center gap-2 border-2 border-[#264231] p-4 rounded-lg text-center bg-[#E6D3A3]">
            <Stethoscope size={36} />
            <span className="text-sm md:text-2xl font-bold">
              25+ Years Experience
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 border-2 border-[#264231] p-4 rounded-lg text-center bg-[#E6D3A3]">
            <Award size={36} />
            <span className="text-sm md:text-2xl font-semibold">
              Multiple Medical Certifications
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 border-2 border-[#264231] p-4 rounded-lg text-center bg-[#E6D3A3]">
            <Building2 size={36} />
            <span className="text-sm md:text-2xl font-semibold">
              Premium Clinic in Sec 65, Gurugram
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 border-2 border-[#264231] p-4 rounded-lg text-center bg-[#E6D3A3]">
            <MessageCircle size={36} />
            <span className="text-sm md:text-2xl font-semibold">
              Personal One-to-One Consultation
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
