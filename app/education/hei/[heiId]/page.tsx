import CardUniversityMore from "../../_components/cardUniversityMore";
import { SkillName } from "@/types/card";

export const fetchCache = "force-no-store";

const UniversityPage = async ({ params }: { params: { heiId: number } }) => {
  let response = await fetch(
    `http://127.0.0.1:3001/api/users/getUniversity/${params.heiId}`,
  );
  const university = await response.json();

  response = await fetch(
    `http://127.0.0.1:3001/api/career_guidance_branches/getTasksOfCareerGuidanceAll`,
    {
      method: "POST",
      body: JSON.stringify({ university_id: params.heiId }),
      headers: { "Content-Type": "application/json" },
    },
  );
  const universityCareerGuidancesInfo = await response.json();

  return (
    <div className="flex justify-center w-[100%] pb-[75px] bg-c5 ">
      <div className="flex flex-col gap-[10px] items-center w-[100%] px-[145px] ">
        <div className="big-text py-5">{university.name}</div>
        {universityCareerGuidancesInfo.map(
          (careerGuidance: {
            name: SkillName;
            skillId: number;
            branches: { id: number; tasks: []; level: number }[];
          }) => (
            <CardUniversityMore
              key={careerGuidance.skillId}
              university_id={university.id}
              career_guidance_id={careerGuidance.skillId}
              skill={{ difficulty: 0, title: careerGuidance.name }}
              difficultyTasks={careerGuidance.branches}
            ></CardUniversityMore>
          ),
        )}
      </div>
    </div>
  );
};

export default UniversityPage;
