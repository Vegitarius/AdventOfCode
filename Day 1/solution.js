import { input } from './input.js';

let input2 = input;
input2 = input2.replace(/\r?\n|\r/g, ' ').split(' ')

let frequencies = [];
let multiplier = 0;
let answer;

for (let i = 0; i < input2.length; i++) {
  multiplier = multiplier + Number(input2[i]);
  if (frequencies.includes(multiplier)) {
    answer = multiplier;
    break;
  }
  frequencies.push(multiplier);
  if (i === input2.length-1) {
    i = -1
  }
}

console.log(answer);