// populate my schema here
// ! DO NOT USE MEEEEEEEEEEEEE
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
mongoose.connect('mongodb://localhost/tests', {useNewUrlParser: true});

//Get the default connection
//Bind connection to error event (to get notification of connection errors)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


//my Schema. The Schema allows you to define the fields stored in each document along with their validation requirements and default values. In addition, you can define static and instance helper methods to make it easier to work with your data types, and also virtual properties that you can use like any other field, but which aren't actually stored in the database (we'll discuss a bit further below).
var kittySchema = new mongoose.Schema({
  name: String,
  posts: {
    question: String,
    answer: String
  },

});


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
/*
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow show name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}
*/


//!
// Schemas are then "compiled" into models using the mongoose.model() method. Once you have a model you can use it to find, create, update, and delete objects of the given type.
//create my model (a class) that constructs our documents,
//mongoose.model(modelName, schema):
var Kitten = mongoose.model('Kitten', kittySchema);



/*

//create new kitten named 'Silence' using the Kitten model
var silence = new Kitten({ name: 'Silence' });


// You can access the fields in this new record using the dot syntax, and change the values. You have to call save() or update() to store modified values back to the database.
console.log(silence.name); // 'Silence'

//another kitten named 'Fluffy
var fluffy = new Kitten({ name: 'Fluffy' });
fluffy.speak(); // "Meow name is Fluffy"


//use the save medthod to save it to MongoDB. //! Note: each document can be saved to the database using its save method. The first argument to the callback will be an error if any occurred.
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

//find ALL kittens documents through our Kitten model
// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// })

//We just logged all of the kittens in our db to the console. If we want to filter our kittens by name, Mongoose supports MongoDBs rich querying syntax.

//This performs a search for all documents with a name property that begins with "Fluff" and returns the result as an array of kittens to the callback.
// Kitten.find({ name: /^fluff/ }, callback);

//! Note: There is also a count() method that you can use to get the number of items that match conditions. This is useful if you want to perform a count without actually fetching the records.
*/
module.exports = Kitten;