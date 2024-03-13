#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  BadResult,
  Congratulations, getRandomNumber, WhatName,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

const name = WhatName();
const calculation = () => {
  let rez = 0;
  console.log('What is the result of the expression?');
  // цикл вопросов
  for (let i = 0; i < 3; i += 1) {
    const znak = ['+', '-', '*'];
    const chislo1 = getRandomNumber(1, 100);
    const chislo2 = getRandomNumber(1, 100);
    const randomIndex = Math.floor(Math.random() * 3);
    const randomElement = znak[randomIndex];
    console.log(`Question: ${chislo1} ${randomElement} ${chislo2}`);

    if (randomElement === '+') {
      rez = chislo1 + chislo2;
    // console.log('znachenie = ' + rez);
    } else if (randomElement === '-') {
      rez = chislo1 - chislo2;
    // console.log('znachenie = ' + rez);
    } else if (randomElement === '*') {
      rez = chislo1 * chislo2;
    // console.log('znachenie = ' + rez);
    }

    const answer = readlineSync.question('Your answer: ');
    const rezult = rez.toString();
    // BadResult(answer, rezult, name);
    if (rezult !== answer) {
      BadResult(answer, rezult, name, i);
    // console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}'`);
    // console.log(`Let's try again, ${name}!`);
    // break;
    }
    console.log('Correct!');
    Congratulations(name, i);
  }
};
export default calculation;
