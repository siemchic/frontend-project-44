#!/usr/bin/env node
import {
  getRandomNumber, startGame,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

const getRoundData = () => {
  let rezult = '';
  let qestion = '';
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
  for (let i = 0; i < 3; i += 1) {
    const vopros = getRandomNumber(1, 100);
    qestion = `Question: ${vopros}`;
    rezult = prost(vopros);
  }
  return { rezult, qestion };
};
const prime = () => {
  const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(title, getRoundData);
};
export default prime;
