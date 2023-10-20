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
          <div className="flex z-10 justify-center items-center flex-col mt-3 md:mt-8 mb-10">
            <Image src={bioLogo} alt="" className="w-3/4 md:w-fit mt-8 mb-8" />
          </div>
          <div className="m-5 font-sans">
            <p className="text-5xl ml-10 mb-7 w-fit text-[#7E84F7] font-bold bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent">
              About
            </p>
            <div className="md:flex gap-8 justify-between">
              <div className="mt-8 md:w-1/5">
                <p className="text-[#7E84F7] text-xl">Brendan Hipp</p>
                <p className="text-[#7E84F7] text-lg">
                  // vocals & rhythm guitar
                </p>
                <p className="text-base mt-3">
                  Our metal fan of the group. Self taught vocalist of 15 years.
                </p>
              </div>
              <div className="mt-8 md:w-1/5">
                <p className="text-[#7E84F7] text-xl">Marcus McBride</p>
                <p className="text-[#7E84F7] text-lg">// keyboard</p>
                <p className="text-base mt-3">
                  Marky Mark and the Funky Bunch was an American hip-hop group
                  formed in 1991 by Mark Wahlberg, Scott Gee, Hector the Booty
                  Inspector, DJ-T, and Ashey Ace.
                </p>
              </div>
              <div className="mt-8 md:w-1/5">
                <p className="text-[#7E84F7] text-xl">Harrison Dalton</p>
                <p className="text-[#7E84F7] text-lg">// lead guitar</p>
                <p className="text-base mt-3">
                  Harrison Ford is an American actor. He has been a leading man
                  in films of several genres and is regarded as an American
                  cultural icon.
                </p>
              </div>
              <div className="mt-8 md:w-1/5">
                <p className="text-[#7E84F7] text-xl">Lucas McLaughlin</p>
                <p className="text-[#7E84F7] text-lg">// drums</p>
                <p className="text-base mt-3">
                  Walker, Texas Ranger is an American action crime television
                  series created by Leslie Greif and Paul Haggis.
                </p>
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
