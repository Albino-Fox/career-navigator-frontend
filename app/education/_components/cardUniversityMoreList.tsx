"use client";

import { convertDifficultyToStars } from "@/lib/utils";
import { Task } from "@/types/card";
import { usePathname, useSearchParams } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CardUniversityMoreListProps {
  difficulty: number;
  tasks: (Task & { TaskStatuses: { is_done: boolean }[] })[];
  linkType?: boolean;
}

const CardUniversityMoreList = ({
  difficulty,
  tasks,
  linkType = false,
}: CardUniversityMoreListProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isObserving = !!searchParams.get("observe");

  return (
    <div>
      <div className="w-[100%] border-b-[2px] border-black pt-5 normal-text">
        {convertDifficultyToStars(difficulty)} Уровень
      </div>
      {linkType === false || (linkType === true && isObserving) ? (
        <Accordion type="multiple">
          {tasks.map((task, idx) => (
            <AccordionItem value={`${idx}`} key={idx}>
              <AccordionTrigger className="flex flex-row justify-between hover:bg-c2/75 rounded-[25px] px-5 ">
                <div className="pt-2 small-text">
                  {idx + 1}. {task.name}
                </div>
              </AccordionTrigger>
              <AccordionContent className="small-text leading-snug">
                {task.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        tasks.map((task, idx) => (
          <div key={idx} className="pt-2 small-text">
            {task.TaskStatuses.length > 0 && task.TaskStatuses[0].is_done ? (
              <Link href={`${pathname}/${task.id}`}>
                <Button
                  variant="link"
                  size="text"
                  className={"small-text line-through text-gray-900"}
                >
                  {idx + 1}. {task.name}
                </Button>
              </Link>
            ) : (
              <Link href={`${pathname}/${task.id}`}>
                <Button variant="link" size="text" className={"small-text"}>
                  {idx + 1}. {task.name}
                </Button>
              </Link>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default CardUniversityMoreList;
