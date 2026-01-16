"use client";

import {
  Stethoscope,
  Award,
  Building2,
  MessageCircle
} from "lucide-react";

export default function QuickTrustBar() {
  return (
    <section className="w-full bg-[#264231] mt-5 py-5">
      <div className="max-w-7xl mx-auto px-1 py-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-[#CFAA75]">
          
          <div className="flex items-center gap-2">
            <Stethoscope size={20} />
            <span className="text-lg  font-medium">
              25+ Years Experience
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Award size={20} />
            <span className="text-lg font-medium">
              Multiple Medical Certifications
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Building2 size={20} />
            <span className="text-lg font-medium">
              Premium Clinic in Sec 65, Gurugram
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MessageCircle size={20} />
            <span className="text-lg font-medium">
              Personal One-to-One Consultation
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
