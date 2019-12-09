const seed = require('./seed.js')


//create a new collection for my productsQA
const collection = db.collection('posts')

//insert data into a collection as a Document

collection.inserOne(sampleData, (err, result) => {

})

collection.inserMany(sampleData, (err, result) => {

})


//find all documents

collection.find().toArray((err, items) => {
  console.log(items)
})