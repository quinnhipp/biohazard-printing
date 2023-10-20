"use client";
import Footer from "../components/footer";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";

const Payment = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen md:w-[99vw] overflow-x-hidden flex flex-col items-center justify-between z-0">
        <div className="mb-10">
          <Navbar activePage="Payment" />
        </div>
        <Footer />
      </div>
      <MobileNav activePage="Payment" />
    </div>
  );
};
export default Payment;
