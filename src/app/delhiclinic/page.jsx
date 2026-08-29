"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import ServicesInclude from "../Components/TreatmentAreas";
import Footer from "../Components/Footer";
import AppointmentModal from "../Components/ContactPopUp";
import {
  CalendarCheck,
  PhoneCall,
  Award,
  Users,
  Star,
  Lock,
  CheckCircle2,
  Stethoscope,
  Baby,
  ArrowRight,
} from "lucide-react";

export default function AyoniClinicDelhiPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Auto open modal after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxLx9_2b7arvH3_CWDLvkX1gwSMXc_FY23BLYAn5_nwXcbHhFdXtNNP0IhrQovQtxwhLQ/exec";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    concern: "",
    preferredDateTime: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const postData = new FormData();
    postData.append("name", formData.name);
    postData.append("phone", formData.phone);
    postData.append("msg", formData.concern);
    postData.append("preferredDateTime", formData.preferredDateTime);
    postData.append("formType", "Ayoni Clinic Delhi - Talk to Our Gynecologist");

    await fetch(scriptURL, {
      method: "POST",
      body: postData,
      mode: "no-cors",
    });

    setSubmitting(false);
    router.push("/thankyou");
  };

  return (
    <>
      <Navbar openModal={() => setOpen(true)} showRating={true} />

      {/* ---------------- HERO ---------------- */}
      <section
        id="hero"
        className="relative w-full overflow-hidden bg-[#F9F9F6]"
      >
        {/* Subtle clinic background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-72 h-72 md:w-[420px] md:h-[420px] rounded-full bg-[#E6D3A3]/40 blur-3xl" />
          <div className="absolute -bottom-24 right-0 w-72 h-72 md:w-[420px] md:h-[420px] rounded-full bg-[#264231]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left content */}
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-[#264231] text-[#E6D3A3] text-xs md:text-sm font-semibold px-4 py-2 rounded-full">
              <Award size={16} />
              25+ Years of Experience
            </span>

            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#264231]">
              Best Gynecologist in Delhi
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl text-[#800000] font-medium">
              Personalised &amp; Confidential Gynecology Care
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => setOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#264231] text-[#F9F9F6] px-8 py-3 rounded-md font-medium hover:bg-[#1f3628] transition"
              >
                <CalendarCheck size={18} />
                Book Consultation
              </button>

              <button
                onClick={() => window.open("tel:+919315991400")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#800000] text-white px-8 py-3 rounded-md font-medium hover:bg-[#660000] transition"
              >
                <PhoneCall size={18} />
                Call Now
              </button>
            </div>

            <p className="mt-5 text-sm md:text-base text-[#3b5f4b] font-medium">
              Senior Gynecologist &bull; 25+ Years Experience &bull; Delhi
            </p>
          </div>

          {/* Right doctor image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[260px] h-[320px] sm:w-[320px] sm:h-[390px] md:w-[380px] md:h-[460px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/doc3.jpeg"
                alt="Senior Gynecologist at Ayoni Clinic Delhi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="relative max-w-7xl mx-auto px-4 pb-14 md:pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Award size={28} />, big: "25+", small: "Years of Experience" },
              { icon: <Users size={28} />, big: "6 lakh+", small: "Happy Patients" },
              { icon: <Star size={28} />, big: "4.9★", small: "Patient Rating" },
              { icon: <Lock size={28} />, big: "100%", small: "Confidential Care" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 border-2 border-[#264231] bg-white p-4 rounded-lg text-center text-[#264231]"
              >
                {item.icon}
                <span className="text-lg md:text-2xl font-bold">{item.big}</span>
                <span className="text-xs md:text-sm font-medium">{item.small}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE AYONI CLINIC ---------------- */}
      <section className="w-full bg-white py-12 md:py-16 px-4" id="why-choose">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#800000]">
              Why Choose Ayoni Clinic?
            </h2>

            <div className="mt-8 space-y-5">
              {[
                { icon: <Award size={20} />, text: "25+ Years of Experience — Decades of expertise in women's healthcare." },
                { icon: <Users size={20} />, text: "10 Lakh+ Patients Treated — Trusted by women across generations." },
                { icon: <Star size={20} />, text: "5★ Google Rating — Loved and trusted by our patients." },
                { icon: <Stethoscope size={20} />, text: "Zero Infection Rate — High standards of hygiene and safety." },
                { icon: <Lock size={20} />, text: "Private & Confidential — A comfortable space to discuss your concerns openly." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] mt-0.5 text-[#264231] shrink-0">
                    {item.icon}
                  </span>
                  <p className="text-[#264231] text-base md:text-lg">{item.text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#264231] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              <CalendarCheck size={18} />
              Book Your Consultation
            </button>
          </div>

          <div className="relative w-full h-[260px] sm:h-[340px] md:h-[440px] rounded-2xl overflow-hidden">
            <Image
              src="/pregnant.jpg"
              alt="Ayoni Clinic Delhi Consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES (same as Gurgaon landing page) ---------------- */}
      <ServicesInclude />

      {/* ---------------- CONCERN CTA BANNER ---------------- */}
      <section className="w-full bg-[#264231] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Not Sure What&rsquo;s Causing Your Concern?
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#E6D3A3]">
            Talk to a Gynecologist Today.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-7 inline-flex items-center justify-center gap-3 bg-[#800000] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#660000] transition"
          >
            Consult Our Gynecologist
          </button>
        </div>
      </section>

      {/* ---------------- ABOUT THE DOCTOR (same as main page) ---------------- */}
      <About />

      {/* ---------------- TYPES OF SCANS ---------------- */}
      <section className="w-full bg-[#F8FCFC] py-12 md:py-16 px-4" id="scans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#800000]">
              Types of Gynaecology Scan Available in Ayoni Clinic, Delhi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            {/* Image */}
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-full rounded-2xl overflow-hidden order-1 md:order-none">
              <Image
                src="/diagnostic-us.webp"
                alt="Gynaecology Scans at Ayoni Clinic Delhi"
                fill
                className="object-cover"
              />
            </div>

            {/* Scan lists */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl border border-[#CFAA75]/30 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] text-[#264231]">
                    <Stethoscope size={20} />
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#264231]">
                    Women&rsquo;s Health
                  </h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "TVS Scan",
                    "Pelvic Ultrasound",
                    "Follicular Monitoring",
                    "Antral Follicle Count",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#1C2B39]/80">
                      <CheckCircle2 size={18} className="text-[#264231] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-[#CFAA75]/30 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] text-[#264231]">
                    <Baby size={20} />
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#264231]">
                    Pregnancy Scans
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Early Pregnancy Scan",
                    "NT Scan",
                    "Level II Anomaly Scan",
                    "Fetal Echo",
                    "Growth Scan",
                    "Doppler Scan",
                    "Biophysical Profile",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#1C2B39]/80">
                      <CheckCircle2 size={18} className="text-[#264231] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-[#800000] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#660000] transition"
            >
              Get Expert Guidance
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- TALK TO OUR GYNECOLOGIST ---------------- */}
      <section className="w-full py-12 md:py-16 px-4 bg-white" id="talk-to-us">
        <div className="w-full md:w-[95%] max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg bg-[#F8FCFC]">
            {/* Left image */}
            <div className="relative h-[220px] sm:h-[280px] md:h-auto">
              <Image
                src="/ayonicure.png"
                alt="Talk to Our Gynecologist at Ayoni Clinic Delhi"
                fill
                className="object-cover"
              />
            </div>

            {/* Right form */}
            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#800000]">
                Talk to Our Gynecologist
              </h2>
              <p className="mt-2 text-[#264231] text-base md:text-lg">
                Have a concern? Let&rsquo;s talk.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full border rounded-lg px-4 py-3 bg-white"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full border rounded-lg px-4 py-3 bg-white"
                />

                <textarea
                  name="concern"
                  value={formData.concern}
                  onChange={handleChange}
                  placeholder="Your Concern"
                  required
                  rows={3}
                  className="w-full border rounded-lg px-4 py-3 bg-white resize-none"
                />

                <div>
                  <label className="block text-sm text-[#264231]/70 mb-1">
                    Preferred Date &amp; Time
                  </label>
                  <input
                    type="datetime-local"
                    name="preferredDateTime"
                    value={formData.preferredDateTime}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-4 py-3 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#800000] text-white py-3 rounded-lg font-medium hover:opacity-90 disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Request a Consultation"}
                </button>

                <p className="text-xs text-gray-500 text-center pt-2">
                  Your details are safe and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <AppointmentModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
