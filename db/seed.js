//write things to seed the database. Use Faker.
  //each question has a username
    //each question has a question

//Random Q&A on the page first.
// One question: main answer > many answers

//divided into different components if I want
  //Post (outer container)
    //Question and Answers\

  const mongoose = require('mongoose')

const QA = require('./QASchema.js');

const sampleData = {
  question: 'Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum?',
  answer: 'A first-century BCE text by Cicero , with words altered, added, and removed to make it nonsensical, improper Latin . Versions of the lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker',
  name:'Eivin',
  productId: 'BES870XL'
}

// db.productQA.insertOne(sampleData);

// db.productQA.find( {} )


//for insertOne, refer to: https://flaviocopes.com/node-mongodb/

const insertOne = ({ name, productId, question, answer }, callback) => {
  // create a new record with given data
  var qa = new QA({ name, productId, ['posts']: { question, answer } });
  qa.save((err, result) => {
    err ? callback(err) :
      callback(null, result);
  });

}

const fetchAll = (callback) => {
  QA.find({/* query params */}, {/* query order */}, function (err, data) {
    console.log('first')
    err ? callback(err) :
      callback(null, data)
  })
}

// Delete all entries
const deleteAll = (callback) => {
  QA.deleteMany({}, (err) => {
    err ? console.error(err) :
      console.log('Successfully removed all records');
  });
}

/*
fetchAll((err, data) => {
  err ? console.error(err) :
    data.forEach((item, i) => {
      console.log(`
      Entry: ${i+1}
      Item: ${item}
      `)
    })
})
*/
/*
insertOne(sampleData, (err, result) => {
  err ? console.error(err) :
    console.log(result);
})

*/

// module.exports = sampleData;

module.exports = seed