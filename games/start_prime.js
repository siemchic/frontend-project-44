#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  Congratulations, getRandomNumber, WhatName, BadResult,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

const prime = () => {
  const name = WhatName();
  function prost(x) {
    const mass = [];
    for (let i = 1; i <= x; i += 1) {
      const delitel = x % i;
      if (delitel === 0) {
        mass.push(delitel);
      }
    }
    if (mass.length === 2) {
      return 'yes';
    }
    return 'no';
  }
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const vopros = getRandomNumber(1, 100);
    console.log(`Question: ${vopros}`);
    const rezult = prost(vopros);
    const answer = readlineSync.question('Your answer: ');

    if (BadResult(answer, rezult, name) === true) {
      break;
    }
    Congratulations(name, answer, rezult, i);
  }
};
export default prime;
