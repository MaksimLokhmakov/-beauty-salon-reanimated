import { normolizeMinutes } from "./normolizeMinutes";

export const getDuration = (start: Date, finish: Date) => {
  return (
    start.getHours() +
    ":" +
    normolizeMinutes(start.getMinutes()) +
    " - " +
    finish.getHours() +
    ":" +
    normolizeMinutes(finish.getMinutes())
  );
};
