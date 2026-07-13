const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'Ultrasound', 'page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// ── 1. formData state: add branch field ──────────────────────────────────────
content = content.replace(
  `const [formData, setFormData] = useState({ name: "", phone: "", treatment: "" });`,
  `const [formData, setFormData] = useState({ name: "", phone: "", treatment: "", branch: "" });`
);

// ── 2. handleFormSubmit: append branch ───────────────────────────────────────
content = content.replace(
  `    params.append("msg", formType === "Cost Calculator" ? "Cost Inquiry" : formData.treatment || "General Inquiry");\n    params.append("formType", formType);`,
  `    params.append("msg", formType === "Cost Calculator" ? "Cost Inquiry" : formData.treatment || "General Inquiry");\n    params.append("branch", formData.branch || "");\n    params.append("formType", formType);`
);

// ── 3. reset branch in setFormData ──────────────────────────────────────────
content = content.replace(
  `setFormData({ name: "", phone: "", treatment: "" });`,
  `setFormData({ name: "", phone: "", treatment: "", branch: "" });`
);

// ── 4. Services array: reorder (General, Doppler, Pregnancy, Women's, Twin) ──
content = content.replace(
  `  const services = [\n    { icon: "🤰", title: "Pregnancy Ultrasound", items: ["Early Pregnancy Scan", "NT Scan", "Level II Anomaly Scan", "Fetal Echo", "Growth Scan", "Third Trimester Scan", "Biophysical Profile", "AFI Scan"] },\n    { icon: "👩", title: "Women's Health & Fertility", items: ["TVS Scan", "Pelvic Ultrasound", "Follicular Monitoring", "Antral Follicle Count", "Infertility Assessment"] },\n    { icon: "🩺", title: "General Diagnostic Ultrasound", items: ["Whole Abdomen", "Upper Abdomen", "Lower Abdomen", "KUB Scan", "Thyroid Scan", "Breast Ultrasound", "Chest Ultrasound", "Soft Tissue Ultrasound", "Eye Ultrasound"] },\n    { icon: "❤️", title: "Doppler Ultrasound", items: ["Arterial Doppler", "Venous Doppler", "Carotid Doppler", "Renal Doppler", "Portal Doppler", "Pelvic Doppler", "AV Fistula Mapping"] },\n    { icon: "👶👶", title: "Twin Pregnancy Ultrasound", items: ["Twin NT Scan", "Twin Level II Scan", "Twin Growth Scan", "Twin Fetal Echo", "Twin Doppler"] },\n  ];`,
  `  const services = [\n    { icon: "🩺", title: "General Diagnostic Ultrasound", items: ["Whole Abdomen", "Upper Abdomen", "Lower Abdomen", "KUB Scan", "Thyroid Scan", "Breast Ultrasound", "Chest Ultrasound", "Soft Tissue Ultrasound", "Eye Ultrasound"] },\n    { icon: "❤️", title: "Doppler Ultrasound", items: ["Arterial Doppler", "Venous Doppler", "Carotid Doppler", "Renal Doppler", "Portal Doppler", "Pelvic Doppler", "AV Fistula Mapping"] },\n    { icon: "🤰", title: "Pregnancy Ultrasound", items: ["Early Pregnancy Scan", "NT Scan", "Level II Anomaly Scan", "Fetal Echo", "Growth Scan", "Third Trimester Scan", "Biophysical Profile", "AFI Scan"] },\n    { icon: "👩", title: "Women's Health & Fertility", items: ["TVS Scan", "Pelvic Ultrasound", "Follicular Monitoring", "Antral Follicle Count", "Infertility Assessment"] },\n    { icon: "👶👶", title: "Twin Pregnancy Ultrasound", items: ["Twin NT Scan", "Twin Level II Scan", "Twin Growth Scan", "Twin Fetal Echo", "Twin Doppler"] },\n  ];`
);

