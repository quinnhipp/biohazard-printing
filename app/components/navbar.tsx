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
            className={activePage === "Home" ? "text-[#6FF78B]" : "text-white"}
          >
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link
            href="/band"
            className={
              activePage === "The Band" ? "text-[#6FF78B]" : "text-white"
            }
          >
            <div>The Band</div>
          </Link>
        </li>
        <li>
          <Link
            href="/listen"
            className={
              activePage === "Listen" ? "text-[#6FF78B]" : "text-white"
            }
          >
            <div>Listen</div>
          </Link>
        </li>
        <li>
          <Link
            href="/gigs"
            className={activePage === "Gigs" ? "text-[#6FF78B]" : "text-white"}
          >
            <div>Gigs</div>
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className={
              activePage === "Gallery" ? "text-[#6FF78B]" : "text-white"
            }
          >
            <div>Gallery</div>
          </Link>
        </li>
      </ul>
      <Socials />
    </div>
  );
};
export default Navbar;
