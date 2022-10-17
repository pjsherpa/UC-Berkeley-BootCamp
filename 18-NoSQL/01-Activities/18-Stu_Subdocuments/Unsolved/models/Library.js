const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema= new mongoose.Schema({
  title:String,
  price:Number
})

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  books:[bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library=mongoose.model('library', librarySchema);

// TODO: Create a new instance of the model including the subdocuments

const bookData=[
  {title:'Ann',price:50},
  {title:'Jim',price:60},
];

Library.create(
  {name:'new',books:bookData},
  (err,data)=>{
    if(err){
      console.log(err);
    }
    console.log(data);
  }
)


module.exports = Library;
