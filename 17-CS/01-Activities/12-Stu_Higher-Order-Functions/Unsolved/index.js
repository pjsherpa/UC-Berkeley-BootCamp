const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    return(accumulator*(index)+currentValue)/(index+1);
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage);

console.log(gradeAverage);
