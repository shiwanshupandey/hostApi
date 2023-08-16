const mongoose = require("mongoose");

// uri="mongodb+srv://shiwanshuanooppandey:UaEviNC148tp0gbA@cluster0.fsdpzg2.mongodb.net/";
const uri = process.env.MONGO_URL

const connectDB = (uri) => {
    mongoose.set('strictQuery', false);
    console.log("connect db")
    return mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
};

module.exports = connectDB;