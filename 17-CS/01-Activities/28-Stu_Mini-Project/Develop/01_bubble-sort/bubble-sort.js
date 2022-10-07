// Create our input data
const unsortedInputArray = [2, 42, 100, 23, 500, 34];



// seed data in unsortedInputArray
// for (let i = 0; i < 2000; i++) {
//   unsortedInputArray.push(Math.round(Math.random() * 2000));
// }

// TODO: create bubble sort function
const bubbleSort = (array) => {
for(let j =0; j<unsortedInputArray.length; j++){
  // swap
  if(unsortedInputArray[j]>unsortedInputArray[j+1]){
    let temp=unsortedInputArray[j]
    array[j]=unsortedInputArray[j+1]
    array[j+1]=temp
  }
}  
return unsortedInputArray;
};

const sorted = bubbleSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
