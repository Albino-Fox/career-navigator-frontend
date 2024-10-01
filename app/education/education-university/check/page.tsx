import { AnswersDetailed, SkillName } from "@/types/card";
import CardTaskAnswer from "../../_components/cardTaskAnswer";
import { SessionIds } from "@/lib/config";

export const fetchCache = "force-no-store";

const CheckPage = async () => {
  const response = await fetch(
    `http://127.0.0.1:3001/api/answers/get/${SessionIds.university}`,
  );
  const careerGuidances = await response.json();
  const answers: AnswersDetailed[] = [];
  careerGuidances.forEach(
    (branch: {
      CareerGuidance: { name: SkillName };
      level: number;
      Tasks: {
        name: string;
        description: string;
        id: number;
        Answers: { answer: string; user_id: number; id: number }[];
      }[];
    }) => {
      const answersDetailed: AnswersDetailed = {
        branchName: branch.CareerGuidance.name,
        level: branch.level,
        taskName: "",
        taskDescription: "",
        text: "",
        task_id: -1,
        user_id: -1,
        id: -1,
      };
      branch.Tasks.forEach((task) => {
        answersDetailed.taskName = task.name;
        answersDetailed.taskDescription = task.description;
        answersDetailed.task_id = task.id;

        task.Answers.forEach((answer) => {
          answersDetailed.text = answer.answer;
          answersDetailed.id = answer.id;
          answersDetailed.user_id = answer.user_id;

          answers.push(JSON.parse(JSON.stringify(answersDetailed)));
        });
      });
    },
  );

  return (
    <div className="flex justify-center w-[100%] pb-[75px] bg-c5 ">
      <div className="flex flex-col gap-[10px] items-center w-[100%] px-[145px] ">
        <div className="big-text py-5">Проверка заданий</div>
        <div className="flex flex-col w-[1278px] justify-between items-center rounded-[10px] text-black gap-[20px]">
          {answers.map((answer) => (
            <CardTaskAnswer
              key={answer.id}
              id={answer.id}
              task_id={answer.task_id}
              skill={{ difficulty: answer.level, title: answer.branchName }}
              task={{
                name: answer.taskName,
                description: answer.taskDescription,
              }}
              answer={answer.text}
            ></CardTaskAnswer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckPage;
