(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // Global variable (browser)
    root.myModule = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  // Module implementation
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;

  return {
    add,
    subtract
  };
}));

