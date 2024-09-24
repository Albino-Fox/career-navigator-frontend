import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import CardSkillSimple from "../_components/cardSkillSimple";

const EducationUniversityPage = () => {
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
                <DialogHeader className="flex flex-col h-[100%] justify-center px-[61px]">
                  <DialogTitle className="text-white text-center big-text font-normal py-[40px]">
                    Добавить направление обучения
                  </DialogTitle>
                  <DialogDescription className="flex flex-col">
                    <div className="pb-[30px]">
                      <div className="small-text text-white mb-5">Навык</div>
                      <Select defaultValue="frontend">
                        <SelectTrigger className="h-[60px] small-text m-0 bg-c2 text-black">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="frontend">
                            Frontend Developer
                          </SelectItem>
                          <SelectItem value="backend">
                            Backend Developer
                          </SelectItem>
                          <SelectItem value="graphics">
                            Graphics Designer
                          </SelectItem>
                          <SelectItem value="fullstack">
                            Fullstack Developer
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="pb-[30px]">
                      <div className="small-text text-white mb-5">Уровень</div>

                      <Select defaultValue="1">
                        <SelectTrigger className="h-[60px] small-text m-0 bg-c2 text-black">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">★☆☆</SelectItem>
                          <SelectItem value="2">★★☆</SelectItem>
                          <SelectItem value="3">★★★</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex w-[100%] justify-around">
                      <Button variant="defaultdark">Добавить</Button>
                      <Button variant="destructive">Отмена</Button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex w-[100%] flex-col justify-center border-c1 border-[2px] rounded-[10px]  p-[10px] gap-[10px]">
            <CardSkillSimple
              skill={{ difficulty: 1, title: "Frontend Developer" }}
            ></CardSkillSimple>
            <CardSkillSimple
              skill={{ difficulty: 2, title: "Frontend Developer" }}
            ></CardSkillSimple>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationUniversityPage;
