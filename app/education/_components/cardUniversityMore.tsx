import { Skill, Task } from "@/types/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CardUniversityMoreList from "./cardUniversityMoreList";

interface CardUniversityMoreProps {
  skill: Skill;
  difficultyTasks: {
    level: number;
    tasks: Task[];
  }[];
  children?: React.ReactNode;
}
const CardUniversityMore = ({
  skill,
  difficultyTasks,
  children,
}: CardUniversityMoreProps) => {
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
      {children}
    </div>
  );
};

export default CardUniversityMore;
