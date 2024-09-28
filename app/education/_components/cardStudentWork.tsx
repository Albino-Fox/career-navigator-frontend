"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ListCardWork from "./listCardWork";
import { SkillName } from "@/types/card";
import { sendRequest } from "@/lib/utils";

interface CardStudentWorkProps {
  vacancies: [];
  title: string;
  className?: string;
}

const CardStudentWork = ({
  vacancies,
  title,
  className,
}: CardStudentWorkProps) => {
  const setFocus = (id: number) => {
    const formData = {
      focus_vacancy_id: id,
      // TODO: change user_id to cookie's one
      user_id: 1,
    };
    sendRequest(
      JSON.stringify(formData),
      "http://127.0.0.1:3001/api/users/setFocus/",
      "PATCH",
    );
    window.location.reload();
  };

  return (
    <>
      {/* <div className="flex justify-center border-c1 border-[2px] rounded-[10px] py-[25px]"> */}
      <Dialog>
        <DialogTrigger asChild>
          <Button size="text" variant="link" className={className}>
            {title}
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
                    <Button
                      onClick={() => {
                        setFocus(vacancy.id);
                      }}
                    >
                      Взять в фокус
                    </Button>
                  </ListCardWork>
                ),
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* </div> */}
    </>
  );
};

export default CardStudentWork;
