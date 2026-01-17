"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
  Lock,
  Stethoscope
} from "lucide-react";


export default function WhyAyoni() {
  return (
    <section className="w-full bg-[#F8FCFC] py-16 px-4" id="why-ayoni">
      <div className="w-[90%] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#800000]">
            Why Patients Trust Us
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 uppercase tracking-wide">
            Why Women Choose Ayoni Clinic
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Points */}
          <div className="space-y-6">
            
          <div className="space-y-6">

<div className="flex items-start gap-4">
  <Stethoscope className="text-[#4DA6A6] mt-1" size={32} />
  <p className="text-[#264231] text-xl">
    20+ Years of Experience in Gynecology & Women’s Wellness
  </p>
</div>

<div className="flex items-start gap-4">
  <Users className="text-[#4DA6A6] mt-1" size={32} />
  <p className="text-[#264231] text-xl">
    Trusted gynecologist in Gurgaon for over 5,000+ patients
  </p>
</div>

<div className="flex items-start gap-4">
  <Sparkles className="text-[#4DA6A6] mt-1" size={32} />
  <p className="text-[#264231] text-xl">
    Laser (non-surgical) and surgical intimate treatments
  </p>
</div>

<div className="flex items-start gap-4">
  <ShieldCheck className="text-[#4DA6A6] mt-1" size={32} />
  <p className="text-[#264231] text-xl">
    Advanced Laser Technology – Safe & Effective
  </p>
</div>

</div>


            <div className="flex items-start gap-4">
              <Clock className="text-[#4DA6A6] mt-1" size={32} />
              <p className="text-[#264231] text-xl">
                No Rushed Consultations
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Lock className="text-[#4DA6A6] mt-1" size={32} />
              <p className="text-[#264231] text-xl">
                Confidential & Respectful care
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button className="bg-[#4DA6A6] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition cursor-pointer">
                Book Private Consultation
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-[320px] md:h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/pregnant.jpg"
              alt="Ayoni Clinic Consultation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
