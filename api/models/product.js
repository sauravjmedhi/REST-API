const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,  //mongoose automatically sets up an id
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
