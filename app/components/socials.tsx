import { Headset, YouTube, Apple, Facebook } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="flex gap-x-3 mt-3 md:mt-8 border-b-4 md:border-b-0 pb-3">
      <a
        href="https://www.youtube.com/@biohazardprinting"
        target="_blank"
        className="hover:bg-red-600 rounded-full"
      >
        <YouTube />
      </a>
      <a
        href="https://www.facebook.com/biohazardprinting2023"
        target="_blank"
        className="hover:bg-blue-600 rounded-full"
      >
        <Facebook />
      </a>
      <a
        href="https://www.tiktok.com/@biohazardprinting"
        target="_blank"
        className="hover:bg-gradient-to-tr hover:from-[#ff0050] hover:to-[#00f2ea] rounded-full"
      >
        <FontAwesomeIcon
          icon={faTiktok}
          style={{ color: "#ffffff" }}
          size="lg"
        />
      </a>
    </div>
  );
};
export default Socials;
