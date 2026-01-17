"use client";

import Image from "next/image";

const ServiceCard = ({ image, title }) => (
  <div
    className="bg-[#F9F9F6]
               rounded-2xl
               w-[22%]
               h-[15rem]
               flex flex-col
               items-center
               justify-between
               pb-3
               border border-[#CFAA75]/30
               shadow-sm
               hover:shadow-md
               transition"
  >
    {/* Image */}
    <div className="relative w-full h-[90%] rounded-2xl overflow-hidden bg-white">
      <Image
        src={image}
        alt={title}
        fill
        className="object-contain p-4"
      />
    </div>

    {/* Title */}
    <h4 className="text-center text-base font-medium text-[#264231] mt-3 leading-snug">
      {title}
    </h4>
  </div>
);

export default function ServicesInclude() {
  return (
    <section className="bg-white py-20" id="services">
      <div className="w-full mx-auto px-4">

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#4DA6A6]">
            Women’s Health Problems We Help With
          </h2>
          <p className="text-[#1C2B39]/70 mt-3 max-w-2xl mx-auto">
            Comprehensive, compassionate care across every stage of a woman’s life
          </p>
        </div>

        {/* Hormonal & Medical Issues */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-[#264231] text-center mb-10">
            Hormonal & Medical Issues
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            <ServiceCard image="/IMG_2313.png" title="PCOS / PCOD" />
            <ServiceCard image="/IMG_2314.png" title="Abnormal bleeding" />
            <ServiceCard image="/IMG_2318.png" title="Fibroids" />
            <ServiceCard image="/IMG_2315.png" title="Ovarian cyst" />
            <ServiceCard image="/IMG_2316.png" title="Endometriosis" />
            <ServiceCard image="/IMG_2317.png" title="Menopause" />
            <ServiceCard image="/IMG_2319.png" title="Urine related issues" />
            <ServiceCard
              image="/IMG_2320.png"
              title="Vaginal Tightening & Intimate Wellness"
            />
          </div>
        </div>

        {/* Pregnancy & Other Care */}
        <div>
          <h3 className="text-2xl font-semibold text-[#264231] text-center mb-10">
            Pregnancy & Other Care
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            <ServiceCard image="/IMG_2321.png" title="Pregnancy care" />
            <ServiceCard
              image="/IMG_2323.png"
              title="Normal & Caesarean delivery"
            />
            <ServiceCard image="/IMG_2322.png" title="Breast related issues" />
            <ServiceCard image="/IMG_2324.png" title="Ultrasound & diagnostics" />
          </div>
        </div>

      </div>
    </section>
  );
}
