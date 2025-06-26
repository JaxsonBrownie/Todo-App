// uses common js
const express = require("express");
const cors = require("cors");

// uses es module
//import express from "express";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors("*"));

// routes
app.get("/", function(req, res) {
    res.send("Hello World");
})

app.listen(3000, function () {
    console.log("Server running at port 3000");
})

