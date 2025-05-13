"use client";
import SelectStyle from "@/components/createNew/SelectStyle";
import SelectTopics from "@/components/createNew/SelectTopics";
import React, { useState } from "react";

const CreateNew = () => {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
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
        {/* Select create button */}
      </div>
    </div>
  );
};

export default CreateNew;
