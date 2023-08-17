require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 3060;

const products_routes = require("./routes/products");

app.get("/",(req, res) => {
    res.send("hi i am live");
});

app.use(cors())

app.use(express.json())

app.use("/api/products",products_routes);

const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () =>{
            console.log(`${PORT} yes i am connected`);
        });
    }catch(error){
        console.log(error);
    }
};

start();
