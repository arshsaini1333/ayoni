"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AppointmentModalDelhi({ open, onClose }) {
  const router = useRouter();

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

  if (!open) return null;

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

    if (day === "Tuesday" || day === "Thursday" || day === "Saturday") add(8, 11);

    return slots;
  };

  // SUBMIT → DELHI CLINIC SHEET
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
    postData.append("formType", "Ayoni Clinic Delhi - Book Appointment");

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
                src="/doc3.jpeg"
                alt="Gynecologist at Ayoni Clinic Delhi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#264231]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-[#E6D3A3]">
                <p className="text-xs font-semibold tracking-wide">AYONI CLINIC &bull; DELHI</p>
                <p className="text-sm mt-1">25+ Years of Experience in Women&rsquo;s Healthcare</p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-[#800000]">
                Book Your Delhi Clinic Appointment
              </h3>
              <p className="text-sm text-[#3b5f4b] mt-1 mb-4">
                Confidential consultation with our senior gynecologist in Delhi.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                  placeholder="Name"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                  placeholder="Email"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                  placeholder="Phone"
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
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg bg-white text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
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
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg bg-white text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                >
                  <option value="">Select Day</option>
                  <option>Tuesday</option>
                  <option>Thursday</option>
                  <option>Saturday</option>
                </select>

                {/* Slot */}
                <select
                  name="slot"
                  value={formData.slot}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg bg-white text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                >
                  <option value="">Select Slot</option>
                  {getSlotsForDay(formData.day).map((s, i) => (
                    <option key={i}>{s}</option>
                  ))}
                </select>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#800000] text-white py-3 rounded-lg font-bold hover:bg-[#660000] transition-all duration-300 disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Book Appointment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
