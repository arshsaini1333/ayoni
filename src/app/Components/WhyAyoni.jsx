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

export default function WhyAyoni({openModal}) {
  return (
    <section className="w-full bg-[#F8FCFC] py-12 md:py-16 px-4" id="why-ayoni">
      <div className="w-full md:w-[90%] mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#800000]">
            Why Patients Trust Us
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 uppercase tracking-wide">
            Why Women Choose Ayoni Clinic
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Left */}
          <div className="space-y-5 md:space-y-6">

            {[
              { icon: <Stethoscope size={20} />, text: "25+ Years of Experience in Gynecology & Women’s Wellness" },
              { icon: <Users size={20} />, text: "Trusted gynecologist in Gurgaon for over 5,000+ patients" },
              { icon: <Sparkles size={20} />, text: "Laser (non-surgical) and surgical intimate treatments" },
              { icon: <ShieldCheck size={20} />, text: "Advanced Laser Technology – Safe & Effective" },
              { icon: <Clock size={20} />, text: "No Rushed Consultations" },
              { icon: <Lock size={20} />, text: "Confidential & Respectful Care" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] mt-0.5 text-[#264231]">
                  {item.icon}
                </span>
                <p className="text-[#264231] text-base md:text-xl my-auto">
                  {item.text}
                </p>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button
                className="
                  w-full sm:w-[300px]
                  inline-flex items-center justify-center gap-3
                  bg-[#264231] text-white
                  px-6 py-3
                  rounded-lg font-medium
                  hover:opacity-90 transition
                "
                onClick={openModal}
              >
                <CalendarCheck size={18} />
                Book Private Consultation
              </button>

              <button
                className="
                  w-full sm:w-[240px]
                  inline-flex items-center justify-center gap-3
                  bg-[#800000] text-white
                  px-6 py-3
                  rounded-lg font-medium
                  hover:opacity-90 transition
                "
                onClick={() => window.open("tel:+919315991400")}

              >
                <PhoneCall size={18} />
                Call Now
              </button>
            </div>

          </div>

          {/* Right */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] rounded-xl overflow-hidden">
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
