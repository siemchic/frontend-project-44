#!/usr/bin/env node
import startGame from '../src/index.js';
import getRandomNumber from '../src/utils/randomNumber.js';

const getRoundData = () => {
  let qestion = 'Question:';
  const mass = [];
  const amountOFelement = getRandomNumber(5, 10);
  const arithmeticDependence = getRandomNumber(2, 10);
  let initialElement = getRandomNumber(1, 20);
  mass.push(initialElement);
  for (let k = 1; k < amountOFelement; k += 1) {
    initialElement += arithmeticDependence;
    mass.push(initialElement);
  }
  const randomElement = getRandomNumber(1, amountOFelement);
  const y = randomElement;
  const rezult = mass[y].toString();
  for (let n = 0; n < mass.length; n += 1) {
    if (n === y) {
      qestion += ' ..';
    } else {
      const sumbol = parseInt(mass[n], 10);
      qestion = `${qestion} ${sumbol}`;
    }
  }
  return { rezult, qestion };
};
const progression = () => {
  const title = 'What number is missing in the progression?';
  startGame(title, getRoundData);
};
export default progression;
