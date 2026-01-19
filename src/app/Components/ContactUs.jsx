"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactUs() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "",
    appointmentType: "Clinic Visit",
    day: "",
    date: "",
    slot: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-calculate date when day changes
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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Get next upcoming date for selected day
  const getNextDateForDay = (selectedDay) => {
    const daysMap = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };

    const today = new Date();
    const todayDay = today.getDay();
    const targetDay = daysMap[selectedDay];

    let diff = targetDay - todayDay;
    if (diff <= 0) diff += 7;

    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + diff);

    return nextDate.toISOString().split("T")[0];
  };

  // 🔹 Gurgaon clinic slot logic
  const getSlotsForDay = (day) => {
    if (!day) return [];

    let slots = [];

    const addHourlySlots = (start, end) => {
      let current = start;
      while (current < end) {
        slots.push(`${current}:00 - ${current + 1}:00`);
        current++;
      }
    };

    // Morning slots
    if (day === "Monday" || day === "Wednesday") {
      addHourlySlots(9, 14);
    }

    if (day === "Friday") {
      addHourlySlots(12, 14);
    }

    // Evening slots (all days)
    slots.push("6:30 PM - 7:30 PM");
    slots.push("7:30 PM - 8:00 PM");

    return slots;
  };

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxSsxgIQYLBKXapezQjL8uvWGjpcDYTeAE28R7m_dXjoBUKTD6uKoWvNdasi4xdnBKnWg/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const postData = new FormData();
    postData.append("name", formData.name);
    postData.append("email", formData.email);
    postData.append("phone", formData.phone);
    postData.append("msg", formData.concern);
    postData.append("appointmentType", formData.appointmentType);
    postData.append("day", formData.day);
    postData.append("date", formData.date); // auto-calculated
    postData.append("slot", formData.slot);

    fetch(scriptURL, {
      method: "POST",
      body: postData,
      mode: "no-cors",
    })
      .then(() => {
        setSubmitting(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          concern: "",
          appointmentType: "Clinic Visit",
          day: "",
          date: "",
          slot: "",
        });
        router.push("/thankyou");
      })
      .catch(() => {
        setSubmitting(false);
      });
  };

  return (
    <section className="w-full py-12 md:py-16 px-4 bg-[#F8FCFC]" id="contact">
      <div className="w-full md:w-[95%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg bg-white">

          {/* Left Image */}
          <div className="relative h-[240px] sm:h-[300px] md:h-auto">
            <Image
              src="/ayonicure.png"
              alt="Lady doctor interacting calmly with patient"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Form */}
          <div className="p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#800000]">
              Book Your Private Consultation
            </h2>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border rounded-lg px-4 py-3"
              />

              {/* Day */}
              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 bg-white"
              >
                <option value="">Select Day</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>

              {/* Slot */}
              <select
                name="slot"
                value={formData.slot}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 bg-white"
              >
                <option value="">Select Time Slot</option>
                {getSlotsForDay(formData.day).map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>

              {/* Appointment Type */}
              <div className="flex gap-6 text-sm sm:text-base">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="appointmentType"
                    value="Online Appointment"
                    checked={formData.appointmentType === "Online Appointment"}
                    onChange={handleChange}
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
                  />
                  Clinic Visit
                </label>
              </div>

              {/* Concern */}
              <select
                name="concern"
                value={formData.concern}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 bg-white"
              >
                <option value="">Select Your Concern</option>
                <option>PCOS / Irregular Periods</option>
                <option>Pregnancy Care</option>
                <option>Menopause Issues</option>
                <option>Hormonal Imbalance</option>
                <option>General Gynaecology Consultation</option>
              </select>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#800000] text-white py-3 rounded-lg font-medium hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Book Confidential Appointment"}
              </button>

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
