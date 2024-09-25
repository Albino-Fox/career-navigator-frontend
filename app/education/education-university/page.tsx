import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import CardSkillSimple from "../_components/cardSkillSimple";
import FormAddSkillBranch from "./_components/formAddSkillBranch";
import { SkillName } from "@/types/card";

const EducationUniversityPage = async () => {
  let response = await fetch("http://127.0.0.1:3001/api/career_guidances/get");
  const careerGuidances = await response.json();

  response = await fetch(
    "http://127.0.0.1:3001/api/career_guidance_branches/getFrom/8",
  );
  const careerGuidanceBranches = await response.json();

  return (
    <div className="flex justify-center w-[100%] h-fit bg-c5 pb-[75px]">
      <div className="flex flex-col gap-[10px] items-center w-[836px]">
        <div className="big-text py-5">Обучение</div>
        <div className="flex flex-col w-[100%]">
          <div className="flex w-[100%] flex-row justify-between">
            <div>Мои ветви обучения</div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="p-0 hover:bg-c5">
                  <Plus size={40} className="hover:text-c1"></Plus>
                </Button>
              </DialogTrigger>
              <DialogContent className="block bg-c5 border-c1 border-[2px] min-w-[1148px] h-[95vh] pt-0 overflow-auto">
                <DialogHeader className="flex flex-col h-[100%] justify-center px-[61px]">
                  <DialogTitle className="text-white text-center big-text font-normal py-[40px]">
                    Добавить направление обучения
                  </DialogTitle>
                  <DialogDescription className="flex flex-col">
                    <FormAddSkillBranch
                      action="http://127.0.0.1:3001/api/career_guidance_branches/create"
                      careerGuidances={careerGuidances}
                    ></FormAddSkillBranch>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex w-[100%] flex-col justify-center border-c1 border-[2px] rounded-[10px]  p-[10px] gap-[10px]">
            {careerGuidanceBranches.map(
              (skill: { id: number; level: number; skillTitle: SkillName }) => (
                <CardSkillSimple
                  key={skill.id}
                  skillBranchId={skill.id}
                  skill={{ difficulty: skill.level, title: skill.skillTitle }}
                ></CardSkillSimple>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationUniversityPage;
