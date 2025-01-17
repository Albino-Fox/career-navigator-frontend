import CardUniversityMoreList from "@/app/education/_components/cardUniversityMoreList";
import { SessionIds } from "@/lib/config";

export const fetchCache = "force-no-store";

const UniversityPage = async ({
  params,
}: {
  params: { skillId: number; heiId: number };
}) => {
  let response = await fetch(
    `http://127.0.0.1:3001/api/career_guidance_branches/getTasksOfCareerGuidance/${params.skillId}`,
    {
      method: "POST",
      // TODO: change user_id to cookie's one
      body: JSON.stringify({
        university_id: params.heiId,
        user_id: SessionIds.student,
      }),
      headers: { "Content-Type": "application/json" },
    },
  );
  const universityCareerGuidanceInfo = await response.json();

  response = await fetch(
    `http://127.0.0.1:3001/api/users/getUniversity/${params.heiId}`,
  );
  const university = await response.json();

  const branches = universityCareerGuidanceInfo.branches;
  return (
    <div className="flex justify-center w-[100%] pb-[75px] bg-c5 ">
      <div className="flex flex-col gap-[10px] items-center w-[100%] px-[145px] ">
        <div className="big-text py-5 text-center">
          Навык [{universityCareerGuidanceInfo.name}] от [{university.name}]
        </div>
        <div className="flex justify-center flex-col w-[1366px] rounded-[10px] text-black bg-c1 p-[40px] pt-0 ">
          {branches.map((branch: { id: number; tasks: []; level: number }) => (
            <CardUniversityMoreList
              key={branch.id}
              linkType
              difficulty={branch.level}
              tasks={branch.tasks}
            ></CardUniversityMoreList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityPage;
