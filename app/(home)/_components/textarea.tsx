"use client";

import { Textarea } from "@/components/ui/textarea";

interface TextareaFieldProps {
  title: string;
  placeholder?: string;

  className?: string;
}

const TextareaField = ({
  title,
  placeholder,
  className = "",
}: TextareaFieldProps) => {
  return (
    <div className={`pb-[30px] ${className}`}>
      <div className="small-text">{title}</div>
      <Textarea
        className="min-h-[250px] bg-c2/25 small-text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextareaField;
