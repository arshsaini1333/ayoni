"use client";

import {
  Activity,
  Droplets,
  HeartPulse,
  CircleDot,
  Waves,
  Droplet,
  Baby,
  Stethoscope,
  Scan,
  Heart,
} from "lucide-react";
import { HeartHandshake } from "lucide-react";


const ServiceCard = ({ icon: Icon, title }) => (
  <div
    className="bg-[#F9F9F6] 
               rounded-2xl 
               p-6 
               w-56
               flex flex-col items-center 
               justify-center 
               border border-[#CFAA75]/30 
               shadow-sm 
               hover:shadow-md 
               transition"
  >
    <div className="w-12 h-12 rounded-full 
                    border-2 border-[#4DA6A6] 
                    flex items-center justify-center 
                    text-[#4DA6A6] mb-3">
      <Icon size={22} />
    </div>

    <h4 className="text-center text-base font-medium text-[#264231]">
      {title}
    </h4>
  </div>
);

export default function ServicesInclude() {
  return (
    <section className="bg-white py-20" id="services">
      <div className="max-w-7xl mx-auto px-4">

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
            <ServiceCard icon={Activity} title="PCOS / PCOD" />
            <ServiceCard icon={Droplets} title="Abnormal bleeding" />
            <ServiceCard icon={HeartPulse} title="Fibroids" />
            <ServiceCard icon={CircleDot} title="Ovarian cyst" />
            <ServiceCard icon={Waves} title="Endometriosis" />
            <ServiceCard icon={Heart} title="Menopause" />
            <ServiceCard icon={Droplet} title="Urine related issues" />
            <ServiceCard icon={HeartHandshake} title="Vaginal Tightening treatment & Intimate Wellness" />
          </div>
        </div>

        {/* Pregnancy & Other Care */}
        <div>
          <h3 className="text-2xl font-semibold text-[#264231] text-center mb-10">
            Pregnancy & Other Care
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            <ServiceCard icon={Baby} title="Pregnancy care" />
            <ServiceCard
              icon={Stethoscope}
              title="Normal & Caesarean delivery"
            />
            <ServiceCard icon={Heart} title="Breast related issues" />
            <ServiceCard icon={Scan} title="Ultrasound & diagnostics" />
          </div>
        </div>

      </div>
    </section>
  );
}
