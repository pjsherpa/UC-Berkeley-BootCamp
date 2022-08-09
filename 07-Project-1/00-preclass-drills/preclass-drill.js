/*

Write a function that takes in a string and returns true if it’s a pangram or false otherwise.
Pangram: a sentence that contains every letter in the alphabet.

Ex:
Input: “Watch Jeopardy, Alex Trebek’s fun TV quiz game”
Output: true

Input: “Five hexing wizard bots jump quickly”
Output: true

Input: “JavaScript is the best”
Output: false
*/

var isPanagram = function(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var strLowerCase = str.toLowerCase();
  for (let index = 0; index < alphabet.length; index++) {
    const letter = alphabet[index];
    if (!strLowerCase.includes(letter)) {
      return false;
    }
  }
  return true;
}

console.log('isPanagram("Watch Jeopardy, Alex Trebek’s fun TV quiz game")', isPanagram("Watch Jeopardy, Alex Trebek’s fun TV quiz game"))

console.log('isPanagram("Five hexing wizard bots jump quickly")', isPanagram("Five hexing wizard bots jump quickly"))

console.log('isPanagram("JavaScript is the best")', isPanagram("JavaScript is the best"))