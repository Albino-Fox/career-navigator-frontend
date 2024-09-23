import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TestPage = () => {
  return (
    <div>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <Button variant="outline" size="fix">
              Haai~ :3
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:no-underline bg-c2">
            <div className="flex w-[100%] pr-5 justify-between">
              <div>Text</div>
              <div>S.T.A.R.S.</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-5">
              <Button variant="outline" size="fill">
                Byeee~ Ɛ:
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="defaultdark"
            className="big-btn-text w-[516px] h-[74px]"
          >
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
    </div>
  );
};

export default TestPage;
