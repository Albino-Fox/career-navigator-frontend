import { Button } from "@/components/ui/button";
import CardUniversityMore from "../../_components/cardUniversityMore";

const UniversityPage = () => {
  return (
    <div className="flex justify-center w-[100%] pb-[75px] bg-c5 ">
      <div className="flex flex-col gap-[10px] items-center w-[100%] px-[145px] ">
        <div className="big-text py-5">Университет имени Ливентеля</div>
        <CardUniversityMore
          skill={{ difficulty: 2, title: "Frontend Developer" }}
          difficultyTasks={[
            {
              difficulty: 1,
              tasks: [
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
              ],
            },
            {
              difficulty: 2,
              tasks: [
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
              ],
            },
          ]}
        >
          <Button className="w-[244px] h-[60px] self-center mb-5">
            Обучиться этому
          </Button>
        </CardUniversityMore>
        <CardUniversityMore
          skill={{ difficulty: 2, title: "Frontend Developer" }}
          difficultyTasks={[
            {
              difficulty: 1,
              tasks: [
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
              ],
            },
            {
              difficulty: 2,
              tasks: [
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
              ],
            },
          ]}
        >
          <Button className="w-[244px] h-[60px] self-center mb-5">
            Обучиться этому
          </Button>
        </CardUniversityMore>
        <CardUniversityMore
          skill={{ difficulty: 2, title: "Frontend Developer" }}
          difficultyTasks={[
            {
              difficulty: 1,
              tasks: [
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
              ],
            },
            {
              difficulty: 2,
              tasks: [
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
                {
                  title: "Яда-яда",
                  description: "a",
                },
              ],
            },
          ]}
        >
          <Button className="w-[244px] h-[60px] self-center mb-5">
            Обучиться этому
          </Button>
        </CardUniversityMore>
      </div>
      <div> </div>
    </div>
  );
};

export default UniversityPage;
