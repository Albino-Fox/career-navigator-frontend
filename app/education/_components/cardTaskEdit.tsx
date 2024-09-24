import { Button } from "@/components/ui/button";
import { Task } from "@/types/card";

interface CardTaskEditProps {
  tasks: Task[];
}
const CardTaskEdit = ({ tasks }: CardTaskEditProps) => {
  return (
    <div className="flex justify-center flex-col w-[1366px] rounded-[10px] text-black p-[40px] py-0 gap-5 leading-snug">
      {tasks.map((task, idx) => (
        <div className="bg-c1 rounded-[10px]  p-[30px]" key={idx}>
          <div className="normal-text mb-2">
            {idx + 1}. {task.title}
          </div>
          <div className="small-text leading-snug mb-5">{task.description}</div>
          <div className="flex w-[100%] justify-around">
            <Button>Редактировать</Button>
            <Button variant="destructive">Удалить</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTaskEdit;
