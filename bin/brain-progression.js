#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const WhatName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

function getRandomNumber(min, max) {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

const name = WhatName();
console.log('What number is missing in the progression?');
for (let j = 0; j < 3; j += 1) {
  let stroka = 'Question:';
  const mass = [];
  // количество элементов
  const amountOFelement = getRandomNumber(5, 10);
  // на сколько увеличивается
  const arithmeticDependence = getRandomNumber(2, 10);
  // начальный элемент
  let initialElement = getRandomNumber(1, 20);
  mass.push(initialElement);

  // основной цикл формирования массива
  for (let i = 1; i < amountOFelement; i += 1) {
    initialElement += arithmeticDependence;
    mass.push(initialElement);
  }
  // скрывание рандомного элемента
  const randomElement = getRandomNumber(1, amountOFelement);
  const y = randomElement;
  const TryElement = mass[y].toString();

  // цикл перевода из массива в строку
  for (let n = 0; n < mass.length; n += 1) {
    if (n === y) {
      stroka += ' ..';
    } else {
      const sumbol = parseInt(mass[n], 10);
      stroka = `${stroka} ${sumbol}`;
    }
  }
  // console.log(mass);
  console.log(stroka);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== TryElement) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${TryElement}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  console.log('Correct!');
  if (j === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
