import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UniversityCard from "./_components/universityCard";

const EducationPage = () => {
  return (
    <div className="flex justify-center w-[100%]">
      <div className="flex flex-col gap-[10px] items-center w-[836px]">
        <div className="big-text py-5">Обучение</div>
        <div className="w-[100%]">
          <div className="">Рабочие задачи</div>
          <div>placeholder</div>
        </div>
        <div className="flex flex-col w-[100%]">
          <div>Вузы</div>
          <div className="flex justify-center border-c1 border-[2px] rounded-[10px] h-[124px]">
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
                    <UniversityCard
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
                    ></UniversityCard>
                    <UniversityCard
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
                    ></UniversityCard>
                    <UniversityCard
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
                    ></UniversityCard>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
