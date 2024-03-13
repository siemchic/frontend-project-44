#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  Congratulations, getRandomNumber, WhatName,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

const name = WhatName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
// цикл с рандомным числом
for (let i = 0; i < 3; i += 1) {
  // вопрос
  const randomnumber = getRandomNumber(1, 100);
  console.log(`Question: ${randomnumber}`);
  // определение четности
  const del = randomnumber % 2;
  const answer = readlineSync.question('Your answer: ');
  // проверка четный или нечетный
  if (del === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
    } else {
      i = 4;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
    }
  } else if (del === 1) {
    if (answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  Congratulations(name, i);
}
