const express = require("express");

const app = express();
app.get("/", (req, res) => {
res.send("Hello world, I am cracking this node");
});
app.listen(3000, () => {
    console.log("Server started on port 3000")
});