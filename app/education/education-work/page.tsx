import { Button } from "@/components/ui/button";
import ListCardWork from "../_components/listCardWork";
import { Edit } from "lucide-react";

const EducationWorkPage = () => {
  return (
    <div className="flex justify-center w-[100%] h-fit bg-c5 pb-[75px]">
      <div className="flex flex-col gap-[10px] items-center w-[836px]">
        <div className="big-text py-5">Обучение</div>
        <div className="flex flex-col w-[100%]">
          <div className="flex w-[100%] flex-row justify-between">
            <div>Мои рабочие задачи</div>
            <Button className="p-0 hover:bg-c5">
              <Edit size={35} className="hover:text-c1"></Edit>
            </Button>
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
