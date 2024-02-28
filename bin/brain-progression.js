#!/usr/bin/env node
import readlineSync from 'readline-sync';

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

const name = WhatName();

for (let j = 0; j < 3; j++){
let stroka = 'Qestion:';
let mass = [];
//количество элементов
let amountOFelement = getRandomNumber(5, 10);
//на сколько увеличивается
let arithmeticDependence = getRandomNumber(2, 10);
//начальный элемент
let initialElement = getRandomNumber(1, 20);
mass.push(initialElement);

// основной цикл формирования массива
for (let i = 1; i < amountOFelement ; i++){
    initialElement = initialElement + arithmeticDependence;
    mass.push(initialElement); 
}
//скрывание рандомного элемента
let randomElement = getRandomNumber(1, amountOFelement);
let y = randomElement
let TryElement = mass[y];

//цикл перевода из массива в строку
for (let n = 0; n < mass.length; n++){
    if (n === y){ 
        stroka = stroka + ' ' + '..';
    }
    else {let sumbol = parseInt(mass[n]);
    stroka = stroka + ' ' + sumbol;}
}
//console.log(mass);
console.log(stroka);
let answer = readlineSync.question('Your answer: ');
if (answer != TryElement){
    console.log("'" + answer + "' is wrong answer ;(. Correct answer was '" + TryElement + "'.");
    console.log("Let's try again, " + name + "!");
    break;
}
console.log('Correct!');
if (j === 2){
    console.log('Congratulations, ' + name);}
}

