"use client";

import { Input } from "@/components/ui/input";

interface InputFieldProps {
  title: string;
  isImportant?: boolean;
  type?: string;
  className?: string;
}

const InputField = ({
  title,
  type = "text",
  isImportant = false,
  className = "",
}: InputFieldProps) => {
  return (
    <div className={`pb-[30px] ${className}`}>
      <div className="small-text">
        {title}
        {`${isImportant ? "*" : ""}`}
      </div>
      <Input type={type} className="h-[60px] bg-2" />
    </div>
  );
};

export default InputField;
