"use client";

import { Button } from "@/components/ui/button";

interface FormProps {
  title: string;
  btnTitle: string;
  hasImportantFields?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Form = ({
  title,
  btnTitle: action,
  hasImportantFields = false,
  className = "",
  children,
}: FormProps) => {
  return (
    <form
      action=""
      onClick={(e) => e.preventDefault()}
      method="post"
      className={`flex flex-col ${className}`}
    >
      <div className="big-text self-center pb-[50px]">{title}</div>
      {children}
      <div className="xsmall-text mt-[-20px]">
        {hasImportantFields ? "*отмечены обязательные поля" : ""}
      </div>
      <Button
        size="autofill"
        variant="outline"
        className="mt-[45px] self-center"
      >
        {action}
      </Button>
    </form>
  );
};

export default Form;
