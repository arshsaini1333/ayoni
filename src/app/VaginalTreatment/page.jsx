"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import AppointmentModal from "../Components/ContactPopUp";
import Footer from "../Components/Footer";
import {
  CalendarCheck,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Lock,
  Award,
  ChevronRight,
  Users,
  Clock,
  Heart,
  Zap,
  MessageCircle,
  Star,
  CheckCircle2,
  IndianRupee,
  BadgeCheck,
  Smile,
  ThumbsUp,
  Eye,
  Gem,
  Flower2,
  Flame,
  Stethoscope,
  GraduationCap,
  HeartPulse,
  UserCheck,
} from "lucide-react";

export default function VaginalTreatmentPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxLx9_2b7arvH3_CWDLvkX1gwSMXc_FY23BLYAn5_nwXcbHhFdXtNNP0IhrQovQtxwhLQ/exec";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const postData = new FormData();
    postData.append("name", formData.name);
    postData.append("phone", formData.phone);
    postData.append("msg", formData.treatment);
    await fetch(scriptURL, { method: "POST", body: postData, mode: "no-cors" });
    setSubmitting(false);
    router.push("/thankyou");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const treatments = [
    {
      icon: <Zap size={28} className="text-[#E6D3A3]" />,
      title: "Laser Vaginal Tightening",
      points: [
        "No Cuts & No Stitches",
        "Improves Elasticity & Tightness",
        "Enhances Comfort & Satisfaction",
        "Quick & Safe Laser Procedure",
      ],
    },
    {
      icon: <ShieldCheck size={28} className="text-[#E6D3A3]" />,
      title: "Surgical Tightening (Vaginoplasty)",
      points: [
        "Permanent Tightening Solution",
        "Corrects Laxity & Structural Issues",
        "Safe & Expert Surgical Care",
        "Improves Confidence & Comfort",
      ],
    },
    {
      icon: <Lock size={28} className="text-[#E6D3A3]" />,
      title: "Hymen Repair (Hymenoplasty)",
      points: [
        "100% Confidential Procedure",
        "Safe & Discreet Surgery",
        "Quick Healing & Recovery",
        "Performed for Personal Needs",
        "Safe & Doctor-Guided Care",
      ],
    },
    {
      icon: <Flame size={28} className="text-[#E6D3A3]" />,
      title: "Sexual Wellness Treatments",
      points: [
        "Relieves Dryness & Discomfort",
        "Reduces Pain During Intercourse",
        "Improves Sensation & Intimacy",
        "Personalized Treatment Plans",
      ],
    },
    {
      icon: <Gem size={28} className="text-[#E6D3A3]" />,
      title: "Intimate Rejuvenation",
      points: [
        "Improves Tightness & Appearance",
        "Enhances Confidence",
        "Combination of Advanced Treatments",
        "Safe & Effective Results",
      ],
    },
  ];

  const trustedReasons = [
    "Experienced Gynecologist with 25+ Years Practice",
    "Advanced Laser & Surgical Treatments",
    "Highly Rated Clinic with Positive Patient Reviews",
    "Affordable Consultation & Treatment Options",
    "Safe, Private & Comfortable Environment",
  ];

  const costPoints = [
    "Transparent Consultation Fees",
    "Affordable Treatment Packages",
    "Guidance Before Any Procedure",
    "No Hidden Charges",
  ];

  return (
    <>
      <Navbar openModal={() => setOpen(true)} />

      {/* ═══════════════════════ HERO SECTION ═══════════════════════ */}
      <section
        className="relative w-full min-h-[95vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/gyne.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e23]/95 via-[#264231]/85 to-[#264231]/60"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E6D3A3] via-[#800000] to-[#E6D3A3]"></div>

        <div className="relative w-full px-6 md:px-16 lg:px-24 py-20 flex justify-center md:justify-start">
          <div className="w-full max-w-2xl space-y-7 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#E6D3A3]/20 border border-[#E6D3A3]/40 rounded-full px-5 py-2 backdrop-blur-sm">
              <Sparkles size={16} className="text-[#E6D3A3]" />
              <span className="text-sm font-medium text-[#E6D3A3] tracking-wide uppercase">
                Advanced Gynecology Care
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] text-white">
              Best Vaginal Treatment &{" "}
              <span className="text-[#E6D3A3]">Hymenoplasty</span> in Gurgaon
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200/90 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Consult an experienced gynecologist for{" "}
              <span className="text-white font-semibold">safe</span>,{" "}
              <span className="text-white font-semibold">confidential</span> &{" "}
              <span className="text-white font-semibold">advanced</span> intimate
              treatments
            </p>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 h-[2px] bg-[#E6D3A3]"></div>
              <div className="w-2 h-2 rounded-full bg-[#E6D3A3]"></div>
              <div className="w-12 h-[2px] bg-[#E6D3A3]"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: <Award size={20} className="text-[#E6D3A3]" />, text: "25+ Years Experienced Doctor" },
                { icon: <ShieldCheck size={20} className="text-[#E6D3A3]" />, text: "Advanced Laser & Surgical Treatments" },
                { icon: <Lock size={20} className="text-[#E6D3A3]" />, text: "100% Private Consultation" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3.5 hover:bg-white/15 transition-all duration-300">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D3A3]/20 shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base text-white font-medium leading-snug">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E6D3A3] text-[#1a2e23] px-8 py-3.5 rounded-lg font-bold text-base hover:bg-[#d4c08f] hover:shadow-lg hover:shadow-[#E6D3A3]/20 transition-all duration-300 group"
                onClick={() => setOpen(true)}
              >
                <CalendarCheck size={20} />
                Book Your Private Consultation
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#800000] text-white px-6 py-3.5 rounded-lg font-bold text-base hover:bg-[#660000] hover:shadow-lg hover:shadow-[#800000]/30 transition-all duration-300"
                onClick={() => window.open("tel:+919315991400")}
              >
                <PhoneCall size={18} />
                CALL NOW
              </button>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-3.5 rounded-lg font-bold text-base hover:bg-[#1fb855] hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300"
                onClick={() => window.open("https://wa.me/919315991400?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20for%20vaginal%20treatment.", "_blank")}
              >
                <MessageCircle size={18} />
                WHATSAPP
              </button>
            </div>

            <p className="text-red-300 text-sm font-semibold">
              * Consultations by prior appointment only
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ STATS STRIP ═══════════════════════ */}
      <section className="relative bg-[#264231] border-t-4 border-[#E6D3A3]">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Users size={26} />, value: "10,000+", label: "Happy Patients" },
              { icon: <Clock size={26} />, value: "25+", label: "Years Experience" },
              { icon: <Heart size={26} />, value: "100%", label: "Confidential Care" },
              { icon: <Zap size={26} />, value: "Advanced", label: "Laser Treatments" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E6D3A3]/15 mb-3 text-[#E6D3A3] group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <span className="text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
                <span className="text-sm md:text-base text-[#E6D3A3] font-medium mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SPECIALIZED TREATMENTS ═══════════════════════ */}
      <section className="bg-[#F9F9F6] py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[#800000] text-sm font-semibold tracking-wider uppercase mb-3">
              <Flower2 size={16} /> What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#264231] leading-tight">
              Our Specialized Treatments <br className="hidden md:block" />
              <span className="text-[#800000]">in Gurgaon</span>
            </h2>
            <div className="flex items-center gap-3 justify-center mt-5">
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div>
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#E6D3A3]/30 shadow-sm hover:shadow-xl hover:shadow-[#264231]/8 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#264231] mb-5 group-hover:scale-105 transition-transform duration-300">
                  {t.icon}
                </div>
                <h3 className="text-xl font-bold text-[#264231] mb-4">{t.title}</h3>
                <ul className="space-y-2.5">
                  {t.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[#3b5f4b]">
                      <CheckCircle2 size={18} className="text-[#800000] shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA BANNER ═══════════════════════ */}
      <section className="relative bg-gradient-to-br from-[#264231] via-[#1a2e23] to-[#0f1d15] py-16 md:py-20 px-6 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#E6D3A3]/5"></div>
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#800000]/10"></div>

        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Consult the <span className="text-[#E6D3A3]">Best Doctor</span> in Gurgaon
          </h2>
          <div className="flex items-center justify-center gap-3 md:gap-5 text-base md:text-lg text-gray-300 font-medium">
            <span className="flex items-center gap-1.5">
              <Lock size={16} className="text-[#E6D3A3]" /> 100% Private
            </span>
            <span className="text-[#E6D3A3]">|</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-[#E6D3A3]" /> Safe
            </span>
            <span className="text-[#E6D3A3]">|</span>
            <span className="flex items-center gap-1.5">
              <ThumbsUp size={16} className="text-[#E6D3A3]" /> No Judgement
            </span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="inline-flex items-center justify-center gap-3 bg-[#800000] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#660000] hover:shadow-xl hover:shadow-[#800000]/30 transition-all duration-300"
              onClick={() => window.open("tel:+919315991400")}
            >
              <PhoneCall size={20} />
              Call Now
            </button>
            <button
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#1fb855] hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300"
              onClick={() => window.open("https://wa.me/919315991400?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation.", "_blank")}
            >
              <MessageCircle size={20} />
              WhatsApp Now
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHY TRUSTED ═══════════════════════ */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side — content */}
            <div>
              <span className="inline-flex items-center gap-2 text-[#800000] text-sm font-semibold tracking-wider uppercase mb-3">
                <BadgeCheck size={16} /> Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#264231] leading-tight mb-6">
                Why We Are a{" "}
                <span className="text-[#800000]">Trusted Clinic</span> in Gurgaon
              </h2>
              <div className="w-16 h-[3px] bg-[#E6D3A3] mb-8"></div>

              <ul className="space-y-4">
                {trustedReasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#264231] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={16} className="text-[#E6D3A3]" />
                    </span>
                    <span className="text-base md:text-lg text-[#3b5f4b] font-medium">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side — visual stats */}
            <div className="bg-gradient-to-br from-[#264231] to-[#1a2e23] rounded-3xl p-8 md:p-10 space-y-6">
              {[
                { icon: <Award size={24} />, value: "25+ Years", desc: "of Expert Practice" },
                { icon: <Users size={24} />, value: "10,000+", desc: "Happy Patients" },
                { icon: <Star size={24} />, value: "4.9 ★", desc: "Patient Rating" },
                { icon: <Lock size={24} />, value: "100%", desc: "Privacy Guaranteed" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4 hover:bg-white/15 transition-all duration-300">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E6D3A3]/20 text-[#E6D3A3] shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <div className="text-xl font-bold text-white">{item.value}</div>
                    <div className="text-sm text-[#E6D3A3]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ COST + INTENT SECTION ═══════════════════════ */}
      <section className="relative bg-gradient-to-br from-[#fdf6e3] via-[#fef9ef] to-[#fff8e7] py-16 md:py-24 px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E6D3A3] via-[#800000] to-[#E6D3A3]"></div>
        <div className="absolute -top-20 right-10 w-40 h-40 rounded-full bg-[#E6D3A3]/10"></div>
        <div className="absolute -bottom-10 left-20 w-32 h-32 rounded-full bg-[#264231]/5"></div>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left — content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#800000]/10 rounded-full px-4 py-1.5">
                <IndianRupee size={16} className="text-[#800000]" />
                <span className="text-sm font-semibold text-[#800000] tracking-wide uppercase">
                  Pricing & Cost
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#264231] leading-tight">
                Worried About{" "}
                <span className="text-[#800000]">Treatment Cost?</span>
              </h2>

              <div className="w-14 h-[3px] bg-[#E6D3A3]"></div>

              <ul className="space-y-4">
                {costPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#264231] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={14} className="text-[#E6D3A3]" />
                    </span>
                    <span className="text-base md:text-lg text-[#3b5f4b] font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — CTA card */}
            <div className="bg-white rounded-3xl border-2 border-[#E6D3A3]/50 shadow-xl shadow-[#E6D3A3]/10 p-8 md:p-10 text-center space-y-6">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-[#264231] to-[#1a2e23]">
                <IndianRupee size={30} className="text-[#E6D3A3]" />
              </div>
              <h3 className="text-2xl font-bold text-[#264231]">
                Get Transparent <br /> Consultation Pricing
              </h3>
              <p className="text-[#3b5f4b]">
                No hidden charges. Know the exact cost before your visit.
              </p>
              <button
                className="w-full inline-flex items-center justify-center gap-3 bg-[#800000] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#660000] hover:shadow-xl hover:shadow-[#800000]/20 transition-all duration-300 group"
                onClick={() => setOpen(true)}
              >
                Check Consultation Cost Now
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center justify-center gap-4 text-sm text-[#3b5f4b]">
                <span className="flex items-center gap-1">
                  <Lock size={14} className="text-[#800000]" /> Private
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-[#800000]" /> Safe
                </span>
                <span className="flex items-center gap-1">
                  <Smile size={14} className="text-[#800000]" /> No Judgement
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PREMIUM DOCTOR SECTION ═══════════════════════ */}
      <section className="bg-white py-16 md:py-24 px-6" id="doctor">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[#800000] text-sm font-semibold tracking-wider uppercase mb-3">
              <Stethoscope size={16} /> Your Specialist
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#264231] leading-tight">
              Meet Your <span className="text-[#800000]">Specialist</span>
            </h2>
            <p className="text-lg text-[#3b5f4b] mt-3 font-medium">
              Experienced Gynecologist in Gurgaon
            </p>
            <div className="flex items-center gap-3 justify-center mt-5">
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div>
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Doctor Image */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-3 bg-gradient-to-br from-[#E6D3A3]/40 via-transparent to-[#264231]/20 rounded-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#264231]/20">
                  <Image
                    src="/doc1.png"
                    alt="Dr. Gaayatri Juneja - Experienced Gynecologist in Gurgaon"
                    width={480}
                    height={580}
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-4 -right-4 bg-[#264231] text-white rounded-2xl px-5 py-3 shadow-lg">
                  <div className="text-2xl font-bold text-[#E6D3A3]">25+</div>
                  <div className="text-xs font-medium">Years Exp.</div>
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#264231]">
                  Dr. Gaayatri Juneja
                </h3>
                <p className="text-[#800000] font-semibold text-lg mt-1">
                  Senior Gynecologist & Women's Health Expert
                </p>
              </div>

              <div className="w-14 h-[3px] bg-[#E6D3A3]"></div>

              <ul className="space-y-4">
                {[
                  { icon: <Award size={20} className="text-[#E6D3A3]" />, text: "25+ Years of Experience in women's health & gynecology" },
                  { icon: <HeartPulse size={20} className="text-[#E6D3A3]" />, text: "Third-Generation Gynecologist with legacy since 1975" },
                  { icon: <GraduationCap size={20} className="text-[#E6D3A3]" />, text: "Highly Qualified – MBBS, DGO, DNB, MRCOG (UK)" },
                  { icon: <UserCheck size={20} className="text-[#E6D3A3]" />, text: "Compassionate & Patient-Centric Approach" },
                  { icon: <Lock size={20} className="text-[#E6D3A3]" />, text: "100% Confidential & Comfortable Care" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#264231] shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="text-base md:text-lg text-[#3b5f4b] font-medium pt-1.5">{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Doctor CTA */}
              <div className="pt-4 space-y-3">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E6D3A3] text-[#1a2e23] px-8 py-3.5 rounded-lg font-bold text-base hover:bg-[#d4c08f] hover:shadow-lg transition-all duration-300 group"
                  onClick={() => setOpen(true)}
                >
                  <CalendarCheck size={20} />
                  Book Your Private Consultation
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-[#3b5f4b] italic">Trusted care with complete privacy</p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    className="inline-flex items-center justify-center gap-3 bg-[#800000] text-white px-8 py-3.5 rounded-lg font-bold text-base hover:bg-[#660000] hover:shadow-lg transition-all duration-300"
                    onClick={() => window.open("tel:+919315991400")}
                  >
                    <PhoneCall size={18} />
                    Call Now
                  </button>
                  <button
                    className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-base hover:bg-[#1fb855] hover:shadow-lg transition-all duration-300"
                    onClick={() => window.open("https://wa.me/919315991400?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation.", "_blank")}
                  >
                    <MessageCircle size={18} />
                    WhatsApp Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CONTACT FORM SECTION ═══════════════════════ */}
      <section className="relative bg-gradient-to-br from-[#264231] via-[#1a2e23] to-[#0f1d15] py-16 md:py-24 px-6 overflow-hidden" id="contact-form">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E6D3A3]/5"></div>
        <div className="absolute bottom-10 left-10 w-44 h-44 rounded-full bg-[#800000]/8"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6 text-center md:text-left">
              <span className="inline-flex items-center gap-2 bg-[#E6D3A3]/20 border border-[#E6D3A3]/30 rounded-full px-5 py-2">
                <HeartPulse size={16} className="text-[#E6D3A3]" />
                <span className="text-sm font-medium text-[#E6D3A3] tracking-wide uppercase">Take Action Today</span>
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Don&apos;t Ignore These <span className="text-[#E6D3A3]">Changes</span> Anymore
              </h2>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-12 h-[2px] bg-[#E6D3A3]"></div>
                <div className="w-2 h-2 rounded-full bg-[#E6D3A3]"></div>
                <div className="w-12 h-[2px] bg-[#E6D3A3]"></div>
              </div>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
                Early consultation can help you feel <span className="text-white font-semibold">better</span>, more <span className="text-white font-semibold">confident</span> & <span className="text-white font-semibold">comfortable</span>.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                {[
                  { icon: <Lock size={16} />, text: "100% Private" },
                  { icon: <ShieldCheck size={16} />, text: "Safe & Secure" },
                  { icon: <Smile size={16} />, text: "No Judgement" },
                ].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm text-[#E6D3A3] font-medium">
                    {item.icon} {item.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/20">
              <h3 className="text-2xl font-bold text-[#264231] mb-1">Book a Consultation</h3>
              <p className="text-[#3b5f4b] text-sm mb-6">Fill in your details for a private consultation</p>

              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-[#264231] mb-1.5">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#264231] mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#264231] mb-1.5">Select Treatment</label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleFormChange}
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                  >
                    <option value="">Choose a treatment</option>
                    <option>Laser Vaginal Tightening</option>
                    <option>Surgical Tightening (Vaginoplasty)</option>
                    <option>Hymen Repair (Hymenoplasty)</option>
                    <option>Sexual Wellness Treatment</option>
                    <option>Intimate Rejuvenation</option>
                    <option>General Consultation</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#800000] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#660000] hover:shadow-lg transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-3"
                >
                  {submitting ? "Submitting..." : (
                    <>
                      <CalendarCheck size={20} />
                      Book My Consultation
                    </>
                  )}
                </button>
              </form>

              <div className="flex items-center gap-2 justify-center mt-5 text-xs text-gray-500">
                <Lock size={12} className="text-[#800000]" />
                <span>Your details are 100% safe & confidential. We respect your privacy.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <AppointmentModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
