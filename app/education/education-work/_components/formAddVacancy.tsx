"use client";

import InputDarkField from "@/components/inputDark";
import TextareaDarkField from "@/components/textareaDark";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { sendRequest } from "@/lib/utils";

interface FormAddVacancyProps {
  action: string;
  careerGuidances: { id: number; name: string }[];
}

const FormAddVacancy = ({ action, careerGuidances }: FormAddVacancyProps) => {
  const [title, setTitle] = useState("");
  const [skillId, setSkillId] = useState(careerGuidances[0].id.toString());
  const [level, setLevel] = useState("1");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const formData = {
      title,
      career_guidance_id: skillId,
      level,
      description,
      employer_id: 6,
    };
    sendRequest(JSON.stringify(formData), action, "POST");
  };

  return (
    <div>
      <InputDarkField
        title="Название"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      ></InputDarkField>
      <div className="pb-[30px]">
        <div className="small-text text-white mb-5">Навык</div>
        <Select
          defaultValue={careerGuidances[0].id.toString()}
          onValueChange={setSkillId}
        >
          <SelectTrigger className="h-[60px] small-text m-0 bg-c2 text-black">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {careerGuidances.map((skill) => (
              <SelectItem key={skill.id} value={skill.id.toString()}>
                {skill.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="pb-[30px]">
        <div className="small-text text-white mb-5">Уровень</div>

        <Select defaultValue="1" onValueChange={setLevel}>
          <SelectTrigger className="h-[60px] small-text m-0 bg-c2 text-black">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">★☆☆</SelectItem>
            <SelectItem value="2">★★☆</SelectItem>
            <SelectItem value="3">★★★</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <TextareaDarkField
        title="Описание"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
        className=""
      ></TextareaDarkField>
      <div className="flex w-[100%] justify-around">
        <DialogClose>
          <Button variant="defaultdark" onClick={handleSubmit}>
            Добавить
          </Button>
        </DialogClose>
        <DialogClose>
          <Button variant="destructive">Отмена</Button>
        </DialogClose>
      </div>
    </div>
  );
};

export default FormAddVacancy;
