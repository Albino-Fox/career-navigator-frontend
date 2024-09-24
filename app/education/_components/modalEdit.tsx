import { Skill } from "@/types/card";

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
import InputDarkField from "@/components/inputDark";
import TextareaDarkField from "@/components/textareaDark";
import { Button } from "@/components/ui/button";

interface ModalEditProps {
  title: string;
  skill: Skill;
  description: string;
  children: React.ReactNode;
}

const ModalEdit = ({ title, skill, description, children }: ModalEditProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="block bg-c5 border-c1 border-[2px] min-w-[1148px] h-[95vh] pt-0 overflow-auto">
        <DialogHeader className="flex flex-col justify-start px-[61px]">
          <DialogTitle className="text-white text-center big-text font-normal py-[40px]">
            Редактировать рабочую задачу
          </DialogTitle>
          <DialogDescription className="flex flex-col">
            <InputDarkField title="Название" value={title}></InputDarkField>
            <div className="pb-[30px]">
              <div className="small-text text-white mb-5">Навык</div>
              <Select defaultValue={skill.title}>
                <SelectTrigger className="h-[60px] small-text m-0 bg-c2 text-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Frontend Developer">
                    Frontend Developer
                  </SelectItem>
                  <SelectItem value="Backend Developer">
                    Backend Developer
                  </SelectItem>
                  <SelectItem value="Graphics Designer">
                    Graphics Designer
                  </SelectItem>
                  <SelectItem value="Fullstack Developer">
                    Fullstack Developer
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="pb-[30px]">
              <div className="small-text text-white mb-5">Уровень</div>

              <Select defaultValue={skill.difficulty.toString()}>
                <SelectTrigger className="h-[60px] small-text m-0 bg-c2 text-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">★☆☆</SelectItem>
                  <SelectItem value="2">★★☆</SelectItem>
                  <SelectItem value="3">★★★</SelectItem>y
                </SelectContent>
              </Select>
            </div>
            <TextareaDarkField
              title="Описание"
              value={description}
              className=""
            ></TextareaDarkField>
            <div className="flex w-[100%] justify-around">
              <Button variant="defaultdark">Обновить</Button>
              <Button variant="destructive">Отмена</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalEdit;
