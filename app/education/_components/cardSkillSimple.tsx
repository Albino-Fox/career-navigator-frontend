"use client";

import { Button } from "@/components/ui/button";
import { convertDifficultyToStars, sendRequest } from "@/lib/utils";
import { Skill } from "@/types/card";
import Link from "next/link";

interface CardSkillSimpleProps {
  skill: Skill;
  skillBranchId: number;
  hasEditButtons?: boolean;
}
const CardSkillSimple = ({
  skill,
  hasEditButtons = false,
  skillBranchId,
}: CardSkillSimpleProps) => {
  return (
    <div className="flex flex-col justify-between bg-c1 p-[25px] gap-[10px] rounded-[10px] text-black leading-none">
      <div className="flex justify-between ">
        <div className="big-text mb-3">
          {convertDifficultyToStars(skill.difficulty)} {skill.title}
        </div>
      </div>
      {hasEditButtons ? (
        <div className="flex flex-row justify-around gap-[10px] flex-grow-0">
          <Link href={`/education/education-university/skill/${skillBranchId}`}>
            <Button className="">Редактировать задачи</Button>
          </Link>
          <Button
            variant="destructive"
            className="w-[304px]"
            onClick={() => {
              sendRequest(
                JSON.stringify({ id: skillBranchId }),
                "http://127.0.0.1:3001/api/career_guidance_branches/delete",
                "DELETE",
              );
              window.location.reload();
            }}
          >
            Удалить
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardSkillSimple;
