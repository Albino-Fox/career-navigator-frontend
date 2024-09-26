"use client";

import { Button } from "@/components/ui/button";
import { convertDifficultyToStars } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

interface CardUniversityProps {
  title: string;
  id: number;
  description?: string;
}
const CardUniversity = ({ title, id, description }: CardUniversityProps) => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:3001/api/career_guidance_branches/getFrom/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      });
  }, [id]);

  return (
    <div className="bg-c1 p-[25px] mb-[25px] rounded-[10px] text-black leading-none">
      <div className="big-text -mt-2">{title}</div>
      {description ? (
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger className="normal-text border-b-2 border-black">
              Описание
            </AccordionTrigger>
            <AccordionContent className="leading-none small-text pt-5">
              {description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        ""
      )}

      <div className="py-5 flex flex-wrap justify-between">
        {skills
          ? skills.map(
              (skill: {
                skillTitle: string;
                level: number;
                skillId: number;
              }) => (
                <div
                  className="normal-text w-[50%] leading-snug"
                  key={skill.skillId}
                >
                  {convertDifficultyToStars(skill.level)} {skill.skillTitle}
                </div>
              ),
            )
          : ""}
      </div>
      <Button>Посмотреть задания</Button>
    </div>
  );
};

export default CardUniversity;
