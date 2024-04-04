#!/usr/bin/env node
import startGame from '../src/index.js';
import getRandomNumber from '../src/utils/randomNumber.js';
import prostoe from '../src/utils/prostoeChislo.js';

const getRoundData = () => {
  let rezult = '';
  let qestion = '';
  for (let i = 0; i < 3; i += 1) {
    const vopros = getRandomNumber(1, 100);
    qestion = `Question: ${vopros}`;
    rezult = prostoe(vopros);
  }
  return { rezult, qestion };
};
const prime = () => {
  const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(title, getRoundData);
};
export default prime;
