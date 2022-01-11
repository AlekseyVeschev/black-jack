import { CARDS } from "../constants";
import { TCard } from "../types";

const allCards = Object.keys(CARDS);

const randomInteger = (min: number, max: number) => {
  // случайное число от min до max
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
};

export const getRandomCard = (min = 0) => {
  const randomCardIdx = randomInteger(min, allCards.length - 1);
  return allCards[randomCardIdx] as TCard;
};
