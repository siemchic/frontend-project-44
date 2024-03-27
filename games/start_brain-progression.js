#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  Congratulations, getRandomNumber, WhatName, BadResult,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

const progression = () => {
  const name = WhatName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
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
    for (let k = 1; k < amountOFelement; k += 1) {
      initialElement += arithmeticDependence;
      mass.push(initialElement);
    }
    // скрывание рандомного элемента
    const randomElement = getRandomNumber(1, amountOFelement);
    const y = randomElement;
    const rezult = mass[y].toString();

    // цикл перевода из массива в строку
    for (let n = 0; n < mass.length; n += 1) {
      if (n === y) {
        stroka += ' ..';
      } else {
        const sumbol = parseInt(mass[n], 10);
        stroka = `${stroka} ${sumbol}`;
      }
    }
    console.log(stroka);
    const answer = readlineSync.question('Your answer: ');
    if (BadResult(answer, rezult, name) === true) {
      break;
    }
    Congratulations(name, answer, rezult, i);
  }
};
export default progression;
