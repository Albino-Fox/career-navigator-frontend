import CardTaskEdit from "@/app/education/_components/cardTaskEdit";
import { Button } from "@/components/ui/button";
import { convertDifficultyToStars } from "@/lib/utils";
import { Plus } from "lucide-react";

const TaskPage = () => {
  return (
    <div className="flex justify-center w-[100%] pb-[75px] bg-c5 ">
      <div className="flex flex-col gap-[10px] items-center w-[100%] px-[145px] ">
        <div className="flex flex-row w-[100%] justify-between items-center">
          <div className="big-text py-5">
            {convertDifficultyToStars(2)} &quot;Frontend Developer&quot;
          </div>
          <Button className="p-0 hover:bg-c5">
            <Plus size={50} className="hover:text-c1"></Plus>
          </Button>
        </div>
        <CardTaskEdit
          tasks={[
            { title: "Яда-яда-яда", description: "aaaaaaaaa" },
            {
              title: "Яда-яда-яда",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et                 dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              title: "Яда-яда-яда",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et                 dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            { title: "Яда-яда-яда", description: "aaaaaaaaa" },
          ]}
        ></CardTaskEdit>
      </div>
    </div>
  );
};

export default TaskPage;
