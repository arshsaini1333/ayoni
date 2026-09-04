"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import About from "../Components/AboutDelhi";
import ServicesInclude from "../Components/TreatmentAreas";
import Footer from "../Components/Footer";
import AppointmentModal from "../Components/ContactPopUpDelhi";
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
  ChevronRight,
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
    "https://script.google.com/macros/s/AKfycbzjwte2F02JEShSakHwFPu87KFc6qP9bJ6IcmiyaUyynJ6D1g9-7bHU_g0d2atef7c/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentType: "Offline Consultation",
    day: "",
    date: "",
    slot: "",
    msg: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "day") {
      const nextDate = getNextDateForDay(value);
      setFormData((prev) => ({
        ...prev,
        day: value,
        date: nextDate,
        slot: "",
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Get next date (Sunday removed)
  const getNextDateForDay = (selectedDay) => {
    const daysMap = {
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };

    const today = new Date();
    let diff = daysMap[selectedDay] - today.getDay();
    if (diff < 0) diff += 7;

    const d = new Date(today);
    d.setDate(today.getDate() + diff);
    return d.toISOString().split("T")[0];
  };

  const formatTo12Hour = (hour, minute = 0) => {
    const period = hour >= 12 ? "PM" : "AM";
    const h = hour % 12 === 0 ? 12 : hour % 12;
    return `${h}:${minute.toString().padStart(2, "0")} ${period}`;
  };

  // Slot logic
  const getSlotsForDay = (day) => {
    if (!day) return [];
    let slots = [];

    const add = (start, end) => {
      for (let i = start; i < end; i++) {
        slots.push(`${formatTo12Hour(i)} - ${formatTo12Hour(i + 1)}`);
      }
    };

    if (day === "Monday" || day === "Wednesday") add(9, 14);
    if (day === "Friday") add(12, 14);

    slots.push(`${formatTo12Hour(18, 30)} - ${formatTo12Hour(19, 30)}`);
    slots.push(`${formatTo12Hour(19, 30)} - ${formatTo12Hour(20)}`);

    return slots;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const postData = new URLSearchParams();
    postData.append("name", formData.name);
    postData.append("email", formData.email);
    postData.append("phone", formData.phone);
    postData.append("appointmentType", formData.appointmentType);
    postData.append("day", formData.day);
    postData.append("date", formData.date);
    postData.append("slot", formData.slot);
    postData.append("msg", formData.msg);
    postData.append("formType", "Ayoni Clinic Delhi - Talk to Our Gynecologist");

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: postData,
        mode: "no-cors",
      });
    } catch (err) {
      console.error(err);
    }

    setSubmitting(false);
    router.push("/thankyoudelhi");
  };

  return (
    <>
      <Navbar openModal={() => setOpen(true)} showRating={true} />

      {/* ---------------- HERO ---------------- */}
      <section
        id="hero"
        className="relative w-full flex items-center overflow-hidden bg-[#FFF6DD] md:bg-[#F9F9F6] md:min-h-[90vh]"
      >
        {/* Delhi background image (desktop only, same as before) */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <Image
            src="/delhibackground.png"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9F9F6] via-transparent to-transparent" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center md:block">
          {/* Content */}
          <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
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

          {/* Image card below content (mobile only) */}
          <div className="mt-10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-xl border-4 border-white md:hidden">
            <Image
              src="/delhibgmob.JPEG"
              alt="Ayoni Clinic Delhi"
              width={4000}
              height={4736}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ---------------- TRUST STRIP ---------------- */}
      <section className="w-full bg-[#F9F9F6] py-10 md:py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Award size={28} />, big: "25+", small: "Years of Experience" },
            { icon: <Users size={28} />, big: "6 lakh+", small: "Happy Patients" },
            { icon: <Star size={28} />, big: "5★", small: "Patient Rating" },
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

      {/* ---------------- DR. RAJNISH JUNEJA ---------------- */}
      <section className="relative bg-[#f5f0e8]/50 py-16 md:py-24 px-4 overflow-hidden border-t border-[#E6D3A3]/20" id="doctor-rajnish">
        <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#E6D3A3]/20" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#264231]/5" />

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 text-[#800000] text-sm font-semibold tracking-wider uppercase mb-3">
              <Award size={16} /> Radiodiagnosis Specialist
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#264231] leading-tight">
              Meet <span className="text-[#800000]">Dr. Rajnish Juneja</span>
            </h2>
            <div className="flex items-center gap-3 justify-center mt-5">
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div>
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
            </div>
          </div>

          <div className="bg-[#f5f0e8] rounded-3xl overflow-hidden border border-[#E6D3A3]/40 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 sm:grid-cols-2">
            <div className="relative h-80 sm:h-full min-h-[320px] overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#E6D3A3]/40 via-transparent to-[#264231]/20 z-10" />
              <Image
                src="/rajnish_juneja_photo.jpeg"
                alt="Dr. Rajnish Juneja"
                fill
                className="object-cover object-[center_20%]"
              />
            </div>

            <div className="p-7 md:p-9 space-y-4 flex flex-col justify-center">
              <div>
                <h3 className="text-2xl font-bold text-[#264231]">Dr. Rajnish Juneja</h3>
                <p className="text-[#800000] font-semibold mt-1">
                  Senior Radiologist | 30+ Years of Experience
                </p>
              </div>
              <div className="w-12 h-[3px] bg-[#E6D3A3]"></div>
              <ul className="space-y-2.5">
                {[
                  "DNB (Radiodiagnosis)",
                  "Expert in Ultrasound & Doppler Studies",
                  "Pelvic Doppler & Infertility Specialist",
                  "Trusted for Accurate Diagnostic Imaging",
                ].map((p, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[#3b5f4b]">
                    <CheckCircle2 size={16} className="text-[#800000] shrink-0" />
                    <span className="text-sm md:text-base font-medium">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => setOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#264231] text-white px-6 py-3.5 rounded-xl font-bold text-base hover:bg-[#1a2e23] transition-all duration-300 group"
                >
                  <CalendarCheck size={18} /> Request a Call Back
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TYPES OF SCANS ---------------- */}
      <section className="w-full bg-[#F8FCFC] py-12 md:py-16 px-4" id="scans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#800000]">
              Types of Ultrasound &amp; Gynaecology Scans Available in Ayoni Clinic, Delhi
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <div className="bg-white rounded-2xl border border-[#CFAA75]/30 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] text-[#264231]">
                  <Stethoscope size={20} />
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-[#264231]">
                  Women&rsquo;s Health &amp; Fertility
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  "TVS Scan",
                  "Pelvic Ultrasound",
                  "Follicular Monitoring",
                  "Antral Follicle Count",
                  "Infertility Assessment",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1C2B39]/80">
                    <CheckCircle2 size={18} className="text-[#264231] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[#CFAA75]/30 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] text-[#264231]">
                  <Baby size={20} />
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-[#264231]">
                  Pregnancy Scans
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Early Pregnancy Scan",
                  "NT Scan",
                  "Level II Anomaly Scan",
                  "Fetal Echo",
                  "Growth Scan",
                  "Third Trimester Scan",
                  "Biophysical Profile",
                  "AFI Scan",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1C2B39]/80">
                    <CheckCircle2 size={18} className="text-[#264231] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[#CFAA75]/30 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] text-[#264231]">
                  <Users size={20} />
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-[#264231]">
                  Twin Pregnancy Ultrasound
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Twin NT Scan",
                  "Twin Level II Scan",
                  "Twin Growth Scan",
                  "Twin Fetal Echo",
                  "Twin Doppler",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1C2B39]/80">
                    <CheckCircle2 size={18} className="text-[#264231] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[#CFAA75]/30 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] text-[#264231] text-lg">
                  🏥
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-[#264231]">
                  General Diagnostic Ultrasound
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Whole Abdomen",
                  "Upper Abdomen",
                  "Lower Abdomen",
                  "KUB Scan",
                  "Thyroid Scan",
                  "Breast Ultrasound",
                  "Chest Ultrasound",
                  "Soft Tissue Ultrasound",
                  "Eye Ultrasound",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1C2B39]/80">
                    <CheckCircle2 size={18} className="text-[#264231] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[#CFAA75]/30 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3] text-[#264231] text-lg">
                  ❤️
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-[#264231]">
                  Doppler Ultrasound
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Arterial Doppler",
                  "Venous Doppler",
                  "Carotid Doppler",
                  "Renal Doppler",
                  "Portal Doppler",
                  "Pelvic Doppler",
                  "AV Fistula Mapping",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1C2B39]/80">
                    <CheckCircle2 size={18} className="text-[#264231] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
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
                  placeholder="Name"
                  required
                  className="w-full border rounded-lg px-4 py-3 bg-white"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full border rounded-lg px-4 py-3 bg-white"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  className="w-full border rounded-lg px-4 py-3 bg-white"
                />

                {/* Appointment Type */}
                <div className="flex gap-6 text-sm text-[#264231]">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="appointmentType"
                      value="Online Consultation"
                      checked={formData.appointmentType === "Online Consultation"}
                      onChange={handleChange}
                    />
                    Online Consultation
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="appointmentType"
                      value="Offline Consultation"
                      checked={formData.appointmentType === "Offline Consultation"}
                      onChange={handleChange}
                    />
                    Offline Consultation
                  </label>
                </div>

                {/* Concern */}
                <select
                  name="msg"
                  value={formData.msg}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 bg-white text-[#264231]"
                >
                  <option value="">Select Your Concern</option>
                  <option>PCOS / Irregular Periods</option>
                  <option>Pregnancy Care</option>
                  <option>Menopause Issues</option>
                  <option>Hormonal Imbalance</option>
                  <option>General Gynaecology Consultation</option>
                </select>

                {/* Day */}
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 bg-white text-[#264231]"
                >
                  <option value="">Select Day</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                </select>

                {/* Slot */}
                <select
                  name="slot"
                  value={formData.slot}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 bg-white text-[#264231]"
                >
                  <option value="">Select Slot</option>
                  {getSlotsForDay(formData.day).map((s, i) => (
                    <option key={i}>{s}</option>
                  ))}
                </select>

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

      <Footer
        showTestimonials={false}
        showCertificates={false}
        contactHref="#talk-to-us"
      />

      <AppointmentModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
