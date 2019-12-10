
const QA = require('./QASchema.js');
const faker = require('faker');
console.log('SEED SCRIPT!!');


/* Delete all entries if they exist */
const deleteAll = () => {
  QA.deleteMany({}, (err) => {
    err ? console.error(err) :
      console.log('Successfully removed all records');
  });
}
deleteAll()

const productIds = [
  'BES870XL',
  'IVFWCT242DBWH',
  'TOB-135N'
]

/* returns a random number between 0 and given 'num' */
const random = (num) => Math.floor((Math.random() * num) + 1);

/* Holds all of the records created */
sampleData = [];

productIds.forEach(id => {
  for(let i = 0; i < random(7); i++) {
    let data = {
      questions: [],
      productId: id
    }

    let question = {
      name: faker.internet.userName(),
      question: faker.lorem.sentences(random(4)).slice(0,-1) + '?',
      answers: []
    }

    for(let j = 0; j < random(4); j++) {
      let answer = {
        username: faker.internet.userName(),
        answer: faker.lorem.sentences(random(9))
      }
      question.answers.push(answer)
    }
    data.questions.push(question)
    sampleData.push(data);
  }
})

QA.insertMany(sampleData, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`successfully added ${sampleData.length} items.`)
  }
})





/*
//for insertOne, refer to: https://flaviocopes.com/node-mongodb/

const insertOne = ({ name, productId, question, answer }, callback) => {
  // create a new record with given data
  var qa = new QA({ name, productId, ['posts']: { question, answer } });
  qa.save((err, result) => {
    err ? callback(err) :
      callback(null, result);
  });

}

*/




/* Insert a single record (row/document) into database */
// insertOne(sampleData, (err, result) => {
//   err ? console.error(err) :
//     console.log(result);
// })


  /* Todo */
//write things to seed the database. Use Faker.
  //each question has a username
    //each question has a question

//Random Q&A on the page first.
// One question: main answer > many answers

//divided into different components if I want
  //Post (outer container)
    //Question and Answers\


  /* Fetch All */
/*
QA.find({ query params }, { query order }

const fetchAll = (callback) => {
  QA.find({}, {}, function (err, data) {
    console.log('first')
    err ? callback(err) :
      callback(null, data)
  })
}


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