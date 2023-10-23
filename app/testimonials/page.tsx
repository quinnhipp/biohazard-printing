"use client";
import Footer from "../components/footer";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";
import TestimonialCard from "../components/testimonialCard";

const Testimonials = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen flex flex-col items-center justify-between z-0">
        <div>
          <Navbar activePage="Testimonials" />
          <div className="m-5 font-sans">
            <p className="text-5xl ml-10 mb-7 w-fit font-bold bg-gradient-to-t from-[#F47234] to-gray-400 bg-clip-text text-transparent">
              Testimonials
            </p>
            {/* <div className="flex flex-col md:flex-row gap-4 columns-2"> */}
            <div className="md:grid md:grid-cols-2 gap-4 gap-y-8 flex-col flex">
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <MobileNav activePage="Testimonials" />
    </div>
  );
};
export default Testimonials;
