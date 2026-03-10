"use client";

import Image from "next/image";
import {
  Award,
  HeartPulse,
  Stethoscope
} from "lucide-react";

export default function DoctorInfo() {
  return (
    <section className="w-full bg-[#F8FCFC] py-16 px-4" id="doctor">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Doctor Image */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden inline-block">
                <Image
                 src="/doc1.png"
                 alt="Dr. Ayoni Gynaecologist"
                 width={500}
                 height={600}
                 className="rounded-2xl object-cover"
                 priority
                />
        </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#4DA6A6]">
              Meet Your Gynaecologist
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              <b>Dr. Gaayatri Juneja</b> is a highly experienced and certified gynaecologist with
              years of expertise in women’s health, pregnancy care and hormonal
              disorders. She believes in gentle, honest and personalised
              treatment for every woman.
            </p>

            {/* Highlights */}
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <Award className="text-[#4DA6A6] mt-1" size={22} />
                <p className="text-gray-700">
                  Multiple national & international certifications
                </p>
              </div>

              <div className="flex items-start gap-4">
                <HeartPulse className="text-[#4DA6A6] mt-1" size={22} />
                <p className="text-gray-700">
                  Expertise in PCOS, pregnancy & menopause care
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Stethoscope className="text-[#4DA6A6] mt-1" size={22} />
                <p className="text-gray-700">
                  Trained in advanced ultrasound & women wellness procedures
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button className="bg-[#4DA6A6] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                Consult Experienced Gynaecologist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
