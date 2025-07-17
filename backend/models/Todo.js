// import packages
const mongoose = require("mongoose");

// define structure of our document
const TodoSchema = mongoose.Schema({
    text: {type: String, required: true},
});

// create model
const TodoModel = mongoose.model("Todo", TodoSchema);

// export the model (used with "require" in other code)
module.exports = TodoModel;