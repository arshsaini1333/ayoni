"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AppointmentModalUS({ open, onClose }) {
  const router = useRouter();

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzbGwAy-gxBp5_UF2Th6a4kPGJ0m0tl2vj8fcbBHa38ht0PPnJSRH99GEBWHrkNzHkyuA/exec";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    msg: "",
  });

  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const postData = new URLSearchParams();
    postData.append("name", formData.name);
    postData.append("phone", formData.phone);
    postData.append("msg", formData.msg || "Ultrasound Inquiry");
    postData.append("formType", "Ultrasound Appointment");

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
    router.push("/thankyouus");
  };

  return (
    <>
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
        <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
          >
            <X size={22} />
          </button>

          <div className="grid md:grid-cols-2">
            <div className="relative hidden md:block">
              <Image
                src="/doc1.png"
                alt="Ultrasound Specialist Consultation"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-[#800000]">
                Book Your Ultrasound
              </h3>
              <p className="text-sm text-[#3b5f4b] mt-1 mb-6">
                Fill in your details and we'll call you back shortly.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                  placeholder="Your Name *"
                />

                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                  placeholder="Phone Number *"
                />

                <select
                  name="msg"
                  value={formData.msg}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg bg-white text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                >
                  <option value="">Select Scan Type</option>
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

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#800000] text-white py-3 rounded-lg font-bold text-base hover:bg-[#660000] transition-all duration-300 disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Book Appointment"}
                </button>
              </form>

              <div className="flex items-center gap-2 justify-center mt-5 text-xs text-gray-500">
                <span>🔒 Your information is 100% secure and confidential.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
