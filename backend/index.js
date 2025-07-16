// import packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(cors("*"));

// routes
app.get("/", function(req, res) {
    res.send("Hello World");
});

// run the server
app.listen(2000, function() {
    console.log("Server has started!");
});

// connect to database (THIS WILL BE DIFFERENT FOR YOUR DATABASE)
const connectionString = "mongodb+srv://jokesene:OB4ZhCmvaBmZtPPS@main-cluster.jqtcoe5.mongodb.net/?retryWrites=true&w=majority&appName=main-cluster";

mongoose.connect(connectionString)
    .then(() => {console.log("Connection successful!")})
    .catch((error) => {console.log(error)});