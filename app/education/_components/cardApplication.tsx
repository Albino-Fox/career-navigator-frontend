import { convertDifficultyToStars } from "@/lib/utils";

interface CardApplicationProps {
  name: string;
  phone: string;
  email: string;
  skills: { difficulty: number; university: string }[];
  children?: React.ReactNode;
}
const CardApplication = ({
  name,
  phone,
  email,
  skills,
  children,
}: CardApplicationProps) => {
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
              {convertDifficultyToStars(skill.difficulty)} {skill.university}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center pt-5">
        {children}
      </div>
    </div>
  );
};

export default CardApplication;
