import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import crystalOrchard from "../../public/C_O_ai.png";
import crystalOrchard2 from "../../public/C_O_ai2.png";
import Image from "next/image";

const StandardImageList = () => {
  return (
    <ImageList
      className="w-11/12 md:w-4/5 h-max md:h-max ml-auto mr-auto"
      cols={2}
      rowHeight={164}
    >
      <Image
        src={crystalOrchard}
        alt=""
        className="rounded-xl overflow-hidden"
      />
      <Image
        src={crystalOrchard2}
        alt=""
        className="rounded-xl overflow-hidden"
      />
      <Image
        src={crystalOrchard2}
        alt=""
        className="rounded-xl overflow-hidden"
      />
      <Image
        src={crystalOrchard}
        alt=""
        className="rounded-xl overflow-hidden"
      />
      <Image
        src={crystalOrchard2}
        alt=""
        className="rounded-xl overflow-hidden"
      />
      <Image
        src={crystalOrchard}
        alt=""
        className="rounded-xl overflow-hidden"
      />
      <Image
        src={crystalOrchard}
        alt=""
        className="rounded-xl overflow-hidden"
      />
    </ImageList>
  );
};

export default StandardImageList;
