// /*
// Write a function that takes in an array of numbers and outputs the average of all the numbers.

// Ex:
// Input: [ 1 , 4 , 7 ]
// Output: 4

// Input: [ 10, 5 ]
// Output: 7.5

// Input: [ 1.5, 3, 2.5, 1 ]
// Output: 2
// */

// // Luan's solution:

// var NumArray = [1, 4, 7, 10];

// function avgArray(arr) {
//   var sumArray = 0;

//   for (var i = 0; i < arr.length; i++) {
//     sumArray += arr[i];
//   }

//   var average = (sumArray / arr.length);

//   return average;
// }

// console.log('avgArray(NumArray)', avgArray(NumArray));
// console.log('avgArray([ 1.5, 3, 2.5, 1 ])', avgArray([ 1.5, 3, 2.5, 1 ]));
// console.log('avgArray([ 10, 5 ])', avgArray([ 10, 5 ]));
// console.log('avgArray([ 1, 4, 7 ])', avgArray([ 1, 4, 7 ]));

// function avgArray2(arr) {
//     return arr.reduce(function (ele, acc) 
//     {
//         return ele + acc 
//     }, 0) / arr.length;
// }

// console.log('avgArray2(NumArray)', avgArray2(NumArray));
// console.log('avgArray2([ 1.5, 3, 2.5, 1 ])', avgArray2([ 1.5, 3, 2.5, 1 ]));
// console.log('avgArray2([ 10, 5 ])', avgArray2([ 10, 5 ]));
// console.log('avgArray2([ 1, 4, 7 ])', avgArray2([ 1, 4, 7 ]));

/*
Write a function that takes in an input and returns true if it’s an integer and false otherwise.

Ex:
Input: "7"
Output: false

Input: 7
Output: true

Input: 4.3
Output: false
*/

function isInteger(val) {
  // if (typeof val === "number" && Math.floor(val) === val) {
  //   return true;
  // }
  // return false;
  if (typeof val === "number" && val % 1 === 0) {
    return true
  }
  return false
}

// var wholeNum = function(num) {
//   return Math.floor(num) === num
// }

var wholeNum = function(num) {
  return parseInt(num) === num
}

console.log('7', wholeNum(7))
console.log('"7"', wholeNum("7"))
console.log('4.3', wholeNum(4.3))


