// import packages
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


// middleware
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(cors("*"));

// run the server
app.listen(2000, () => {
    console.log("Server has started");
});

// connect to database
const connectionString = "mongodb+srv://jokesene:OB4ZhCmvaBmZtPP@main-cluster.jqtcoe5.mongodb.net/?retryWrites=true&w=majority&appName=main-cluster";

mongoose.connect(connectionString)
    .then(() => {console.log("Connection successful!")})
    .catch((err) => {console.log(err)});