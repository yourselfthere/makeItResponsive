import { Input } from "@nextui-org/react";
import React from "react";
import SearchIcon from "./icons/SearchIcon";
import ArrowDown from "./icons/ArrowDown";
import ListBullet from "./icons/ListBullet";

const LogoSearch = () => {
  return (
    <div className="mt-[70px] flex items-center justify-between">
      <div className="flex text-[36px]  ml-[118px] items-center gap-3">
        <div className="bg-[#28E3E9] w-[20px] h-[26px] rounded-[16px_0px_16px_0px]"></div>

        <div className=" ">Blüten</div>
      </div>
      <div className="mr-[118px] flex gap-5">
        <Input
          label={"Suchen"}
          radius="lg"
          size="sm"
          className="h-[34px] w-[340px]  "
          classNames={{
            label: [
              "text-[#62C3C6] dark:text-white/90 pl-[6px] text-[16px] font-sora ",
            ],
            input: [
              "bg-transparent",
              //   "bg-[ #8191911A]",

              "text-[#62C3C6] dark:text-white/90",
              "placeholder:text-[#62C3C6] dark:placeholder:text-white/60",
              "p-[30px_0px_0px_0px]",
              "h-[34px]",
            ],
            innerWrapper: "bg-transparent  ",

            inputWrapper: [
              "bg-[#8191911A]",
              "dark:bg-default/60",

              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",

              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          endContent={<SearchIcon className="w-6 ml-8 text-[#28E3E9] " />}
        />
        <div
          className="flex w-[173px]  place-content-center items-center gap-[10px] bg-[#62C3C64D] p-[2px_12px_2px_12px] rounded-[4px_4px_4px_4px]
        "
          style={{
            fontFamily: "Sora",
            lineHeight: "20.16px",
            fontWeight: 600,
          }}
        >
          <div className=" h-[34px] place-content-center text-[#365758]">
            Sortieren nach
          </div>
          <ArrowDown
            className="w-4 h-4 text-[#62C3C6] ;
 "
          />
        </div>
        <div
          className="flex w-[177px]  place-content-center items-center gap-[10px] bg-[#62C3C64D] p-[2px_12px_2px_12px] rounded-[4px_4px_4px_4px]
        "
          style={{
            fontFamily: "Sora",
            lineHeight: "20.16px",
            fontWeight: 600,
          }}
        >
          <div className=" h-[34px] place-content-center text-[#365758]">
            Verfügbarkeit
          </div>
          <div className="w-6 h-[9px] bg-[#62C3C64D] rounded-[20px_20px_20px_20px]">
            <div className="w-[15px] h-[15px] bg-[#62C3C6] -mt-[3px] ml-3 rounded-full"></div>
          </div>
        </div>
        <div
          className="flex w-[48px]  place-content-center items-center gap-[10px] bg-[#62C3C64D] p-[2px_12px_2px_12px] rounded-[4px_4px_4px_4px]
        "
        >
          <ListBullet className="w-6 h-6 text-[#045A5C]" />
          {/* <div className="w-6 h-[9px] bg-[#62C3C64D] rounded-[20px_20px_20px_20px]">
            <div className="w-[15px] h-[15px] bg-[#62C3C6] -mt-[3px] ml-3 rounded-full"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
