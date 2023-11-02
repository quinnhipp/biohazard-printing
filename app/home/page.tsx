"use client";
import { Button, TextField } from "@mui/material";
import Navbar from "../components/navbar";
import Image from "next/image";
import biohazardPrinting from "../../public/biohazardPrinting.jpg";
import MobileNav from "../components/mobileNav";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <div className="h-screen md:h-screen w-screen md:w-[99vw] overflow-x-hidden flex flex-col items-center justify-between z-0">
        <Navbar activePage="Home" />
        <div className="flex bg-transparent z-10 w-full md:h-1/2 justify-center items-center flex-col mt-3 md:mt-8 mb-10">
          <Image src={biohazardPrinting} alt="" className="w-full md:h-full" />
        </div>
        <div className="font-sans px-5 mb-24">
          <div className="text-5xl md:w-1/2 mb-4 md:mx-auto">Welcome!</div>
          <div className="text-gray-400 md:w-1/2 md:mx-auto text-xl">
            Thank you for visiting! If you're looking for a custom, unique piece
            that will last a lifetime, you've got the right place. I specialize
            in 3D Printing, Laser Engraving, and custom printing t-shirts, hats,
            bags, etc. I can print custom logos, sports team logos, or any other
            idea that you may have.
          </div>
        </div>
        <Footer />
      </div>
      <MobileNav activePage="Home" />
    </div>
  );
};
export default Home;
