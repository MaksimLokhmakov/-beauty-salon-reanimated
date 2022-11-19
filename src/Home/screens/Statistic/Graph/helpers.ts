import { ROW_HIGHT } from "./Underlay";

const TOP_VALUES = {
  0: ROW_HIGHT / 2,
  1: -ROW_HIGHT / 2,
  0.75: -ROW_HIGHT / 4,
  0.25: ROW_HIGHT / 4,
} as const;

export const getTopValue = (progress: keyof typeof TOP_VALUES) => {
  return TOP_VALUES[progress] ?? 0;
};
