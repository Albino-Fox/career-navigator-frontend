"use client";

import { Input } from "@/components/ui/input";

interface InputFieldProps {
  title: string;
  isImportant?: boolean;
  isDisabled?: boolean;
  type?: string;
  className?: string;
}

const InputField = ({
  title,
  type = "text",
  isImportant = false,
  isDisabled = false,
  className = "",
}: InputFieldProps) => {
  return (
    <div className={`pb-[30px]`}>
      <div className={`small-text `}>
        {title}
        {`${isImportant ? "*" : ""}`}
      </div>
      <Input
        type={type}
        disabled={isDisabled}
        className={` h-[60px] bg-c2/25 small-text ${className}`}
      />
    </div>
  );
};

export default InputField;
