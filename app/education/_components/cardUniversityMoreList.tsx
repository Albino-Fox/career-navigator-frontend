"use client";

import { convertDifficultyToStars } from "@/lib/utils";
import { Task } from "@/types/card";
import { usePathname } from "next/navigation";

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
  tasks: Task[];
  linkType?: boolean;
}

const CardUniversityMoreList = ({
  difficulty,
  tasks,
  linkType = false,
}: CardUniversityMoreListProps) => {
  const pathname = usePathname();
  return (
    <div>
      <div className="w-[100%] border-b-[2px] border-black pt-5 normal-text">
        {convertDifficultyToStars(difficulty)} Уровень
      </div>
      {linkType === false ? (
        <Accordion type="multiple">
          {tasks.map((task, idx) => (
            <AccordionItem value={`${idx}`} key={idx}>
              <AccordionTrigger className="flex flex-row justify-between hover:bg-c2/75 rounded-[25px] p-5 ">
                <div className="pt-2 small-text">
                  {idx + 1}. {task.name}
                </div>
              </AccordionTrigger>
              <AccordionContent className="small-text">
                {task.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        tasks.map((task, idx) => (
          <div key={idx} className="pt-2 small-text">
            <Link href={`${pathname}/${task.id}`}>
              <Button variant="link" size="text" className="small-text">
                {idx + 1}. {task.name}
              </Button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default CardUniversityMoreList;
