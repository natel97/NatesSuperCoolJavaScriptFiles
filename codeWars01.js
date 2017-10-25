//Day one code wars! Nate's solution!

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let x = 0;
    let o = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i] == 'x' || str[i] == 'X')
        x++
        else if(str[i] == 'O' || str[i] == 'o')
        o++
    }
    return(x == o)
    }

//Test it out in the log
console.log(XO("Boxes upon BOXES of stuff")) // false
console.log(XO("xxxooo")) // true
console.log(XO("xoxxoo")) // true
console.log(XO("")) // true

//Misc tests from codewars! :)
// Test.assertEquals(XO('xo'),true);
// Test.assertEquals(XO("xxOo"),true);
// Test.assertEquals(XO("xxxm"),false);
// Test.assertEquals(XO("Oo"),false);
// Test.assertEquals(XO("ooom"),false);
