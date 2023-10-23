"use client";
import Image from "next/image";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";
import bioLogo from "../../public/bioLogo.jpg";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="">
      <div className="h-auto md:h-screen w-screen md:w-[99vw] overflow-x-hidden flex flex-col items-center justify-between z-0">
        <div className="mb-10">
          <Navbar activePage="About" />
          <p className="text-5xl ml-10 mb-7 w-fit text-[#7E84F7] font-bold bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent">
            About
          </p>
          <div className="md:flex md:columns-2">
            <div className="flex z-10 justify-center items-center flex-col mt-3 md:mt-8 mb-10 w-full">
              <Image
                src={bioLogo}
                alt=""
                className="w-3/4 md:w-full mt-8 mb-8 pl-4"
              />
            </div>
            <div className="m-5 font-sans text-gray-400 md:w-full md:border-l-2 px-2 md:pl-4 md:pr-4">
              <div className="">
                My name is Derek. and I am a 34 year old man that lives in
                northern Ohio with my wife and kids. I have a full-time day job
                so this started as just a small hobby that I created my own
                items for. I one day threw a few ideas together, and it suddenly
                became items that other people wanted to buy for themselves.
                Don't get me wrong, I'll still have my daytime job for a while,
                but this has now turned into more than just a hobby, and I can't
                say that I mind.
              </div>
              <div className="mt-16">
                So you're probably thinking... "How did you come up with the
                name?" Well, let me explain! While serving in the Army, my job
                was a 74D. This job is a Chemical, Biological, Radiological, and
                Nuclear Specialist. From this, I took Biological and used
                "BioHazard" which is one of the forms of warfare I was trained
                to protect against. Additionally, I liked the skull with the
                biohazard symbol so everything meshed together really easily .
                Printing is the foundation of this business. All of this came
                together and BioHazard Printing was born.
              </div>
              <div className="mt-10">
                I would love to create your unique, custom made order. Please
                consider supporting a locally owned business rather than buying
                from a big corporation. Also note that by ordering from
                BioHazard Printing you will take part in supporting a veteran
                owned business.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <MobileNav activePage="About" />
    </div>
  );
};
export default About;
