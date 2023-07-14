const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
//connect db
const connectDB = require("./config/db/dbConnect");

//import routes

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');


const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;


//Middlewares
app.use(express.json());

// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors()); // allows all origins
if ((process.env.NODE_ENV = 'development')) {
    app.use(cors());
}

// middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);








app.get("/", (req, res) => {
    res.send(`<h1>Ultimate Authentication App </h1>`);
})


//conectDB
connectDB();

app.listen(PORT, () => {
    console.log(`...Server is running on port: ${PORT} - "${process.env.NODE_ENV} mode " ..........!!!!`);
});