const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:{
        required: true,
        type: Number
      },
    name: {
        required: true,
        type: String
    },
    price: {
          required: true,
          type:  Number
        },
    section:{
          required: true,
            type: String
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
      default: false,
            type: Boolean
        },
    shipping:{
            type: Boolean
        },
      review:{
        required:true,
        default:4.9,
        type: Number
      },
      stars:{
        default:4.5,
        type: Number
      },
      bought:{
          default: false,
            type: Boolean
      }

});

module.exports = mongoose.model("Product", productSchema);
