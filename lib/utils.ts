import { Method } from "@/types/header";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDifficultyToStars(difficulty: number) {
  const MAX_DIFFICULTY = 3;
  if (difficulty > MAX_DIFFICULTY) difficulty = MAX_DIFFICULTY;
  if (difficulty < 0) difficulty = 0;
  const starsLeft = MAX_DIFFICULTY - difficulty;

  let stars = "";
  for (let i = 0; i < difficulty; i++) {
    stars += "★";
  }
  for (let i = 0; i < starsLeft; i++) {
    stars += "☆";
  }

  return stars;
}

export const sendRequest = (values: string, link: string, method: Method) => {
  fetch(link, {
    method: method,
    body: values,
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
};
