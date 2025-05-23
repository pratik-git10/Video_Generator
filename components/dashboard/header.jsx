import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="mx-3 rounded-b-md flex backdrop-blur-lg justify-between items-center p-3 px-5 shadow-md sticky top-0">
      <Link href={"/dashboard"}>
        <div className="flex items-center">
          {/* <Link href={"/dashboard"} className=""> */}
          <span className="text-xl font-bold italic mr-1 text-rose-400">
            Vido
          </span>
          <Image src={"/logo_vido.png"} alt="logo" width={40} height={40} />
          <span className="text-xl font-bold italic  text-rose-400">AI</span>
          {/* </Link> */}
        </div>
      </Link>
      <div className="flex items-center gap-3">
        <Button>Dashboard</Button>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
