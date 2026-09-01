"use client";

import Image from "next/image";

export default function AboutDelhi() {
  return (
    <section className="bg-white py-10 md:py-16" id="ourSpecialist">
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
              <b>Dr. Gaayatri Juneja</b> is a renowned third-generation
              gynecologist in Delhi, continuing a family tradition in
              women’s healthcare established by her mother, <b>Dr. Indu
              Bala Chhabra</b>, who founded <b>Gaayatri Nursing Home Pvt.
              Ltd.</b> in 1975.
              <br /><br />
              With a strong foundation in gynecology and a modern approach
              to care, Dr. Juneja joined the family practice in 2003. She
              holds an <b>MBBS and DGO from Kasturba Medical College,
              Manipal</b>, <b>DNB in Obstetrics & Gynecology from St.
              Stephen’s Hospital, Delhi</b>, <b>MRCOG (UK)</b>, and a
              <b> Master’s in Aesthetic Gynecology from ILAMED</b>.
              <br /><br />
              Her expertise covers <b>maternity care, menopause, hormonal
              health, endometriosis, and advanced laser vaginal
              tightening</b>. She is committed to providing personalized,
              compassionate care and helping women feel informed and
              confident about their health.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
