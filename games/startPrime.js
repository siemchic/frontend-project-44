#!/usr/bin/env node
import startGame from '../src/index.js';
import getRandomNumber from '../src/utils/randomNumber.js';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const getRoundData = () => {
  let rezult = '';
  let qestion = '';
  for (let i = 0; i < 3; i += 1) {
    const vopros = getRandomNumber(1, 100);
    qestion = `Question: ${vopros}`;
    rezult = isPrime(vopros);
  }
  return { rezult, qestion };
};
const prime = () => {
  const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(title, getRoundData);
};
export default prime;
