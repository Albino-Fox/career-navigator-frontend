"use client";

import { Textarea } from "@/components/ui/textarea";

interface SelectFieldProps {
  title: string;
  placeholder?: string;

  className?: string;
}

const SelectField = ({
  title,
  placeholder,
  className = "",
}: SelectFieldProps) => {
  return (
    <div className={`pb-[30px] ${className}`}>
      <div className="small-text">{title}</div>
      <Textarea
        className="h-[60px] bg-c2/25 small-text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectField;
