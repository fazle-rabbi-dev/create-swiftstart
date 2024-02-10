const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = Schema({
  createdOn: {
    key:{
      type: "String",
      required: true,
      default: ""
    },
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("myModel", mySchema);