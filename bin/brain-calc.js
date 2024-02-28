#!/usr/bin/env node
import readlineSync from 'readline-sync';

//функция рандомного числа
function getRandomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

console.log('Welcome to the Brain Games!');
const WhatName = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log ('Hello, ' + name + '!');
    return name;
}
//ввод имени игрока
const name = WhatName();
let rez = 0;
console.log('What is the result of the expression?');
//цикл вопросов
for ( let i = 0; i < 3; i++){
    var znak = ['+', '-', '*'];
    let chislo1 = getRandomNumber(1, 100);
    let chislo2 = getRandomNumber(1, 100);
    let randomIndex = Math.floor(Math.random() * 3);
    let randomElement = znak[randomIndex];
    console.log('Question: ' + chislo1 + ' ' + randomElement + ' ' + chislo2);

    if (randomElement === '+'){
        rez = chislo1 + chislo2;
        //console.log('znachenie = ' + rez);
    }
    else if (randomElement === '-') {
        rez = chislo1 - chislo2;
        //console.log('znachenie = ' + rez);
    }
    else if  (randomElement === '*') {
        rez = chislo1 * chislo2;
        //console.log('znachenie = ' + rez);
    }

    let answer = readlineSync.question('Your answer: ');
    let rezult = rez;

    if (rezult != answer) {
        console.log("'" + answer + "' is wrong answer ;(. Correct answer was '" + rezult + "'.");
        console.log("Let's try again, " + name + '!');
        break;
    }
    console.log('Correct!');
    if (i === 2){
        console.log('Congratulations, ' + name + '!');
        break
    }
}
