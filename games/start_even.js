#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  BadResult,
  Congratulations, getRandomNumber, WhatName,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

const Even = () => {
  const name = WhatName();
  const numberIsEven = (randomnumber) => {
    if (randomnumber % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // цикл с рандомным числом
  for (let i = 0; i < 3; i += 1) {
  // вопрос
    const randomnumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomnumber}`);
    const rezult = numberIsEven(randomnumber);
    const answer = readlineSync.question('Your answer: ');
    if (BadResult(answer, rezult, name) === true) {
      break;
    }
    Congratulations(name, answer, rezult, i);
  }
};
export default Even;
