const fs = require('fs');
const c = fs.readFileSync('src/app/Ultrasound/page.jsx', 'utf8');

console.log('File size:', c.length, 'chars');
console.log('Has emoji 🤰:', c.includes('🤰'));
console.log('Has emoji ❤️:', c.includes('❤️'));
console.log('Has emoji ⚡:', c.includes('⚡'));
console.log('Has emoji 🩺:', c.includes('🩺'));
console.log('Services order (General before Pregnancy):', c.indexOf('General Diagnostic Ultrasound') < c.indexOf('Pregnancy Ultrasound') ? 'CORRECT' : 'WRONG');
console.log('Has branch field:', c.includes('name="branch"'));
console.log('Has Locations section:', c.includes('id="locations"'));
console.log('Contact before Locations:', c.indexOf('id="contact-form"') < c.indexOf('id="locations"') ? 'CORRECT' : 'WRONG');
console.log('Advanced Technology in stats:', c.includes('"Advanced"'));
console.log('Appointment Only in features:', c.includes('Ultrasound Scan by Appointment Only'));
console.log('Consult Our Specialist (no s):', c.includes('Consult Our Specialist') && !c.includes('Consult Our Specialists'));
console.log('Advanced Technology in CTA:', c.includes('Advanced Technology'));
console.log('Explore More section removed:', !c.includes('id="explore"'));

// Check for corruption
const corrupt = c.match(/\uFFFD/g);
console.log('Replacement chars (corruption indicator):', corrupt ? corrupt.length : 0);
