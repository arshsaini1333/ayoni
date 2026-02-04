"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useAppointmentPayment(formData, scriptURL) {
  const router = useRouter();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const submitUnpaid = async () => {
    const data = new FormData();
    Object.entries(formData).forEach(([k, v]) => data.append(k, v));
    data.append("isPaid", "false");

    await fetch(scriptURL, {
      method: "POST",
      body: data,
      mode: "no-cors",
    });

    setShowPaymentModal(true);
  };

  const payNow = async () => {
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
      theme: { color: "#800000" },
    };

    new window.Razorpay(options).open();
  };

  const skipPayment = () => {
    router.push("/thankyou");
  };

  return {
    showPaymentModal,
    setShowPaymentModal,
    submitUnpaid,
    payNow,
    skipPayment,
  };
}
