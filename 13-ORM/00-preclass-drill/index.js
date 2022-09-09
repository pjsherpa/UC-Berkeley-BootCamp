/*

Write a function that takes in a number and reverses the order of the digits.

Ex:
Input: 1234
Output:4321

Input: 1201
Output:1021

Input: 4
Output: 4

*/

// Luan's solution
// const reverseDigits = num => {
//     let x = num.toString().split("").reverse().join("")
//     return Number(x);
// }

// console.log('reverseDigits(1234)', reverseDigits(1234));
// console.log('reverseDigits(1201)', reverseDigits(1201));
// console.log('reverseDigits(4)', reverseDigits(4));

// // Official solution:

// var reverseDigit = function (num){
//   var newNum = '';
//   var numStr = num.toString();
//   for (var i = numStr.length - 1 ; i >= 0; i--){
//     newNum += numStr[i];
//   }

//   return parseInt(newNum);
// }

/*

Write a function that takes in a string and and returns the string with white space removed and all letters changed to lowercase . This is a common task when a variable, routeName, etc needs to be created from user input.

Ex:
Input: Tammer Galal
Output: tammergalal

Input:    favorite tree    ever
Output: favoritetreeever

Input: one word
Output: oneword

*/
// Jenny's solution
// const noSpaces = str => str.toLowerCase().replace(/\s/g, '');

// Luan's & PJ's solution
//const noSpaces = str => str.toLowerCase().replaceAll(" ", "");

// John's solution
const noSpaces = str => str.split(" ").join("").toLowerCase();


console.log('noSpaces("Favorite Tree   ever")', noSpaces("Favorite Tree   ever"));

/*

Single loop solution:

var singleWord = function (str){

  var newStr = '';

  for (var i = 0; i < str.length; i++){
    if (str[i] !== ' ' ){
      newStr += str[i];
    }
  }

  return newStr.toLowerCase();
}
*/