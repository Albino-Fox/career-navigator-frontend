import { convertDifficultyToStars } from "@/lib/utils";
import FormAnswer from "./_components/formAnswer";

const TaskPage = async ({
  params,
}: {
  params: { taskId: number; heiId: number };
}) => {
  // let response = await fetch(
  //   `http://127.0.0.1:3001/api/tasks/get/${params.taskId}`,
  // );
  // const task = await response.json();

  let response = await fetch(
    `http://127.0.0.1:3001/api/users/getUniversity/${params.heiId}`,
  );
  const university = await response.json();

  response = await fetch(
    `http://127.0.0.1:3001/api/tasks/getOrigin/${params.taskId}`,
  );
  const task = await response.json();

  return (
    <div className="flex justify-center w-[100%] pb-[75px] bg-c5 ">
      <div className="flex flex-col items-center w-[100%] px-[145px] ">
        <div className="small-text pt-5">
          {task.skillTitle} {convertDifficultyToStars(task.level)} от [
          {university.name}]
        </div>
        <div className="big-text">{task.name}</div>
        <div className="leading-snug pt-[40px]">
          <div className="pb-[40px]">Описание</div>
          <div className="">{task.description}</div>
          <FormAnswer
            action={"http://127.0.0.1:3001/api/answers/create"}
            id={task.id}
          ></FormAnswer>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
