export type SkillName =
  | "Frontend Developer"
  | "Graphic Designer"
  | "Backend Developer"
  | "Fullstack Developer";

export type Skill = {
  difficulty: number;
  title: SkillName;
  id?: number;
};

export type Task = {
  name: string;
  description: string;
  id?: number;
  is_done?: boolean;
};

export type AnswersDetailed = {
  level: number;
  id: number;
  user_id: number;
  task_id: number;
  branchName: SkillName;
  taskName: string;
  taskDescription: string;
  text: string;
};
