"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AppointmentModal({ open, onClose }) {
  const router = useRouter();

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzMLfAM_N-c9q2GDcm9Q9o1iTFggrdD3aer3O3e0w5JrlWWa80fOED2yFPa0iGptcssUg/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    apointmentType: "Offline Consultation",
    day: "",
    date: "",
    slot: "",
    msg: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
    if (diff <= 0) diff += 7;

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

    if (day === "Monday" || day === "Wednesday") add(9, 14);
    if (day === "Friday") add(12, 14);

    slots.push(`${formatTo12Hour(18, 30)} - ${formatTo12Hour(19, 30)}`);
    slots.push(`${formatTo12Hour(19, 30)} - ${formatTo12Hour(20)}`);

    return slots;
  };

  // SUBMIT → UNPAID SHEET
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const postData = new FormData();
    Object.entries(formData).forEach(([k, v]) =>
      postData.append(k, v)
    );
    postData.append("isPaid", "false");

    await fetch(scriptURL, {
      method: "POST",
      body: postData,
      mode: "no-cors",
    });

    setSubmitting(false);
    setShowPaymentPopup(true);
  };

  // PAY ₹49
  const handlePayment = async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 49 }),
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Appointment Confirmation",
      order_id: order.id,
      handler: async (response) => {
        const paidData = new FormData();
        Object.entries(formData).forEach(([k, v]) =>
          paidData.append(k, v)
        );

        paidData.append("isPaid", "true");
        paidData.append("paymentId", response.razorpay_payment_id);

        await fetch(scriptURL, {
          method: "POST",
          body: paidData,
          mode: "no-cors",
        });

        router.push("/thankyou");
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: { color: "#800000" },
    };

    new window.Razorpay(options).open();
  };

  const skipPayment = () => {
    router.push("/thankyou");
  };

  return (
    <>
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
        <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500"
          >
            <X size={22} />
          </button>

          <div className="grid md:grid-cols-2">
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

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-3 rounded-lg"
                  placeholder="Name"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-3 rounded-lg"
                  placeholder="Email"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-3 rounded-lg"
                  placeholder="Phone"
                />

                {/* Appointment Type */}
                <div className="flex gap-6 text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="appointmentType"
                      value="Online Consultation"
                      checked={formData.apointmentType === "Online Consultation"}
                      onChange={handleChange}
                    />
                    Online Consultation
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="appointmentType"
                      value="Offline Consultation"
                      checked={formData.apointmentType === "Offline Consultation"}
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
                  className="w-full border px-4 py-3 rounded-lg"
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
                  className="w-full border px-4 py-3 rounded-lg"
                >
                  <option value="">Select Day</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                </select>

                {/* Slot */}
                <select
                  name="slot"
                  value={formData.slot}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-3 rounded-lg"
                >
                  <option value="">Select Slot</option>
                  {getSlotsForDay(formData.day).map((s, i) => (
                    <option key={i}>{s}</option>
                  ))}
                </select>

                <button
                  disabled={submitting}
                  className="w-full bg-[#800000] text-white py-3 rounded-lg"
                >
                  {submitting ? "Submitting..." : "Book Appointment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* PAYMENT POPUP */}
      {showPaymentPopup && (
        <div className="fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white max-w-md w-full rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#800000]">
              Confirm Appointment
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Pay <strong>₹49</strong> to confirm your appointment and get
              <strong> 30% off</strong>.
            </p>

            <div className="mt-6 flex gap-3">
              {/* <button
                onClick={skipPayment}
                className="w-1/2 border py-2 rounded"
              >
                Skip
              </button> */}
              <button
                onClick={handlePayment}
                className="w-1/2 mx-auto bg-[#800000] text-white py-2 rounded"
              >
                Pay ₹49
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
