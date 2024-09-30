"use client";

import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { sendRequest } from "@/lib/utils";
import InputDarkField from "@/components/inputDark";
import TextareaDarkField from "@/components/textareaDark";
import { SessionIds } from "@/lib/config";

interface FormAddTaskProps {
  action: string;
  skillBranchId: number;
}

const FormAddTask = ({ action, skillBranchId }: FormAddTaskProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const formData = {
      career_guidance_branch_id: skillBranchId,
      name: title,
      description,
      // TODO: change user_id to cookie's one (uni)
      university_id: SessionIds.university,
    };
    sendRequest(JSON.stringify(formData), action, "POST");
    window.location.reload();
  };

  return (
    <div>
      <div className="pb-[30px]">
        <InputDarkField
          title="Название"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        ></InputDarkField>
        <TextareaDarkField
          title="Описание"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
        ></TextareaDarkField>
        <div className="flex w-[100%] justify-around">
          <DialogClose asChild>
            <Button variant="defaultdark" onClick={handleSubmit}>
              Добавить
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive">Отмена</Button>
          </DialogClose>
        </div>
      </div>
    </div>
  );
};

export default FormAddTask;
