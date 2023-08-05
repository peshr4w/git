const express = require("express");
const app = express();
const conn = require('./config');
app.get('/', (req, res) => {
    res.send("hello")
})
app.listen("8080", () => {
    console.log("seriving")
})