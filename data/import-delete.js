const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const fs = require('fs');
const City = require('../cityModel');

// dotenv.config({ path: `${__dirname}/../../config.env` });

// const DB = "mongodb://localhost:27017/serve-cities";
const DB = "mongodb+srv://taylor:taylor%400546@cluster0.yc0rz7f.mongodb.net/serve-cities";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then((docs) => {
    console.log('DB connected successfully');
    // console.log(docs);
  })
  .catch((err) => {
    console.log('Failed connection');
    // console.log(err);
  });

const cities = JSON.parse(fs.readFileSync(`${__dirname}/cities.json`, 'utf-8'));
// const reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8'));
// const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));

// console.log(process.argv);
const decAct = process.argv[2];

const importDocs = async () => {
  try {
    await City.create(cities, {validateBeforeSave: false});
    // await Review.create(reviews, {validateBeforeSave: false});
    // await User.create(users, { validateBeforeSave: false });
    console.log('Import successful');
  } catch (err) {
    console.log(err);
  }
  process.exit();
  // console.log(docs);
};

const deleteDocs = async () => {
  try {
    await City.deleteMany();
    // await Review.deleteMany();
    // await User.deleteMany();
    console.log('Deletion successful');
  } catch (err) {
    console.log(err);
  }
  process.exit();
  // console.log(docs);
};

// const getDocs = async ()=>{
//     const docs = await Tour.find();
//     console.log(docs);
// }

if (decAct === '--import') {
  importDocs();
}

if (decAct === '--delete') {
  deleteDocs();
}

// getDocs();
