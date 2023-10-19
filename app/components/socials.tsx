import { Headset, YouTube, Apple, Facebook } from "@mui/icons-material";

const Socials = () => {
  return (
    <div className="flex gap-x-3 mt-3 md:mt-8 border-b-4 pb-3">
      <a href="https://www.youtube.com/biohazardprinting" target="_blank">
        <YouTube />
      </a>
      <a href="https://www.facebook.com/biohazardprinting2023" target="_blank">
        <Facebook />
      </a>
    </div>
  );
};
export default Socials;
