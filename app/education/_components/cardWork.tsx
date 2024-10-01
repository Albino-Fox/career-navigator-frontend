"use client";

import { convertDifficultyToStars, sendRequest } from "@/lib/utils";
import { Skill } from "@/types/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CardStudentWork from "./cardStudentWork";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { SessionIds } from "@/lib/config";

interface CardWorkProps {
  title?: string;
  description?: string;
  noFocus?: boolean;
  focus_vacancy_id?: number;
  vacancies?: [];
  isCompleting?: boolean;
  sentApplication?: boolean;
  skill?: Skill;
}
const CardWork = ({
  title,
  description,
  noFocus = false,
  vacancies,
  isCompleting = false,
  focus_vacancy_id,
  sentApplication = false,
  skill,
}: CardWorkProps) => {
  const [suitableSkills, setSuitableSkills] = useState([]);

  useEffect(() => {
    if (!noFocus) {
      fetch(`http://127.0.0.1:3001/api/users/getSuitableSkills`, {
        method: "POST",
        body: JSON.stringify({
          // TODO: change user_id to cookie's
          user_id: SessionIds.student,
          vacancy_id: focus_vacancy_id,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setSuitableSkills(data);
        });
    }
  }, [noFocus, focus_vacancy_id]);

  const handleRemoveFocus = () => {
    const formData = {
      focus_vacancy_id: null,
      // TODO: change user_id to cookie's
      user_id: SessionIds.student,
    };
    sendRequest(
      JSON.stringify(formData),
      "http://127.0.0.1:3001/api/users/setFocus",
      "PATCH",
    );
    window.location.reload();
  };

  const handleSendApplication = () => {
    if (!noFocus) {
      const formData = {
        vacancy_id: focus_vacancy_id,
        // TODO: change user_id to cookie's
        user_id: SessionIds.student,
      };
      sendRequest(
        JSON.stringify(formData),
        "http://127.0.0.1:3001/api/applications/create",
        "POST",
      );
      window.location.reload();
    }
  };

  return (
    <>
      {noFocus === false ? (
        <div className="bg-c1 p-[25px] rounded-[10px] text-black leading-none">
          <div className="big-text -mt-2">{title}</div>
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger className="small-text border-b-2 border-black">
                Описание
              </AccordionTrigger>
              <AccordionContent className="leading-none small-text pt-5">
                {description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="py-5 flex flex-wrap justify-between">
            <div className="small-text leading-snug">
              {convertDifficultyToStars(skill!.difficulty)} {skill!.title}
              {suitableSkills.length > 0 || sentApplication
                ? ""
                : isCompleting === false
                  ? " - У вас недостаточный уровень"
                  : ""}
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            {sentApplication === false && isCompleting === false ? (
              <>
                <Button
                  disabled={suitableSkills.length === 0}
                  onClick={handleSendApplication}
                >
                  Отправить заявку
                </Button>
                <Button variant="destructive" onClick={handleRemoveFocus}>
                  Снять фокус
                </Button>
                <CardStudentWork
                  vacancies={vacancies!}
                  title={"Посмотреть другие"}
                  className="small-btn-text"
                ></CardStudentWork>
              </>
            ) : (
              <div className="normal-text text-c4 border-t-[2px] border-black w-[100%] text-center pt-5">
                {isCompleting ? (
                  <p className="text-c3">Задача выполняется вами</p>
                ) : (
                  <p className="text-c4">Заявка отправлена</p>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col text-c1 justify-center border-c1 border-[2px] rounded-[10px] p-[40px]">
          <div className="big-text -mt-2 pb-[40px]">
            Вы ещё не выбрали задачу
          </div>

          <div className="flex flex-row justify-between items-center">
            <CardStudentWork
              vacancies={vacancies!}
              className="text-c1 small-btn-text"
              title="Посмотреть существующие задачи"
            ></CardStudentWork>
          </div>
        </div>
      )}
    </>
  );
};

export default CardWork;
