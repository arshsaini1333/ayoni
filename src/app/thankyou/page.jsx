"use client";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#264231] px-4">
      <div className="max-w-xl w-full text-center bg-[#264231]">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#CFAA75]">
          Thank You for Visiting
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-base sm:text-lg text-white leading-relaxed">
          Our team has received your details and will connect with you shortly.
          We look forward to taking care of you.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center
              bg-[#CFAA75]
              text-[#264231]
              px-8 py-3
              rounded-lg
              font-medium
              hover:opacity-90
              transition
            "
          >
            Go Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
}
