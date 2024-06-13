const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  //   cityName: { type: String },
  cityName: { type: String, required: [true, "city name is required"] },
  country: { type: String },
  emoji: { type: String },
  date: { type: Date },
  notes: { type: String },
  position: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    lat: Number,
    lng: Number,
  },
  //   position: { type: String, enum: "Point", default: "Point"},
});

const City = mongoose.model("city", citySchema);

module.exports = City;
