import { Button } from "@/components/ui/button";
import { convertDifficultyToStars } from "@/lib/utils";
import { Skill } from "@/types/card";

interface CardSkillProps {
  skill: Skill;
  university: string;
}
const CardSkill = ({ skill, university }: CardSkillProps) => {
  return (
    <div className="flex flex-row items-center justify-between bg-c1 p-[25px] gap-[10px] rounded-[10px] text-black leading-none ">
      <div className="flex flex-col justify-between ">
        <div className="normal-text">
          {convertDifficultyToStars(skill.difficulty)} {skill.title}
        </div>
        <div className="small-text ">{university}</div>
      </div>
      <div className="flex flex-col gap-[10px] flex-grow-0">
        {skill.difficulty === 0 ? (
          <>
            <Button className="">Продолжить изучение</Button>
            <Button className="" variant="destructive">
              Отказаться от изучения
            </Button>
          </>
        ) : skill.difficulty === 3 ? (
          ""
        ) : (
          <Button className="">Продолжить изучение</Button>
        )}
      </div>
    </div>
  );
};

export default CardSkill;
