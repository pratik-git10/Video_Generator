"use client";

import EmptyState from "@/components/dashboard/emptystate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const Dashboard = () => {
  const [videoList, setVideoList] = useState([]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl text-rose-600">Dashboard</h2>{" "}
        <Link href={"/dashboard/create-new"}>
          <Button>+ Create New</Button>
        </Link>
      </div>

      {videoList?.length == 0 && (
        <div>
          <EmptyState />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
