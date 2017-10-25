let _=require('lodash')

//Fizbuzz itself
let fizzBuzz = (input) => {
  return (input % 5 == 0) ?
    (input % 3 == 0) ?
        input + ": FIZZBUZZ!!!" : input + ": Buzz"
    : (input % 3 == 0) ?
      input + ": Fizz" : null
}

//getFizzBuzzable variables from array
let fizzBuzzFilteredArray = (arr) => _.filter(arr, function(o) { return (fizzBuzz(o) != null) })

//Pair values with words!
let fizzBuzzArray = (arr) => _.map(fizzBuzzFilteredArray(arr),fizzBuzz)

//---->Run the thing!<----\\
console.log(fizzBuzzArray(_.range(1,100)))
console.log(fizzBuzzArray(_.range(70,88)))
