"use client";

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

interface FormAddSkillBranchProps {
  action: string;
  careerGuidances: { id: number; name: string }[];
}

const FormAddSkillBranch = ({
  action,
  careerGuidances,
}: FormAddSkillBranchProps) => {
  const [skillId, setSkillId] = useState(careerGuidances[0].id.toString());
  const [level, setLevel] = useState("1");

  const handleSubmit = () => {
    const formData = {
      career_guidance_id: skillId,
      level,
      // TODO: change user_id to cookie's one (uni)
      university_id: 8,
    };
    sendRequest(JSON.stringify(formData), action, "POST");
    window.location.reload();
  };

  return (
    <div>
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
  );
};

export default FormAddSkillBranch;
