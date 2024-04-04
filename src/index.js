import readlineSync from 'readline-sync';
import WhatName from './utils/cli.js';

const startGame = (title, getRoundData) => {
  const name = WhatName();
  console.log(title);
  for (let i = 0; i < 3; i += 1) {
    const data = getRoundData();
    console.log(data.qestion);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== data.rezult) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${data.rezult}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default startGame;
