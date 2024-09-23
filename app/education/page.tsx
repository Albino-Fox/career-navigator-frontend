import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EducationPage = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="bigdefaultdark" className="w-[516px] h-[74px]">
          Смотреть вузы
        </Button>
      </DialogTrigger>
      <DialogContent className="block bg-c5 border-c1 border-[2px] min-w-[1148px] min-h-[95vh] overflow-auto">
        <DialogHeader className="flex flex-col justify-start">
          <DialogTitle className="text-white text-center big-text font-normal">
            Вузы
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EducationPage;
