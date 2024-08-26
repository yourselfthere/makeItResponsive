import React from "react";
import RightArrow from "./icons/RightArrow";
import { Button } from "@nextui-org/react";
const BreadFrame = () => {
  return (
    <div className="flex justify-between place-items-start">
      <div className="flex gap-[20px] ml-[118px] mt-[90px] items-center">
        <div
          className="text-[#62C3C6] text-[16px]"
          style={{
            fontFamily: "Sora",
            lineHeight: "20.16px",
            fontWeight: 400,
          }}
        >
          {" "}
          Home
        </div>
        <div>
          <RightArrow className="w-5 text-[#62C3C6] " />
        </div>
        <div
          className="text-[#62C3C6] text-[16px] font-sora "
          style={{
            // fontFamily: "Sora",
            lineHeight: "20.16px",
            fontWeight: 400,
          }}
        >
          Livebestand
        </div>
        <div>
          <RightArrow className="w-5 text-[#62C3C6]" />
        </div>
        <div
          className="text-bold text-[#045A5C]"
          style={{
            fontFamily: "Sora",
            lineHeight: "20.16px",
            fontWeight: 700,
          }}
        >
          Cannabis Blüten
        </div>
      </div>
      <div className="mt-[90px] mr-[118px] flex flex-col gap-3">
        <div className="w-[223px]  text-[14px] text-[#365758] text-center ">
          GKV mit Kostenübernahme?
        </div>
        <Button className="flex  h-[33px] w-[223px] text-[#045A5C] border-2 border-[#62C3C6] bg-white rounded-[24px_0px_24px_0px] p-[7px_20px_8px_20px]">
          <div>Preisoptionen</div>
        </Button>
      </div>
    </div>
  );
};

export default BreadFrame;
