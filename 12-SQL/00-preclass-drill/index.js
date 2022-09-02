/*

Write a function that takes an array of numbers and returns an array with each number doubled. 

Ex:
Input: [1,2,3]
Output: [2,4,6]

Input: [-1,-2,-3]
Output: [-2, -4, -6]

SOLUTION #1
var double = function(arr){
  var newArr = [];

  for (var i = 0; i < arr.length; i++){
    const newNum = arr[i] * 2;
    newArr.push(newNum);
  }

  return newArr;
}

*/

// const numDoubler = arr => arr.map(n => n * 2)

// console.log('numDoubler([1,2,3])', numDoubler([1,2,3]))
// console.log('numDoubler([-1,-2,-3])', numDoubler([-1,-2,-3]))

/*

Write a function that takes an array of numbers and a function as parameters. The function parameter should do something to a numbers (increment, double, decrement, etc) and return the result. Your function should return the array that results from applying the function parameter to each element in the number array. 

Ex:
Input: [1,2,3]  function(num){return num * 2}
Output: [2,4,6]

Input: [1,2,3]  function(num){return num + 1}
Output: [2,3,4]

Input: [1,2,3] function(num) {return num /2}
Output: [.5, 1. 1.5]

Input: [1,2,3] function(num) {return num - 2}
Output: [-1, 0, 1]

*/
// Mike's Solution:  const arrFunction = (arr, funk) => arr.map(x => funk(x));
const doSomethingWithArray = (arr, cb) =>  arr.map(x => cb(x));  // arr.map(cb)

// console.log('doSomethingWithArray([1,2,3],  function(num){ return num * 2 })', doSomethingWithArray([1,2,3],  function(num){ return num * 2 }));

// console.log('doSomethingWithArray([1,2,3],  function(num){ return num + 1 })', doSomethingWithArray([1,2,3],  function(num){ return num + 1 }));

// console.log('doSomethingWithArray([1,2,3],  function(num){ return num / 2 })', doSomethingWithArray([1,2,3],  function(num){ return num / 2 }));

// console.log('doSomethingWithArray([1,2,3],  function(num){ return num - 2 })', doSomethingWithArray([1,2,3],  function(num){ return num - 2 }));

/*

var map = function(arr, cb){
  var newArr = [];

  for (var i = 0; i < arr.length; i++){
    var newNum = cb(arr[i]);
    newArr.push(newNum);
  }

  return newArr;
}

*/

/*

Write a function that takes an array of numbers and a function as parameters. The function parameter should return true if the input meets a certain condition or false otherwise. Your function should return true if the function parameter returns true for _any_ of the array elements in the array parameter or false otherwise. 

Ex:

Input: [1,2,3]  function(num){return num === 2}
Output: true

Input: [1,5,3]  function(num){return num === 2}
Output: false

Input: [1,2,3]  function(num){return num % 2 === 0}
Output: true

Input: [1,5,3]  function(num){return num % 2 === 0}
Output: false

*/
// Joshua's solution
// const inputMeetsConditions = (arr, cb) => {
//     let returnVal = false;
//     arr.forEach(ele => {
//       if (cb(ele) === true) {
//         returnVal = true;
//       }
//     })
//     return returnVal;
// }

const inputMeetsConditions = (arr, cb) => arr.some(cb);

console.log('inputMeetsConditions([1,2,3]  function(num){return num === 2})', inputMeetsConditions([1,2,3],  function(num){ return num === 2 }));

console.log('inputMeetsConditions([1,5,3]  function(num){return num === 2})', inputMeetsConditions([1,5,3],  function(num){ return num === 2 }));

console.log('inputMeetsConditions([1,2,3]  function(num){return num % 2 === 0})', inputMeetsConditions([1,2,3],  function(num){ return num % 2 === 0 }));

console.log('inputMeetsConditions([1,5,3]  function(num){return num % 2 === 0})', inputMeetsConditions([1,5,3],  function(num){ return num % 2 === 0 }));