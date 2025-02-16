"use client";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import React from "react";
import UserToggle from "./UserToggle";
import MobileMenu from "./MobileMenu";
import { NavMenu } from "../../../../constans";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

const Navbar = () => {
const pathname = usePathname();
  return (
    <div className={`w-full z-30 items-center ${pathname != '/' ? 'bg-mydark2': 'fixed'}`}>
      <div className="container">
        <div className="px-4 py-6 flex flex-row items-center justify-center">
          <div className="w-24 py-4 px-3 rounded-xl bg-white ">
            <Image
              src="/logo.png"
              alt="logo"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          <div className="hidden lg:flex flex-row items-center gap-9 ml-auto">
            {NavMenu.map((item, index) => (
              <NavItem key={index} title={item.title} url={item.url} />
            ))}
          </div>
          <div className="flex lg:flex items-center ml-auto gap-2">
            <UserToggle />
            <ModeToggle />
          </div>
          <div className="lg:hidden flex flex-row items-center gap-2 ml-auto">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
