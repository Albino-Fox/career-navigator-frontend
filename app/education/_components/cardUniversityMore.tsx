"use client";

import { Skill, Task } from "@/types/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CardUniversityMoreList from "./cardUniversityMoreList";
import { Button } from "@/components/ui/button";
import { sendRequest } from "@/lib/utils";

interface CardUniversityMoreProps {
  skill: Skill;
  university_id: number;
  career_guidance_id: number;
  difficultyTasks: {
    level: number;
    tasks: Task[];
  }[];
}
const CardUniversityMore = ({
  skill,
  difficultyTasks,
  university_id,
  career_guidance_id,
}: CardUniversityMoreProps) => {
  const handleSubmit = () => {
    const formData = {
      university_id,
      career_guidance_id,
      user_id: 1,
    };
    sendRequest(
      JSON.stringify(formData),
      "http://127.0.0.1:3001/api/student_skills/create",
      "POST",
    );
    window.location.reload();
  };

  return (
    <div className="flex justify-center flex-col w-[1366px] rounded-[10px] text-black bg-c1 ">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex flex-row w-[1366px] p-[38px] justify-between ">
            <div className="big-text text-left basis-1/2">{skill.title}</div>
          </AccordionTrigger>
          <AccordionContent className="leading-none small-text p-[38px] pt-5 -mt-[35px]">
            {difficultyTasks.map((difficultyTasksPart) => (
              <CardUniversityMoreList
                key={difficultyTasksPart.level}
                difficulty={difficultyTasksPart.level}
                tasks={difficultyTasksPart.tasks}
              ></CardUniversityMoreList>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        className="w-[244px] h-[60px] self-center mb-5"
        onClick={handleSubmit}
      >
        Обучиться этому
      </Button>
    </div>
  );
};

export default CardUniversityMore;
