"use client";

import { Input } from "@/components/ui/input";

interface InputDarkFieldProps {
  title: string;
  isImportant?: boolean;
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  className?: string;
}

const InputDarkField = ({
  title,
  type = "text",
  isImportant = false,
  isDisabled = false,
  onChange,
  value,
  className = "",
}: InputDarkFieldProps) => {
  return (
    <div className={`pb-[30px]`}>
      <div className={`small-text text-white  mb-5`}>
        {title}
        {`${isImportant ? "*" : ""}`}
      </div>
      <Input
        type={type}
        defaultValue={value}
        disabled={isDisabled}
        onChange={onChange}
        className={` h-[60px] bg-c2/25 small-text text-black bg-c2 ${className}`}
      />
    </div>
  );
};

export default InputDarkField;
