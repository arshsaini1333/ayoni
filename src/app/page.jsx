"use client";

import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import QuickTrustBar from "./Components/QuickTrustBar";
import ServicesInclude from "./Components/TreatmentAreas";
import WhyAyoni from "./Components/WhyAyoni";
import Testimonials from "./Components/Testimonials";
import ContactUs from "./Components/ContactUs";
import DoctorCertificates from "./Components/DocterCertificates";
import AppointmentModal from "./Components/ContactPopUp";
import Footer from "./Components/Footer";

export default function Home() {
  const [open, setOpen] = useState(false);
  // 🔹 Auto open modal after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <>
      <Navbar openModal={() => setOpen(true)} />

      <Hero openModal={() => setOpen(true)} />

      <About />

      <QuickTrustBar />

      <ServicesInclude />

      <WhyAyoni openModal={() => setOpen(true)} />

      <Testimonials />

      <DoctorCertificates />

      <ContactUs openModal={() => setOpen(true)} />

      <Footer />

      {/* Modal */}
      <AppointmentModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
