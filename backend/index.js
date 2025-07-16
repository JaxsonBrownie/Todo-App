// import packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(cors("*"));

// get routes
app.get("/welcome", function(req, res) {
    res.send("Hello");
});

app.get("/dinner", function(req, res) {
    let text = "What's for dinner?";
    res.send(text);
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