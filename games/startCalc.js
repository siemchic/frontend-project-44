#!/usr/bin/env node
import startGame from '../src/index.js';
import getRandomNumber from '../src/utils/randomNumber.js';

const getRoundData = () => {
  const znak = ['+', '-', '*'];
  const chislo1 = getRandomNumber(1, 100);
  const chislo2 = getRandomNumber(1, 100);
  const randomIndex = Math.floor(Math.random() * 3);
  const randomElement = znak[randomIndex];
  const qestion = `Question: ${chislo1} ${randomElement} ${chislo2}`;
  let rez = 0;
  if (randomElement === '+') {
    rez = chislo1 + chislo2;
  } else if (randomElement === '-') {
    rez = chislo1 - chislo2;
  } else if (randomElement === '*') {
    rez = chislo1 * chislo2;
  }
  const rezult = rez.toString();
  return { qestion, rezult };
};

const calculation = () => {
  const title = 'What is the result of the expression?';
  startGame(title, getRoundData);
};
export default calculation;
