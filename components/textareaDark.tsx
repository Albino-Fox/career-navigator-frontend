"use client";

import { Textarea } from "@/components/ui/textarea";

interface TextareaDarkFieldProps {
  title: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  className?: string;
}

const TextareaDarkField = ({
  title,
  placeholder,
  value,
  onChange,
  className = "",
}: TextareaDarkFieldProps) => {
  return (
    <div className={`pb-[30px] ${className}`}>
      <div className="small-text text-white mb-5">{title}</div>
      <Textarea
        className={` min-h-[250px] bg-c2 small-text text-black leading-snug `}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={value}
      />
    </div>
  );
};

export default TextareaDarkField;
