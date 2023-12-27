import Image, { StaticImageData } from "next/image";
import bioLogo from "../../public/bioLogo.jpg";

type Testimonial = {
  image: StaticImageData;
  review: string;
  name: string;
  company?: string;
};

const TestimonialCard = (props: Testimonial) => {
  return (
    <>
      <div className="">
        {/* <Image
          src={props.image}
          alt=""
          className="w-1/6 h-w-1/6 rounded-full ml-auto mr-auto"
        /> */}
        <div className="bg-gray-300 text-black rounded-lg">
          <div>
            <div className="text-center">{props.review}</div>
            <div className="flex justify-around items-end">
              <p className="text-[#F47234] font-bold text-lg h-min">
                {props.name}
              </p>
              <p className="text-base text-right h-fit">{props.company}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialCard;
