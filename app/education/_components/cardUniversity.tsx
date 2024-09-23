import { Button } from "@/components/ui/button";
import { convertDifficultyToStars } from "@/lib/utils";
import { Skill } from "@/types/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CardUniversityProps {
  title: string;
  description?: string;
  skills: Skill[];
}
const CardUniversity = ({
  title,
  description,
  skills,
}: CardUniversityProps) => {
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
        {skills.map((skill, idx) => (
          <div className="normal-text w-[50%] leading-snug" key={idx}>
            {convertDifficultyToStars(skill.difficulty)} {skill.title}
          </div>
        ))}
      </div>
      <Button>Посмотреть задания</Button>
    </div>
  );
};

export default CardUniversity;
