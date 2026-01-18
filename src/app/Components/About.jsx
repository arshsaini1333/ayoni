"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-10 md:py-16" id="about">
      <div className="w-full mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#800000]">
            Meet Your Specialist Now
          </h2>
          <p className="text-[#264231] mt-3 text-base md:text-lg">
            Senior Gynecologist - Women’s Health Expert
          </p>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Doctor Image */}
          <div className="flex justify-center w-full md:w-1/2">
            <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px]">
              <Image
                src="/doc3.jpeg"
                alt="Senior Gynecologist"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2 space-y-6 text-left">
            <p className="text-[#1C2B39]/80 text-base md:text-lg leading-relaxed">
              <b>Dr. Gaayatri Juneja</b> is a Third-Generation Gynecologist in
              Gurgaon, carrying forward the legacy of her mother,
              <b> Dr. Indu Bala Chhabra</b>, who founded
              <b> Gaayatri Nursing Home Pvt. Ltd.</b> in 1975.
              <br /><br />
              With a strong foundation in women’s healthcare and a vision to
              blend tradition with modern medicine, Dr. Juneja joined the
              practice full-time in 2003 after completing her second
              postgraduate degree.
              <br /><br />
              She holds an <b>MBBS and DGO from Kasturba Medical College,
              Manipal</b>, a DNB in Obstetrics & Gynecology from St. Stephen’s
              Hospital, Delhi; MRCOG (UK); and a Master’s in Aesthetic
              Gynecology from ILAMED.
              <br /><br />
              Known for her compassionate, expert approach, she specializes in
              pregnancy management, menopause care, hormonal wellness,
              endometriosis treatment, and advanced laser vaginal tightening,
              ensuring trusted care for every stage of a woman’s life.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
