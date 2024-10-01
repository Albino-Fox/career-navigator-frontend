import { Button } from "@/components/ui/button";
import CardApplication from "../../_components/cardApplication";
import ListCardWork from "../../_components/listCardWork";
import { SessionIds } from "@/lib/config";

export const fetchCache = "force-no-store";

const ApplicationsPage = async () => {
  // TODO: change user_id to cookie's (work)
  const response = await fetch(
    `http://127.0.0.1:3001/api/applications/getOfUser/${SessionIds.employer}`,
  );
  const vacancies = await response.json();

  return (
    <div className="flex justify-center w-[100%] pb-[75px] bg-c5 ">
      <div className="flex flex-col gap-[10px] items-center w-[100%] px-[145px] ">
        <div className="big-text py-5">Заявки</div>
        <div className="flex justify-center flex-col w-[1366px] rounded-[10px] text-black p-[40px] py-0 gap-5">
          {vacancies.map((vacancy) =>
            vacancy.Applications.map((application) => (
              <div className="bg-c1 rounded-[10px]" key={vacancy.id}>
                <ListCardWork
                  title={vacancy.name}
                  description={vacancy.description}
                  skill={{
                    difficulty: vacancy.level,
                    title: vacancy.CareerGuidance.name,
                  }}
                ></ListCardWork>
                <CardApplication
                  name={`${application.User.name} ${application.User.surname} ${application.User.patronymic}`
                    .replace(/\s+/g, " ")
                    .trim()}
                  application_id={application.id}
                  vacancy_id={vacancy.id}
                  user_id={application.user_id}
                  email={application.User.email}
                  phone={application.User.phone_number}
                  skills={application.Skills.map((entry) => {
                    return {
                      difficulty: entry.CareerGuidanceBranch.level,
                      university: entry.CareerGuidanceBranch.User.name,
                      university_id: entry.CareerGuidanceBranch.university_id,
                      career_guidance_id:
                        entry.CareerGuidanceBranch.career_guidance_id,
                    };
                  })}
                ></CardApplication>
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
