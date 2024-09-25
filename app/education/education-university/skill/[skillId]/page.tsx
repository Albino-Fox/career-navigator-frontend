import ListTaskEdit from "@/app/education/_components/listTaskEdit";
import { Button } from "@/components/ui/button";
import { convertDifficultyToStars } from "@/lib/utils";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormAddTask from "../../_components/formAddTask";

const TaskPage = async ({ params }: { params: { skillId: number } }) => {
  let response = await fetch(
    `http://127.0.0.1:3001/api/career_guidance_branches/get/${params.skillId}`,
  );
  const careerGuidanceBranch = await response.json();

  response = await fetch(
    `http://127.0.0.1:3001/api/tasks/getFromBranch/${params.skillId}`,
  );
  let tasks = await response.json();
  tasks = tasks.map(
    (task: { name: string; description: string; id: number }) => ({
      title: task.name,
      description: task.description,
      id: task.id,
    }),
  );

  return (
    <div className="flex justify-center w-[100%] pb-[75px] bg-c5 ">
      <div className="flex flex-col gap-[10px] items-center w-[100%] px-[145px] ">
        <div className="flex flex-row w-[1278px] justify-between items-center">
          <div className="big-text py-5">
            {convertDifficultyToStars(careerGuidanceBranch.level)} &quot;
            {careerGuidanceBranch.skillTitle}&quot;
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="p-0 hover:bg-c5">
                <Plus size={40} className="hover:text-c1"></Plus>
              </Button>
            </DialogTrigger>
            <DialogContent className="block bg-c5 border-c1 border-[2px] min-w-[1148px] h-[95vh] pt-0 overflow-auto">
              <DialogHeader className="flex flex-col justify-center h-[100%] px-[61px]">
                <DialogTitle className="text-white text-center big-text font-normal py-[40px]">
                  Добавить задание
                </DialogTitle>
                <DialogDescription className="flex flex-col">
                  <FormAddTask
                    action="http://127.0.0.1:3001/api/tasks/create"
                    skillBranchId={params.skillId}
                  ></FormAddTask>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <ListTaskEdit hasDeleteButton tasks={tasks}></ListTaskEdit>
      </div>
    </div>
  );
};

export default TaskPage;