// ── 5. Stats strip: Same-Day → Advanced Technology ──────────────────────────
content = content.replace(
  `{ icon: <Zap className="w-5 h-5 md:w-[26px] md:h-[26px]" />, value: "Same-Day", label: "Appointments" },`,
  `{ icon: <Zap className="w-5 h-5 md:w-[26px] md:h-[26px]" />, value: "Advanced", label: "Technology" },`
);

// ── 6. Why choose us tile: Same-Day Appointments → Ultrasound Scan by Appointment Only ──
content = content.replace(
  `{ icon: "⚡", title: "Same-Day Appointments", desc: "Quick scheduling with minimal waiting" },`,
  `{ icon: "⚡", title: "Ultrasound Scan by Appointment Only", desc: "Dedicated time slots ensuring focused, quality care for every patient" },`
);

// ── 7. CTA banner: Same-Day Reports → Advanced Technology ───────────────────
content = content.replace(
  `<span className="flex items-center gap-1.5"><Zap size={16} className="text-[#E6D3A3]" /> Same-Day Reports</span>`,
  `<span className="flex items-center gap-1.5"><Zap size={16} className="text-[#E6D3A3]" /> Advanced Technology</span>`
);

// ── 8. Doctors section button: Specialists → Specialist ─────────────────────
content = content.replace(
  `👉 Consult Our Specialists <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />`,
  `👉 Consult Our Specialist <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />`
);

// ── 9. Contact form: replace scan type dropdown + add branch ─────────────────
const oldForm = `                <div>
                  <label className="block text-sm font-semibold text-[#264231] mb-1.5">Select Scan Type</label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleFormChange}
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                  >
                    <option value="">Choose a scan type</option>
                    <option>Early Pregnancy Scan</option>
                    <option>NT Scan</option>
                    <option>Level 2 Scan</option>
                    <option>Growth Scan</option>
                    <option>Fetal Echo</option>
                    <option>TVS Scan</option>
                    <option>Pelvic Ultrasound</option>
                    <option>Follicular Study</option>
                    <option>Abdomen Scan</option>
                    <option>KUB Scan</option>
                    <option>Thyroid Scan</option>
                    <option>Color Doppler</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <button`;

const newForm = `                <div>
                  <label className="block text-sm font-semibold text-[#264231] mb-1.5">Select Ultrasound Service <span className="text-[#800000]">*</span></label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleFormChange}
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="General Diagnostic Ultrasound">General Diagnostic Ultrasound</option>
                    <option value="Doppler Ultrasound">Doppler Ultrasound</option>
                    <option value="Women's Health Ultrasound">Women&apos;s Health Ultrasound</option>
                    <option value="Pregnancy Ultrasound">Pregnancy Ultrasound</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#264231] mb-1.5">Preferred Branch <span className="text-[#800000]">*</span></label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleFormChange}
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white text-[#264231] focus:border-[#264231] focus:outline-none transition-colors"
                  >
                    <option value="">Select a branch</option>
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>

                <button`;

content = content.replace(oldForm, newForm);

// ── 10. Remove "Explore More Services" section entirely ──────────────────────
const exploreStart = content.indexOf('      {/* SECTION 7 \u2013 EXPLORE MORE SERVICES */}');
const locationsMarker = '\n\n      {/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 OUR LOCATIONS SECTION \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */}';
const contactMarker = '      {/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 CONTACT FORM SECTION \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */}';

if (exploreStart !== -1) {
  // Find the contact form marker after the explore section
  const contactStart = content.indexOf(contactMarker, exploreStart);
  if (contactStart !== -1) {
    content = content.slice(0, exploreStart) + content.slice(contactStart);
    console.log('Removed Explore More Services section');
  } else {
    console.log('Could not find contact marker after explore section');
  }
} else {
  console.log('Explore section not found (may already be removed)');
}

