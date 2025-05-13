import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold flex justify-center items-center ">Hello </h1>
      <UserButton />
    </div>
  );
}
