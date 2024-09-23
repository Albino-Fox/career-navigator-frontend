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
      <div className="flex flex-col items-center w-[836px]">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="bigdefaultdark" className="w-[516px] h-[74px]">
              Смотреть вузы
            </Button>
          </DialogTrigger>
          <DialogContent className="block bg-c5 border-c1 border-[2px] min-w-[1148px] min-h-[95vh] pt-0 overflow-auto">
            <DialogHeader className="flex flex-col justify-start">
              <DialogTitle className="text-white text-center big-text font-normal py-[40px] ">
                Вузы
              </DialogTitle>
              <DialogDescription>
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
  );
};

export default EducationPage;
