import 'babel-polyfill'
let imp = require('./destructuring.js')
let curry = require('./currying.js')

//console.log(imp.obj)
imp.g([8, 6, 7, 5, 3])

curry.add(3)(3)
curry.increment(88)
curry.add(83)(438)

let chicken = curry.qA("Why did the chicken cross the road?")
chicken("To get to the other side!")
chicken("Because it wanted to!")
chicken("She wanted to stretch her legs!")
chicken("She was afraid someone would Caesar!")
chicken("There was a car coming!")

let average = (arr) => (arr.reduce((acc, elem) => acc + elem) / arr.length)

console.log(average([2, 3, 4, 5, 6]))
console.log(average([3333, 6666, 9999]))
