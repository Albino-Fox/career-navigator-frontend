"use client";

import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface TextareaFieldProps {
  title: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (name: string, value: string) => void;
  className?: string;
}

const TextareaField = ({
  title,
  placeholder,
  name,
  value,
  onChange,
  className = "",
}: TextareaFieldProps) => {
  const [curValue, setCurValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (name) {
      const newValue = e.target.value;
      setCurValue(newValue);
      if (onChange) onChange(name, newValue);
    }
  };

  return (
    <div className={`pb-[30px] ${className}`}>
      <div className="small-text">{title}</div>
      <Textarea
        name={name}
        defaultValue={curValue}
        className="min-h-[250px] bg-c2/25 small-text leading-snug"
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextareaField;
