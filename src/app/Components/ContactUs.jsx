"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "",
    appointmentType: "Clinic Visit",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      alert("Thank you for visiting. Our team will connect with you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        concern: "",
        appointmentType: "",
      });
    }, 1000);
  };

  return (
    <section className="w-full py-12 md:py-16 px-4 bg-[#F8FCFC]" id="contact">
      <div className="w-full md:w-[95%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg bg-white">

          {/* Left Side – Image */}
          <div className="relative h-[240px] sm:h-[300px] md:h-auto">
            <Image
              src="/ayonicure.png"
              alt="Lady doctor interacting calmly with patient"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side – Form */}
          <div className="p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#800000]">
              Book Your Private Consultation
            </h2>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>

              {/* Name */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#800000]"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#800000]"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#800000]"
              />

              {/* Appointment Type */}
              <div className="flex gap-6 text-sm sm:text-base">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="appointmentType"
                    value="Online Appointment"
                    checked={formData.appointmentType === "Online Appointment"}
                    onChange={handleChange}
                    required
                  />
                  Online Appointment
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="appointmentType"
                    value="Clinic Visit"
                    checked={formData.appointmentType === "Clinic Visit"}
                    onChange={handleChange}
                    required
                  />
                  Clinic Visit
                </label>
              </div>

              {/* Concern Dropdown */}
              <select
                name="concern"
                value={formData.concern}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base bg-white focus:outline-none focus:border-[#800000]"
              >
                <option value="">Select Your Concern</option>
                <option>PCOS / Irregular Periods</option>
                <option>Pregnancy Care</option>
                <option>Menopause Issues</option>
                <option>Hormonal Imbalance</option>
                <option>General Gynaecology Consultation</option>
              </select>

              {/* CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#800000] text-white py-3 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Book Confidential Appointment"}
              </button>

              {/* Privacy Line */}
              <p className="text-xs text-gray-500 text-center pt-2">
                Your details are safe and will never be shared.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
