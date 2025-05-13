"use client";
import SelectDuration from "@/components/createNew/SelectDuration";
import SelectStyle from "@/components/createNew/SelectStyle";
import SelectTopics from "@/components/createNew/SelectTopics";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const CreateNew = () => {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);

    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };
  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-primary text-center">
        Create New
      </h2>
      <div className="mt-10 p-10 shadow-md rounded-md">
        {/* Select Topic */}
        <SelectTopics onUserSelect={onHandleInputChange} />
        {/* Select Style */}
        <SelectStyle onUserSelect={onHandleInputChange} />
        {/* Select Duration */}
        <SelectDuration onUserSelect={onHandleInputChange} />
        {/* Select create button */}
        <Button className="mt-10 w-full">Create Short Video</Button>
      </div>
    </div>
  );
};

export default CreateNew;
