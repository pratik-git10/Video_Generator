import Image from "next/image";
import React, { useState } from "react";

const SelectStyle = ({ onUserSelect }) => {
  const styleOptions = [
    {
      name: "Realistic",
      image: "/real_image.jpeg",
    },
    {
      name: "Cartoon",
      image: "/cartoon_image.jpeg",
    },
    {
      name: "Comic",
      image: "/comic.jpeg",
    },
    {
      name: "WaterColor",
      image: "/watercolor.jpeg",
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState();
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold">Style</h2>
      <p className="text-gray-500">Select your video style </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:grid-cols-5 mt-3">
        {styleOptions.map((item, idx) => (
          <div
            className={`relative cursor-pointer hover:scale-105 transition-all rounded-xl ${
              selectedOptions == item.name && "border-4 border-black scale-110"
            }`}
            key={idx}>
            <Image
              src={item.image}
              alt="images"
              width={100}
              height={100}
              className="h-40 object-cover rounded-md w-full"
              onClick={() => {
                setSelectedOptions(item.name);
                onUserSelect("imagestyle", item.name);
              }}
            />
            <h2 className=" absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-md">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectStyle;
