"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import AppointmentModalUS from "../Components/ContactPopUpUS";
import Footervt from "../Components/Footervt";
import { CalendarCheck, PhoneCall, ShieldCheck, Sparkles, Lock, Award, ChevronRight, Users, Clock, Heart, Zap, MessageCircle, Star, CheckCircle2, BadgeCheck, Smile, ThumbsUp, Stethoscope, HeartPulse, UserCheck, GraduationCap, MapPin, ChevronDown, IndianRupee } from "lucide-react";

export default function UltrasoundPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [heroScale, setHeroScale] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "", treatment: "" });
  const [submitting, setSubmitting] = useState(false);
  const scriptURL = "https://script.google.com/macros/s/AKfycbzbGwAy-gxBp5_UF2Th6a4kPGJ0m0tl2vj8fcbBHa38ht0PPnJSRH99GEBWHrkNzHkyuA/exec";

  useEffect(() => {
    setIsClient(true);
    const updateScale = () => {
      const targetWidth = 1100;
      if (window.innerWidth < targetWidth) setHeroScale(window.innerWidth / targetWidth);
      else setHeroScale(1);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e, formType) => {
    e.preventDefault();
    setSubmitting(true);
    const params = new URLSearchParams();
    params.append("name", formData.name);
    params.append("phone", formData.phone);
    params.append("msg", formType === "Cost Calculator" ? "Cost Inquiry" : formData.treatment || "General Inquiry");
    params.append("formType", formType);
    try {
      await fetch(scriptURL, { method: "POST", body: params, mode: "no-cors" });
    } catch (err) {
      console.error(err);
    }
    setSubmitting(false);
    setFormData({ name: "", phone: "", treatment: "" });
    router.push("/thankyouus");
  };

  const costPoints = [
    "Transparent Scan Pricing",
    "Affordable Ultrasound Packages",
    "Guidance Before Any Scan",
    "No Hidden Charges",
  ];

  const features = [
    { icon: "🩺", title: "25+ Years of Experience", desc: "Experienced Women's Health Specialist" },
    { icon: "🖥️", title: "Advanced Ultrasound Technology", desc: "High-quality imaging for accurate diagnosis" },
    { icon: "👩‍⚕️", title: "Expert Medical Guidance", desc: "Reports explained by experienced specialists" },
    { icon: "🔒", title: "Private & Comfortable Care", desc: "Safe, hygienic, and patient-friendly environment" },
    { icon: "⚡", title: "Same-Day Appointments", desc: "Quick scheduling with minimal waiting" },
    { icon: "📍", title: "Convenient Gurgaon Location", desc: "Located at M3M 65th Avenue, Sector 65" },
  ];

  const services = [
    { icon: "🤰", title: "Pregnancy Ultrasound", items: ["Early Pregnancy Scan", "NT Scan", "Level II Anomaly Scan", "Fetal Echo", "Growth Scan", "Third Trimester Scan", "Biophysical Profile", "AFI Scan"] },
    { icon: "👩", title: "Women's Health & Fertility", items: ["TVS Scan", "Pelvic Ultrasound", "Follicular Monitoring", "Antral Follicle Count", "Infertility Assessment"] },
    { icon: "🩺", title: "General Diagnostic Ultrasound", items: ["Whole Abdomen", "Upper Abdomen", "Lower Abdomen", "KUB Scan", "Thyroid Scan", "Breast Ultrasound", "Chest Ultrasound", "Soft Tissue Ultrasound", "Eye Ultrasound"] },
    { icon: "❤️", title: "Doppler Ultrasound", items: ["Arterial Doppler", "Venous Doppler", "Carotid Doppler", "Renal Doppler", "Portal Doppler", "Pelvic Doppler", "AV Fistula Mapping"] },
    { icon: "👶👶", title: "Twin Pregnancy Ultrasound", items: ["Twin NT Scan", "Twin Level II Scan", "Twin Growth Scan", "Twin Fetal Echo", "Twin Doppler"] },
  ];

  const reviews = [
    { name: "Priya S.", text: "The ultrasound process was smooth and the doctors explained everything clearly. Highly recommended!" },
    { name: "Neha M.", text: "Professional staff, modern equipment, and a very comfortable experience throughout my pregnancy scan." },
    { name: "Anjali K.", text: "Accurate reports, minimal waiting time, and excellent care by both doctors." },
  ];

  const faqs = [
    { q: "Do I need an appointment for an ultrasound?", a: "Yes, all ultrasound services are available on an appointment basis to ensure a smooth and comfortable experience." },
    { q: "Is ultrasound safe?", a: "Yes, ultrasound is a safe, non-invasive imaging technique that uses sound waves and does not involve radiation." },
    { q: "Do I need to prepare before my ultrasound?", a: "Preparation depends on the type of ultrasound. Our team will guide you with any instructions when you book your appointment." },
    { q: "Which ultrasound services do you offer?", a: "We offer a wide range of ultrasound services, including general diagnostic ultrasound, Doppler studies, women's health imaging, fertility scans, and pregnancy ultrasounds." },
    { q: "Where are your centres located?", a: "We have conveniently located centres in Gurgaon and Delhi. Our team will help you choose the branch that is most convenient for you." },
  ];

  return (
    <>
      <Navbar openModal={() => setOpen(true)} />
      <style>{`body { overflow-x: hidden; width: 100%; max-width: 100vw; }`}</style>

      {/* HERO */}
      <div
        id="usHero"
        className="w-full bg-[#f5f0e8] overflow-hidden"
        style={{ height: isClient && heroScale < 1 ? `calc(max(85vh, 950px) * ${heroScale})` : 'auto' }}
        suppressHydrationWarning
      >
        <div
          className="origin-top-left"
          style={{
            width: isClient && heroScale < 1 ? '1100px' : '100%',
            transform: isClient && heroScale < 1 ? `scale(${heroScale})` : 'none',
          }}
          suppressHydrationWarning
        >
          <section
            className="relative w-full bg-[#f5f0e8] bg-cover bg-[center_right_-5rem] flex items-center overflow-hidden"
            style={{
              backgroundImage: "url('/ultrasound-hero.webp')",
              minHeight: isClient && heroScale === 1 ? '700px' : 'max(85vh, 950px)'
            }}
          >
            {/* Transparent gradient overlay explicitly set as desktop orientation */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f5f0e8] via-[#f5f0e8]/60 to-transparent pointer-events-none"></div>

            {/* Decorative background elements on the left side */}
            <div className="absolute top-[-80px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#264231]/5"></div>
            <div className="absolute bottom-[-50px] left-[10%] w-[250px] h-[250px] rounded-full bg-[#E6D3A3]/20"></div>
            <div className="absolute top-[35%] left-[-30px] w-[180px] h-[180px] rounded-full border border-[#264231]/10"></div>
            <div className="absolute top-[10%] left-[30%] w-20 h-20 rotate-45 bg-[#E6D3A3]/10 rounded-xl"></div>

            <div className="relative w-full max-w-9xl mx-auto pl-6 lg:pl-10 pr-4 py-16">
              <div className="max-w-7xl relative z-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
                {/* Left Side */}
                <div className="space-y-8 text-left">
                  <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-tight text-[#264231]">
                    Advanced Ultrasound & Diagnostic Imaging Centre <br className="hidden md:block" />
                    <span className="text-[#800000]">in Gurgaon & Delhi</span>
                  </h1>

                  <ul className="space-y-4">
                    {[
                      "Advanced Ultrasound Technology",
                      "Experienced Radiologist",
                      "Accurate Diagnostic Imaging",
                      "Appointment-Based Consultations"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#800000]/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={18} className="text-[#800000]" />
                        </span>
                        <span className="text-xl text-[#264231] font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <button
                      onClick={() => setOpen(true)}
                      className="inline-flex items-center gap-3 bg-[#264231] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1a2e23] transition-all duration-300 shadow-lg"
                    >
                      <CalendarCheck size={20} /> Book Your TEST Now <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-[#E6D3A3]/50 w-full relative">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#E6D3A3]/20 rounded-full blur-xl z-[-1]"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#264231] mb-8 text-center">Request a Callback</h3>

                  <form onSubmit={(e) => handleFormSubmit(e, "Hero Form")} className="space-y-5">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Name"
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#264231] outline-none transition-colors bg-white text-[#264231] text-base font-medium"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="Phone Number"
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#264231] outline-none transition-colors bg-white text-[#264231] text-base font-medium"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#800000] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#660000] transition-colors flex items-center justify-center gap-2 mt-2 shadow-md"
                    >
                      {submitting ? "Submitting..." : "Book Now"}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-sm text-[#3b5f4b] font-medium pt-3">
                      <Lock size={14} className="text-[#800000]" /> 🔒 Your information is 100% secure and confidential.
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════ MOBILE QUICK COST CALCULATOR ═══════════════════════ */}
      {/* This form is explicitly hidden on tablet/desktop devices (md:hidden) */}
      <section className="block md:hidden bg-[#f5f0e8] px-5 pt-10 pb-10">
        <div className="w-full max-w-md mx-auto space-y-5">
          {/* Top Call Button (Pill shaped, matching color scheme) */}
          <button
            onClick={() => window.open("tel:+919315991400")}
            className="w-full bg-[#E6D3A3] text-[#1a2e23] font-bold text-[15px] py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-[#d4c08f]"
          >
            <PhoneCall className="w-[18px] h-[18px]" />
            Talk to an Expert for Free
          </button>

          {/* Form Card */}
          <div className="bg-[#fcfbf9] rounded-[24px] p-6 border border-[#E6D3A3]/60">
            <h3 className="text-xl font-bold text-center text-[#264231] mb-5">
              Cost Calculator
            </h3>

            <form className="space-y-4" onSubmit={(e) => handleFormSubmit(e, "Cost Calculator")}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your Name *"
                  required
                  className="w-full border border-gray-300 rounded-full px-5 py-3.5 text-sm text-[#264231] focus:border-[#264231] focus:outline-none transition-colors bg-white"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="Mobile Number *"
                  required
                  className="w-full border border-gray-300 rounded-full px-5 py-3.5 text-sm text-[#264231] focus:border-[#264231] focus:outline-none transition-colors bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#800000] text-white py-4 rounded-full font-bold text-[15px] hover:bg-[#660000] transition-colors duration-300 mt-2 disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Get Cost Estimate Now"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative bg-[#264231] border-t-4 border-[#E6D3A3]">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 py-6 md:py-10">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-6 md:gap-8">
            {[
              { icon: <Users className="w-5 h-5 md:w-[26px] md:h-[26px]" />, value: "10,000+", label: "Happy Patients" },
              { icon: <Clock className="w-5 h-5 md:w-[26px] md:h-[26px]" />, value: "25+", label: "Years Experience" },
              { icon: <Heart className="w-5 h-5 md:w-[26px] md:h-[26px]" />, value: "100%", label: "Accurate Reports" },
              { icon: <Zap className="w-5 h-5 md:w-[26px] md:h-[26px]" />, value: "Same-Day", label: "Appointments" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center group px-0.5">
                <div className="w-9 h-9 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#E6D3A3]/15 mb-2 md:mb-3 text-[#E6D3A3] group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <span className="text-[13px] sm:text-2xl md:text-4xl font-bold text-white leading-tight">{s.value}</span>
                <span className="text-[9px] sm:text-xs md:text-base text-[#E6D3A3] font-medium mt-0.5 leading-[1.2]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 – WHY CHOOSE AYONI */}
      <section className="bg-[#F9F9F6] pt-8 pb-16 md:pt-20 md:pb-24 px-6" id="why-ayoni">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 text-[#800000] text-sm font-semibold tracking-wider uppercase mb-3"><BadgeCheck size={16} /> Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#264231] leading-tight">Why Choose <span className="text-[#800000]">Ayoni Clinic</span>?</h2>
            <div className="flex items-center gap-3 justify-center mt-5">
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div>
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-[#E6D3A3]/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-3">
                <span className="text-4xl">{f.icon}</span>
                <h3 className="text-lg font-bold text-[#264231]">{f.title}</h3>
                <p className="text-[#3b5f4b] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-3 bg-[#264231] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#1a2e23] transition-all duration-300 group">
              Talk to Our Expert Today <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 – SERVICES */}
      <section className="bg-white py-16 md:py-24 px-6" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 text-[#800000] text-sm font-semibold tracking-wider uppercase mb-3"><Stethoscope size={16} /> What We Offer</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#264231] leading-tight">Comprehensive Ultrasound Services <br className="hidden md:block" /><span className="text-[#800000]">Under One Roof</span></h2>
            <div className="flex items-center gap-3 justify-center mt-5">
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div>
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
            </div>
          </div>
          {/* First 4 cards — 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.slice(0, 4).map((s, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-10 border border-[#E6D3A3]/40 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center gap-5 group">
                <div className="text-5xl bg-gradient-to-br from-[#fcf9f2] to-white p-5 rounded-full shadow-inner border border-[#E6D3A3]/20 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-[#264231] leading-tight">{s.title}</h3>
                <ul className="space-y-2 w-full text-left">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-[#3b5f4b]">
                      <CheckCircle2 size={15} className="text-[#800000] shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 text-[#800000] font-bold text-sm mt-auto bg-[#800000]/5 px-5 py-2.5 rounded-full hover:bg-[#800000]/10 transition-all duration-300 hover:gap-3"
                >
                  Know More <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* 5th card — Twin Pregnancy, centered below */}
          <div className="flex justify-center mt-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-[2rem] p-10 border border-[#E6D3A3]/40 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center gap-5 group w-full sm:w-[calc(50%-1rem)]">
              <div className="text-5xl bg-gradient-to-br from-[#fcf9f2] to-white p-5 rounded-full shadow-inner border border-[#E6D3A3]/20 group-hover:scale-110 transition-transform duration-300">
                {services[4].icon}
              </div>
              <h3 className="text-xl font-bold text-[#264231] leading-tight">{services[4].title}</h3>
              <ul className="space-y-2 w-full text-left">
                {services[4].items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-[#3b5f4b]">
                    <CheckCircle2 size={15} className="text-[#800000] shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 text-[#800000] font-bold text-sm mt-auto bg-[#800000]/5 px-5 py-2.5 rounded-full hover:bg-[#800000]/10 transition-all duration-300 hover:gap-3"
              >
                Know More <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-3 bg-[#800000] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#660000] transition-all duration-300 group">
              👉 Find the Right Scan for You <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative bg-gradient-to-br from-[#264231] via-[#1a2e23] to-[#0f1d15] py-16 md:py-20 px-6 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#E6D3A3]/5"></div>
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#800000]/10"></div>
        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Book Your <span className="text-[#E6D3A3]">Ultrasound Scan</span> Today
          </h2>
          <div className="flex items-center justify-center gap-3 md:gap-5 text-base md:text-lg text-gray-300 font-medium">
            <span className="flex items-center gap-1.5"><Lock size={16} className="text-[#E6D3A3]" /> Safe</span>
            <span className="text-[#E6D3A3]">|</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-[#E6D3A3]" /> Accurate</span>
            <span className="text-[#E6D3A3]">|</span>
            <span className="flex items-center gap-1.5"><Zap size={16} className="text-[#E6D3A3]" /> Same-Day Reports</span>
          </div>
          <div className="pt-4 flex flex-row gap-3 sm:gap-4 justify-center">
            <button className="flex-1 inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#800000] text-white px-2 sm:px-10 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-lg hover:bg-[#660000] transition-all duration-300 whitespace-nowrap"
              onClick={() => window.open("tel:+919315991400")}>
              <PhoneCall className="w-[18px] h-[18px]" /> Call Now
            </button>
            <button className="flex-1 inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#25D366] text-white px-2 sm:px-10 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-lg hover:bg-[#1fb855] transition-all duration-300 whitespace-nowrap"
              onClick={() => window.open("https://wa.me/919315991400?text=Hi%2C%20I%20would%20like%20to%20book%20an%20ultrasound%20scan.", "_blank")}>
              <MessageCircle className="w-[18px] h-[18px]" /> WhatsApp Now
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 – MEET OUR EXPERTS */}
      <section className="bg-white pt-6 pb-16 md:pt-8 md:pb-24 px-6" id="doctors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#264231] leading-tight">Meet Our <span className="text-[#800000]">Experts</span></h2>
            <p className="text-lg text-[#3b5f4b] mt-3 font-medium">Experienced Specialists in Gurgaon</p>
            <div className="flex items-center gap-3 justify-center mt-5">
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div>
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Doctor 1 */}
            <div className="bg-[#f5f0e8] rounded-3xl overflow-hidden border border-[#E6D3A3]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#E6D3A3]/40 via-transparent to-[#264231]/20 rounded-t-3xl z-10"></div>
                <Image src="/doc1.png" alt="Dr. Gaayatri Bala Juneja" fill className="object-cover object-top" />
              </div>
              <div className="p-7 space-y-4 flex flex-col flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-[#264231]">Dr. Gaayatri Bala Juneja</h3>
                  <p className="text-[#800000] font-semibold mt-1">Senior Obstetrician & Gynecologist</p>
                </div>
                <div className="w-12 h-[3px] bg-[#E6D3A3]"></div>
                <ul className="space-y-2.5">
                  {["25+ Years of Experience", "Pregnancy & Women's Health Expert", "High-Risk Pregnancy Care", "Personalized Patient Care"].map((p, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-[#3b5f4b]">
                      <CheckCircle2 size={16} className="text-[#800000] shrink-0" />
                      <span className="text-sm md:text-base font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 mt-auto">
                  <button onClick={() => setOpen(true)} className="w-full inline-flex items-center justify-center gap-2 bg-[#264231] text-white px-6 py-3.5 rounded-xl font-bold text-base hover:bg-[#1a2e23] transition-all duration-300 group">
                    <CalendarCheck size={18} /> Request a Call Back <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
            {/* Doctor 2 */}
            <div className="bg-[#f5f0e8] rounded-3xl overflow-hidden border border-[#E6D3A3]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#E6D3A3]/40 via-transparent to-[#264231]/20 rounded-t-3xl z-10"></div>
                <Image src="/rajniesh.jpeg" alt="Dr. Rajnish Juneja" fill className="object-cover object-[center_20%]" />
              </div>
              <div className="p-7 space-y-4 flex flex-col flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-[#264231]">Dr. Rajnish Juneja</h3>
                  <p className="text-[#800000] font-semibold mt-1">Senior Radiologist | 30+ Years of Experience</p>
                </div>
                <div className="w-12 h-[3px] bg-[#E6D3A3]"></div>
                <ul className="space-y-2.5">
                  {["DNB (Radiodiagnosis)", "Expert in Ultrasound & Doppler Studies", "Pelvic Doppler & Infertility Specialist", "Trusted for Accurate Diagnostic Imaging"].map((p, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-[#3b5f4b]">
                      <CheckCircle2 size={16} className="text-[#800000] shrink-0" />
                      <span className="text-sm md:text-base font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 mt-auto">
                  <button onClick={() => setOpen(true)} className="w-full inline-flex items-center justify-center gap-2 bg-[#264231] text-white px-6 py-3.5 rounded-xl font-bold text-base hover:bg-[#1a2e23] transition-all duration-300 group">
                    <CalendarCheck size={18} /> Request a Call Back <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-3 bg-[#800000] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#660000] transition-all duration-300 group">
              👉 Consult Our Specialists <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* CREDENTIALS SECTION */}
      <section className="bg-[#f5f0e8] py-16 md:py-24 px-6" id="credentials">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#800000] text-sm font-semibold tracking-wider uppercase mb-3">
              <GraduationCap size={16} /> Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#264231] leading-tight">
              Qualifications &amp; Professional <span className="text-[#800000]">Credentials</span>
            </h2>
            <div className="flex items-center gap-3 justify-center mt-5">
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div>
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
            </div>
            <p className="text-lg text-[#3b5f4b] mt-6 max-w-3xl mx-auto leading-relaxed">
              Our experienced specialists are backed by recognized medical qualifications, advanced training, and decades of expertise in diagnostic imaging and women&apos;s healthcare.
            </p>
          </div>

          {/* Degree Photos Placeholder */}
          <div className="bg-white rounded-3xl border-2 border-dashed border-[#E6D3A3] p-10 md:p-16 flex flex-col items-center justify-center gap-5 text-center min-h-[260px]">
            <div className="w-16 h-16 rounded-full bg-[#800000]/10 flex items-center justify-center">
              <GraduationCap size={32} className="text-[#800000]" />
            </div>
            <p className="text-[#264231] font-bold text-xl">Degree & Certificate Photos</p>
            <p className="text-[#3b5f4b] text-base max-w-sm">
              Photos of the doctors&apos; degrees and professional certificates will be displayed here.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 – TESTIMONIALS */}
      <section className="relative bg-[#fcf9f2] py-16 md:py-24 px-6 overflow-hidden" id="reviews">
        <div className="absolute -top-20 right-10 w-64 h-64 rounded-full bg-[#E6D3A3]/20"></div>
        <div className="absolute -bottom-10 left-[-10%] w-64 h-64 rounded-full bg-[#264231]/5"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 text-[#800000] text-sm font-semibold tracking-wider uppercase mb-3"><Star size={16} /> Patient Reviews</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#264231] leading-tight">⭐ What Our <span className="text-[#800000]">Patients Say</span></h2>
            <p className="text-lg text-[#3b5f4b] mt-3 font-medium">Trusted by Women & Families Across Gurgaon</p>
            <div className="flex items-center gap-3 justify-center mt-5">
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div>
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-[#E6D3A3]/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4">
                <div className="flex gap-1">{[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-[#E6B800] fill-[#E6B800]" />)}</div>
                <p className="text-[#3b5f4b] text-base leading-relaxed italic">"{r.text}"</p>
                <p className="text-[#264231] font-bold mt-auto">{r.name}</p>
              </div>
            ))}
          </div>
          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm md:text-base font-medium text-[#264231]">
            <span className="flex items-center gap-2"><Star size={16} className="text-[#E6B800] fill-[#E6B800]" /> 4.9/5 Patient Rating</span>
            <span className="text-[#E6D3A3]">|</span>
            <span className="flex items-center gap-2"><HeartPulse size={16} className="text-[#800000]" /> Experienced Specialists</span>
            <span className="text-[#E6D3A3]">|</span>
            <span className="flex items-center gap-2"><Stethoscope size={16} className="text-[#800000]" /> Advanced Ultrasound Technology</span>
          </div>
          <div className="flex justify-center mt-10">
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-3 bg-[#264231] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#1a2e23] transition-all duration-300 group">
              👉 Experience Trusted Ultrasound Care <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ COST + INTENT SECTION ═══════════════════════ */}
      <section className="relative bg-[#fcf9f2] py-16 md:py-24 px-6 overflow-hidden" id="cost">
        {/* Decorative elements */}
        <div className="absolute -top-20 right-10 w-64 h-64 rounded-full bg-[#E6D3A3]/20"></div>
        <div className="absolute -bottom-10 left-[-10%] w-64 h-64 rounded-full bg-[#264231]/5"></div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Side (Desktop) / Entire Content Container (Mobile) */}
            <div className="text-center space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#800000]/10 rounded-full px-5 py-2">
                <IndianRupee size={16} className="text-[#800000]" />
                <span className="text-sm font-bold text-[#800000] tracking-wide uppercase">
                  Pricing & Cost
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#264231] leading-tight">
                Worried About <span className="text-[#800000]">Ultrasound Cost?</span>
              </h2>

              <div className="flex items-center gap-3 justify-center">
                <div className="w-12 h-[2px] bg-[#E6D3A3]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div>
                <div className="w-12 h-[2px] bg-[#E6D3A3]"></div>
              </div>

              <ul className="space-y-4 inline-block text-left mt-2">
                {costPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#264231] shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={16} className="text-[#E6D3A3]" />
                    </span>
                    <span className="text-base sm:text-[17px] text-[#3b5f4b] font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA (Hidden on Desktop) */}
              <div className="md:hidden pt-4 space-y-6">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#800000] text-white px-8 py-4 rounded-xl font-bold text-[17px] hover:bg-[#660000] transition-all duration-300 group"
                  onClick={() => setOpen(true)}
                >
                  Check Scan Cost Now
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-3 sm:gap-5 text-sm sm:text-[15px] text-[#3b5f4b] font-medium">
                  <span className="flex items-center gap-1.5">
                    <Lock size={16} className="text-[#800000]" /> Private
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-[#800000] shrink-0" /> Safe
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Smile size={16} className="text-[#800000]" /> No Judgement
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side Card (Hidden on Mobile) */}
            <div className="hidden md:flex justify-center md:justify-end">
              <div className="bg-white rounded-[32px] p-8 lg:p-10 w-full max-w-[420px] text-center shadow-lg border border-[#E6D3A3]/30 space-y-6 lg:space-y-7">
                <div className="w-16 h-16 mx-auto bg-[#264231] rounded-full flex items-center justify-center shadow-sm">
                  <IndianRupee size={28} className="text-[#E6D3A3]" />
                </div>

                <h3 className="text-[22px] lg:text-2xl font-bold text-[#264231] px-2 leading-snug">
                  Get Transparent<br />Ultrasound Pricing
                </h3>

                <p className="text-[#3b5f4b] text-[15px] leading-relaxed px-4">
                  No hidden charges. Know the exact cost before your scan.
                </p>

                <button
                  className="w-full flex items-center justify-center gap-3 bg-[#800000] text-white px-6 py-4 rounded-xl font-bold text-[17px] hover:bg-[#660000] transition-all duration-300 group mt-2 shadow-md hover:shadow-lg"
                  onClick={() => setOpen(true)}
                >
                  Check Scan Cost Now
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-3 lg:gap-4 text-[13px] text-[#3b5f4b] font-medium pt-2">
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <Lock size={14} className="text-[#800000]" /> Private
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <ShieldCheck size={14} className="text-[#800000]" /> Safe
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <Smile size={14} className="text-[#800000]" /> No Judgement
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 – FAQ */}
      <section className="bg-[#F9F9F6] py-16 md:py-24 px-6" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 text-[#800000] text-sm font-semibold tracking-wider uppercase mb-3"><ShieldCheck size={16} /> FAQs</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#264231] leading-tight">Frequently Asked <span className="text-[#800000]">Questions</span></h2>
            <p className="text-lg text-[#3b5f4b] mt-3 font-medium">Everything You Need to Know About Ultrasound</p>
            <div className="flex items-center gap-3 justify-center mt-5">
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div>
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
            </div>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#E6D3A3]/40 overflow-hidden shadow-sm">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-bold text-[#264231] text-base md:text-lg hover:bg-[#f5f0e8]/60 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <ChevronDown size={20} className={`text-[#800000] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-[#3b5f4b] text-base leading-relaxed border-t border-[#E6D3A3]/30 pt-4">{f.a}</div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-3 bg-[#800000] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#660000] transition-all duration-300 group">
              <CalendarCheck size={20} /> Book Your Scan Today <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7 – EXPLORE MORE SERVICES */}
      <section className="relative bg-gradient-to-br from-[#264231] via-[#1a2e23] to-[#0f1d15] py-16 md:py-24 px-6 overflow-hidden" id="explore">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#E6D3A3]/5"></div>
        <div className="absolute bottom-10 left-10 w-44 h-44 rounded-full bg-[#800000]/8"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 bg-[#E6D3A3]/20 border border-[#E6D3A3]/30 rounded-full px-5 py-2 mb-4">
              <HeartPulse size={16} className="text-[#E6D3A3]" />
              <span className="text-sm font-medium text-[#E6D3A3] tracking-wide uppercase">More Services</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">Explore More Women&apos;s <span className="text-[#E6D3A3]">Healthcare Services</span></h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Looking for More Than an Ultrasound? Ayoni Clinic offers complete women&apos;s healthcare under one roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-[#E6D3A3]/20 rounded-2xl p-8 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5">
              <span className="text-4xl">👩‍⚕️</span>
              <div>
                <h3 className="text-xl font-bold text-white">Gynecologist Consultation</h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">Get expert care for PCOS, irregular periods, pregnancy planning, menopause, infections, and overall women's health.</p>
              </div>
              <a href="/" className="inline-flex items-center gap-2 bg-[#E6D3A3] text-[#1a2e23] px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#d4c08f] transition-all duration-300 group mt-auto w-fit">
                Book a Consultation <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-[#E6D3A3]/20 rounded-2xl p-8 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5">
              <span className="text-4xl">🌸</span>
              <div>
                <h3 className="text-xl font-bold text-white">Vaginal Tightening Treatment</h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">Restore confidence with safe, advanced, and non-surgical vaginal rejuvenation treatments performed by experienced specialists.</p>
              </div>
              <a href="/VaginalTreatment" className="inline-flex items-center gap-2 bg-[#800000] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#660000] transition-all duration-300 group mt-auto w-fit">
                Learn More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
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
                Don&apos;t Ignore Your <span className="text-[#E6D3A3]">Symptoms</span> Anymore
              </h2>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-12 h-[2px] bg-[#E6D3A3]"></div>
                <div className="w-2 h-2 rounded-full bg-[#E6D3A3]"></div>
                <div className="w-12 h-[2px] bg-[#E6D3A3]"></div>
              </div>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
                Early diagnostic scans can prevent complications, ensuring <span className="text-white font-semibold">safety</span>, <span className="text-white font-semibold">accuracy</span> & <span className="text-white font-semibold">peace of mind</span>.
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
              <h3 className="text-2xl font-bold text-[#264231] mb-1">Book an Ultrasound Scan</h3>
              <p className="text-[#3b5f4b] text-sm mb-6">Fill in your details for a private appointment booking</p>

              <form className="space-y-4" onSubmit={(e) => handleFormSubmit(e, "Book Scan")}>
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
                  <label className="block text-sm font-semibold text-[#264231] mb-1.5">Select Scan Type</label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleFormChange}
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                  >
                    <option value="">Choose a scan type</option>
                    <option>Early Pregnancy Scan</option>
                    <option>NT Scan</option>
                    <option>Level 2 Scan</option>
                    <option>Growth Scan</option>
                    <option>Fetal Echo</option>
                    <option>TVS Scan</option>
                    <option>Pelvic Ultrasound</option>
                    <option>Follicular Study</option>
                    <option>Abdomen Scan</option>
                    <option>KUB Scan</option>
                    <option>Thyroid Scan</option>
                    <option>Color Doppler</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#800000] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#660000] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-3"
                >
                  {submitting ? "Submitting..." : (
                    <>
                      <CalendarCheck size={20} />
                      Book My Scan Now
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footervt />
      <AppointmentModalUS open={open} onClose={() => setOpen(false)} />
    </>
  );
}
