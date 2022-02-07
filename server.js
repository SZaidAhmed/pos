require("dotenv").config();
const app  = require("./app");
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_STRING).then((con) =>{
    console.log("connected")
});

app.listen(process.env.PORT , ()=> {
    console.log("Server started")
})