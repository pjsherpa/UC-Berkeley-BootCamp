/*
Write a function that takes in a string and outputs the number of vowels (not counting y).

Ex:
Input: "hello"
Output: 2

Input: "you are great!"
Output: 6

Input: "why?"
Output: 0
*/

function vowelCount(str1) {
    var vowelList = "AaEeIiOoUu";
    var vCount = 0;

    for (var i = 0; i < str1.length; i++) {
        if (vowelList.indexOf(str1[i]) !== -1){
            vCount++;
        }
    }
    return vCount;
}

var countVowels = function(str){
    var count = 0;
    var input = str.toLowerCase();
    for (var i = 0; i < input.length; i++){
    if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u"){
        count++;
    }
    }
}

// var countVowels = function(str){
//     var count = 0;
//     var input = str.toLowerCase();
//     var vowelArr = [“a”, “e”, “i”, “o”, “u”];
//     for (var i = 0; i < input.length; i++){
//     if(vowelArr.includes(input[i])){
//         count++;
//     }
//     }
//     return count;
// }

// console.log('vowelCount("you are great!")', vowelCount("you are great!"))

/*

Write a function that takes in a single word as a string and returns true if it's a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

Ex:
Input: "noon"
Output: true

Input: "horse"
Output: false

Input: "racecar"
Output: true
*/

function isPalandrome(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {

        //console.log('str[i]', str[i], str[str.length - 1 - i])
       if (str[i] !== str[str.length - 1 - i]) {
         return false;
       }
    }
    return true
}

function isPalandrome(str) {
    return str.split("").reverse().join("") === str;
}


console.log('isPalandrome - noon', isPalandrome('noon'))
console.log('isPalandrome - horse', isPalandrome('horse'))
console.log('isPalandrome - RACECAR', isPalandrome('RACECAR'))
