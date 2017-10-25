"use strict";

var add = function add(x) {
  return function (y) {
    console.log((x == 1 ? "increment" : x + " +") + " " + y + " = " + (x + y));
  };
};
var increment = add(1);
var qA = function qA(question) {
  return function (answer) {
    return console.log("\nQ: " + question + "\nA: " + answer);
  };
};

module.exports = {
  add: add,
  increment: increment,
  qA: qA
};