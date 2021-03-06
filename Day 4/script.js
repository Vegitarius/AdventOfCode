import { input3 } from './input.js';

const guardFinder = (input) => {
  let guards = [];
  let sleep = 0;
  let wake = 0;
  let time = 0;
  let hash = '';
  input.forEach(str => {
    if (str.includes("#")) {
      hash = str.slice(str.indexOf("#")).match(/#(\d+)/)[1];
    } else if (str.includes("asleep")) {
      sleep = Number(str[15] + str[16]);
    } else if (str.includes("wakes")) {
      wake = Number(str[15] + str[16]);
      time = wake - sleep;
      if (!guards[hash]) guards[hash] = {};
      for (let i = sleep; i < wake; i++) {
        if (!guards[hash][i]) guards[hash][i] = 0;
        guards[hash][i]++
      };
      if (!guards[hash]["time"]) guards[hash]["time"] = 0;
      guards[hash]["time"] = guards[hash]["time"] + time;
    }
  })
  let most = guards.reduce((prev, curr) => {
    if (prev.time > curr.time) {
      hash = guards.indexOf(prev)
      return prev;
    } else {
      hash = guards.indexOf(curr)
      return curr;
    }
  })
  let mostTop = 0;
  let mostKey = '';
  Object.entries(most).forEach(([key, value]) => {
    if (value > mostTop && key !== 'time') {
      mostTop = value;
      mostKey = Number(key);
    }
  });
  return hash * mostKey;
}

const mostFreqMin = input => {
  let guards = [];
  let sleep = 0;
  let wake = 0;
  let hash = '';
  input.forEach(str => {
    if (str.includes("#")) {
      hash = str.slice(str.indexOf("#")).match(/#(\d+)/)[1];
    } else if (str.includes("asleep")) {
      sleep = Number(str[15] + str[16]);
    } else if (str.includes("wakes")) {
      wake = Number(str[15] + str[16]);
      if (!guards[hash]) guards[hash] = {};
      for (let i = sleep; i < wake; i++) {
        if (!guards[hash][i]) guards[hash][i] = 0;
        guards[hash][i]++
      };
    }
  })
  let mostTop = 0;
  let mostKey = '';
  guards.forEach(guard => {
    Object.entries(guard).forEach(([key, value]) => {
      if (value > mostTop) {
        mostTop = value;
        mostKey = key;
        hash = guards.indexOf(guard)
      }
    });
  })
  return hash * Number(mostKey)
}

console.log(guardFinder(input3))  
console.log(mostFreqMin(input3))  