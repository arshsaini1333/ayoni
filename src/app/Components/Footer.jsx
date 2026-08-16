"use client";

import {
  Phone,
  Globe,
  MapPin,
  Instagram,
  Facebook,
  Linkedin
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1F3F2B] text-[#E6D3A3]">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand / Summary */}
          <div>
            <Image
              src="/Ayoni.png"
              alt="Ayoni Clinic"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-sm text-[#E6D3A3]/80 leading-relaxed">
              Ayoni Clinic offers compassionate, confidential and expert
              gynaecological care for women at every stage of life. Our focus is
              on comfort, clarity and complete well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#hero" className="hover:text-white">Home</Link></li>
              <li><Link href="#ourSpecialist" className="hover:text-white">Meet Your Specialist</Link></li>
              <li><Link href="#whyUS" className="hover:text-white">Why ayoni clinic ?</Link></li>
              
              <li><Link href="#testimonials" className="hover:text-white">Testimonials</Link></li>
              <li><Link href="#certificates" className="hover:text-white">Certifications & Accreditations</Link></li>
              <li><Link href="#contactUS" className="hover:text-white">Contact us</Link></li>
            </ul>
          </div>

          {/* Map */}
        <div className="md:col-span-1">
  <h4 className="text-white font-semibold mb-4">Our Locations</h4>

  <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
    <div>
      <p className="font-medium text-white mb-1 ">Delhi</p>
      <p className="text-[#E6D3A3]/80">
        F14/69 Ground Floor, Model Town Phase 2,
        Delhi, 110033
      </p>
    </div>

    <div>
      <p className="font-medium text-white mb-1 text-[#E6D3A3]/80">Gurugram</p>
      <p className="text-[#E6D3A3]/80">
        R2, M3M 65th Avenue, First Floor, 128,
        Golf Course Ext Rd, Gurugram,
        Haryana 122102
      </p>
    </div>
  </div>
</div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={16} />
                <a href="tel:+919315991400" className="hover:text-white">
                  +91 9315991400
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Globe size={16} />
                <a
                  href="https://ayoniclinic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  www.ayoniclinic.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} />
                <span>Delhi NCR, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E6D3A3]/30 mt-10 pt-6 text-center text-xs text-[#E6D3A3]/70">
          © {new Date().getFullYear()} Ayoni Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
