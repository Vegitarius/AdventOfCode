import { input3 } from './input.js';

let input4 = ["[1518-11-01 00:00] Guard #2458 begins shift"];

const guardFinder = (input) => {
  let guard = 0;
  input.forEach(str => {
    let hash, end;
    if (str.includes("#")) {
      hash = str.slice(str.indexOf("#")).match(/#(\d+)/)[1];
    }
    guard = hash;
  })
  console.log(guard)
}

console.log(guardFinder(input4))