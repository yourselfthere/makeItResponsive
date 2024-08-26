import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mt-[173px] bg-[#1A8D91] rounded-[30px_30px_0px_0px] h-[201px] w-full font-sora">
        <div className="flex gap-[142px]">
          <div className="flex flex-col">
            <div className="mt-[89px] ml-[118px] font-sora text-[#FFFFFF80] text-[12px]">
              <div>AGB</div>
              <div>Impressnum</div>
              <div>Datenschutz</div>
            </div>
          </div>
          <div>
            <div className=" flex mt-[89px] h-[20px] gap-[30px]">
              <div className="flex items-center gap-1">
                <div className="w-[10px] h-4 rounded-[16px_0px_16px_0px] bg-[#28E3E9]"></div>
                <div className="text-[16px] text-[#FFFFFF] font-normal font-sora">
                  Videosprechstunde
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[10px] h-4 rounded-[16px_0px_16px_0px] bg-[#28E3E9]"></div>
                <div className="text-[16px] text-[#FFFFFF] font-normal font-sora">
                  FAQs
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[10px] h-4 rounded-[16px_0px_16px_0px] bg-[#28E3E9]"></div>
                <div className="text-[16px] text-[#FFFFFF] font-normal font-sora">
                  Kontakt
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  gap-[150px]">
          <div className="flex -mt-[91px] ml-[338px]  flex-col">
            <div className=" flex h-[20px] gap-[30px]">
              <div className="flex items-center gap-1">
                <div className="w-[10px] h-4 rounded-[16px_0px_16px_0px] bg-[#28E3E9]"></div>
                <div className="text-[16px] text-[#FFFFFF] font-normal">
                  Rezept einlösen
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[10px] h-4 rounded-[16px_0px_16px_0px] bg-[#28E3E9]"></div>
                <div className="text-[16px] text-[#FFFFFF] font-normal">
                  Live Bestand
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[58px]">
            <div className="flex flex-col -mt-[91px] font-manrope">
              <div className="text-[#FFFFFF80] text-[12px] font-sora">
                Standort
              </div>
              <div className="text-[#FFFFFF] text-[16px] font-extrabold font-manrope">
                Bergstraße 49 - 57
                <br />
                69469 Weinheim
                <br />
                (3 Glocken Quartier)
              </div>
            </div>
            <div className="flex gap-[106px]">
              <div className="flex flex-col -mt-[91px] font-manrope">
                <div className="text-[#FFFFFF80] text-[12px] font-sora">
                  Telefon
                </div>
                <div className="text-[#FFFFFF] text-[16px] font-extrabold font-manrope">
                  0223 545 5250
                </div>
              </div>
              <div>
                <div className="flex flex-col -mt-[91px] font-manrope">
                  <div className="text-[#FFFFFF80] text-[12px] font-sora">
                    Öffnungszeiten
                  </div>
                  {/* <div className="text-[#FFFFFF] text-[16px] font-extrabold">
                  0223 545 5250
                </div> */}
                  <div className="text-[#FFFFFF80] text-[12px] font-sora">
                    Mo-Fr
                  </div>
                  <div className="text-[#FFFFFF] text-[16px] font-extrabold">
                    09:00 - 18:00 Uhr
                  </div>
                  <div className="text-[#FFFFFF80] text-[12px] font-sora">
                    Sa
                  </div>
                  <div className="text-[#FFFFFF] text-[16px] font-extrabold ">
                    09:00 - 14:00 Uhr
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="">
        <div className="flex flex-col gap-[12px] ml-[118px] ">
          <div className="mt-[49px] text-[#FFFFFF80] text-[12px] font-light">
            <div>AGB</div>
            <div>Impressum</div>
            <div>Datenschutz</div>
          </div>
        </div>

        
      </div> */}
      </div>
    </div>
  );
};

export default Footer;
