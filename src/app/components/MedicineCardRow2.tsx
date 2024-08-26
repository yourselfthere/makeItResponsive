import React from "react";
// import medImg from "../../../public/images/medImg.png";
import Image from "next/image";
import Best from "./icons/Best";
import { Button } from "@nextui-org/react";
const MedicineCardRow2 = () => {
  return (
    <div className="font-sora ">
      {/* <image href="/images/medImg" /> */}

      <div className="w-[310px] h-[554px] rounded-[30px_0px_30px_0px] border-2 border-[#28E3E9] bg-white flex flex-col gap-3">
        <div className="h-[41px] flex items-end justify-between">
          <div className="ml-4 text-[#0D7052] h-[21px] flex place-content-center gap-1 bg-[#A10C0C0D] w-[150px] p-[3px_12px_3px_12px] items-center rounded-[30px_30px_30px_30px]  ">
            <div className="w-1 h-1 bg-[#0D7052] rounded-full"></div>
            <div className="font-light text-[12px]">sofort lieferbar</div>
          </div>
          <div className="mr-4 text-[#0D7052] h-[21px] flex place-content-center gap-1 bg-[#A10C0C0D] w-[20pxpx] p-[3px_12px_3px_12px] items-center rounded-[30px_30px_30px_30px]  ">
            <div className="font-light text-[12px] ">Neu</div>
          </div>
        </div>
        <div className="w-[310px] h-[150px] relative">
          <Image
            src="/images/medImg.png" // Path to your image in the public directory
            alt="Description of the image"
            layout="fill" // Make the image fill the parent container
            objectFit="contain" // Cover the container while maintaining aspect ratio
            objectPosition="center" // Center the image within the container
            className="rounded-md"
          />
        </div>
        <div className="border-2 h-[339px] rounded-[0px_0px_30px_0px] border-[#28E3E9] bg-[#62C3C64D] p-[16px_24px_24px_24px] flex flex-col">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <div className="w-[74px] h-[24px] rounded-[4px_4px_4px_4px] border-b-2 text-center text-[16px] font-semibold font-sora text-[#365758] bg-[#62C3C64D]">
                    Canify
                  </div>
                  <div className="grid grid-flow-col auto-cols-auto gap-2">
                    <div className="bg-[#FCFCFA] w-[111px] text-[#116A6C] text-center rounded-[4px_4px_4px_4px]">
                      THC 25%
                    </div>
                    <div className="bg-[#62C3C6] w-[111px] text-[#FCFCFA] text-center rounded-[4px_4px_4px_4px]">
                      CBD &lt;1%
                    </div>
                    <Best />
                  </div>
                </div>
                <div className="font-sora text-[18px] font-semibold text-[#116A6C]">
                  Cannabis Flos 22/1 PT
                  <br />
                  Ku.Pink Kush DAB Canify
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline text-[#365758] gap-2 ">
                  <div className="text-[16px]">Kultivar</div>
                  <div className="border-b-2 border-[#62C3C64D] border-dashed w-[100px]"></div>
                  <div className="text-[16px]">Pink Kush</div>
                </div>
                <div className="flex items-baseline text-[#365758] gap-2 ">
                  <div className="text-[16px]">Genetik</div>
                  <div className="border-b-2 border-[#62C3C64D] border-dashed w-[128px]"></div>
                  <div className="text-[16px]">Hybrid</div>
                </div>
              </div>
            </div>
            <div className="flex w-[262px] justify-between">
              <div className="flex flex-col ">
                <div className="flex  font-sora  gap-1">
                  <div className="text-[#62C3C6] text-[24px] font-extrabold">
                    €
                  </div>
                  <div className="text-[#116A6C] text-[24px] font-extrabold flex items-center gap-[2px]">
                    <div>11,66</div>
                    <div className="h-6 text-[10px] font-light">1</div>
                  </div>
                  {/* <div className="text-[12px] font-light ">pro Gramm</div> */}
                </div>
                <div className="text-[12px] h-[15px] text-[#365758] leading-none">
                  pro Gramm
                </div>
              </div>
              <Button className="text-[#365758] text-[14px] font-normal rounded-[24px_0px_24px_0px] p-[7px_18px_8px_18px] bg-[#ECFEAA]">
                in den Warenkorb
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineCardRow2;
