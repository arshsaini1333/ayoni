"use client";

import { useEffect } from "react";

const reels = [
  "https://www.instagram.com/reel/DKREdIXOtMF/",
  "https://www.instagram.com/reel/DG3Y3F0zBS8/",
  "https://www.instagram.com/reel/DGifEhJyBU3/",
  "https://www.instagram.com/reel/DF7zOpVS0Co/",
];

export default function Testimonials() {
  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="py-20 px-4 bg-white" id="testimonials">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2
          className="text-3xl md:text-5xl font-semibold"
          style={{ color: "#800000" }}
        >
          What Our Patients Are Saying
        </h2>
        <p
          className="mt-3 text-sm md:text-base"
          style={{ color: "#111" }}
        >
          Honest experiences shared by women who chose care, comfort, and
          confidence.
        </p>
      </div>

      {/* Reels Grid */}
      <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4">
        {reels.map((url, index) => (
          <div
            key={index}
            className="aspect-square  border border-gray-200 bg-white shadow-sm  flex items-center justify-center h-fit"
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                width: "100%",
                minWidth: "0",
                margin: "0 auto",
              }}
            ></blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
