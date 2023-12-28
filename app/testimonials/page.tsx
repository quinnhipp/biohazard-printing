"use client";
import Footer from "../components/footer";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";
import TestimonialCard from "../components/testimonialCard";
import bioLogo from "../../public/bioLogo.jpg";
import stuffedAnimalPrints from "../../public/stuffed animals.jpg";
import filoCujoSweatshirt from "../../public/filo cujo sweatshirt.jpg";
import cKExcavating from "../../public/c&k excavating.jpg";
import { StaticImageData } from "next/image";

type Testimonial = {
  image: StaticImageData;
  review: string;
  name: string;
  company?: string;
};

const data: Testimonial[] = [
  {
    image: cKExcavating,
    review:
      '"Big shout out to this really great shirt company! Good product, great prices and amazing customer service!"',
    name: "Chelsey Irene Stephens",
    company: "C&K Excavating LLC",
  },
  {
    image: filoCujoSweatshirt,
    review:
      '"Shout-out to Derek Estep at BioHazard Printing for creating these amazing sweatshirts for my family. If anyone wants any custom prints, Derek is your guy!"',
    name: "Quinn Hipp",
  },
  {
    image: stuffedAnimalPrints,
    review:
      '"Shoutout to BioHazard Printing for KILLING it once again! The girls are in LOVE with their new animals! Can’t wait to order more from him! Check him out for all different kinds of personalized items! He won\'t disappoint! Thanks again Derek!❤️"',
    name: "Aubree Correa",
  },
];

const Testimonials = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen md:w-[99vw] overflow-x-hidden flex flex-col items-center justify-between z-0">
        <div>
          <Navbar activePage="Testimonials" />
          <div className="m-5 font-sans">
            <p className="text-5xl ml-10 mb-7 w-fit font-bold bg-gradient-to-t from-[#F47234] to-gray-400 bg-clip-text text-transparent">
              Testimonials
            </p>
            {/* <div className="flex flex-col md:flex-row gap-4 columns-2"> */}
            <div className="md:grid md:grid-cols-2 gap-4 gap-y-8 flex-col flex md:w-3/5 md:items-baseline md:ml-auto md:mr-auto">
              {data.map((item) => (
                <TestimonialCard {...item} key={item.review} />
              ))}
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
