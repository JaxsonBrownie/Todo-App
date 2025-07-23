// import packages
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// middleware
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(cors("*"));

// import models
const todoModel = require("./models/Todo.js");

// GET request
app.get("/todos", async (req, res) => {
    const response = await todoModel.find({});
    console.log(response);
    
    res.json(response);
});

// run the server
app.listen(2000, () => {
    console.log("Server has started");
});

// connect to database
const connectionString = "mongodb+srv://jokesene:OB4ZhCmvaBmZtPPS@main-cluster.jqtcoe5.mongodb.net/todo_db";
mongoose.connect(connectionString)
    .then(() => {console.log("Connection successful!")})
    .catch((err) => {console.log(err)});