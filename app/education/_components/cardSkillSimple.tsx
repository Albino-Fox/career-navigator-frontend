"use client";

import { Button } from "@/components/ui/button";
import { convertDifficultyToStars } from "@/lib/utils";
import { Skill } from "@/types/card";
import Link from "next/link";

interface CardSkillSimpleProps {
  skill: Skill;
  skillBranchId: number;
}
const CardSkillSimple = ({ skill, skillBranchId }: CardSkillSimpleProps) => {
  return (
    <div className="flex flex-col justify-between bg-c1 p-[25px] gap-[10px] rounded-[10px] text-black leading-none">
      <div className="flex justify-between ">
        <div className="big-text mb-3">
          {convertDifficultyToStars(skill.difficulty)} {skill.title}
        </div>
      </div>
      <div className="flex flex-row justify-around gap-[10px] flex-grow-0">
        <Link href={`/education/education-university/skill/${skillBranchId}`}>
          <Button className="">Редактировать задачи</Button>
        </Link>
        <Button className="" variant="destructive">
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default CardSkillSimple;
