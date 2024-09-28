import { Button } from "@/components/ui/button";
import { convertDifficultyToStars } from "@/lib/utils";
import { Skill } from "@/types/card";
import Link from "next/link";

interface CardSkillProps {
  skill: Skill;
  university: string;
  university_id: number;
  career_guidance_id: number;
}
const CardSkill = ({
  skill,
  university,
  university_id,
  career_guidance_id,
}: CardSkillProps) => {
  return (
    <div className="flex flex-row items-center justify-between bg-c1 p-[25px] gap-[10px] rounded-[10px] text-black leading-none ">
      <div className="flex flex-col justify-between ">
        <div className="normal-text">
          {convertDifficultyToStars(skill.difficulty)} {skill.title}
        </div>
        <div className="small-text break-all">{university}</div>
      </div>
      <div className="flex flex-col gap-[10px] flex-grow-0">
        {skill.difficulty === 3 ? (
          ""
        ) : (
          <Link
            href={`/education/hei/${university_id}/skill/${career_guidance_id}`}
          >
            <Button className="">Посмотреть задания</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardSkill;
