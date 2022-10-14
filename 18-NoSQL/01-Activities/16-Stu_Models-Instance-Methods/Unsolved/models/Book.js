const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema= new mongoose.Schema({
  title: String,
  author: String,
  price:Number
})
// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount=function(){this.price*.05;console.log(this.title, this.price)}
// TODO: Create a model named `Book`
const Book=mongoose.model('Book', bookSchema)
// TODO: Create a new instance of the model
// const handleError=(err)=>console.log(err);

const getDiscountedBook=new Book({
  title:'Diary',
  author:'Anne',
  price:50
})
// TODO: Call the custom instance method on the instance
getDiscountedBook.getDiscount()

module.exports = Book;
