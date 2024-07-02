
// a.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

const hello = () => {
  console.log('Hello');
}

export default hello

// b.js

import { add, subtract } from './a.js';

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
