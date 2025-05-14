"use client";
import SelectDuration from "@/components/createNew/SelectDuration";
import SelectStyle from "@/components/createNew/SelectStyle";
import SelectTopics from "@/components/createNew/SelectTopics";
import { Button } from "@/components/ui/button";
import axios from "axios";
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

  const onCreateClickHandler = () => {
    GetVideoScript();
  };
  //  get video
  const GetVideoScript = async () => {
    const prompt = `Write a script to generate ${formData.duration} video on topic: ${formData.topic} along with AI image prompt in ${formData.imagestyle} format for each scene and give me result in JSON format with imagePrompt and ContentText as field, No plain Text`;
    console.log(prompt);
    const result = await axios
      .post("/api/get-video-script", {
        prompt: prompt,
      })
      .then((resp) => {
        console.log(resp.data);
      });
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
        <Button onClick={onCreateClickHandler} className="mt-10 w-full">
          Create Short Video
        </Button>
      </div>
    </div>
  );
};

export default CreateNew;
