import Image from "next/image";
import bioLogo from "../../public/bioLogo.jpg";

const TestimonialCard = () => {
  return (
    <>
      <div className="md:w-1/2 md:h-1/2">
        <Image
          src={bioLogo}
          alt=""
          className="w-1/5 h-1/5 rounded-full ml-auto mr-auto"
        />
        <div className="bg-gray-300 text-black rounded-lg">
          <div>
            <div className="text-center">
              "Big shout out to this really great shirt company! Good product,
              great prices and amazing customer service!"
            </div>
            <div className="flex justify-around items-end">
              <p className="text-[#F47234] font-bold text-lg h-min">
                Chelsey Irene Stephens
              </p>
              <p className="text-base text-right h-fit">C&K Excavating LLC</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialCard;
