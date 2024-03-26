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

export const Congratulations = (name, answer, rezult, i) => {
  if (answer === rezult) {
    console.log('Correct');
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
    return 1;
  }
  return 0;
};

export const BadResult = (answer, rezult, name) => {
  if (answer !== rezult) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}'`);
    console.log(`Let's try again, ${name}!`);
    return true;
  }
  return false;
};
