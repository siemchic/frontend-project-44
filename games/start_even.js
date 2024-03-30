#!/usr/bin/env node
import {
  getRandomNumber, startGame,
// eslint-disable-next-line import/extensions
} from '../src/index.js';

const getRoundData = () => {
  let qestion = '';
  let rezult = '';
  const numberIsEven = (randomnumber) => {
    if (randomnumber % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  // цикл с рандомным числом
  for (let i = 0; i < 3; i += 1) {
  // вопрос
    const randomnumber = getRandomNumber(1, 100);
    qestion = (`Question: ${randomnumber}`);
    rezult = numberIsEven(randomnumber);
  }
  return { qestion, rezult };
};
const Even = () => {
  const title = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(title, getRoundData);
};
export default Even;
