import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="hidden md:block h-screen bg-white fixed mt-[65px] w-64">
        <Sidebar />
      </div>
      <div className="">
        <Header />
        <div className="ml-64">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
