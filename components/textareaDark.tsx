"use client";

import { Textarea } from "@/components/ui/textarea";

interface TextareaDarkFieldProps {
  title: string;
  placeholder?: string;
  value?: string;
  className?: string;
}

const TextareaDarkField = ({
  title,
  placeholder,
  value,
  className = "",
}: TextareaDarkFieldProps) => {
  return (
    <div className={`pb-[30px] ${className}`}>
      <div className="small-text text-white mb-5">{title}</div>
      <Textarea
        className={` min-h-[250px] bg-c2 small-text text-black leading-snug `}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default TextareaDarkField;
