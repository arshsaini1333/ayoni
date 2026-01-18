"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AppointmentModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentType: "Clinic Visit",
    message: "",
  });

  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const scriptURL = "https://script.google.com/macros/s/AKfycbzfyF6w7tgPN5S3R-6QiDPpPIiBWDTQ02lal0M4SbEAqEWhn9zGOArnbx3jJIW0Dh67UA/exec"
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitting(true);

    const postData = new FormData();
    postData.append('name', formData.name);
    postData.append('email', formData.email);
    postData.append('phone', formData.phone);
    postData.append('msg', formData.message);
    postData.append('apointmentType', formData.appointmentType);
   

    fetch(scriptURL, {
      method: 'POST',
      body: postData,
      mode: 'no-cors'
    })
      .then(() => {
        
        setSubmitting(false);
        setFormData({ name: '', email: '', phone: '', message: '', appointmentType: "" });
        router.push("/thankyou");
      })
      .catch(() => {
        
        setSubmitting(false);
      });
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
      
      {/* Modal Box */}
      <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          type="button"
        >
          <X size={22} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left Image (Desktop only) */}
          <div className="relative hidden md:block">
            <Image
              src="/doc3.jpeg"
              alt="Doctor Consultation"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-[#800000]">
              Book Your Appointment
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Confidential & personalised care
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>

              {/* Name */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#800000]"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#800000]"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#800000]"
              />

              {/* Appointment Type */}
              <div className="flex gap-6 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="appointmentType"
                    value="Online Consultation"
                    checked={formData.appointmentType === "Online Consultation"}
                    onChange={handleChange}
                    required
                  />
                  Online Consultation
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

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Describe your concern"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#800000]"
              />

              {/* CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="
                  w-full bg-[#800000] text-white py-3 rounded-lg
                  font-medium transition
                  hover:opacity-90
                  disabled:opacity-60
                "
              >
                {submitting ? "Submitting..." : "Book Appointment"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Your details are safe and confidential
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
