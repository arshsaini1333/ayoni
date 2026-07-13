const fs = require('fs');
const c = fs.readFileSync('src/app/Ultrasound/page.jsx', 'utf8');

// Find the services array by locating its start and end
const startMarker = '  const services = [';
const endMarker = '  ];\n\n  const reviews';

const startIdx = c.indexOf(startMarker);
const endIdx = c.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.log('Could not find services array bounds');
  console.log('startIdx:', startIdx, 'endIdx:', endIdx);
  process.exit(1);
}

const newServices = `  const services = [
    { icon: "\uD83E\uDE7A", title: "General Diagnostic Ultrasound", items: ["Whole Abdomen", "Upper Abdomen", "Lower Abdomen", "KUB Scan", "Thyroid Scan", "Breast Ultrasound", "Chest Ultrasound", "Soft Tissue Ultrasound", "Eye Ultrasound"] },
    { icon: "\u2764\uFE0F", title: "Doppler Ultrasound", items: ["Arterial Doppler", "Venous Doppler", "Carotid Doppler", "Renal Doppler", "Portal Doppler", "Pelvic Doppler", "AV Fistula Mapping"] },
    { icon: "\uD83E\uDD30", title: "Pregnancy Ultrasound", items: ["Early Pregnancy Scan", "NT Scan", "Level II Anomaly Scan", "Fetal Echo", "Growth Scan", "Third Trimester Scan", "Biophysical Profile", "AFI Scan"] },
    { icon: "\uD83D\uDC69", title: "Women's Health & Fertility", items: ["TVS Scan", "Pelvic Ultrasound", "Follicular Monitoring", "Antral Follicle Count", "Infertility Assessment"] },
    { icon: "\uD83D\uDC76\uD83D\uDC76", title: "Twin Pregnancy Ultrasound", items: ["Twin NT Scan", "Twin Level II Scan", "Twin Growth Scan", "Twin Fetal Echo", "Twin Doppler"] },
  ]`;

const newContent = c.slice(0, startIdx) + newServices + c.slice(endIdx + 2); // +2 to skip '];\n'

// The endMarker includes '];\n\n  const reviews' so we need to keep '\n\n  const reviews'
const finalContent = c.slice(0, startIdx) + newServices + ';\n\n  const reviews' + c.slice(endIdx + '  ];\n\n  const reviews'.length);

fs.writeFileSync('src/app/Ultrasound/page.jsx', finalContent, { encoding: 'utf8' });

// Verify
const check = fs.readFileSync('src/app/Ultrasound/page.jsx', 'utf8');
const si = check.indexOf('const services');
console.log('Services array now:');
console.log(check.substring(si, si + 400));
