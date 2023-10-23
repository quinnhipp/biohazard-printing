"use client";
import Footer from "../components/footer";
import StandardImageList from "../components/imageList";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";
import Link from "next/link";

const Gallery = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen md:w-[99vw] overflow-x-hidden flex flex-col items-center justify-between z-0">
        <div>
          <Navbar activePage="Gallery" />
          <div className="m-5 font-sans">
            <p className="text-5xl ml-10 mb-7 w-fit font-bold bg-gradient-to-t from-[#F47234] to-gray-400 bg-clip-text text-transparent">
              Gallery
            </p>
            <StandardImageList />
          </div>
        </div>
        <Footer />
      </div>
      <MobileNav activePage="Gallery" />
    </div>
  );
};
export default Gallery;
