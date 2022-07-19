/*
Write a function that takes in an array of numbers and outputs the average of all the numbers.

Ex:
Input: [ 1 , 4 , 7 ]
Output: 4

Input: [ 10, 5 ]
Output: 7.5

Input: [ 1.5, 3, 2.5, 1 ]
Output: 2
*/

// Luan's solution:

var NumArray = [1, 4, 7, 10];

function avgArray(arr) {
  var sumArray = 0;

  for (var i = 0; i < arr.length; i++) {
    sumArray += arr[i];
  }

  var average = (sumArray / arr.length);

  return average;
}

console.log('avgArray(NumArray)', avgArray(NumArray));
console.log('avgArray([ 1.5, 3, 2.5, 1 ])', avgArray([ 1.5, 3, 2.5, 1 ]));
console.log('avgArray([ 10, 5 ])', avgArray([ 10, 5 ]));
console.log('avgArray([ 1, 4, 7 ])', avgArray([ 1, 4, 7 ]));

function avgArray2(arr) {
    return arr.reduce(function (ele, acc) 
    {
        return ele + acc 
    }, 0) / arr.length;
}

console.log('avgArray2(NumArray)', avgArray2(NumArray));
console.log('avgArray2([ 1.5, 3, 2.5, 1 ])', avgArray2([ 1.5, 3, 2.5, 1 ]));
console.log('avgArray2([ 10, 5 ])', avgArray2([ 10, 5 ]));
console.log('avgArray2([ 1, 4, 7 ])', avgArray2([ 1, 4, 7 ]));