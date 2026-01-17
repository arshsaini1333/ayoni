"use client";

import {
  Stethoscope,
  Award,
  Building2,
  MessageCircle
} from "lucide-react";

export default function QuickTrustBar() {
  return (
    <section className="w-full  mt-5 py-5">
      <div className="w-[95%] mx-auto px-1 py-4">
        <div className="flex justify-center md:justify-between items-center gap-1 text-[#264231]">
          
          <div className="flex flex-col items-center gap-2 border-2 border-[#264231] p-4 rounded-lg">
            <Stethoscope size={40} />
            <span className="text-xl font-semibold">
              25+ Years Experience
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 border-2 border-[#264231] p-4 rounded-lg">
            <Award size={40} />
            <span className="text-xl font-semibold">
              Multiple Medical Certifications
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 border-2 border-[#264231] p-4 rounded-lg">
            <Building2 size={40} />
            <span className="text-xl font-semibold">
              Premium Clinic in Sec 65, Gurugram
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 border-2 border-[#264231] p-4 rounded-lg">
            <MessageCircle size={40} />
            <span className="text-xl font-semibold">
              Personal One-to-One Consultation
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
