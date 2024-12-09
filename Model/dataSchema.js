const mongo = require("mongoose");

const dataSchema = new mongo.Schema({
  Day: {
    type: String,
  },
  Age: {
    type: String,
  },
  Gender: {
    type: String,
  },
  A: {
    type: Number,
  },
  B: {
    type: Number,
  },
  C: {
    type: Number,
  },
  D: {
    type: Number,
  },
  E: {
    type: Number,
  },
  F: {
    type: Number,
  },
});

const Data = mongo.model("data", dataSchema);
module.exports = Data;
