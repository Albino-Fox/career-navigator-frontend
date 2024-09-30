import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CardUniversity from "./_components/cardUniversity";
import CardSkill from "./_components/cardSkill";
import CardWork from "./_components/cardWork";
import { SkillName } from "@/types/card";

export const fetchCache = "force-no-store";

const EducationPage = async () => {
  let response = await fetch("http://127.0.0.1:3001/api/vacancies/get");
  const vacancies = await response.json();

  response = await fetch("http://127.0.0.1:3001/api/users/getUniversities");
  const universities = await response.json();

  // TODO: change user_id to cookie's one
  response = await fetch("http://127.0.0.1:3001/api/student_skills/getMax/1");
  const skillBranches = await response.json();

  // TODO: change user_id to cookie's one
  response = await fetch("http://127.0.0.1:3001/api/users/get/1");
  const user = await response.json();

  response = await fetch(
    `http://127.0.0.1:3001/api/vacancies/get/${user.focus_vacancy_id}`,
  );
  const focusVacancy = await response.json();

  response = await fetch(
    `http://127.0.0.1:3001/api/applications/checkApplication`,
    {
      method: "POST",
      body: JSON.stringify({
        // TODO: change user_id to cookie's one
        user_id: 1,
        vacancy_id: user.focus_vacancy_id,
      }),
      headers: { "Content-Type": "application/json" },
    },
  );
  const hasApplication = await response.json();

  return (
    <div className="flex justify-center w-[100%] h-fit bg-c5 pb-[75px]">
      <div className="flex flex-col gap-[10px] items-center w-[836px]">
        <div className="big-text py-5">Обучение</div>
        <div className="w-[100%]">
          <div className="">Рабочие задачи</div>
          {focusVacancy ? (
            <CardWork
              title={focusVacancy.name}
              description={focusVacancy.description}
              focus_vacancy_id={user.focus_vacancy_id}
              sentApplication={hasApplication}
              isCompleting={user.is_completing}
              vacancies={vacancies}
              skill={{
                difficulty: focusVacancy.level,
                title: focusVacancy.CareerGuidance.name,
              }}
            ></CardWork>
          ) : (
            <CardWork noFocus vacancies={vacancies}></CardWork>
          )}
        </div>
        <div className="flex flex-col w-[100%]">
          <div>Вузы</div>
          <div className="flex justify-center border-c1 border-[2px] rounded-[10px] py-[25px]">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="bigdefaultdark"
                  className="w-[516px] h-[74px] self-center"
                >
                  Открыть список вузов
                </Button>
              </DialogTrigger>
              <DialogContent className="block bg-c5 border-c1 border-[2px] min-w-[1148px] h-[95vh] pt-0 overflow-auto">
                <DialogHeader className="flex flex-col justify-start">
                  <DialogTitle className="text-white text-center big-text font-normal py-[40px] ">
                    Вузы
                  </DialogTitle>
                  <DialogDescription>
                    {universities.map(
                      (university: {
                        id: number;
                        name: string;
                        description: string;
                      }) => (
                        <CardUniversity
                          key={university.id}
                          id={university.id}
                          title={university.name}
                          description={university.description}
                        ></CardUniversity>
                      ),
                    )}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex flex-col w-[100%]">
          <div>Навыки</div>
          <div className="flex w-[100%] flex-col justify-center border-c1 border-[2px] rounded-[10px] gap-[10px] p-[10px]">
            {skillBranches.map(
              (branch: {
                CareerGuidanceBranch: {
                  id: number;
                  CareerGuidance: { id: number; name: SkillName };
                  User: { name: string };
                  university_id: number;
                  level: number;
                };
              }) => (
                <CardSkill
                  key={branch.CareerGuidanceBranch.id}
                  career_guidance_id={
                    branch.CareerGuidanceBranch.CareerGuidance.id
                  }
                  university_id={branch.CareerGuidanceBranch.university_id}
                  skill={{
                    difficulty: branch.CareerGuidanceBranch.level,
                    title: branch.CareerGuidanceBranch.CareerGuidance.name,
                  }}
                  university={branch.CareerGuidanceBranch.User.name}
                ></CardSkill>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
