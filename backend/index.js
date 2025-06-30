// uses common js
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

// uses es module
//import express from "express";

const app = express();

// middleware
app.use(express.json());    // ensures all data sent is in JSON
app.use(express.urlencoded({ extended: true}));
app.use(cors("*")); // sets who can access this api endpoint

// routes
app.get("/", function(req, res) {
    res.send("Hello World");
});

// start the web server
app.listen(3000, function () {
    console.log("Server running at port 3000");
});

// connect to database
const connectionString = "mongodb+srv://jokesene:iFLa6s1UmnQ1qZpA@main-cluster.5n4zksa.mongodb.net/?retryWrites=true&w=majority&appName=main-cluster";

mongoose.connect(connectionString)
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err));

// start the web server
app.listen(3000, function () {
    console.log("Server running at port 3000");
});