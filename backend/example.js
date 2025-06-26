// uses common js
const express = require("express");

const app = express();

function rootRequest(req, res) {
    res.send("Hello");
}

app.get("/", rootRequest)

app.listen(3000, function () {
    console.log("Server running at port 3000");
})

