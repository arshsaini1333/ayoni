import Image from "next/image";
import {
  Stethoscope,
  Users,
  Sparkles,
  ShieldCheck,
  Clock,
  Lock,
  CalendarCheck,
  PhoneCall
} from "lucide-react";

export default function WhyAyoni() {
  return (
    <section className="w-full bg-[#F8FCFC] py-16 px-4" id="why-ayoni">
      <div className="w-[90%] mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#800000]">
            Why Patients Trust Us
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 uppercase tracking-wide">
            Why Women Choose Ayoni Clinic
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] mt-1">
                <Stethoscope size={22} className="text-[#264231]" />
              </span>
              <p className="text-[#264231] text-xl">
                20+ Years of Experience in Gynecology & Women’s Wellness
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] mt-1">
                <Users size={22} className="text-[#264231]" />
              </span>
              <p className="text-[#264231] text-xl">
                Trusted gynecologist in Gurgaon for over 5,000+ patients
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] mt-1">
                <Sparkles size={22} className="text-[#264231]" />
              </span>
              <p className="text-[#264231] text-xl">
                Laser (non-surgical) and surgical intimate treatments
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] mt-1">
                <ShieldCheck size={22} className="text-[#264231]" />
              </span>
              <p className="text-[#264231] text-xl">
                Advanced Laser Technology – Safe & Effective
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] mt-1">
                <Clock size={22} className="text-[#264231]" />
              </span>
              <p className="text-[#264231] text-xl">
                No Rushed Consultations
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] mt-1">
                <Lock size={22} className="text-[#264231]" />
              </span>
              <p className="text-[#264231] text-xl">
                Confidential & Respectful Care
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-3 bg-[#264231] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                <CalendarCheck size={20} />
                Book Private Consultation
              </button>

              <button className="inline-flex items-center gap-3 bg-[#800000] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                <PhoneCall size={20} />
                Call Now
              </button>
            </div>

          </div>

          {/* Right */}
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
