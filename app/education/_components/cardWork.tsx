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

interface CardWorkProps {
  title?: string;
  description?: string;
  noFocus?: boolean;
  focus_vacancy_id?: number;
  vacancies?: [];
  skill?: Skill;
}
const CardWork = ({
  title,
  description,
  noFocus = false,
  vacancies,
  focus_vacancy_id,
  skill,
}: CardWorkProps) => {
  const [suitableSkills, setSuitableSkills] = useState([]);
  useEffect(() => {
    if (!noFocus) {
      fetch(`http://127.0.0.1:3001/api/users/getSuitableSkills`, {
        method: "POST",
        body: JSON.stringify({
          // TODO: change user_id to cookie's
          user_id: 1,
          vacancy_id: focus_vacancy_id,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setSuitableSkills(data);
        });
    }
  });

  const handleRemoveFocus = () => {
    const formData = {
      focus_vacancy_id: null,
      user_id: 1,
    };
    sendRequest(
      JSON.stringify(formData),
      "http://127.0.0.1:3001/api/users/setFocus",
      "PATCH",
    );
    window.location.reload();
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
              {suitableSkills.length > 0
                ? ""
                : " - У вас недостаточный уровень"}
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <Button disabled={suitableSkills.length === 0}>
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
