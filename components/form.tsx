"use client";

import { Button } from "@/components/ui/button";
import { Method } from "@/types/header";
import React, { Children, cloneElement, useEffect, useState } from "react";

interface FormProps {
  title?: string;
  btnTitle: string;
  hasImportantFields?: boolean;
  dontCenterTitle?: boolean;
  action?: string;
  method: Method;
  btnFill?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Form = ({
  title,
  btnTitle,
  action,
  hasImportantFields = false,
  dontCenterTitle = false,
  btnFill,
  method,
  className = "",
  children,
}: FormProps) => {
  const [values, setValues] = useState<{ [key: string]: string }>({});

  const sendRequest = (values: { [key: string]: string }) => {
    if (action)
      fetch(action, {
        method: method,
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
        });
  };

  useEffect(() => {
    const initialValues: { [key: string]: string } = {};

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.props.name) {
        initialValues[child.props.name] = child.props.value || "";
      }
    });

    setValues(initialValues);
  }, [children]);

  const handleValueChange = (name: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const childrenWithProps = Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return cloneElement(child as React.ReactElement, {
        onChange: handleValueChange,
      });
    }
    return child;
  });

  return (
    <form
      action={action}
      onClick={(e) => e.preventDefault()}
      method={method}
      className={`flex flex-col ${className}`}
    >
      <div
        className={` big-text ${dontCenterTitle ? "" : "self-center"} ${title ? "pb-[50px]" : ""}`}
      >
        {title}
      </div>
      {childrenWithProps}
      <div className="xsmall-text mt-[-20px]">
        {hasImportantFields ? "*отмечены обязательные поля" : ""}
      </div>
      <Button
        variant="outline"
        size={`${btnFill ? "fill" : "default"}`}
        className="mt-[45px] self-center"
        onClick={() => sendRequest(values)}
      >
        {btnTitle}
      </Button>
    </form>
  );
};

export default Form;
