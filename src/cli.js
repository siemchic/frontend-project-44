import readlineSync from 'readline-sync';

const WhatName = () => {
    const name =readlineSync.question('May I have your name? ');
    console.log ('Hello, ' + name + '!');
}
export default WhatName;