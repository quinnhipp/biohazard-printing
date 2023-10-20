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
        <div className="flex bg-transparent z-10 w-full justify-center items-center flex-col mt-3 md:mt-8 mb-10">
          <Image src={biohazardPrinting} alt="" className="w-full" />
        </div>
        <Footer />
      </div>
      <MobileNav activePage="Home" />
    </div>
  );
};
export default Home;

// Home
// About - idk yet
// Gallery
// Payments - Square
// Testemonials
