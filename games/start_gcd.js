#!/usr/bin/env node
import {
  getRandomNumber, startGame,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

const getRoundData = () => {
  let number1 = getRandomNumber(1, 100);
  let number2 = getRandomNumber(1, 100);
  const qestion = `Question: ${number1} ${number2}`;
  for (; number1 !== number2;) {
    if (number1 > number2) {
      number1 -= number2;
    }
    if (number1 < number2) {
      number2 -= number1;
    }
  }
  console.log(`otvet = ${number1}`);
  const rezult = number1.toString();
  return { qestion, rezult };
};
const gcdGames = () => {
  const title = 'Find the greatest common divisor of given numbers.';
  startGame(title, getRoundData);
};
export default gcdGames;
