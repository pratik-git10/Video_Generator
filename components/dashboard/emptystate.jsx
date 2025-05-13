import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="p-5 py-24 flex items-center flex-col mt-10 border-2 rounded-md gap-1">
      <h2>You don't have Videos created.</h2>
      <Link href={"/dashboard/create-new"}>
        <Button>Create New Short Videos</Button>
      </Link>
    </div>
  );
};

export default EmptyState;
