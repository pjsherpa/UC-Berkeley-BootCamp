var max = function(num1, num2) {
    if (num1 < num2) {
        return num2;
    }
    return num1;
}

// max(1, 2);

// console.log('max(1, 2)', max(1, 2));
// console.log('max(6, -4)', max(6, -4));
// console.log('max(3.4, 2)', max(3.4, 2));


var oneToNumber = function(num) {
    var i = 0;
    var sum = 0;
    while (i < num) {
        sum += num - i;
        i++;
    }
    return sum;
}

var oneToNumber2 = function(num) {
    var sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum;
}


// console.log('oneToNumber(2)', oneToNumber(2)); // --> 3
// console.log('oneToNumber(4)', oneToNumber(4)); // --> 10
// console.log('oneToNumber(10)', oneToNumber(10)); // --> 55
// console.log('oneToNumber2(2)', oneToNumber2(2)); // --> 3
// console.log('oneToNumber2(4)', oneToNumber2(4)); // --> 10
// console.log('oneToNumber2(10)', oneToNumber2(10)); // --> 55


// Write a function that takes in an array of numbers and outputs the maximum number.

// Ex:
// Input: [ 1, 2, 3 ]
// Output: 3

// Input: [ 3, 6, 4, 5, 2, 1 ]
// Output: 6

// Input: [ 3, 3, 3 ]
// Output: 3

// function findMaxNum(arr) {
//  var max = arr[0]
//  for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i + 1]) {
//         max = arr[i + 1];
//     }
//  }
//  console.log('max', max);
//  return max
// }

function findMaxNum(arr) {
    return Math.max.apply(null, arr);
}



console.log('findMaxNum([ 1, 2, 3 ])', findMaxNum([ 1, 2, 3 ]))
console.log('findMaxNum([ 3, 6, 4, 5, 2, 1 ])', findMaxNum([ 3, 6, 4, 5, 2, 1 ]))
console.log('findMaxNum([ 3, 3, 3 ])', findMaxNum([ 3, 3, 3 ]))
