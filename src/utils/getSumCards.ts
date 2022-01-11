import { TCard } from "../types";

export const getSum = (arr: Array<TCard>) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] !== "Ac" &&
      arr[i] !== "Ab" &&
      arr[i] !== "Ah" &&
      arr[i] !== "Ap"
    ) {
      if (parseInt(arr[i])) {
        sum = parseInt(arr[i]) + sum;
      } else {
        sum = sum + 10;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "Ac" ||
      arr[i] === "Ab" ||
      arr[i] === "Ah" ||
      arr[i] === "Ap"
    ) {
      if (sum <= 10) {
        sum = sum + 11;
      } else {
        sum = sum + 1;
      }
    }
  }
  return sum;
};
