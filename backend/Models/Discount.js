const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let discountSchema = new Schema(
  {
    publishingTitle: {
      type: String,
    },

    marketPrice: {
      type: String,
    },

    percentage: {
      type: String,
    },

    ammount: {
      type: String,
    },
    validDate: {
      type: Date,
    },
  },
  {
    collection: "discounts",
  }
);

module.exports = mongoose.model("Discount", discountSchema);
