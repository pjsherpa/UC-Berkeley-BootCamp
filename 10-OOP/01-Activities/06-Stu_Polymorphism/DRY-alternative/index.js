// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

const gradingRanges = [
  {
    letter: 'A',
    max: 100,
    min: 94
  }, {
    letter: 'B',
    max: 93,
    min: 82
  }, {
    letter: 'C',
    max: 81,
    min: 70
  }, {
    letter: 'D',
    max: 69,
    min: 60
  }, {
    letter: 'F',
    max: 59,
    min: 0
  }
]

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {
      const obj = gradingRanges.find((gradeObj) => inRange(input, gradeObj.min, gradeObj.max));
      return obj.letter;
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      const obj = gradingRanges.find((gradeObj) => gradeObj.letter.toLowerCase() === input.toLowerCase())
      return `${obj.min} - ${obj.max}`;
    }
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(91));
console.log('John.displayGrade():', John.displayGrade('B'));
