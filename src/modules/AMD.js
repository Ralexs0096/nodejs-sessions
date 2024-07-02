
// a.js
define(function () {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;

  return {
    add,
    subtract
  };
});


// b.js
require(['a'], function (math) {
  console.log(math.add(2, 3)); // 5
  console.log(math.subtract(5, 2)); // 3
});