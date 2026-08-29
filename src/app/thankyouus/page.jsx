"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ThankYouUSPage() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "thankyou_us_page",
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#264231] px-4">
      <div className="w-[80%] mx-auto text-center bg-[#264231]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#CFAA75]">
          Thank you for booking your Ultrasound appointment.
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white leading-relaxed">
          You will be consulting with experienced specialists with 25+ years of
          diagnostic imaging expertise. <br />
          Our team will contact you shortly to confirm your appointment.
        </p>

        <div className="mt-8">
          <Link
            href="/Ultrasound"
            className="inline-flex items-center justify-center bg-[#CFAA75] text-[#264231] px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Go Back to Ultrasound Page
          </Link>
        </div>
      </div>
    </section>
  );
}
