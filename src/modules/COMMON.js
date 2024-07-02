// a.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract
};


// b.js

const math = require('./a.js');

console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 2)); // 3
