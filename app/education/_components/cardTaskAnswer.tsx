import { convertDifficultyToStars } from "@/lib/utils";
import { Skill, Task } from "@/types/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface CardTaskAnswerProps {
  task: Task;
  skill: Skill;
  answer: string;
}
const CardTaskAnswer = ({ task, skill, answer }: CardTaskAnswerProps) => {
  return (
    <div className="bg-c1 rounded-[10px] p-[40px] min-w-[1278px]">
      <div className="big-text">{task.name}</div>
      <div>
        {convertDifficultyToStars(skill.difficulty)} {skill.title}
      </div>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger className="normal-text border-b-2 border-black">
            Описание задачи
          </AccordionTrigger>
          <AccordionContent className="leading-none small-text pt-5">
            {task.description}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="normal-text border-b-2 border-black">
            Сообщение студента
          </AccordionTrigger>
          <AccordionContent className="leading-none small-text pt-5">
            {answer}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="normal-text border-b-2 border-black">
            Окно для ответа (отправит текст на почту от имени вуза)
          </AccordionTrigger>
          <AccordionContent className="leading-none small-text pt-5">
            <Textarea className="min-h-[250px] text-black leading-snug bg-c2/80 normal-text"></Textarea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex flex-row justify-around gap-[10px] flex-grow-0 mt-5">
        <Button className="">Принять</Button>
        <Button className="">Отклонить</Button>
      </div>
    </div>
  );
};

export default CardTaskAnswer;
