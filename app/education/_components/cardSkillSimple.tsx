import { Button } from "@/components/ui/button";
import { convertDifficultyToStars } from "@/lib/utils";
import { Skill } from "@/types/card";

interface CardSkillSimpleProps {
  skill: Skill;
}
const CardSkillSimple = ({ skill }: CardSkillSimpleProps) => {
  return (
    <div className="flex flex-col justify-between bg-c1 p-[25px] gap-[10px] rounded-[10px] text-black leading-none">
      <div className="flex justify-between ">
        <div className="big-text mb-3">
          {convertDifficultyToStars(skill.difficulty)} {skill.title}
        </div>
      </div>
      <div className="flex flex-row justify-around gap-[10px] flex-grow-0">
        <Button className="">Редактировать задачи</Button>
        <Button className="" variant="destructive">
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default CardSkillSimple;
