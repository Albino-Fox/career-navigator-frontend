import { Button } from "@/components/ui/button";
import { Task } from "@/types/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormTaskEdit from "./formEditTask";

interface ListTaskEditProps {
  tasks: Task[];
}
const ListTaskEdit = ({ tasks }: ListTaskEditProps) => {
  return (
    <div className="flex justify-center flex-col w-[1366px] rounded-[10px] text-black p-[40px] py-0 gap-5 leading-snug">
      {tasks.map((task, idx) => (
        <div className="bg-c1 rounded-[10px]  p-[30px]" key={idx}>
          <div className="normal-text mb-2">
            {idx + 1}. {task.title}
          </div>
          <div className="small-text leading-snug mb-5">{task.description}</div>
          <div className="flex w-[100%] justify-around">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Редактировать</Button>
              </DialogTrigger>
              <DialogContent className="block bg-c5 border-c1 border-[2px] min-w-[1148px] h-[95vh] pt-0 overflow-auto">
                <DialogHeader className="flex flex-col justify-center h-[100%] px-[61px]">
                  <DialogTitle className="text-white text-center big-text font-normal py-[40px]">
                    Редактировать задание
                  </DialogTitle>
                  <DialogDescription className="flex flex-col">
                    <FormTaskEdit
                      action="http://127.0.0.1:3001/api/tasks/update"
                      title={task.title}
                      description={task.description}
                      id={task.id!}
                    ></FormTaskEdit>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Button variant="destructive">Удалить</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTaskEdit;
