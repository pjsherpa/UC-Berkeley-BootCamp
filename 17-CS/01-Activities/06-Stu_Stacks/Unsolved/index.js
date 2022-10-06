// create the Stack class with two methods to remove and add an element
class Stack {
  constructor(container = []){
    this.counter=container;
  }
  addToStack(el){
    return this.container.push(el);
  }
  removeFromStack(el){
    return this.container.pop();
  }
}

module.exports = Stack;
