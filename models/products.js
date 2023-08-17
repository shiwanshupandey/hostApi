const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:{
        required: true,
        type: String
      },
    name: {
        required: true,
        type: String
    },
    price: {
          required: true,
          type:  Number
        },
    colors:{
          required: true,
            type: Array
        },
    company: {
          required: true,
          type: String
        },
    category: {
          required: true,
            type: String
        },
        // rating: {
        //     default: 4.9,
        //       type: Number
        //   },
    description:{
          required: true,
            type: String
        },
    image:{
      required: true,
      type: String
    },
    featured: {
            type: Boolean
        },
    shipping:{
            type: Boolean
        }
});

module.exports = mongoose.model("Product", productSchema);
