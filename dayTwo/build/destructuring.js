"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

var f = function f(_ref) {
  var a = _ref.a,
      b = _ref.b;

  console.log("\n    a : " + a + ",\n    b : " + b + "\n    ");
};

var g = function g(_ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
      a = _ref3[0],
      b = _ref3[1];

  console.log("\n      first : " + a + "\n      second : " + b + "\n    ");
};

module.exports = {
  obj: obj,
  f: f,
  g: g
};