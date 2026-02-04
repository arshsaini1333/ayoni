import { X } from "lucide-react";

export default function PaymentConfirmModal({
  open,
  onClose,
  onPay,
  onSkip,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full rounded-xl p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X size={18} />
        </button>

        <h3 className="text-xl font-semibold text-[#800000]">
          Confirm Your Appointment
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          Pay <strong>₹49</strong> to confirm your appointment and get
          <strong> 30% off</strong>.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onSkip}
            className="w-1/2 border py-2 rounded"
          >
            Skip
          </button>

          <button
            onClick={onPay}
            className="w-1/2 bg-[#800000] text-white py-2 rounded"
          >
            Pay ₹49
          </button>
        </div>
      </div>
    </div>
  );
}
