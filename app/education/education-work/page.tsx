import { Button } from "@/components/ui/button";
import ListCardWork from "../_components/listCardWork";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EducationWorkPage = () => {
  return (
    <div className="flex justify-center w-[100%] h-fit bg-c5 pb-[75px]">
      <div className="flex flex-col gap-[10px] items-center w-[836px]">
        <div className="big-text py-5">Обучение</div>
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
                <DialogHeader className="flex flex-col justify-start">
                  <DialogTitle className="text-white text-center big-text font-normal py-[40px] ">
                    Добавить рабочую задачу
                  </DialogTitle>
                  <DialogDescription>a</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex w-[100%] flex-col justify-center border-c1 border-[2px] rounded-[10px]  p-[10px]">
            <ListCardWork
              title="Карьерный навигатор"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              skill={{ difficulty: 2, title: "Frontend Developer" }}
            >
              <Button className="w-[304px]">Редактировать</Button>
              <Button variant="destructive" className="w-[304px]">
                Удалить
              </Button>
            </ListCardWork>
            <ListCardWork
              title="Карьерный навигатор"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              skill={{ difficulty: 2, title: "Frontend Developer" }}
            >
              <Button className="w-[304px]">Редактировать</Button>
              <Button variant="destructive" className="w-[304px]">
                Удалить
              </Button>
            </ListCardWork>
            <ListCardWork
              title="Карьерный навигатор"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              skill={{ difficulty: 2, title: "Frontend Developer" }}
            >
              <Button className="w-[304px]">Редактировать</Button>
              <Button variant="destructive" className="w-[304px]">
                Удалить
              </Button>
            </ListCardWork>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationWorkPage;
