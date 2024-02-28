#!/usr/bin/env node
import readlineSync, { question } from 'readline-sync';

console.log('Welcome to the Brain Games!');
const WhatName = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log ('Hello, ' + name + '!');
    return name;
}

function getRandomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  function contains(mass, vopros) {
    for (var j = 0; j < mass.length; j++) {
        if (mass[j] === vopros) {
            return true;
        }
    }
    return false;
}

const name = WhatName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const mass = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
//цикл с вопросами
for (let i = 0; i < 3; i++){
    let vopros = getRandomNumber(1, 100);
    console.log('Qestion: ' + vopros );
    let answer =  readlineSync.question('Your answer: ');
    const tru = contains(mass, vopros);
    //цикл с проверкой
       if (tru === true && answer === 'yes'){
        console.log('correct');
       }
       else if (tru === false && answer === 'no'){
        console.log('correct');
       }
       else if (tru === true && answer != 'yes'){
        console.log("'" + answer + "' is wrong answer ;(. Correct answer was 'yes'.");
        console.log("Let's try again, " + name + "!");
        break;
       }
       else if (tru === false && answer != 'no'){
        console.log("'" + answer + "' is wrong answer ;(. Correct answer was 'no'.");
        console.log("Let's try again, " + name + "!");
        break;
       }


if (i === 2){
    console.log('Congratulations, ' + name + '!');
}
}