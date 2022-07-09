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

var countVowels = function(str){
    var count = 0;
    var input = str.toLowerCase();
    var vowelArr = [“a”, “e”, “i”, “o”, “u”];
    for (var i = 0; i < input.length; i++){
    if(vowelArr.includes(input[i])){
        count++;
    }
    }
    return count;
}

console.log('vowelCount("you are great!")', vowelCount("you are great!"))
