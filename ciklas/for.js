/*
FOR - "for" ciklas
bazinis is visu galimu ciklu
*/

console.clear();

console.log('START');

// intervalas: [0, 5)
for (let i = 0; i < 5; i++) {
    console.log(i, 'pirmas');
}

console.log('PAUSE');

// intervalas: [-2, 7]
for (let i = -2; i <= 7; i++) {
    console.log(i, 'antras');
}

console.log('FINISH');

console.clear();

for (let f = 0; f < 7; f++) {
    const sentence = `The number is: ${f + 1}.`;
    console.log(sentence);
}

console.clear();

// Skaiciai intervale nuo 3 iki 8 imtinai yra: 3 4 5 6 7 8.

const start = 3;
const finish = 8;
let numberSequence = '';

for (let i = start; i <= finish; i++) {
    numberSequence += ' ' + i;
}

const numberLine = `Skaiciai intervale nuo ${start} iki ${finish} imtinai yra:${numberSequence}.`;

console.log(numberLine);


// Skaiciai intervale nuo 3 iki 8 imtinai yra: 3, 4, 5, 6, 7, 8.

// const numberSequence2 = '3, 4, 5, 6, 7, 8';
let numberSequence2 = start;

for (let i = start + 1; i <= finish; i++) {
    numberSequence2 += ', ' + i;
}

const numberLine2 = `Skaiciai intervale nuo ${start} iki ${finish} imtinai yra: ${numberSequence2}.`;

console.log(numberLine2);

console.clear();

function arTestiCikla(index) {
    if (index <= 10) {
        return true;
    } else {
        return false;
    }
}

for (let i = 0; arTestiCikla(i); i += 2) {
    console.log(i, 'ciklas');
}

console.clear();

const word = 'zodelis';

for (let i = 0; i < word.length; i++) {
    console.log(i, `Raide: ${word[i]}`);
}

console.clear();

//              0  1  2  3  4
const marks = [10, 2, 8, 4, 6];

let totalSum = 0;
const amount = marks.length;

for (let i = 0; i < amount; i++) {
    const mark = marks[i];
    totalSum += mark;
    console.log(`${i})`, mark, '=', totalSum);
}

const average = totalSum / amount;
console.log(marks, 'average is', average);