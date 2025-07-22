// import packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();


// import models
const TodoModel = require("./models/Todo");


// middleware
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(cors("*"));


// CRUD operations


// GET todo items
app.get("/todos", async (req, res) => {
    try {
        // retrieve all todo items
        const response = await TodoModel.find({});
        console.log(response);

        // send response
        res.json(response);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error: " + err);
    }
});


// POST todo items
app.post("/todos", async (req, res) => {
    try {
        // get the post body
        const todo = req.body;

        // create new todo item
        const newTodo = await TodoModel.create(todo);
        console.log("Created todo item:" + newTodo)

        // send response
        res.status(200).send("Successful");
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error: " + err);
    }
})


// DELETE todo items
app.delete("/todos/:id", async (req, res) => {
    try {
        // get the todo item to delete
        const id = req.params.id;
        const deletedTodo = await TodoModel.findOneAndDelete({
            _id: id,
        })
        
        // send response
        res.status(200).send("Deleted todo item: " + deletedTodo);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error: " + err);
    }
});


// PUT (update) existing todo item
app.put("/todos/:id", async(req, res) => {
    try {
        // get new text and id of todo item to change
        const id = req.params.id;
        const newText = req.body.text;

        console.log(newText);

        // create new todo item and update
        const newTodo = {
            "text": newText,
        };
        const updatedTodo = await TodoModel.findByIdAndUpdate(id, newTodo);

        // send response
        res.status(200).send("Updated todo item: " + updatedTodo);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error: " + err);
    }
})


// connect to database (THIS STRING WILL BE DIFFERENT FOR YOUR DATABASE)
const connectionString = "mongodb+srv://jokesene:OB4ZhCmvaBmZtPPS@main-cluster.jqtcoe5.mongodb.net/todo_db";
mongoose.connect(connectionString)
    .then(() => {console.log("Database connection successful!")})
    .catch((error) => {console.log(error)});


// run the server
app.listen(3000, function() {
    console.log("Server has started!");
});