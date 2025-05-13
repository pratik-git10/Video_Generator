"use client";

import {
  FileVideo,
  PanelsTopLeftIcon,
  ShieldPlus,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Sidebar = () => {
  const links = [
    {
      id: 1,
      name: "Dashboard",
      pathname: "/dashboard",
      icon: PanelsTopLeftIcon,
    },
    {
      id: 2,
      name: "Create New",
      pathname: "/dashboard/create-new",
      icon: FileVideo,
    },
    {
      id: 3,
      name: "Upgrade",
      pathname: "/upgrade",
      icon: ShieldPlus,
    },
    {
      id: 4,
      name: "Account",
      pathname: "/account",
      icon: UserCircle,
    },
  ];

  const path = usePathname();

  return (
    <div className="w-64 h-screen shadow-md p-5 flex flex-col justify-between">
      <div className="grid gap-2">
        {links.map((link, index) => (
          <Link href={link.pathname} key={index}>
            <div
              className={`flex items-center p-3 gap-3 hover:bg-primary hover:text-white rounded-md transition transform ease-in-out duration-200 ${
                path == link.pathname && "bg-primary text-white"
              }`}>
              <link.icon />
              <h1>{link.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
