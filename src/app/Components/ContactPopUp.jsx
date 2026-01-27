"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AppointmentModal({ open, onClose }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentType: "Clinic Visit",
    day: "",
    date: "",
    slot: "",
    reason: "",
  });

  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If day changes, auto-calculate next date
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

  const formatTo12Hour = (hour, minute = 0) => {
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const formattedMinute = minute.toString().padStart(2, "0");
    return `${formattedHour}:${formattedMinute} ${period}`;
  };

  // 🔹 Gurgaon clinic slot logic
const getSlotsForDay = (day) => {
  if (!day) return [];

  let slots = [];

  const addHourlySlots = (start, end) => {
    let current = start;
    while (current < end) {
      const startTime = formatTo12Hour(current);
      const endTime = formatTo12Hour(current + 1);
      slots.push(`${startTime} - ${endTime}`);
      current++;
    }
  };

  // Morning slots
  if (day === "Monday" || day === "Wednesday") {
    addHourlySlots(9, 14); // 9 AM - 2 PM
  }

  if (day === "Friday") {
    addHourlySlots(12, 14); // 12 PM - 2 PM
  }

  // Evening slots
  slots.push(
    `${formatTo12Hour(18, 30)} - ${formatTo12Hour(19, 30)}`
  );
  slots.push(
    `${formatTo12Hour(19, 30)} - ${formatTo12Hour(20, 0)}`
  );

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
    postData.append("appointmentType", formData.appointmentType);
    postData.append("day", formData.day);
    postData.append("date", formData.date); // auto-calculated
    postData.append("slot", formData.slot);
    postData.append("msg", formData.reason);

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
          appointmentType: "Clinic Visit",
          day: "",
          date: "",
          slot: "",
          reason: "",
        });
        router.push("/thankyou");
      })
      .catch(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          type="button"
        >
          <X size={22} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative hidden md:block">
            <Image
              src="/doc3.jpeg"
              alt="Doctor Consultation"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-[#800000]">
              Book Your Appointment
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Confidential & personalised care
            </p>

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
                className="w-full border rounded-lg px-4 py-3"
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
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value="">Select Time Slot</option>
                {getSlotsForDay(formData.day).map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>

              {/* Reason */}
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value="">Select Your Concern</option>
                <option>PCOS / Irregular Periods</option>
                <option>Pregnancy Care</option>
                <option>Menopause Issues</option>
                <option>Hormonal Imbalance</option>
                <option>General Gynaecology Consultation</option>
              </select>

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
                    value="Clinic Visit"
                    checked={formData.appointmentType === "Clinic Visit"}
                    onChange={handleChange}
                  />
                  Clinic Visit
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#800000] text-white py-3 rounded-lg font-medium hover:opacity-90 disabled:opacity-60"
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
