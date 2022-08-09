// /*

// Write a function that takes in a number and returns the corresponding day of the week.

// Ex:
// Input: 1
// Output: 'Monday'

// Input: 5
// Output: 'Friday'

// Input: 8
// Output: undefined

// */


// // Joshua's solution
// var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// function getDay(dayNum) {
//   return dayOfWeek[dayNum-1];
// }

// console.log('1 -- Sunday', getDay(1));

// // Mike's solution:
// var weekDay = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday"
// }
// function findDayOfWeek(num, obj) {
//     if (obj.hasOwnProperty(num)){
//         return obj[num];
//     }
// }

// console.log('Mikes solution: 1 -- Monday', findDayOfWeek(1, weekDay));

// // 2U solution:

// var getDay = function (dayNum){
//   switch(dayNum){
//     case 1:
//       return 'Monday';
//     case 2:
//       return 'Tuesday';
//     case 3:
//       return 'Wednesday';
//     case 4:
//       return 'Thursday';
//     case 5:
//       return 'Friday';
//     case 6:
//       return 'Saturday';
//     case 7:
//       return 'Sunday';
//     default:
//       return undefined;
//   }
// }

/*

Write a function that takes in an array of integers and the array with duplicates removed

Ex:
Input: [1,2,2,3]
Output: [1,2,3]

Input: [4,5,4,4,7,5]
Output: [4,5,7]

Input: [1,2,3,5]
Output: [1,2,3,5]

*/

// const removeDuplicates = arr => {
//   const deDuppedList = []

//   arr.forEach(num => {
//     if (!deDuppedList.includes(num)) {
//       deDuppedList.push(num);
//     }
//   });
//   return deDuppedList;
// }

const removeDuplicates = arr => [...new Set(arr)]

console.log('[4,5,4,4,7,5]', removeDuplicates([4,5,4,4,7,5]));