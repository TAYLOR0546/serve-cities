const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const citiesController = require("./citiesController");

const app = express();
app.use(express.json({ limit: "10kb" }));
app.use(cors())
// app.use(cors({ origin: "http://localhost:2500" }));

app
  .route("/cities")
  .get(citiesController.getCities)
  .post(citiesController.createCity);

app
  .route("/cities/:id")
  .get(citiesController.getCity)
  .patch(citiesController.updateCity)
  .delete(citiesController.deleteCity);

// const DB = "mongodb://localhost:27017/serve-cities";
const DB = "mongodb+srv://taylor:taylor%400546@cluster0.yc0rz7f.mongodb.net/serve-cities"

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then((doc) => console.log("Database connected successfully"))
  .catch((err) => {
    console.log("Failed connection");
  });

const PORT = process.env.PORT ||  8000;
app.listen(PORT, () => console.log(`Listening to requests on PORT ${PORT}`));
