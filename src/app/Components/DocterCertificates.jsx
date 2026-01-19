import Image from "next/image";
import { FileText } from "lucide-react";

const certificates = [
  { img: "/c1.webp", pdf: "/c1.pdf" },
  { img: "/c2.webp", pdf: "/c2.pdf" },
  { img: "/c3.webp", pdf: "/c3.pdf" },
  { img: "/c4.webp", pdf: "/c4.pdf" },
  { img: "/c5.webp", pdf: "/c5.pdf" },
  { img: "/c6.webp", pdf: "/c6.pdf" },
  { img: "/c7.webp", pdf: "/c7.pdf" },
  { img: "/c8.jpeg", pdf: "/c8.pdf" }
];

export default function DoctorCertificates() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4">
      <div className="w-full md:w-[90%] mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#800000]">
            Certifications & Accreditations
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 uppercase tracking-wide">
            Verified Medical Credentials
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition"
            >
              <div className="relative w-full h-[240px] sm:h-[220px] md:h-[220px]">
                <Image
                  src={cert.img}
                  alt={`Doctor Certificate ${index + 1}`}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <FileText size={18} />
                  View Certificate
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
