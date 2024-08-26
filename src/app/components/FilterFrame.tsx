import React from "react";
import Tick from "./icons/Tick";
import { Button } from "@nextui-org/react";
import ArrowDown from "./icons/ArrowDown";
import ArrowUp from "./icons/ArrowUp";
import Close from "./icons/Close";
import MedicineCard from "./MedicineCard";
import MedicineCardRow2 from "./MedicineCardRow2";
import ArrowLeft from "./icons/ArrowLeft";
import RightArrow from "./icons/RightArrow";

const FilterFrame = () => {
  return (
    <div className="flex gap-[64px] ">
      <div className="w-[250px] ml-[118px] mt-[100px] gap-10 flex flex-col font-sora">
        <div className="  text-[24px] bg-[#62C3C61A]  h-[34px] font-semibold  text-[#045A5C] text-center">
          Filter
        </div>

        {/* <div className="flex flex-col "> */}
        <div className="flex flex-col gap-5 h-[125px] border-b-[1px] border-[#62C3C64D] ">
          <div className="text-[#365758] font-semibold text-[18px] text-center">
            Preis
          </div>
          <div className="flex gap-4 h-[52px] flex-col">
            <div className="h-[7px] bg-[#62C3C64D] rounded-[10px_10px_10px_10px]">
              <div className="flex items-start">
                <div className="h-5 w-[15.38px] ml-[37.31px] -mt-[5px] rounded-[15.38px_0px_15.38px_0px] bg-[#62C3C8]"></div>
                <div className="h-[7px] w-[69px] -ml-1 rounded-[10px_10px_10px_10px] bg-[#62C3C8]"></div>
                <div className="h-5 w-[15.38px] -mt-[5px] -ml-[5px] rounded-[15.38px_0px_15.38px_0px] bg-[#62C3C8]"></div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[116px] h-6 rounded-[20px_20px_20px_20px] bg-[#8191911A] text-[#365758] font-normal p-[2px_10px_2px_10px]">
                5 €
              </div>
              <div>-</div>
              <div className="w-[116px] h-6 rounded-[20px_20px_20px_20px] bg-[#8191911A] text-[#365758] font-normal p-[2px_10px_2px_10px]">
                10 €
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* <div className="flex flex-col  "> */}
        <div className="h-[290px] border-b-[1px] border-[#62C3C64D] flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="text-[#365758] mx-auto font-semibold text-[18px] text-center">
              Hersteller
            </div>
            <ArrowUp className="w-4 text-[#62C3C6]" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <div className="w-4 h-4 border-1 rounded-[4px_4px_4px_4px] border-[#62C3C6]"></div>
              <div>ADREXpharma</div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-4 h-4 border-1 rounded-[4px_4px_4px_4px] border-[#62C3C6]"></div>
              <div>Aurora</div>
            </div>
            <div className="flex items-center gap-[10px]">
              <Tick className="w-4 h-4 bg-[#62C3C61A] rounded-[5.33px_5.33px_5.33px_5.33px] text-[#62C3C6]" />
              <div>Avaay</div>
            </div>
            <div className="flex items-center gap-[10px]">
              <Tick className="w-4 h-4 bg-[#62C3C61A] rounded-[5.33px_5.33px_5.33px_5.33px] text-[#62C3C6]" />
              <div>Bedrocan</div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-4 h-4 border-1 rounded-[4px_4px_4px_4px] border-[#62C3C6]"></div>
              <div>Cannamedical</div>
            </div>
          </div>
          <Button className="rounded-[24px_0px_24px_0px] border-2 border-[#ECFEAA] h-[33px] text-[14px] text-[#045A5C] bg-white">
            mehr anzeigen
          </Button>
        </div>
        {/* </div> */}
        {/*  */}
        <div className="flex flex-col gap-5 h-[125px] border-b-[1px] border-[#62C3C64D] ">
          <div className="text-[#365758] font-semibold text-[18px] text-center">
            THC Gehalt
          </div>
          <div className="flex gap-4 h-[52px] flex-col">
            <div className="h-[7px] bg-[#62C3C64D] rounded-[10px_10px_10px_10px]">
              <div className="flex items-start">
                <div className="h-5 w-[15.38px] ml-[37.31px] -mt-[5px] rounded-[15.38px_0px_15.38px_0px] bg-[#62C3C8]"></div>
                <div className="h-[7px] w-[69px] -ml-1 rounded-[10px_10px_10px_10px] bg-[#62C3C8]"></div>
                <div className="h-5 w-[15.38px] -mt-[5px] -ml-[5px] rounded-[15.38px_0px_15.38px_0px] bg-[#62C3C8]"></div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[116px] h-6 rounded-[20px_20px_20px_20px] bg-[#8191911A] text-[#365758] font-normal p-[2px_10px_2px_10px]">
                11%
              </div>
              <div>-</div>
              <div className="w-[116px] h-6 rounded-[20px_20px_20px_20px] bg-[#8191911A] text-[#365758] font-normal p-[2px_10px_2px_10px]">
                18%
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="flex flex-col gap-5 h-[125px] border-b-[1px] border-[#62C3C64D] ">
          <div className="text-[#365758] font-semibold text-[18px] text-center">
            CBD Gehalt
          </div>
          <div className="flex gap-4 h-[52px] flex-col">
            <div className="h-[7px] bg-[#62C3C64D] rounded-[10px_10px_10px_10px]">
              <div className="flex items-start">
                <div className="h-5 w-[15.38px] ml-[37.31px] -mt-[5px] rounded-[15.38px_0px_15.38px_0px] bg-[#62C3C8]"></div>
                <div className="h-[7px] w-[69px] -ml-1 rounded-[10px_10px_10px_10px] bg-[#62C3C8]"></div>
                <div className="h-5 w-[15.38px] -mt-[5px] -ml-[5px] rounded-[15.38px_0px_15.38px_0px] bg-[#62C3C8]"></div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[116px] h-6 rounded-[20px_20px_20px_20px] bg-[#8191911A] text-[#365758] font-normal p-[2px_10px_2px_10px]">
                1%
              </div>
              <div>-</div>
              <div className="w-[116px] h-6 rounded-[20px_20px_20px_20px] bg-[#8191911A] text-[#365758] font-normal p-[2px_10px_2px_10px]">
                5%
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-5 h-[101px] border-b-[1px] border-[#62C3C64D] ">
          <div className="text-[#365758] font-semibold text-[18px] text-center">
            Genetik
          </div>
          <div className="grid grid-cols-3 gap-1 ">
            <div className="h-7  bg-[#62C3C6] text-center place-content-center text-[#FCFCFA] rounded-[4px_4px_4px_4px]">
              Indica
            </div>
            <div className="h-7  bg-[#62C3C64D] text-center place-content-center text-[#045A5C] rounded-[4px_4px_4px_4px]">
              Sativa
            </div>
            <div className="h-7  bg-[#62C3C64D] text-center place-content-center text-[#045A5C] rounded-[4px_4px_4px_4px]">
              Hybrid
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="flex flex-col gap-5 h-[101px] border-b-[1px] border-[#62C3C64D] ">
          <div className="text-[#365758] font-semibold text-[18px] text-center">
            Bestrahltung
          </div>
          <div className="grid grid-cols-2 gap-1 ">
            <div className="h-7  bg-[#62C3C6] text-center place-content-center text-[#FCFCFA] rounded-[4px_4px_4px_4px]">
              Indica
            </div>
            <div className="h-7  bg-[#62C3C64D] text-center place-content-center text-[#045A5C] rounded-[4px_4px_4px_4px]">
              Sativa
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="h-[53px] border-b-[1px] border-[#62C3C64D] flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="text-[#365758] mx-auto font-semibold text-[18px] text-center">
              Terpene
            </div>
            <ArrowDown className="w-4 text-[#62C3C6]" />
          </div>
        </div>
        {/*  */}
        {/*  */}

        <div className="h-5  text-[16px] font-normal flex items-center place-content-center ">
          <Close className="w-4 text-[#28E3E9]" />
          alle Filter zurücksetzen{" "}
        </div>
      </div>
      {/* cards container */}
      <div>
        <div className="w-[970px]  bg-[#62C3C61A] grid grid-cols-3 gap-5 mt-[100px]">
          <MedicineCard />
          <MedicineCard />
          <MedicineCard />
          <MedicineCardRow2 />
          <MedicineCardRow2 />
          <MedicineCardRow2 />
          <MedicineCard />
          <MedicineCard />
          <MedicineCard />
        </div>
        <div className="flex justify-end items-center gap-[30px] mt-[30px] ">
          <ArrowLeft className="w-5 h-5 text-[#62C3C6]" />
          <div className="w-[162px] flex justify-between">
            <div className="text-[#045A5C] text-[18px]">1</div>
            <div className="text-[#045A5C] text-[18px]">2</div>
            <div className="text-[#045A5C] text-[18px]">3</div>
            <div className="text-[#045A5C] text-[18px]">...</div>
            <div className="text-[#045A5C] text-[18px]">12</div>
          </div>
          <RightArrow className="w-5 h-5 text-[#62C3C6]" />
        </div>
      </div>
    </div>
  );
};

export default FilterFrame;
