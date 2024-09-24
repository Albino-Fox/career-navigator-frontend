import { convertDifficultyToStars } from "@/lib/utils";
import { Skill } from "@/types/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CardApplicationProps {
  name: string;
  phone: string;
  email: string;
  skills: { difficulty: number; university: string }[];
  children?: React.ReactNode;
}
const CardApplication = ({
  name,
  phone,
  email,
  skills,
  children,
}: CardApplicationProps) => {
  return (
    <div className="bg-c1 p-[25px] mb-[15px] rounded-[10px] text-black leading-none">
      <div className="big-text -mt-2">{title}</div>
      <div className="pb-5 pt-2 flex flex-wrap justify-between">
        <div className="normal-text leading-snug">
          {convertDifficultyToStars(skill.difficulty)} {skill.title}
        </div>
      </div>

      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger className="small-text border-b-2 border-black mb-5">
            Описание
          </AccordionTrigger>
          <AccordionContent className="leading-none small-text pt-5">
            {description}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-row justify-between items-center">
        {children}
      </div>
    </div>
  );
};

export default CardApplication;
