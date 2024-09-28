"use client";

import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { sendRequest } from "@/lib/utils";
import InputDarkField from "@/components/inputDark";
import TextareaDarkField from "@/components/textareaDark";

interface FormTaskEditProps {
  action: string;
  title: string;
  description: string;
  id: number;
}

const FormTaskEdit = ({
  action,
  title,
  description,
  id,
}: FormTaskEditProps) => {
  const [titleCur, setTitleCur] = useState(title);
  const [descriptionCur, setDescriptionCur] = useState(description);

  const handleSubmit = () => {
    const formData = {
      id,
      name: titleCur,
      description: descriptionCur,
      // TODO: change user_id to cookie's one (uni)
      university_id: 8,
    };
    sendRequest(JSON.stringify(formData), action, "PATCH");
    window.location.reload();
  };

  return (
    <div>
      <div className="pb-[30px]">
        <InputDarkField
          title="Название"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitleCur(e.target.value)
          }
        ></InputDarkField>
        <TextareaDarkField
          title="Описание"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescriptionCur(e.target.value)
          }
          value={description}
        ></TextareaDarkField>
        <div className="flex w-[100%] justify-around">
          <DialogClose>
            <Button variant="defaultdark" onClick={handleSubmit}>
              Обновить
            </Button>
          </DialogClose>
          <DialogClose>
            <Button variant="destructive">Отмена</Button>
          </DialogClose>
        </div>
      </div>
    </div>
  );
};

export default FormTaskEdit;
