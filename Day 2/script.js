import { input } from './input.js';
let input2 = input.replace(/\r?\n|\n/g, " ").split(" ");

const checksum = input => {
  let twos = 0, threes = 0;
  input.forEach(str => {
    let two = false, three = false;
    for (let i = 0; i < str.length; i++) {
      let occ = 1;
      for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j] && i !== j) occ++;
      }
    if (occ === 2) two = true;
    else if (occ === 3) three = true;
    occ = 1;
    }
    if (two === true) twos++;
    if (three === true) threes++;
    two = false;
    three = false;
  })
  return twos * threes;
}

let fabricFinder = input => {
  let answer = '';
  input.forEach((str, index) => {
    for (let i = 0; i < str.length; i++) {
      let str2 = str.replace(str[i], '');
      input.forEach((str3, jdex) => {
        for (let j = 0; j < str3.length; j++) {
          let str4 = str3.replace(str3[i], '');
          if (str4 === str2 && index !== jdex) {
            answer = str2;
          }
        }
      })
    }
  })
  return answer;
}

console.log(checksum(input2));
console.log(fabricFinder(input2));