export type SkillName =
  | "Frontend Developer"
  | "Graphic Designer"
  | "Backend Developer"
  | "Fullstack Developer";

export type Skill = {
  difficulty: number;
  title: SkillName;
};

export type Task = {
  name: string;
  description: string;
  id?: number;
};
