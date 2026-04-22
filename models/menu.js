const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    taste: {
      type: String,
      enum: ['sweet','spicy','Sour']
    },

    is_drink: {
      type: Boolean,
      default: false,
    },

    ingredients: {
        type: [String],
        default: []
    },

    num_sales: {
        type: Number,
        default: 0
    }

});

module.exports = mongoose.model("MenuItem", menuItemSchema);