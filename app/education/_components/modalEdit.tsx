"use client";
import { Skill } from "@/types/card";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputDarkField from "@/components/inputDark";
import TextareaDarkField from "@/components/textareaDark";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { sendRequest } from "@/lib/utils";
import { Method } from "@/types/header";

interface ModalEditProps {
  title: string;
  skill: Skill;
  method: Method;
  description: string;
  action: string;
  careerGuidances: { id: number; name: string }[];
  children: React.ReactNode;
}

const ModalEdit = ({
  title,
  skill,
  method,
  description,
  careerGuidances,
  action,
  children,
}: ModalEditProps) => {
  const [titleCur, setTitleCur] = useState(title);
  const [skillId, setSkillId] = useState(careerGuidances[0].id.toString());
  const [level, setLevel] = useState("1");
  const [descriptionCur, setDescription] = useState(description);

  const handleSubmit = () => {
    const formData = {
      name: titleCur,
      career_guidance_id: skillId,
      level,
      description: descriptionCur,
      // TODO: change user_id to cookie's one (work)
      employer_id: 6,
    };
    sendRequest(JSON.stringify(formData), action, method);
    window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="block bg-c5 border-c1 border-[2px] min-w-[1148px] h-[95vh] pt-0 overflow-auto">
        <DialogHeader className="flex flex-col justify-start px-[61px]">
          <DialogTitle className="text-white text-center big-text font-normal py-[40px]">
            Редактировать рабочую задачу
          </DialogTitle>
          <DialogDescription className="flex flex-col">
            <InputDarkField
              title="Название"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitleCur(e.target.value)
              }
            ></InputDarkField>
            <div className="pb-[30px]">
              <div className="small-text text-white mb-5">Навык</div>
              <Select defaultValue={skillId} onValueChange={setSkillId}>
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

              <Select
                defaultValue={skill.difficulty.toString()}
                onValueChange={setLevel}
              >
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
              value={description}
              className=""
            ></TextareaDarkField>
            <div className="flex w-[100%] justify-around">
              <DialogClose asChild>
                <Button variant="defaultdark" onClick={handleSubmit}>
                  Обновить
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="destructive">Отмена</Button>
              </DialogClose>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalEdit;
