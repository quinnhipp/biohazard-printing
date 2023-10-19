"use client";
import Footer from "../components/footer";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";
import Link from "next/link";

const Listen = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen flex flex-col items-center justify-between z-0">
        <div>
          <Navbar activePage="Listen" />
          <div className="m-5 font-sans">
            <p className="text-5xl ml-10 mb-7 w-fit text-[#7E84F7] font-bold bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent">
              LISTEN TO OUR MUSIC
            </p>
          </div>
        </div>
        <Footer />
      </div>
      <MobileNav activePage="Listen" />
    </div>
  );
};
export default Listen;
