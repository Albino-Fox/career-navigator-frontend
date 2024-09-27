"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { sendRequest } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

interface FormAnswerProps {
  action: string;
  id: number;
}

const FormAnswer = ({ action, id }: FormAnswerProps) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    const formData = {
      user_id: 1,
      task_id: id,
      answer,
    };
    sendRequest(JSON.stringify(formData), action, "POST");
  };

  return (
    <div>
      <div className="mt-[40px]">
        <div className="small-text">Поле для ввода ответа</div>
        <Textarea
          className="h-[400px] min-w-[1300px] bg-c2 text-black normal-text py-3 px-5 leading-snug"
          onChange={(e) => setAnswer(e.target.value)}
        ></Textarea>
      </div>
      <div className="flex w-[100%] justify-center">
        <Button
          variant="outline"
          onClick={handleSubmit}
          className="border-c1 text-c1 mt-5 w-[352px]"
        >
          Отправить
        </Button>
      </div>
    </div>
  );
};

export default FormAnswer;
