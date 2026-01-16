import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import QuickTrustBar from "./Components/QuickTrustBar";
import ServicesInclude from "./Components/TreatmentAreas";
import WhyAyoni from "./Components/WhyAyoni";
import Testimonials from "./Components/Testimonials";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
export default function Home() {
  return (
 <>
   <Navbar/>
   <Hero/>
   <About/>
   <QuickTrustBar/>
   <ServicesInclude/>
   <WhyAyoni/>
   <Testimonials/>
   {/* <DoctorInfo/> */}
   <ContactUs/>
   <Footer/>
 </>
  );
}
