#!/usr/bin/env node
import startGame from '../src/index.js';
import getRandomNumber from '../src/utils/randomNumber.js';

const getRoundData = () => {
  let qestion = '';
  let rezult = '';
  const numberIsEven = (randomnumber) => {
    if (randomnumber % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const randomnumber = getRandomNumber(1, 100);
  qestion = (`Question: ${randomnumber}`);
  rezult = numberIsEven(randomnumber);
  return { qestion, rezult };
};
const Even = () => {
  const title = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(title, getRoundData);
};
export default Even;
