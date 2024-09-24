import { convertDifficultyToStars } from "@/lib/utils";
import { Task } from "@/types/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface CardUniversityMoreListProps {
  difficulty: number;
  tasks: Task[];
  linkType?: boolean;
}

const CardUniversityMoreList = ({
  difficulty,
  tasks,
  linkType = false,
}: CardUniversityMoreListProps) => {
  return (
    <div>
      <div className="w-[100%] border-b-[2px] border-black pt-5 normal-text">
        {convertDifficultyToStars(difficulty)} Уровень
      </div>
      {linkType === false ? (
        <Accordion type="multiple">
          {tasks.map((task, idx) => (
            <AccordionItem value={`${idx}`} key={idx}>
              <AccordionTrigger className="flex flex-row justify-between ">
                <div className="pt-2 small-text">
                  {idx + 1}. {task.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="small-text">
                {task.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        tasks.map((task, idx2) => (
          <div key={idx2} className="pt-2 small-text">
            <Button variant="link" size="text" className="small-text">
              {idx2 + 1}. {task.title}
            </Button>
          </div>
        ))
      )}
    </div>
  );
};

export default CardUniversityMoreList;
