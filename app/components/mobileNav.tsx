import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PersonIcon from "@mui/icons-material/Person";
import PaymentIcon from "@mui/icons-material/Payment";
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
              activePage === "Home" ? "text-[#F47234]" : "text-[#00000099]"
            }
          />
          <BottomNavigationAction
            label="About"
            icon={<PersonIcon />}
            href="about"
            className={
              activePage === "About" ? "text-[#F47234]" : "text-[#00000099]"
            }
          />
          <BottomNavigationAction
            label="Gallery"
            icon={<ImageIcon />}
            href="/gallery"
            className={
              activePage === "Gallery" ? "text-[#F47234]" : "text-[#00000099]"
            }
          />
          <BottomNavigationAction
            label="Testimonials"
            icon={<ReviewsIcon />}
            href="testimonials"
            className={
              activePage === "Testimonials"
                ? "text-[#F47234]"
                : "text-[#00000099]"
            }
          />

          <BottomNavigationAction
            label="Payment"
            icon={<PaymentIcon />}
            href="payment"
            className={
              activePage === "Payment" ? "text-[#F47234]" : "text-[#00000099]"
            }
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
};
export default MobileNav;
