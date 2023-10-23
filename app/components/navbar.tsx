import { usePathname } from "next/navigation";
import Link from "next/link";
import { Headset, YouTube } from "@mui/icons-material";
import Socials from "./socials";

const Navbar = ({ activePage }: { activePage: string }) => {
  return (
    <div className="flex md:gap-x-16 justify-center">
      <ul className="hidden md:flex md:gap-x-16 mt-8">
        <li>
          <Link
            href="/"
            className={activePage === "Home" ? "text-[#F47234]" : "text-white"}
          >
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={activePage === "About" ? "text-[#F47234]" : "text-white"}
          >
            <div>About</div>
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className={
              activePage === "Gallery" ? "text-[#F47234]" : "text-white"
            }
          >
            <div>Gallery</div>
          </Link>
        </li>
        <li>
          <Link
            href="/testimonials"
            className={
              activePage === "Testimonials" ? "text-[#F47234]" : "text-white"
            }
          >
            <div>Testimonials</div>
          </Link>
        </li>
        <li>
          <Link
            href="/payment"
            className={
              activePage === "Payment" ? "text-[#F47234]" : "text-white"
            }
          >
            <div>Payment</div>
          </Link>
        </li>
      </ul>
      <Socials />
    </div>
  );
};
export default Navbar;
