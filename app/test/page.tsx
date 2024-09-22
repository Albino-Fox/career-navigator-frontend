import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const TestPage = () => {
  return (
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
  );
};

export default TestPage;
