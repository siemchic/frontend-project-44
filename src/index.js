import readlineSync from 'readline-sync';

export const WhatName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomNumber = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum) + minNum);
};
export const BadResult = (answer, rezult, name) => {
  if (answer !== rezult) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}'`);
    console.log(`Let's try again, ${name}!`);
    return true;
  }
  return false;
};

export const startGame = (title, getRoundData) => {
  const name = WhatName();
  console.log(title);
  for (let i = 0; i < 3; i += 1) {
    const data = getRoundData();
    console.log(data.qestion);
    const answer = readlineSync.question('Your answer: ');
    if (BadResult(answer, data.rezult, name) === true) {
    // break;
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulation, ${name}!`);
};
