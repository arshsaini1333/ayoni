"use client";

import Image from "next/image";
import { MapPin, ShieldCheck, HeartPulse } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white pb-8 pt-5" id="about">
      <div className="w-full mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4DA6A6] mt-2">
            Meet Your Specialist
          </h2>
          <p className="text-[#264231] mt-3 text-lg">
            Senior Gynecologist - Women’s Health Expert
          </p>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row  w-full gap-30">

          {/* Doctor Image */}
          <div className="flex justify-center w-[45%]">
            <div className="relative w-75 h-95 md:w-95 md:h-120 
                            rounded-2xl overflow-hidden 
                            border-4 border-[#CFAA75] shadow-lg">
              <Image
                src="/doc2.png"
                alt="Senior Gynecologist"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6 w-[55%]">

            <p className="text-[#1C2B39]/80 text-lg leading-relaxed">
           <b> Dr. Gaayatri Juneja</b> is a Third-Generation Gynecologist in Gurgaon, carrying forward the legacy of her mother, Dr. Indu Bala Chhabra, who founded <b>Gaayatri Nursing Home Pvt. Ltd.</b> in 1975. With a strong foundation in women’s healthcare and a vision to blend tradition with modern medicine, Dr. Juneja joined the practice full-time in 2003 after completing her second postgraduate degree. She holds an <b>MBBS and DGO from Kasturba Medical College, Manipal</b> a DNB in Obstetrics & Gynecology from St. Stephen’s Hospital, Delhi (2001–2003); MRCOG from the United Kingdom (2019); and a Master’s in Aesthetic Gynecology from ILAMED (2019).
          Known for her compassionate, expert approach, she specializes in pregnancy management, vaginal tightening treatments, menopause care, hormonal wellness, endometriosis treatment, and a wide range of gynecological concerns. Practicing at multiple locations across Gurgaon and Delhi, her clinics offer a clean, private environment with on-site diagnostics <b>from pregnancy ultrasounds to advanced laser V tightening</b> ensuring trusted, comprehensive care for every stage of a woman’s life.
            </p>

            {/* Highlights */}
            

            {/* Location Card */}

          </div>
        </div>

      </div>
    </section>
  );
}
