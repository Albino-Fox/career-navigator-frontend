"use client";

import { Button } from "@/components/ui/button";
import { SessionIds } from "@/lib/config";
import { convertDifficultyToStars, sendRequest } from "@/lib/utils";
import Link from "next/link";

interface CardApplicationProps {
  name: string;
  phone: string;
  email: string;
  skills: {
    difficulty: number;
    university: string;
    university_id: number;
    career_guidance_id: number;
  }[];
  vacancy_id: number;
  application_id: number;
}
const CardApplication = ({
  name,
  phone,
  email,
  skills,
  vacancy_id,
  application_id,
}: CardApplicationProps) => {
  const handleAccept = () => {
    sendRequest(
      // TODO: change user_id to cookie's one
      JSON.stringify({
        is_taken: true,
        user_id: SessionIds.student,
        id: vacancy_id,
      }),
      "http://127.0.0.1:3001/api/vacancies/setStudent",
      "PATCH",
    );
    sendRequest(
      JSON.stringify({ id: application_id }),
      "http://127.0.0.1:3001/api/applications/delete",
      "DELETE",
    );
    window.location.reload();
  };
  const handleDecline = () => {
    sendRequest(
      // TODO: change user_id to cookie's one
      JSON.stringify({
        is_taken: false,
        user_id: SessionIds.student,
        id: vacancy_id,
      }),
      "http://127.0.0.1:3001/api/vacancies/setStudent",
      "PATCH",
    );
    sendRequest(
      JSON.stringify({ id: application_id }),
      "http://127.0.0.1:3001/api/applications/delete",
      "DELETE",
    );
    window.location.reload();
  };

  return (
    <div className="bg-c1 p-[25px] mb-[15px] rounded-[10px] text-black leading-none -mt-[30px]">
      <div className="big-text pb-[50px]">
        Студент &quot;{name}&quot; хочет взяться за эту задачу:{" "}
      </div>
      <div>Почта: {email}</div>
      <div className="pb-[40px]">Телефон: {phone}</div>
      <div className="pb-5 pt-2 justify-between">
        <div>Подходящие навыки:</div>
        <div className="normal-text flex flex-col leading-snug">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <Link
                href={`http://127.0.0.1:3000/education/hei/${skill.university_id}/skill/${skill.career_guidance_id}?observe=1`}
              >
                <div className="underline hover:text-c4">
                  {convertDifficultyToStars(skill.difficulty)}{" "}
                  {skill.university}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center pt-5">
        <div className="flex flex-row justify-around w-[100%]">
          <Button onClick={handleAccept}>Принять</Button>
          <Button onClick={handleDecline}>Отклонить</Button>
        </div>
      </div>
    </div>
  );
};

export default CardApplication;
