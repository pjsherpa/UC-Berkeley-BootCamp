/*

Write a function that takes in a string and if the string is a string representation of a number, return the negative version of that number otherwise throw an Error.

Ex:
Input: '1'
Output: -1

Input: '4'
Output: -4

Input: 'cow'
Error

*/

// PJ's solution
const negativeNum = (str) => {
    if (str == Number(str)) {
        return -str;
    }
    throw 'This is not a number';
}

// console.log('negativeNum("-1")', negativeNum("-1"));
// console.log('negativeNum("4")', negativeNum("4"));
// console.log('negativeNum("cow")', negativeNum("cow"));

// Official solution

var getNegative = function (numString){
  var negNum = numString * -1;

  if (isNaN(negNum)){
    throw 'input must be coercible to a number'
  }

  return negNum
}


/*

Write a function that takes 2 parameters - the first is an array, the second is an element that may or may not be in the array. 
Without using any built in array methods, return true if the element is in the array or false otherwise. 
. 

Ex:
Input: [1,2,3]  1
Output: true

Input: [1,2,3]  4
Output: false

Input: ['code', 'dev', 'nerd']  'nerd'
Output: true

Input: ['code', 'dev', 'nerd']  'genius'
Output: false

*/

const includes = (arr, element) => {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === element) {
            return true;
        }
    }
    return false;
}

console.log('includes([1,2,3], 1)', includes([1,2,3], 1))
console.log('includes([1,2,3], 4)', includes([1,2,3], 4))
console.log('includes(["code", "dev", "nerd"], "nerd")', includes(["code", "dev", "nerd"], "nerd"))
console.log('includes(["code", "dev", "nerd"], "genius")', includes(["code", "dev", "nerd"], "genius"))


