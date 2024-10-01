import { Button } from "@/components/ui/button";
import ListCardWork from "../_components/listCardWork";
import { Plus } from "lucide-react";

export const fetchCache = "force-no-store";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ModalEdit from "../_components/modalEdit";
import FormAddVacancy from "./_components/formAddVacancy";
import { SkillName } from "@/types/card";
import { SessionIds } from "@/lib/config";

const EducationWorkPage = async () => {
  let response = await fetch("http://127.0.0.1:3001/api/career_guidances/get");
  const careerGuidances = await response.json();

  // TODO: change user_id to cookie's one (work)
  response = await fetch(
    `http://127.0.0.1:3001/api/vacancies/getFrom/${SessionIds.employer}`,
  );
  const vacancies = await response.json();

  return (
    <div className="flex justify-center w-[100%] h-fit bg-c5 pb-[75px]">
      <div className="flex flex-col gap-[10px] items-center w-[836px]">
        <div className="big-text py-5">Общая</div>
        <div className="flex flex-col w-[100%]">
          <div className="flex w-[100%] flex-row justify-between">
            <div>Мои рабочие задачи</div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="p-0 hover:bg-c5">
                  <Plus size={40} className="hover:text-c1"></Plus>
                </Button>
              </DialogTrigger>
              <DialogContent className="block bg-c5 border-c1 border-[2px] min-w-[1148px] h-[95vh] pt-0 overflow-auto">
                <DialogHeader className="flex flex-col justify-start px-[61px]">
                  <DialogTitle className="text-white text-center big-text font-normal py-[40px]">
                    Добавить рабочую задачу
                  </DialogTitle>
                  <DialogDescription className="flex flex-col" asChild>
                    <FormAddVacancy
                      action="http://127.0.0.1:3001/api/vacancies/create"
                      careerGuidances={careerGuidances}
                    ></FormAddVacancy>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex w-[100%] flex-col justify-center border-c1 border-[2px] rounded-[10px]  p-[10px]">
            {vacancies.map(
              (vacancy: {
                title: string;
                description: string;
                skillId: number;
                id: number;
                level: number;
                skillTitle: SkillName;
                is_taken: boolean;
              }) => (
                <ListCardWork
                  key={vacancy.id}
                  title={vacancy.title}
                  hasDeleteButton
                  isTaken={vacancy.is_taken}
                  id={vacancy.id}
                  description={vacancy.description}
                  skill={{
                    difficulty: vacancy.level,
                    title: vacancy.skillTitle,
                  }}
                >
                  <ModalEdit
                    careerGuidances={careerGuidances}
                    title={vacancy.title}
                    description={vacancy.description}
                    action={`http://127.0.0.1:3001/api/vacancies/update/${vacancy.id}`}
                    method="PATCH"
                    skill={{
                      difficulty: vacancy.level,
                      title: vacancy.skillTitle,
                      id: vacancy.skillId,
                    }}
                  >
                    <Button className="w-[304px]">Редактировать</Button>
                  </ModalEdit>
                </ListCardWork>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationWorkPage;
