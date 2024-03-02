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
    }
    // проверяет правильный ответ
    else {
      i = 4;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
    }
  } else if (del === 1) {
    if (answer === 'no') {
      console.log('Correct!');
    } else {
      i = 4;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
