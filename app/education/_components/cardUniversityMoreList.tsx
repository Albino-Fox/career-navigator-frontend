import { convertDifficultyToStars } from "@/lib/utils";
import { Task } from "@/types/card";

interface CardUniversityMoreListProps {
  difficulty: number;
  tasks: Task[];
}

const CardUniversityMoreList = ({
  difficulty,
  tasks,
}: CardUniversityMoreListProps) => {
  return (
    <div>
      <div className="w-[100%] border-b-[2px] border-black pt-5 normal-text">
        {convertDifficultyToStars(difficulty)} Уровень
      </div>
      {tasks.map((task, idx) => (
        <div key={idx} className="pt-2 small-text">
          {idx + 1}. {task.title}
        </div>
      ))}
    </div>
  );
};

export default CardUniversityMoreList;
