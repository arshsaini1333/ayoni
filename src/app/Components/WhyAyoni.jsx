"use client";

import Image from "next/image";
import {
  ShieldCheck,
  UserCheck,
  HeartHandshake,
  Clock,
  Lock
} from "lucide-react";

export default function WhyAyoni() {
  return (
    <section className="w-full bg-[#F8FCFC] py-16 px-4" id="why-ayoni">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#4DA6A6]">
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
            <div className="flex items-start gap-4">
              <UserCheck className="text-[#4DA6A6] mt-1" size={22} />
              <p className="text-[#264231]">
                Lady gynaecologist with advanced training
              </p>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="text-[#4DA6A6] mt-1" size={22} />
              <p className="text-[#264231]">
                Calm, premium & hygienic clinic setup
              </p>
            </div>

            <div className="flex items-start gap-4">
              <HeartHandshake className="text-[#4DA6A6] mt-1" size={22} />
              <p className="text-[#264231]">
                Proper listening & clear explanation
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-[#4DA6A6] mt-1" size={22} />
              <p className="text-[#264231]">
                No rushed consultations
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Lock className="text-[#4DA6A6] mt-1" size={22} />
              <p className="text-[#264231]">
                Confidential & respectful care
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
