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
import ListCardWork from "./_components/listCardWork";
import { SkillName } from "@/types/card";

const EducationPage = async () => {
  const response = await fetch("http://127.0.0.1:3001/api/vacancies/get");
  const vacancies = await response.json();

  return (
    <div className="flex justify-center w-[100%] h-fit bg-c5 pb-[75px]">
      <div className="flex flex-col gap-[10px] items-center w-[836px]">
        <div className="big-text py-5">Обучение</div>
        <div className="w-[100%]">
          <div className="">Рабочие задачи</div>
          <CardWork
            title="Сайт для продажи одежды"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            skill={{ difficulty: 2, title: "Frontend Developer" }}
          >
            <Button>Отправить заявку</Button>
            <Button variant="destructive">Снять фокус</Button>
            <div className="flex justify-center border-c1 border-[2px] rounded-[10px] py-[25px]">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="text" variant="link" className="small-btn-text">
                    Посмотреть другие
                  </Button>
                </DialogTrigger>
                <DialogContent className="block bg-c5 border-c1 border-[2px] min-w-[1148px] h-[95vh] pt-0 overflow-auto">
                  <DialogHeader className="flex flex-col justify-start">
                    <DialogTitle className="text-white text-center big-text font-normal py-[40px] ">
                      Рабочие задачи
                    </DialogTitle>
                    <DialogDescription>
                      {vacancies.map(
                        (vacancy: {
                          title: string;
                          description: string;
                          skillId: number;
                          id: number;
                          level: number;
                          skillTitle: SkillName;
                        }) => (
                          <ListCardWork
                            key={vacancy.id}
                            title={vacancy.title}
                            id={vacancy.id}
                            description={vacancy.description}
                            skill={{
                              difficulty: vacancy.level,
                              title: vacancy.skillTitle,
                            }}
                          >
                            <Button>Взять в фокус</Button>
                          </ListCardWork>
                        ),
                      )}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </CardWork>
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
                    <CardUniversity
                      title="Университет имени Ливентеля"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      skills={[
                        {
                          difficulty: 2,
                          title: "Frontend Developer",
                        },
                        {
                          difficulty: 3,
                          title: "Frontend Developer",
                        },
                        {
                          difficulty: 1,
                          title: "Frontend Developer",
                        },
                        {
                          difficulty: 2,
                          title: "Graphic Designer",
                        },
                        {
                          difficulty: 1,
                          title: "Frontend Developer",
                        },
                      ]}
                    ></CardUniversity>
                    <CardUniversity
                      title="Университет имени Ливентеля"
                      skills={[
                        {
                          difficulty: 2,
                          title: "Frontend Developer",
                        },
                        {
                          difficulty: 3,
                          title: "Frontend Developer",
                        },
                        {
                          difficulty: 1,
                          title: "Frontend Developer",
                        },
                        {
                          difficulty: 2,
                          title: "Graphic Designer",
                        },
                        {
                          difficulty: 1,
                          title: "Frontend Developer",
                        },
                      ]}
                    ></CardUniversity>
                    <CardUniversity
                      title="Университет имени Ливентеля"
                      skills={[
                        {
                          difficulty: 2,
                          title: "Frontend Developer",
                        },
                        {
                          difficulty: 3,
                          title: "Frontend Developer",
                        },
                        {
                          difficulty: 1,
                          title: "Frontend Developer",
                        },
                        {
                          difficulty: 2,
                          title: "Graphic Designer",
                        },
                        {
                          difficulty: 1,
                          title: "Frontend Developer",
                        },
                      ]}
                    ></CardUniversity>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex flex-col w-[100%]">
          <div>Навыки</div>
          <div className="flex w-[100%] flex-col justify-center border-c1 border-[2px] rounded-[10px] gap-[10px] p-[10px]">
            <CardSkill
              skill={{ difficulty: 2, title: "Fullstack Developer" }}
              university="Университет имени Ливенталя"
            ></CardSkill>
            <CardSkill
              skill={{ difficulty: 3, title: "Fullstack Developer" }}
              university="Университет имени Ливенталя"
            ></CardSkill>
            <CardSkill
              skill={{ difficulty: 1, title: "Fullstack Developer" }}
              university="Университет имени Ливенталя"
            ></CardSkill>
            <CardSkill
              skill={{ difficulty: 0, title: "Fullstack Developer" }}
              university="Университет имени Ливенталя"
            ></CardSkill>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
