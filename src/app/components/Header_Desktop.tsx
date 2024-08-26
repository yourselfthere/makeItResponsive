import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
} from "@nextui-org/react";

import SearchIcon from "./icons/SearchIcon";
import Cart from "./icons/Cart";

const Header = () => {
  return (
    <div>
      <Navbar className="  mt-[70px]  " maxWidth="full">
        <div className="flex gap-[30px] mx-auto  items-center w-[1300px]   ">
          <NavbarBrand>
            <Input
              label={"Suchen"}
              radius="lg"
              size="sm"
              className="h-[34px] w-[366px] "
              //   width: Fill (366px)px;
              // height: Hug (34px)px;
              // padding: 6px 16px 8px 16px;
              // gap: 0px;
              // border-radius: 30px 0px 0px 0px;
              // justify: space-between;
              // opacity: 0px;

              classNames={{
                label: [
                  "text-[#62C3C6] dark:text-white/90 pl-[6px] text-[16px] font-sora ",
                ],
                input: [
                  "bg-transparent",
                  "text-[#62C3C6] dark:text-white/90",
                  "placeholder:text-[#62C3C6] dark:placeholder:text-white/60",
                  "p-[30px_0px_0px_0px]",
                  "h-[34px]",
                ],
                innerWrapper: "bg-transparent  ",

                inputWrapper: [
                  // "h-[34px]",
                  // "w-[366px]",
                  //   "shadow-xl",

                  "bg-[#EEF7F7]",
                  "dark:bg-default/60",
                  // "backdrop-blur-xl",
                  // "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  // "group-data-[focus=true]:bg-default-200/50",
                  "dark:group-data-[focus=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              // startContent={
              //   <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              // }
              endContent={<SearchIcon className="w-6 ml-8 text-[#28E3E9] " />}
            />
          </NavbarBrand>
          <NavbarContent className="flex  gap-4 " justify="center">
            {/* hidden md:flex */}
            <div className="flex gap-[50px] ">
              <div className="  w-[692px]  h-[20px] gap-[30px] flex">
                <NavbarItem>
                  <div className="flex   h-[20px]">
                    <div className="bg-[#28E3E9] w-[10px] h-[16px] mt-[2px] mr-1 rounded-[16px_0px_16px_0px]"></div>
                    <Link
                      color="foreground"
                      href="#"
                      className="text-[16px] font-bold text-left text-[#045A5C] "
                      style={{
                        fontFamily: "Sora",
                        lineHeight: "20.16px",
                        fontWeight: 700,
                      }}
                    >
                      Rezept einlösen
                    </Link>
                  </div>
                </NavbarItem>
                <NavbarItem>
                  <div className="flex  h-[20px]">
                    <div className="bg-[#62C3C64D] w-[10px] h-[16px] mt-[2px] mr-1 rounded-[16px_0px_16px_0px]"></div>
                    <Link
                      color="foreground"
                      href="#"
                      className="text-[16px] text-left text-[#045A5C] "
                      style={{
                        fontFamily: "Sora",
                        lineHeight: "20.16px",
                        fontWeight: 400,
                      }}
                    >
                      Live Bestand
                    </Link>
                  </div>
                </NavbarItem>
                <NavbarItem>
                  <div className="flex  h-[20px]">
                    <div className="bg-[#62C3C64D] w-[10px] h-[16px] mt-[2px] mr-1 rounded-[16px_0px_16px_0px]"></div>
                    <Link
                      color="foreground"
                      href="#"
                      className="text-[16px] text-left text-[#045A5C] "
                      style={{
                        fontFamily: "Sora",
                        lineHeight: "20.16px",
                        fontWeight: 400,
                      }}
                    >
                      Videosprechstunde
                    </Link>
                  </div>
                </NavbarItem>
                <NavbarItem>
                  <div className="flex  h-[20px]">
                    <div className="bg-[#62C3C64D] w-[10px] h-[16px] mt-[2px] mr-1 rounded-[16px_0px_16px_0px]"></div>
                    <Link
                      color="foreground"
                      href="#"
                      className="text-[16px] text-left text-[#045A5C] "
                      style={{
                        fontFamily: "Sora",
                        lineHeight: "20.16px",
                        fontWeight: 400,
                      }}
                    >
                      FAQs
                    </Link>
                  </div>
                </NavbarItem>
                <NavbarItem>
                  <div className="flex  h-[20px]">
                    <div className="bg-[#62C3C64D] w-[10px] h-[16px] mt-[2px] mr-1 rounded-[16px_0px_16px_0px]"></div>
                    <Link
                      color="foreground"
                      href="#"
                      className="text-[16px] text-left text-[#045A5C] "
                      style={{
                        fontFamily: "Sora",
                        lineHeight: "20.16px",
                        fontWeight: 400,
                      }}
                    >
                      Kontakt
                    </Link>
                  </div>
                </NavbarItem>
              </div>
              <div className="flex gap-4 w-[162px]">
                <NavbarItem>
                  <div className="flex h-[20px]">
                    <Cart className="w-[22.4px] h-[21px] text-[#28E3E9]" />
                    <div className="bg-[#62C3C64D] w-[18px] h-[18px] text-[#28E3E9] text-[12px] rounded-full -ml-2 mt-1 flex place-content-center items-center ">
                      1
                    </div>
                    {/* ml-2  mt-1 pl-[6px] */}
                  </div>
                </NavbarItem>
                <NavbarItem>
                  <Button className="flex w-[110px] h-[20px] text-[#045A5C ] bg-[#ECFEAA] rounded-[24px_0px_24px_0px] p-[7px_18px_8px_18px]">
                    <div>Anmelden</div>
                  </Button>
                </NavbarItem>
              </div>
            </div>
          </NavbarContent>
          <NavbarContent justify="end">
            {/* <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem> */}
            {/* <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button> */}
            {/* </NavbarItem> */}
          </NavbarContent>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
