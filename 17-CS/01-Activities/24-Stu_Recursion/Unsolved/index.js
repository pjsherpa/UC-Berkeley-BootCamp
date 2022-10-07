// TODO: Add a comment describing what the `position` parameter means for this function.
// a number in the sequence
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  //we need 2 number to add through
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  //returning the next number adding the 2 previous position before it.
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
//34
console.log(fibonacci(9));

//fibonacci 0,1,1,2,3,5,8,13,21,34,55
//index 0,1,2,3,4,5,6,07,08,09,10


2