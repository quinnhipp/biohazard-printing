"use client";
import { Button } from "@mui/material";
import Footer from "../components/footer";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";

const Payment = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen md:w-[99vw] overflow-x-hidden flex flex-col items-center justify-between z-0">
        <div className="mb-10">
          <Navbar activePage="Payment" />
          <div className="pt-24 flex md:flex-row flex-col md:gap-10 md:items-end justify-center">
            <div className="text-4xl mb-5 font-sans text-center">
              Online Bill Pay
            </div>
            <Button
              className="bg-gradient-to-t from-[#F47234] to-gray-400 rounded-full text-black text-xl font-bold w-44 md:w-36 md:h-16 py-2 px-4"
              href="https://square.link/u/9sJimD5O"
              target="_blank"
            >
              Pay Now
            </Button>
          </div>
        </div>
        <Footer />
      </div>
      <MobileNav activePage="Payment" />
    </div>
  );
};
export default Payment;
