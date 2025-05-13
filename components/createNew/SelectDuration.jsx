import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectDuration = ({ onUserSelect }) => {
  return (
    <div className="mt-6">
      <div>
        <h2 className="text-2xl font-semibold">Duration </h2>
        <p className="text-gray-500">select the duration of video</p>

        <Select
          onValueChange={(value) => {
            value != "Custom Prompt" && onUserSelect("duration", value);
          }}>
          <SelectTrigger className="w-full mt-2 p-3">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="30 Seconds">30 Seconds</SelectItem>
            <SelectItem value="60 Seconds">60 Seconds</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectDuration;
