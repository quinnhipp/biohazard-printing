import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import GroupsIcon from "@mui/icons-material/Groups";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ImageIcon from "@mui/icons-material/Image";
import Paper from "@mui/material/Paper";

const MobileNav = ({ activePage }: { activePage: string }) => {
  const [value, setValue] = React.useState(0);

  return (
    <div className="block md:hidden">
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          //   value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            href="/"
            className={
              activePage === "Home" ? "text-[#7E84F7]" : "text-[#00000099]"
            }
          />
          <BottomNavigationAction
            label="About"
            icon={<GroupsIcon />}
            href="about"
            className={
              activePage === "About" ? "text-[#7E84F7]" : "text-[#00000099]"
            }
          />
          <BottomNavigationAction
            label="Gallery"
            icon={<ImageIcon />}
            href="/gallery"
            className={
              activePage === "Gallery" ? "text-[#7E84F7]" : "text-[#00000099]"
            }
          />
          <BottomNavigationAction
            label="Testimonials"
            icon={<HeadphonesIcon />}
            href="testimonials"
            className={
              activePage === "Testimonials"
                ? "text-[#7E84F7]"
                : "text-[#00000099]"
            }
          />

          <BottomNavigationAction
            label="Payment"
            icon={<LocationOnIcon />}
            href="payment"
            className={
              activePage === "Payment" ? "text-[#7E84F7]" : "text-[#00000099]"
            }
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
};
export default MobileNav;
