const mongoose = require("mongoose");
const dotenv = require("dotenv");



dotenv.config();

const connectDB = async () => {
    try{
            mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser : true
            
        })
        console.log(".....MongoDB is now Connected succesfully......");
            
    }catch(error){
       console.error("MongDB connection FAIL");
    //    console.log(error)
        process.exit(1);
    }
}

module.exports = connectDB;


