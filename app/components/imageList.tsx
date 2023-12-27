import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import gamingPrints from "../../public/gaming prints.jpg";
import stuffedAnimalPrints from "../../public/stuffed animals.jpg";
import cuttingBoard from "../../public/cutting board.jpg";
import familyMonogram from "../../public/family monogram.jpg";
import personalizedJournal from "../../public/personalized journal.jpg";
import personalizedStuffedAnimals from "../../public/personalized stuffed animals.jpg";
import plannerEtching from "../../public/planner etching.jpg";
import fefeSweatshirt from "../../public/fefe sweatshirt.jpg";
import truckerSign from "../../public/trucker sign.jpg";
import filoCujoSweatshirt from "../../public/filo cujo sweatshirt.jpg";
import cKExcavating from "../../public/c&k excavating.jpg";

import Image from "next/image";

// const itemData = [
//   {
//     img: "/../../public/gaming prints.jpg",
//     title: "Bed",
//   },
//   {
//     img: "/../../public/gaming prints.jpg",
//     title: "Gaming Prints",
//   },
//   {
//     img: "/../../public/stuffed animals.jpg",
//     title: "Stuffed Animals",
//   },
//   {
//     img: "/../../public/cutting board.jpg",
//     title: "Kitchen",
//   },
//   {
//     img: "/../../public/family monogram.jpg",
//     title: "Blinds",
//   },
//   {
//     img: "/../../public/personalized journal.jpg",
//     title: "Chairs",
//   },
//   {
//     img: "/../../public/personalized stuffed animals.jpg",
//     title: "Laptop",
//   },
//   {
//     img: "/../../public/planner etching.jpg",
//     title: "Doors",
//   },
//   {
//     img: "/../../public/toilet decal.jpg",
//     title: "Coffee",
//   },
//   {
//     img: "/../../public/trucker sign.jpg",
//     title: "Storage",
//   },
//   {
//     img: "/../../public/unicorn decal.jpg",
//     title: "Candle",
//   },
// ];

const StandardImageList = () => {
  return (
    <ImageList
      className="w-11/12 md:w-4/5 h-max md:h-max ml-auto mr-auto"
      cols={2}
      variant="masonry"
      gap={8}
    >
      {/* {itemData.map((item) => (
        <Image
          src={item.img}
          width={64}
          height={64}
          alt=""
          className="rounded-xl overflow-hidden"
        />
      ))} */}
      <Image src={gamingPrints} alt="" className="rounded-xl overflow-hidden" />
      <Image
        src={stuffedAnimalPrints}
        alt=""
        className="rounded-xl overflow-hidden"
      />
      <Image src={cuttingBoard} alt="" className="rounded-xl overflow-hidden" />
      <Image
        src={familyMonogram}
        alt=""
        className="rounded-xl overflow-hidden"
      />
      <Image
        src={personalizedJournal}
        alt=""
        className="rounded-xl overflow-hidden"
      />
      <Image
        src={personalizedStuffedAnimals}
        alt=""
        className="rounded-xl overflow-hidden"
      />
      <Image
        src={plannerEtching}
        alt=""
        className="rounded-xl overflow-hidden"
      />
      <Image src={truckerSign} alt="" className="rounded-xl overflow-hidden" />
      <Image
        src={filoCujoSweatshirt}
        alt=""
        className="rounded-xl overflow-hidden"
      />
      <Image
        src={fefeSweatshirt}
        alt=""
        className="rounded-xl overflow-hidden"
      />
      <Image src={cKExcavating} alt="" className="rounded-xl overflow-hidden" />
    </ImageList>
  );
};

export default StandardImageList;
