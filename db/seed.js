const QA = require('./QASchema.js');
const faker = require('faker');

/* returns a random number between 0 and given 'num' */
const random = (num) =>
  Math.floor((Math.random() * num) + 1);


/* STEP 1 */
/* Delete all entries if they exist */
const deleteAll = (callback) => {
  //delete all entries
  QA.deleteMany({}, (err) => {
      err ? callback(err) :
        callback(null)
  });
};

/* STEP 2 */
const generateProductIds = () => {
  let productIds = [];

  for (var value = 1; value <= 100; value++) {
    productIds.push(`${value}`);
  }

  return productIds;
}

/* STEP 3 */
const generateData = (productIds) => {
 /* Holds all of the records created */
  sampleData = [];
  productIds.forEach(id => {

    let data = {
      questions: [],
      productId: id
    }

    let question = {
      name: faker.internet.userName(),
      question: faker.lorem.sentences(random(4)).slice(0, -1) + '?',
      answers: []
    }

    for (let j = 0; j < random(4); j++) {
      let answer = {
        username: faker.internet.userName(),
        answer: faker.lorem.sentences(random(9))
      }
      question.answers.push(answer)
    }
    data.questions.push(question)
    sampleData.push(data);
  })
  return sampleData;
}

/* STEP 4 */
const insertData = (sampleData) => {
  QA.insertMany(sampleData, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`successfully added ${sampleData.length} items.`)
    }
  })
}


/* STEP 5 -- invoke as callback */

const seed = () => {
  // wait for deleteAll to finish before feeding data to database
  deleteAll(err => {
    if(err) {
      console.error(err);
    } else {
      let ids = generateProductIds();
      let data = generateData(ids);
      insertData(data);
    }
  })
}


/* Run (invoke) the Main/(seed) function */
seed();
