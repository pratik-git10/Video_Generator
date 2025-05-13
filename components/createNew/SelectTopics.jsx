"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";

const SelectTopics = ({ onUserSelect }) => {
  const prompt = [
    "Custom Prompt",
    "Motivational",
    "Fun Facts",
    "Historical",
    "Random AI story",
    "Scary Story",
  ];
  const [selectedOptions, setSelectedOptions] = useState();
  return (
    <div>
      <h2 className="text-2xl font-semibold">Content</h2>
      <p className="text-gray-500">What is the topic of your video ? </p>

      <Select
        onValueChange={(value) => {
          setSelectedOptions(value);
          value != "Custom Prompt" && onUserSelect("topic", value);
        }}>
        <SelectTrigger className="w-full mt-2 p-3">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {prompt.map((item, idx) => (
            <SelectItem key={idx} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedOptions == "Custom Prompt" && (
        <Textarea
          className="mt-3"
          placeholder="Write Prompt of your choice"
          onChange={(e) => onUserSelect("topic", e.target.value)}
        />
      )}
    </div>
  );
};

export default SelectTopics;
