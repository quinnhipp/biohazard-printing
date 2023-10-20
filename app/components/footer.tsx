const Footer = () => {
  return (
    <div className="h-auto border-t-4 pt-3">
      {/* Desktop Footer */}
      <div className="hidden md:flex mx-auto justify-around mb-10">
        <div className="flex flex-col gap-48">
          <div className="flex-col gap-3 flex">
            <span className="text-[#F47234] text-lg">Contact Us</span>
            <p className="w-full">Email: biohazardprinting@gmail.com</p>
            <p className="w-full">Phone: 419-544-6021</p>{" "}
          </div>
          <div className="text-sm justify-center flex font-bold bg-gradient-to-tr from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent animate-gradient-xy">
            POWERED BY: QUINN HIPP
          </div>
        </div>
      </div>
      {/* Mobile Footer */}
      <div className=" flex flex-col md:hidden mb-16 space-y-24">
        <div className="flex flex-col gap-3 md:hidden">
          <span className="text-[#F47234] text-xl">Contact Us</span>
          <div>
            <p className="w-full">Email: biohazardprinting@gmail.com</p>
            <p className="w-full">Phone: 419-544-6021</p>
          </div>
        </div>
        <div className="text-sm justify-center flex font-bold bg-gradient-to-tr from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent animate-gradient-xy">
          POWERED BY: QUINN HIPP
        </div>
      </div>
    </div>
  );
};
export default Footer;
