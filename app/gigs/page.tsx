"use client";
import Footer from "../components/footer";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";
import Link from "next/link";

const Gigs = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen flex flex-col items-center justify-between z-0">
        <div className="mb-10">
          <Navbar activePage="Gigs" />
          <div className="font-sans">
            <p className="text-5xl ml-10 mb-7 w-fit pb-2 text-[#7E84F7] font-bold bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent">
              Gigs
            </p>
            <div className="md:flex gap-10 justify-around">
              <div className="text-2xl md:w-1/2">
                This calendar will automatically update as more events are
                scheduled.
              </div>
              <div className="p-1 md:p-5 bg-[#e3e9ff] rounded-md md:rounded-xl w-screen md:w-1/2 h-[50vh]">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <MobileNav activePage="Gigs" />
    </div>
  );
};
export default Gigs;