// ── 11. Add Locations section before Footervt ────────────────────────────────
const footervtMarker = '      <Footervt />';
const locationsSection = `
      {/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 OUR LOCATIONS SECTION \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */}
      <section className="bg-[#f5f0e8] py-16 md:py-24 px-6" id="locations">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 text-[#800000] text-sm font-semibold tracking-wider uppercase mb-3">
              <MapPin size={16} /> Our Locations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#264231] leading-tight">
              Visit the Ayoni Diagnostic Centre <span className="text-[#800000]">Nearest to You</span>
            </h2>
            <div className="flex items-center gap-3 justify-center mt-5">
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div>
              <div className="w-10 h-[2px] bg-[#E6D3A3]"></div>
            </div>
            <p className="text-lg text-[#3b5f4b] mt-5 max-w-2xl mx-auto leading-relaxed">
              With conveniently located centres in Gurgaon and Delhi, we make quality ultrasound and diagnostic imaging easily accessible.
            </p>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gurgaon Centre */}
            <div className="bg-white rounded-3xl p-8 border border-[#E6D3A3]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#800000]/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[#800000]" />
                </div>
                <h3 className="text-xl font-bold text-[#264231]">Gurgaon Centre</h3>
              </div>
              <div className="w-12 h-[2px] bg-[#E6D3A3]"></div>
              <div className="space-y-2">
                <p className="text-base font-bold text-[#264231]">Ayoni Clinic</p>
                <p className="text-[#3b5f4b] text-sm leading-relaxed">
                  R2/128, First Floor,<br />
                  M3M 65th Avenue,<br />
                  Golf Course Extension Road,<br />
                  Sector 65, Gurugram \u2013 122102
                </p>
              </div>
              <a
                href="tel:+919315991400"
                className="inline-flex items-center gap-2 text-[#264231] font-semibold text-sm hover:text-[#800000] transition-colors"
              >
                <PhoneCall size={16} className="text-[#800000]" /> +91 93159 91400
              </a>
              <a
                href="https://maps.google.com/?q=R2/128,+First+Floor,+M3M+65th+Avenue,+Golf+Course+Extension+Road,+Sector+65,+Gurugram+122102"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#264231] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#1a2e23] transition-all duration-300 group w-fit mt-auto"
              >
                <MapPin size={16} /> Get Directions <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Delhi Centre */}
            <div className="bg-white rounded-3xl p-8 border border-[#E6D3A3]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#800000]/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[#800000]" />
                </div>
                <h3 className="text-xl font-bold text-[#264231]">Delhi Centre</h3>
              </div>
              <div className="w-12 h-[2px] bg-[#E6D3A3]"></div>
              <div className="space-y-2">
                <p className="text-base font-bold text-[#264231]">Ayoni Cure de Jouvence</p>
                <p className="text-[#3b5f4b] text-sm leading-relaxed">
                  F14/69, Ground Floor,<br />
                  Model Town Phase 2,<br />
                  Delhi \u2013 110033
                </p>
              </div>
              <a
                href="tel:+919315991400"
                className="inline-flex items-center gap-2 text-[#264231] font-semibold text-sm hover:text-[#800000] transition-colors"
              >
                <PhoneCall size={16} className="text-[#800000]" /> +91 93159 91400
              </a>
              <a
                href="https://maps.google.com/?q=F14/69+Ground+Floor,+Model+Town+Phase+2,+Delhi+110033"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#264231] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#1a2e23] transition-all duration-300 group w-fit mt-auto"
              >
                <MapPin size={16} /> Get Directions <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

`;

const footervtIdx = content.indexOf(footervtMarker);
if (footervtIdx !== -1) {
  content = content.slice(0, footervtIdx) + locationsSection + content.slice(footervtIdx);
  console.log('Added Locations section before Footervt');
} else {
  console.log('ERROR: Could not find Footervt marker');
}

// Write back with UTF-8 encoding (no BOM)
fs.writeFileSync(filePath, content, { encoding: 'utf8' });
console.log('File written successfully');
console.log('Final file size:', content.length, 'chars');
