#!/usr/bin/env node
import readlineSync from 'readline-sync';

// функция рандомного числа
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log('Welcome to the Brain Games!');
const WhatName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const name = WhatName();

console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3; i += 1) {
  let number1 = getRandomNumber(1, 100);
  let number2 = getRandomNumber(1, 100);
  console.log(`Question: ${number1} ${number2}`);
  for (; number1 !== number2;) {
    if (number1 > number2) {
      number1 -= number2;
    }
    if (number1 < number2) {
      number2 -= number1;
    }
  }
  console.log(`otvet = ${number1}`);
  const answer = readlineSync.question('Your answer: ');
  if (number1 !== answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${number1}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  console.log('Correct!!!');
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
}
