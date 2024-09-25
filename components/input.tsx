"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";

interface InputFieldProps {
  title: string;
  isImportant?: boolean;
  isDisabled?: boolean;
  onChange?: (name: string, value: string) => void;
  name?: string;
  value?: string;
  type?: string;
  className?: string;
}

const InputField = ({
  title,
  type = "text",
  isImportant = false,
  isDisabled = false,
  name,
  onChange,
  value = "",
  className = "",
}: InputFieldProps) => {
  const [curValue, setCurValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (name) {
      const newValue = e.target.value;
      setCurValue(newValue);
      if (onChange) onChange(name, newValue);
    }
  };
  return (
    <div className={`pb-[30px]`}>
      <div className={`small-text `}>
        {title}
        {`${isImportant ? "*" : ""}`}
      </div>
      <Input
        type={type}
        disabled={isDisabled}
        name={name}
        value={curValue}
        onChange={handleChange}
        className={` h-[60px] bg-c2/25 small-text ${className}`}
      />
    </div>
  );
};

export default InputField;
