import { Button } from "@/components/ui/button";
import { convertDifficultyToStars } from "@/lib/utils";
import { Skill } from "@/types/card";

interface UniversityCardProps {
  title: string;
  skills: Skill[];
}
const UniversityCard = ({ title, skills }: UniversityCardProps) => {
  return (
    <div className="bg-c1 p-[25px] rounded-[10px] text-black leading-none">
      <div className="big-text -mt-2">{title}</div>
      <div className="py-5 flex flex-wrap justify-between">
        {skills.map((skill, idx) => (
          <div className="normal-text w-[50%] leading-snug" key={idx}>
            {convertDifficultyToStars(skill.difficulty)} {skill.title}
          </div>
        ))}
      </div>
      <Button>Посмотреть задания</Button>
    </div>
  );
};

export default UniversityCard;
